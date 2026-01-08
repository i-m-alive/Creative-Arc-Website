"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  /* Theme-aware logo */
  const logoSrc =
    theme === "dark"
      ? "/brand/creative-arc-services-light.svg"
      : "/brand/creative-arc-services-dark.svg";

  const navItems = [
    "About",
    "Services",
    "Products",
    "Solutions",
    "Blog",
    "Careers",
    "Contact",
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* BRAND */}
        <Link
          href="/"
          onClick={closeMenu}
          className={styles.brand}
          aria-label="Creative Arc Services home"
        >
          <img
            src={logoSrc}
            alt="Creative Arc Services"
            className={styles.logo}
            loading="eager"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className={styles.links}>
          {navItems.map((item) => {
            const path = `/${item.toLowerCase()}`;
            const active = isActive(path);

            return (
              <li key={item}>
                <Link
                  href={path}
                  className={`${styles.navLink} ${
                    active ? styles.active : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* HAMBURGER */}
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={isOpen ? styles.lineActive : ""} />
            <span className={isOpen ? styles.lineActive : ""} />
            <span className={isOpen ? styles.lineActive : ""} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        {navItems.map((item) => {
          const path = `/${item.toLowerCase()}`;
          const active = isActive(path);

          return (
            <Link
              key={item}
              href={path}
              onClick={closeMenu}
              className={active ? styles.activeMobile : ""}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
