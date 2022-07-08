import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getCssText } from "./stitches.config";
import { globalStyles } from "./style/global";
import "./i18n";
import i18next from "i18next";
import "antd/dist/antd.css";

const lang = localStorage.getItem("lang") || "eng";
i18next.changeLanguage(lang);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    <React.StrictMode>
      {globalStyles()}
      <App />
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
