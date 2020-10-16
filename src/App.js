import React from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Banner2 from "./components/Banner2";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About id="about" />
      <Services id="services" />
      <Banner2 id="banner2" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
