import { line } from "d3-shape";

const GeomLine = ({ data, scale, color = "black" }) => {
  const lineGen = line()
    .x(({ x }) => scale.x(x))
    .y(({ y }) => scale.y(y));
  return (
    <path
      className="line"
      d={lineGen(data)}
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  );
};
export default GeomLine;
