import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@components/layout/AppRouter";
import "./App.styles.css";
import NavBar from "@components/layout/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
