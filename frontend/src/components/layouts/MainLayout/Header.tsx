import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header: React.FC = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/profile", label: "Profile" },
    { path: "/todos", label: "Todo" },
  ];

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <Link to={item.path} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
