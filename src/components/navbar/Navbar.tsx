import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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
