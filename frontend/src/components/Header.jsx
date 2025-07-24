import React from "react";
import { RiCloseFill } from "@remixicon/react"
import { navItems } from "../constants/data"

export const Header = () => {
  return (
    <main className="">
      <section className="container">
        <a href="#">
          <img src="" alt="logo" width={115} height={59} />
        </a>
        {/* Mobile menu */}
        <nav className="">
          <button className="">
            <RiCloseFill size={30} />
          </button>
          
          <ul className="">
            {navItems.map(item => (
            <li key={item.id}>
              <a href={item.href} > {item.label}</a>
            </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
    )
}