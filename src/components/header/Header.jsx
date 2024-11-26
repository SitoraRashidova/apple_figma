// rafce
import React from "react";
import "./Header.scss";
import { LINKS } from "../../static";
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";


// const LINKS = ["Home", "About", "Contact", "Help", "Service"]

const Header = () => {
  const linkItems = LINKS.map((item) => (
    <li key={item.id} className="navbar__item">
      <a href={item.link} className="navbar__link">
        <span>{item.name}</span>
      </a>
    </li>
  ))
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <h2 className="navbar__title">
            <a href="/">
              <FaApple/>
            </a>
          </h2>
          <ul className="navbar__collection">
            {linkItems}
            <li className="navbar__item">
              <a href="/search" className="navbar__link">
                <FaSearch/>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/cart" className="navbar__link">
                <AiOutlineShopping style={{fontSize: "16px"}}/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
