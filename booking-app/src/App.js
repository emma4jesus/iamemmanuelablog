import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar></Navbar>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
