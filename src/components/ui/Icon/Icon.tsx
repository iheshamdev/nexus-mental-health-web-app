import React, { useEffect, useState } from 'react';

interface IconProps {
  src: string;
  color?: string;
  size?: number;
  className?: string;
  [key: string]: unknown;
}

const Icon: React.FC<IconProps> = ({ src, color, size, className, ...rest }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((data) => setSvgContent(data));
  }, [src]);

  const style: React.CSSProperties = {};

  if (size !== undefined) {
    style.width = `${size}px`;
    style.height = `${size}px`;
  }

  if (color !== undefined) {
    style.fill = color;
  }

  return (
    <div
      style={style}
      dangerouslySetInnerHTML={{ __html: svgContent || '' }}
      className={className}
      {...rest}
    ></div>
  );
};

export default Icon;
