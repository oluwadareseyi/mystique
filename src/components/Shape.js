import React from "react";

/**
 * Functional react component for one shape  message
 * @function Shape
 * @param {object} props - React Props
 * @returns {JSX.Element} - Rendered Component
 */

const Shape = ({ name, color, size }) => {
  const hexToRGB = (hex, alpha) => {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgba(${r}, ${g}, ${b})`;
    }
  };
  return (
    <div
      className="shape-wrap"
      style={{ filter: `drop-shadow(10px 10px 12px ${hexToRGB(color, 0.3)})` }}
    >
      <div
        className={`shape ${name}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `${color}`,
        }}
      ></div>
    </div>
  );
};

export default Shape;
