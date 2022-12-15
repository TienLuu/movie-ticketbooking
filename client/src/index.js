import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import store from "./store";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { ThemeProvider } from "./context/themeContext/ThemeContext";
import GlobalStyles from "./assets/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Provider store={store}>
      <ThemeProvider>
         <GlobalStyles>
            <App />
         </GlobalStyles>
      </ThemeProvider>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
