const GeomPoint = ({ data, scale }) => {
  return (
    <g>
      {data.map(({ x, y, r = 4 }) => (
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
