import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import View from "./layout/view/Index";
import Home from "./scenes/view/home/Index";
import reportWebVitals from "./reportWebVitals";
import { Route, RouterProvider, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider>
      <Routes>
        <Route path="/" exact component={View} />
        <Route path="/home" component={Home} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
