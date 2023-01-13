import Barplot from "./components/Barplot";
import Geom from "./components/Geom";
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
    Geom,
    GeomLine,
    GeomPoint,
    Plot,
    Scatterplot,
  },
};
