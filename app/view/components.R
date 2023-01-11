box::use(
  htmltools[htmlDependency],
  shiny.react[asProps, reactElement],
)

dependency <- function() {
  htmlDependency(
    name = "plots",
    version = "0.1.0",
    src = "app/static/js",
    script = "app.min.js"
  )
}

component <- function(name) {
  function(...) reactElement(
    module = "plots",
    name = name,
    props = asProps(...),
    deps = dependency()
  )
}

#' @export
Barplot <- component("Barplot")

#' @export
Scatterplot <- component("Scatterplot")

#' @export
Plot <- component("Plot")

#' @export
AxisBottom <- component("AxisBottom")

#' @export
AxisLeft <- component("AxisLeft")

#' @export
GeomPoint <- component("GeomPoint")

#' @export
GeomLine <- component("GeomLine")
