import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import AppLayout from "./components/layout/AppLayout";

ReactDOM.render(
  <HashRouter>
    <AppLayout />
  </HashRouter>,
  document.getElementById("root")
);
reportWebVitals();
