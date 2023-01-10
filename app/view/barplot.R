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
