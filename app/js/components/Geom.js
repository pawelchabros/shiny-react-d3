const Geom = ({ data, scale, tag, ...params }) => {
  const Component = tag;
  return (
    <g>
      {data.map(({ x, y }) => {
        return <Component key={x} x={scale.x(x)} y={scale.y(y)} {...params} />;
      })}
    </g>
  );
};

export default Geom;
