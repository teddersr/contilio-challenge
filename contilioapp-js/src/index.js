import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.min.css";
import Login from "./components/auth/login";
import Header from "./components/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="app">
      <Login />
    </div>
  </React.StrictMode>
);
