import { axisBottom, axisLeft } from "d3-axis";
import { select } from "d3-selection";
import { useEffect, useRef } from "react";

const Axis = ({ axisFunction, scale, transformY = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    select(ref.current).transition().duration(500).call(axisFunction(scale));
  }, [axisFunction, scale]);
  return <g ref={ref} transform={`translate(0, ${transformY})`}></g>;
};

const AxisBottom = ({ scale, panel }) => {
  return (
    <Axis axisFunction={axisBottom} scale={scale.x} transformY={panel.height} />
  );
};

const AxisLeft = ({ scale }) => {
  return <Axis axisFunction={axisLeft} scale={scale.y} />;
};

export { AxisBottom, AxisLeft };
