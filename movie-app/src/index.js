import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./components/App";

import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <StarRating maxRating={10} defaultRating={1} />
    <StarRating size={16} />
  </React.StrictMode>
);
