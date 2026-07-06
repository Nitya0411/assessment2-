import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import FavoriteProvider from "./context/FavoriteContext";

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/footer.css";
import "./styles/hotelcard.css";
import "./styles/hotels.css";
import "./styles/details.css";
import "./styles/filter.css";
import "./styles/pagination.css";
import "./styles/loader.css";
import "./styles/theme.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);