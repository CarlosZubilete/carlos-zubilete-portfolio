import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: t("navbar.home"), href: "#home" },
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

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
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="navbar-item">
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile menu button */}
        <button
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-items active">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar-item"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
