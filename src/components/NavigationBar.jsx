import { useState, useEffect } from "react";
import logo from "../assets/logo.svg"; // Ensure the correct path to your logo
import "./NavigationBar.css"; // Custom CSS

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Nav Links */}
      <ul className="nav-links">
        <li>ABOUT</li>
        <li>AQI</li>
        <li>WQI</li>
        <li>Guide</li>
      </ul>

      {/* Contact Button */}
      <button className="contact-button">CONTACT</button>
    </nav>
  );
}
