import React from "react";
import ReactDOM from "react-dom/client";

import Contador from "./Components/Contador.jsx";
import Characters from "./Components/Characters.jsx";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contador />
    <Characters/>
  </React.StrictMode>
);
