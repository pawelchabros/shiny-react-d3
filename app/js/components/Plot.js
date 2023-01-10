import { axisBottom, axisLeft } from "d3-axis";
import { max } from "d3-array";
import { scaleLinear, scaleBand } from "d3-scale";
import { select } from "d3-selection";
import { transition } from "d3-transition";
import { cloneElement, useEffect, useRef, Children } from "react";

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
    x: scaleLinear([0, max(data, ({ x }) => x)], [0, panel.width]),
    y: scaleBand(
      [...new Set(data.map(({ y }) => y))],
      [0, panel.height]
    ).padding(0.4),
  };
  const xAxisRef = useRef(null);
  useEffect(() => {
    select(xAxisRef.current)
      .transition()
      .duration(500)
      .call(axisBottom(scale.x));
  }, [scale.x]);
  const yAxisRef = useRef(null);
  useEffect(() => {
    select(yAxisRef.current).transition().duration(500).call(axisLeft(scale.y));
  }, [scale.y]);
  const childrenWithProps = Children.map(children, (child) => {
    if (child) {
      return cloneElement(child, {
        data,
        scale,
      });
    }
  });
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <g ref={xAxisRef} transform={`translate(0, ${panel.height})`}></g>
        <g ref={yAxisRef}></g>
        {childrenWithProps}
      </g>
    </svg>
  );
};

export default Plot;
