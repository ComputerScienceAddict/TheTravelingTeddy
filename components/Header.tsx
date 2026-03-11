"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

export default function Header() {
  const { scrollY } = useScroll();
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 1px 0 rgba(107, 83, 68, 0.08)", "0 4px 20px rgba(107, 83, 68, 0.12)"]
  );
  return (
    <motion.header
      className="site-header"
      style={{ boxShadow: headerShadow }}
    >
      <div className="header-inner">
        <Link href="#" className="logo-link" aria-label="The Traveling Teddy Co. — Home">
          <Image
            src="/logo.png"
            alt="The Traveling Teddy Co. — Stuffed With Love"
            className="logo-img"
            width={56}
            height={56}
            unoptimized
          />
          <span className="header-tagline">Stuffed With Love</span>
        </Link>
        <nav className="main-nav">
          <Link href="#about" className="nav-link">About</Link>
          <span className="nav-dot" aria-hidden>·</span>
          <Link href="#packages" className="nav-link">Packages</Link>
          <span className="nav-dot" aria-hidden>·</span>
          <Link href="#story" className="nav-link">Our Story</Link>
          <Link href="#contact" className="nav-cta">
            Book Now
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
