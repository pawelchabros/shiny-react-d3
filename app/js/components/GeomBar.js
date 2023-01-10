const GeomBar = ({ data, scale }) => {
  return (
    <g>
      {data.map(({ x, y }) => (
        <rect
          className="bar"
          key={y}
          x={0}
          y={scale.y(y)}
          width={scale.x(x)}
          height={scale.y.bandwidth()}
          fill="steelblue"
        />
      ))}
    </g>
  );
};

export default GeomBar;
