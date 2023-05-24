import ReactDOM from "react-dom/client";

import App from "./Components/App.jsx";
import Contador from "./Components/Contador.jsx";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Contador />
    <App />
  </>
);
