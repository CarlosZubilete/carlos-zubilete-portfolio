import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { navItems as navItemsData } from "../../data/navItems";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        {/* Logo/Brand */}
        <a href="#" className="navbar-brand">
          CZ Dev
        </a>

        {/* Desktop Menu */}
        <div className="navbar-items">
          {navItemsData.map((item) => (
            <Link key={item.labelKey} to={item.href} className="navbar-item">
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile menu button */}
        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        ></button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-items active">
          {navItemsData.map((item) => (
            <Link
              key={item.labelKey}
              to={item.href}
              className="navbar-item"
              onClick={() => setIsOpen(false)}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
