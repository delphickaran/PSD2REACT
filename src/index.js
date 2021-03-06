import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./containers/home";
import * as serviceWorker from "./serviceWorker";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const app = (
  <ThemeProvider theme={theme}>
    <Router basename={process.env.PUBLIC_URL}>
      <Home />
    </Router>
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
