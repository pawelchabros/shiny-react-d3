import { line } from "d3-shape";

const GeomLine = ({ data, scale }) => {
  const lineGen = line()
    .x(({ x }) => scale.x(x))
    .y(({ y }) => scale.y(y));
  return (
    <path
      className="line"
      d={lineGen(data)}
      stroke="steelblue"
      strokeWidth="2"
      fill="none"
    />
  );
};
export default GeomLine;
