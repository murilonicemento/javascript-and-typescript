import React from "react";
import Header from "./components/Header";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
