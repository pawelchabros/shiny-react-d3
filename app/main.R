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
  shiny.react[reactOutput, renderReact],
  stats[rpois],
  tibble[tibble],
)

box::use(
  ./view/components[Scatterplot],
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
      reactOutput(ns("barplot"))
    )
  )
}

#' @export
server <- function(id) {
  moduleServer(id, function(input, output, session) {
    data <- reactiveVal(generate_data())
    observeEvent(input$change_data, data(generate_data()))
    output$barplot <- renderReact(Scatterplot(data = data()))
  })
}
