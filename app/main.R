box::use(
  dplyr[`%>%`, arrange],
  shiny[
    actionButton,
    bootstrapPage,
    div,
    moduleServer,
    NS,
    observeEvent,
    reactiveVal,
  ],
  shiny.react[JS, reactOutput, renderReact],
  stats[rpois],
  tibble[tibble],
)

box::use(
  ./view/components[
    Plot,
    AxisBottom,
    AxisLeft,
    GeomLine,
    GeomPoint,
  ],
)

generate_data <- function() {
  tibble(
    x = 1:10,
    y = rpois(10, 10) ^ 2
  )
}

#' @export
ui <- function(id) {
  ns <- NS(id)
  bootstrapPage(
    div(
      class = "card",
      actionButton(inputId = ns("change_data"), label = "Change Data"),
      reactOutput(ns("plot"))
    )
  )
}

#' @export
server <- function(id) {
  moduleServer(id, function(input, output, session) {
    data <- reactiveVal(generate_data())
    observeEvent(input$change_data, data(generate_data()))
    output$plot <- renderReact(
      Plot(
        data = data(),
        AxisBottom(),
        AxisLeft(
          nTicks = 4,
          format = JS("(label) => `$${label}`")
        ),
        GeomLine(
          color = "#AD8E70"
        ),
        GeomPoint(
          color = "#243763",
          r = 5
        )
      )
    )
  })
}
