import React from "react";
import { Header } from "./components/shared/Header";
import Home from "./components/Home";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
