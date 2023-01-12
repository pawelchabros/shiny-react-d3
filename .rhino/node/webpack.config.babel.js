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
