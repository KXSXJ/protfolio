import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./shared/styles/golbal-style";
import {theme} from "./shared/styles/theme";
import {ThemeProvider} from "styled-components";
import {Pages} from "./pages";
import {PortFolio} from "./app";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <PortFolio/>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
