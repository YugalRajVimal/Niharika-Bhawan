"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import { MyContext } from "../store/MyContext";
import gsap from "gsap";
import { FaPhone } from "react-icons/fa";

const Nav = () => {
  const { phoneNo } = useContext(MyContext);

  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <header className="w-full h-[100px] bg-white shadow-sm flex justify-between items-center fixed top-0 z-50 px-6">
        {/* Left: Logo Text */}
        <div className="leading-tight text-center">
          <h1 className="text-2xl font-bold uppercase font-GeorgiaRef">
            <span className="text-orange-600">Niharika</span>{" "}
            <span className="text-orange-600">Bhawan</span>
          </h1>
          <p className="text-md font-semibold text-gray-800 uppercase">
            SMVD Shrine Board, Katra
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-black font-semibold text-[17px] items-center">
          {[
            { href: "#", text: "Home" },
            { href: "#about", text: "About Us" },
            { href: "#rooms", text: "Rooms" },
            { href: "#amenities", text: "Facilities" },
            { href: "#gallery", text: "Gallery" },
            { href: "#footer", text: "Contact Us" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`hover:text-orange-600 font-GeorgiaRef ${
                link.text === "Home" ? "text-orange-600" : ""
              }`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Call Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(`tel:${phoneNo}`, "_blank"); // WhatsApp
              window.location.href = "/call"; //Whatapp
            }}
            className="flex items-center gap-2 px-4 py-2 border-4 border-[#4B1E0E] text-[#4B1E0E] font-bold rounded-full"
          >
            <FaPhone className="rotate-[90deg]" /> {phoneNo}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black font-bold text-3xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        ref={menuRef}
        style={{ transform: "translateX(100%)" }}
        className="fixed top-0 right-0 h-full w-64 pt-[100px] bg-white shadow-lg z-40 md:hidden px-4 py-10 space-y-6 text-lg font-medium text-black"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl font-bold text-black"
          aria-label="Close menu"
        >
          ×
        </button>

        {[
          { href: "#", text: "Home" },
          { href: "#about", text: "About Us" },
          { href: "#rooms", text: "Rooms" },
          { href: "#amenities", text: "Facilities" },
          { href: "#gallery", text: "Gallery" },
          { href: "#footer", text: "Contact Us" },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-orange-600 font-GeorgiaRef ${
              link.text === "Home" ? "text-orange-600" : ""
            }`}
          >
            {link.text}
          </a>
        ))}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.open(`tel:${phoneNo}`, "_blank"); // WhatsApp
            window.location.href = "/call"; //Whatapp
          }}
          className="block mt-4 flex items-center gap-2 px-4 py-2 border-4 border-[#4B1E0E] text-[#4B1E0E] font-bold rounded-full"
        >
          <FaPhone className="rotate-[90deg]  text-sm" /> {phoneNo}
        </a>
      </div>
    </>
  );
};

export default Nav;
