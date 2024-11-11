import React from "react";
import Logo from "../../assets/Sport News.svg";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
  }

  return (
    <>
      <div className="Navbar">
        <div className="Navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="Navbar-items">
          <nav>
            <ul className="menu-links">
              <li>
                {" "}
                <a href="#Home" onClick={toggleMenu}>
                  Home
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#Category" onClick={toggleMenu}>
                  Category
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#Trending News" onClick={toggleMenu}>
                  Trending News
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#Recent News" onClick={toggleMenu}>
                  Recent News
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#Clubs Ranking" onClick={toggleMenu}>
                  Clubs Ranking
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#Sports Article" onClick={toggleMenu}>
                  Sports Article
                </a>{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className="Navbar-Search">
          <button onClick={toggleMenu}>
            <IoIosSearch /> <input type="text" placeholder="Search" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
