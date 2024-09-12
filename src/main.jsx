import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import { MyContext } from "./myContext";

import theme from "./styles/theme";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      // * Uso do MyContent.Provider para envolver os componentes 
      // * filhos e passar o valor do contexto { jhonatagmail.com}.
      <MyContext.Provider value={{ email: "jhonatan@gmail.com" }}> 
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
