const GeomPoint = ({ data, scale, r = 4 }) => {
  return (
    <g>
      {data.map(({ x, y }) => (
        <circle
          className="point"
          key={x}
          cx={scale.x(x)}
          cy={scale.y(y)}
          fill="steelblue"
          r={r}
        />
      ))}
    </g>
  );
};

export default GeomPoint;
