import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@components/layout/AppRouter";
import "./App.styles.scss";
import NavBar from "@components/layout/NavBar";
import Footer from "@components/layout/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
