import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

ReactDOM.render(
  // <React.StrictMode>
    <AppRouter />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//source: https://levelup.gitconnected.com/how-to-pass-additional-data-while-redirecting-to-different-route-f7bf5f95d48c
//https://reactgo.com/reactrouter/programaticallynavigation/
// https://dev.to/halented/passing-state-to-components-rendered-by-react-router-and-other-fun-things-3pjf
// https://codesandbox.io/s/tu1o5?file=/src/App.js
// https://codesandbox.io/s/2xtut?file=/src/components/Home.jsx
// https://www.sitepoint.com/react-router-complete-guide/
// https://reactrouter.com/web/guides/quick-start
