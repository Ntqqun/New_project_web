import  { useState } from "react";
// import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

// компонент React для відображення верхньої панелі
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [menuClose, setMenuClose] = useState(false);
  return (
    <nav>
      {/* Іконка і водночас посилання на домашню сторінку */}
      <Link to="/" className="title">
      <div className="main-block">
    <div className="blue-block"></div>
    <div className="yellow-block"></div>
    <div className="text"><div>ТЦ Україна</div></div>
</div>
      </Link>
      <span className="phoneNumber">+380 50 555 1824</span>
      {/* бургер-меню з можливістю розорнути його при кліці */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {/* це риски бургер-меню */}
        <span></span>
        <span></span>
        <span></span>
      </div>

 

{/* Розгортання бургер меню і появлення бокового меню з посиланнями на нові сторінки */}
      <ul className={menuOpen ? "open" : ""}>
      <div className="menuClose" onClick={() => setMenuOpen(!menuOpen)}>X</div>
        <li>
          <NavLink to="/about">Про нас</NavLink>
        </li>
        <li>
          <NavLink to="/assortment">Асортимент</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Контакти</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};