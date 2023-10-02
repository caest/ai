import React, { useState, useEffect } from "react";
import Link from "./Link";
import logo from "./logo.svg";
import "./header.scss";
import NavList from "./NavList";

const BurgerButton = ({ isMenuOpen, toggleMenu }) => (
  <div className={`header-burger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsScrolling(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 1200) {
        setIsScrolling(window.scrollY > 0);
      } else {
        setIsScrolling(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`header ${isScrolling ? "fixed-header" : ""}`}>
   
        <div className="header-content">
          <div className="header-logo">
            <img src={logo} alt="Aiweb logo" />
          </div>
          <div className={`header-flex ${isMenuOpen ? "open" : ""}`}>
            <nav className="header-menu">
              <NavList closeMenu={closeMenu} />
            </nav>
            <div className="header-end">
              <Link href="#" text="Log In" />
              <a className="header-getstarted" href="#">
                Get Started
              </a>
            </div>
          </div>
          <BurgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
    
    </div>
  );
};

export default Header;
