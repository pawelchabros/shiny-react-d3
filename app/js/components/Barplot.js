import Plot from "./Plot";
import GeomBar from "./GeomBar";

const Barplot = ({ data }) => {
  return (
    <Plot data={data}>
      <GeomBar />
    </Plot>
  );
};

export default Barplot;
