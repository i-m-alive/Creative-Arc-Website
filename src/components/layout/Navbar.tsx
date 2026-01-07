"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" onClick={closeMenu}>
            CreativeArc
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className={styles.links}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          

        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={isOpen ? styles.lineActive : ""} />
            <span className={isOpen ? styles.lineActive : ""} />
            <span className={isOpen ? styles.lineActive : ""} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/products" onClick={closeMenu}>Products</Link>
        <Link href="/solutions" onClick={closeMenu}>Solutions</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/careers" onClick={closeMenu}>Careers</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  );
}
