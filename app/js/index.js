import { axisBottom, axisLeft } from "d3-axis";
import { max } from "d3-array";
import { scaleLinear, scaleBand } from "d3-scale";
import { select } from "d3-selection";
import { transition } from "d3-transition";
import { useEffect, useRef } from "react";

const Barplot = ({
  data,
  width = 500,
  height = 300,
  margin = {
    top: 30,
    right: 10,
    bottom: 30,
    left: 80,
  },
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
    select(xAxisRef.current).transition().call(axisBottom(scale.x));
  }, [scale.x]);
  const yAxisRef = useRef(null);
  useEffect(() => {
    select(yAxisRef.current).transition().call(axisLeft(scale.y));
  }, [scale.y]);
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <g ref={xAxisRef} transform={`translate(0, ${panel.height})`}></g>
        <g ref={yAxisRef}></g>
        {data.map(({ x, y }) => (
          <rect
            key={y}
            x={0}
            y={scale.y(y)}
            width={scale.x(x)}
            height={scale.y.bandwidth()}
            fill="steelblue"
          />
        ))}
      </g>
    </svg>
  );
};

window.jsmodule = {
  ...window.jsmodule,
  plots: { Barplot },
};
