import { line } from "d3-shape";

const GeomLine = ({ data, scale, size = 2, color = "black", ...params }) => {
  const lineGen = line()
    .x(({ x }) => scale.x(x))
    .y(({ y }) => scale.y(y));
  return (
    <path
      className="line"
      d={lineGen(data)}
      stroke={color}
      strokeWidth={size}
      fill="none"
      {...params}
    />
  );
};
export default GeomLine;
