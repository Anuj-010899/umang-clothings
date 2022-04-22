import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/user.context";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";

// render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
