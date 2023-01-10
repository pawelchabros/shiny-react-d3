import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";

const Barplot = ({ data, width = 500, height = 300 }) => {
  const scale = {
    x: scaleLinear([0, max(data, ({ x }) => x)], [0, width]),
    y: scaleBand([...new Set(data.map(({ y }) => y))], [0, height]).padding(
      0.2
    ),
  };
  return (
    <svg width={width} height={height}>
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
    </svg>
  );
};

window.jsmodule = {
  ...window.jsmodule,
  plots: { Barplot },
};
