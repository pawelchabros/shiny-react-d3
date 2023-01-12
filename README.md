Initialize new Shiny app:

```r
rhino::init("shiny-react-d3")
```

Install JS libraries like D3 and React:

```r
setwd("shiny-react-d3")
rhino:::yarn("add", "d3", "react", "react-dom", "@babel/preset-env", "@babel/preset-react")
```

Install `shiny.react`:

```r
renv::install("shiny.react")
```

Adjust `webpack.config.babel.js` file by modifying the `rules` and adding `externals`. Final file should look as follows:

```js
import { join } from "path";

export default {
  mode: "production",
  entry: join(__dirname, "root", "app", "js", "index.js"),
  output: {
    library: "App",
    path: join(__dirname, "root", "app", "static", "js"),
    filename: "app.min.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  externals: {
    react: 'jsmodule["react"]',
    "react-dom": 'jsmodule["react-dom"]',
    "@/shiny.react": 'jsmodule["@/shiny.react"]',
  },
};
```

Create symbolic link of `node_modules` in `app/js/` so that it's possible to use installed packages in `app/js/index.js` file:

```bash
ln -s $(pwd)/.rhino/node/node_modules $(pwd)/app/js
```

Now let's edit `app/js/index.js`:

```js
const Barplot = () => {
  return <h1>Barplot</h1>;
};

window.jsmodule = {
  ...window.jsmodule,
  plots: { Barplot },
};
```

After editing `index.js` or any other `.js` file we have to build the code using `rhino::build_js()` (or we can set `wath = TRUE`).
Now we can migrate `Barplot` component using `shiny.react`. Let's create `app/view/components.R` file:

```r
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
```

Now we can use `Barplot` component in Shiny.
