import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
// тут імпортую компоненти, тобто функції
import { About, Contact, Home, Assortment } from "./components/pages";
import {Assortment1, Assortment2, Assortment3} from "./components/pages"
import Basement from "./components/Basement";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  return (
    <div className="App">
      {/* верхня панель */}
      <Navbar />
      {/* сторінки */}
      <Routes>
        {/* тут знаходиться посилання і  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/assortment" element={<Assortment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assortmantPage1" element={<Assortment1 />} />
        <Route path="/assortmantPage2" element={<Assortment2 />} />
        <Route path="/assortmantPage3" element={<Assortment3 />} />
      </Routes>

      <Basement />
    </div>
  );
}

export default App;