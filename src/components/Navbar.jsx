import React from "react"
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // optional icons for hamburger

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white fixed top-0 z-50">
      <div className="mx-auto flex justify-between items-center p-5">
        {/* Site Title */}
        <h1 className="font-bitcount text-xl leading-none">
          <a href="#home" className="hover:text-pink-300">okayceci</a>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex font-barlow gap-6 text-sm sm:text-base">
          <li><a href="#home" className="hover:text-pink-300">Home</a></li>
          <li><a href="#music" className="hover:text-pink-300">Music</a></li>
          <li><a href="#merch" className="hover:text-pink-300">Merch</a></li>
          <li><a href="#art" className="hover:text-pink-300">Art</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black font-barlow flex flex-col items-center gap-4 p-4 text-base">
          <li><a href="#home" className="hover:text-pink-200" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#music" className="hover:text-pink-200" onClick={() => setIsOpen(false)}>Music</a></li>
          <li><a href="#merch" className="hover:text-pink-200" onClick={() => setIsOpen(false)}>Merch</a></li>
          <li><a href="#art" className="hover:text-pink-200" onClick={() => setIsOpen(false)}>Art</a></li>
        </ul>
      )}
    </nav>
  );
}