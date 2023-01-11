import { axisBottom, axisLeft } from "d3-axis";
import { select } from "d3-selection";
import { useEffect, useRef } from "react";

const Axis = ({
  axisFunction,
  scale,
  transformY = 0,
  nTicks = null,
  format = null,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    const axisGenerator = axisFunction(scale);
    nTicks && axisGenerator.ticks(nTicks);
    format && axisGenerator.tickFormat(format);
    select(ref.current).transition().duration(500).call(axisGenerator);
  }, [axisFunction, format, nTicks, scale]);
  return <g ref={ref} transform={`translate(0, ${transformY})`}></g>;
};

const AxisBottom = ({ scale, panel }) => {
  return (
    <Axis axisFunction={axisBottom} scale={scale.x} transformY={panel.height} />
  );
};

const AxisLeft = ({ scale, nTicks, format }) => {
  return (
    <Axis
      axisFunction={axisLeft}
      scale={scale.y}
      nTicks={nTicks}
      format={format}
    />
  );
};

export { AxisBottom, AxisLeft };
