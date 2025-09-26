import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const handleDropdownToggle = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen({});
  };

  return (
    <nav className="bg-white text-black px-6 py-4 relative z-50" style={{ height: "90px" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Hamburger menu on left (mobile only) */}
        <button
          className="md:hidden p-2 text-2xl focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center z-50 mx-4 md:mx-0">
          <img
            src="/New Logo 1.png"
            alt="Company Logo"
            className="h-full max-h-12 object-contain"
            style={{ maxHeight: "150px" }}
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link to="/" className="hover:text-[#E53935]">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-[#E53935]">About Us</Link>
          </li>
          <NavDropdown
            label="Services"
            isOpen={dropdownOpen["services"]}
            onToggle={() => handleDropdownToggle("services")}
            links={[
              { to: "/services/affiliate-marketing", label: "Affiliate Marketing" },
              { to: "/services/performance-marketing", label: "Performance Marketing" },
              { to: "/services/seo", label: "SEO" },
              { to: "/services/email-marketing", label: "Email Marketing" },
              { to: "/services/ecommerce-marketing", label: "Ecommerce Marketing" },
            ]}
          />
          <li>
            <Link to="/contact-us" className="hover:text-[#E53935]">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#E53935]">Blog</Link>
          </li>
          <NavDropdown
            label="Gallery"
            isOpen={dropdownOpen["gallery"]}
            onToggle={() => handleDropdownToggle("gallery")}
            links={[
              { to: "/gallery/in-house", label: "In-House" },
              { to: "/gallery/event", label: "Event" },
            ]}
          />
          <li>
            <Link to="/people-in-sam" className="hover:text-[#E53935]">SAM's Workforce</Link>
          </li>
          <NavDropdown
            label="Login"
            isOpen={dropdownOpen["login"]}
            onToggle={() => handleDropdownToggle("login")}
            links={[
              { to: "/login/advertiser", label: "Advertiser" },
              { to: "/login/publisher", label: "Publisher" },
            ]}
          />
        </ul>

        {/* Mobile menu overlay */}
        {menuOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={closeAll}></div>}

        {/* Mobile sliding menu */}
        <div
          className={`fixed md:hidden top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-5 right-6 text-2xl"
            onClick={closeAll}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <ul className="flex flex-col space-y-2 mt-20 px-7">
            <li>
              <Link to="/" className="block py-3 hover:text-[#E53935]" onClick={closeAll}>Home</Link>
            </li>
            <li>
              <Link to="/about-us" className="block py-3 hover:text-[#E53935]" onClick={closeAll}>About Us</Link>
            </li>

            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center py-3 hover:text-[#E53935]"
                onClick={() => handleDropdownToggle("services")}
              >
                <span>Services</span>
                <FaChevronDown className={`ml-2 transform transition ${dropdownOpen["services"] ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen["services"] && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link to="/services/affiliate-marketing" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>Affiliate Marketing</Link></li>
                  <li><Link to="/services/performance-marketing" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>Performance Marketing</Link></li>
                  <li><Link to="/services/seo" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>SEO</Link></li>
                  <li><Link to="/services/email-marketing" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>Email Marketing</Link></li>
                  <li><Link to="/services/ecommerce-marketing" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>Ecommerce Marketing</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact-us" className="block py-3 hover:text-[#E53935]" onClick={closeAll}>Contact Us</Link>
            </li>

            <li>
              <Link to="/blog" className="block py-3 hover:text-[#E53935]" onClick={closeAll}>Blog</Link>
            </li>

            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center py-3 hover:text-[#E53935]"
                onClick={() => handleDropdownToggle("gallery")}
              >
                <span>Gallery</span>
                <FaChevronDown className={`ml-2 transform transition ${dropdownOpen["gallery"] ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen["gallery"] && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link to="/gallery/in-house" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>In-House</Link></li>
                  <li><Link to="/gallery/event" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>Event</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/people-in-sam" className="block py-3 hover:text-[#E53935]" onClick={closeAll}>SAM's Workforce</Link>
            </li>

            <li>
              <button
                type="button"
                className="w-full flex justify-between items-center py-3 hover:text-[#E53935]"
                onClick={() => handleDropdownToggle("login")}
              >
                <span>Login</span>
                <FaChevronDown className={`ml-2 transform transition ${dropdownOpen["login"] ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen["login"] && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li><Link to="/login/advertiser" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>Advertiser</Link></li>
                  <li><Link to="/login/publisher" className="block py-2 hover:text-[#E53935]" onClick={closeAll}>Publisher</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavDropdown({ label, links, isOpen, onToggle }) {
  return (
    <li
      className="relative group"
      // Touch devices won't respect hover, so onClick toggles open state
      onClick={(e) => {
        // Prevent link clicks inside ul from toggling dropdown
        if (e.target.tagName !== "A") onToggle();
      }}
    >
      <span className="flex items-center hover:text-[#E53935] cursor-pointer select-none">
        {label} <FaChevronDown className="ml-1 text-xs" />
      </span>
      {/* CSS hover reveals dropdown on desktop; isOpen controls click/tap */}
      <ul
        className={`absolute left-0 top-full w-56 bg-white border border-gray-200 rounded shadow-lg z-50
          ${isOpen ? "block" : "hidden"} group-hover:block`}
      >
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="block px-4 py-2 hover:bg-gray-100">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
