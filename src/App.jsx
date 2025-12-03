import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Footer from "./components/footer";
import Music from "./components/Music";
import Videos from "./components/Videos";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div>
      <div className="max-w-[220] flex justify-center items-center flex-col mx-auto bg-[#191414] text-white ">
        <BrowserRouter>
          <Herosection />

          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
