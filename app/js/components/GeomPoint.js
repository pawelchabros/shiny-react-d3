const GeomPoint = ({ data, scale, size = 8, color = "black", ...params }) => {
  return (
    <g>
      {data.map(({ x, y }) => (
        <circle
          className="point"
          key={x}
          cx={scale.x(x)}
          cy={scale.y(y)}
          fill={color}
          r={size / 2}
          {...params}
        />
      ))}
    </g>
  );
};

export default GeomPoint;
