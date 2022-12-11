import React from "react";
import ReactDOM from "react-dom/client";

// Import Library's Hook
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Import Components
import GlobalStyles from "./components/GlobalStyles";
import App from "./App";

// Import Redux store
import store from "./store";

// Import Context
import { ThemeProvider } from "./context/themeContext/ThemeContext";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <ThemeProvider>
               <GlobalStyles>
                  <App />
               </GlobalStyles>
            </ThemeProvider>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
