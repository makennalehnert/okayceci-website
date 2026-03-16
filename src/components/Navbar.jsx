import React from "react"


export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white p-4 flex justify-between items-center fixed top-0 z-50">
      <h1 className="font-bold text-xl">SingerName</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="hover:text-green-500">Home</a></li>
        <li><a href="#about" className="hover:text-green-500">About Me</a></li>
        <li><a href="#merch" className="hover:text-green-500">Merch</a></li>
        <li><a href="#art" className="hover:text-green-500">Art</a></li>
      </ul>
    </nav>
  )
}