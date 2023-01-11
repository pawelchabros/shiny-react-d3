import Plot from "./Plot";
import GeomLine from "./GeomLine";
import GeomPoint from "./GeomPoint";
import { AxisBottom, AxisLeft } from "./Axis";

const Scatterplot = ({ data }) => {
  return (
    <Plot data={data}>
      <AxisBottom />
      <AxisLeft />
      <GeomPoint />
      <GeomLine />
    </Plot>
  );
};

export default Scatterplot;
