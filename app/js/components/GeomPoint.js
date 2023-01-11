const GeomPoint = ({ data, scale, color = "black", r = 4 }) => {
  return (
    <g>
      {data.map(({ x, y }) => (
        <circle
          className="point"
          key={x}
          cx={scale.x(x)}
          cy={scale.y(y)}
          fill={color}
          r={r}
        />
      ))}
    </g>
  );
};

export default GeomPoint;
