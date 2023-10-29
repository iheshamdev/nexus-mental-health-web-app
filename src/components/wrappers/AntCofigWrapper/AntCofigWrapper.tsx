import React, { ReactNode } from 'react';
import { ConfigProvider } from '@components';

type WaveConfig = NonNullable<Parameters<typeof ConfigProvider>[0]['wave']>;
type AntCofigWrapperProps = WaveConfig & {
  children: ReactNode;
};

// Prepare effect holder
const createHolder = (node: HTMLElement) => {
  const { borderWidth } = getComputedStyle(node);
  const borderWidthNum = parseInt(borderWidth, 10);

  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.inset = `-${borderWidthNum}px`;
  div.style.borderRadius = 'inherit';
  div.style.background = 'transparent';
  div.style.zIndex = '999';
  div.style.pointerEvents = 'none';
  div.style.overflow = 'hidden';
  node.appendChild(div);

  return div;
};

const createDot = (
  holder: HTMLElement,
  color: string,
  left: number,
  top: number,
  size: number = 0
) => {
  const dot = document.createElement('div');
  dot.style.position = 'absolute';
  dot.style.left = `${left}px`;
  dot.style.top = `${top}px`;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.borderRadius = '50%';
  dot.style.background = color;
  dot.style.transform = 'translate(-50%, -50%)';
  dot.style.transition = `all 400ms ease-out`;
  holder.appendChild(dot);

  return dot;
};

// Inset Effect
const showInsetEffect: WaveConfig['showEffect'] = (node, { event, component }) => {
  if (component !== 'Button') {
    return;
  }

  const holder = createHolder(node);

  const rect = holder.getBoundingClientRect();

  const left = event.clientX - rect.left;
  const top = event.clientY - rect.top;

  const dot = createDot(holder, 'rgba(255, 255, 255, 0.45)', left, top);

  // Motion
  requestAnimationFrame(() => {
    dot.ontransitionend = () => {
      holder.remove();
    };

    dot.style.width = '200px';
    dot.style.height = '200px';
    dot.style.opacity = '0';
  });
};

const AntCofigWrapper: React.FC<AntCofigWrapperProps> = ({ children, ...wave }) => (
  <ConfigProvider
    wave={{ ...wave, showEffect: showInsetEffect }}
    theme={{
      token: {
        colorPrimary: import.meta.env.VITE_PRIMARY_COLOR,
        borderRadius: 4,
        controlHeight: 40,
        fontFamily: "'Rubik', sans-serif",
        fontWeightStrong: 600,
        fontSize: 18,
      },
      components: {
        Button: {
          fontWeightStrong: 600,
          fontWeight: 500,
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default AntCofigWrapper;
