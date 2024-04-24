import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
      {/* основна програма */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("No root element found in the document.");
}

