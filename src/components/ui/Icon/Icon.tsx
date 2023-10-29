import { useEffect, useState, FC, CSSProperties } from 'react';

interface IconProps {
  name?: string;
  src?: string;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  className?: string;
  [key: string]: unknown;
}

const Icon: FC<IconProps> = ({ name, src, fillColor, strokeColor, size, className, ...rest }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  const iconSrc = src ? src : `/nexus-mental-health-web-app/src/assets/icons/${name}.svg`;

  useEffect(() => {
    fetch(iconSrc)
      .then((response) => response.text())
      .then((data) => {
        let updatedData = data;
        if (fillColor) {
          updatedData = updatedData.replace(/fill="[^"]*"/g, `fill="${fillColor}"`);
        }
        if (strokeColor) {
          updatedData = updatedData.replace(/stroke="[^"]*"/g, `stroke="${strokeColor}"`);
        }
        setSvgContent(updatedData);
      });
  }, [iconSrc, fillColor, strokeColor]);

  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (size !== undefined) {
    style.width = `${size}px`;
    style.height = `${size}px`;
  }

  return (
    <span
      className={className}
      style={style}
      {...rest}
      dangerouslySetInnerHTML={{ __html: svgContent || '' }}
    />
  );
};

export default Icon;
