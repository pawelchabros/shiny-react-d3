import Plot from "./Plot";
import GeomBar from "./GeomBar";
import { AxisBottom, AxisLeft } from "./Axis";

const Barplot = ({ data }) => {
  return (
    <Plot data={data}>
      <AxisBottom />
      <AxisLeft />
      <GeomBar />
    </Plot>
  );
};

export default Barplot;
