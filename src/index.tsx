import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import AppLayout from "./components/layout/AppLayout";

ReactDOM.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
