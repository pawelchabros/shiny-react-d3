import Barplot from "./components/Barplot";
import GeomLine from "./components/GeomLine";
import GeomPoint from "./components/GeomPoint";
import Plot from "./components/Plot";
import Scatterplot from "./components/Scatterplot";
import { AxisBottom, AxisLeft } from "./components/Axis";

window.jsmodule = {
  ...window.jsmodule,
  plots: {
    AxisBottom,
    AxisLeft,
    Barplot,
    GeomLine,
    GeomPoint,
    Plot,
    Scatterplot,
  },
};
