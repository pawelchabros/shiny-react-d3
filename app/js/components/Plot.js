import { cloneElement, Children } from "react";
import useScale from "../hooks/useScale";

const Plot = ({
  data,
  width = 500,
  height = 300,
  margin = {
    top: 30,
    right: 10,
    bottom: 30,
    left: 80,
  },
  children,
}) => {
  const panel = {
    width: width - margin.left - margin.right,
    height: height - margin.bottom - margin.top,
  };
  const scale = {
    x: useScale({ data, aes: "x", size: panel.width, absolute: true }),
    y: useScale({ data, aes: "y", size: panel.height }).padding(0.4),
  };
  const childrenWithProps = Children.map(children, (child) => {
    if (child) {
      return cloneElement(child, {
        data,
        scale,
        panel,
      });
    }
  });
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {childrenWithProps}
      </g>
    </svg>
  );
};

export default Plot;
