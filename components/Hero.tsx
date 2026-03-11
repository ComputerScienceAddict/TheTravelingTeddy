"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CurvedLoop from "./CurvedLoop";

const stagger = 0.12;
const duration = 0.6;

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner" />
      <div className="hero-illustration" aria-hidden>
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="hero-illustration-img"
          unoptimized
        />
        <div className="hero-illustration-overlay" />
      </div>
      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Mobile Bear-Stuffing Parties
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.2 + stagger, ease: [0.22, 1, 0.36, 1] }}
        >
          Create memories that last a lifetime
        </motion.h1>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.2 + stagger * 2, ease: [0.22, 1, 0.36, 1] }}
        >
          We bring the magic to you — a whimsical experience where every child
          stuffs, names, and adopts their very own teddy bear.
        </motion.p>
        <motion.a
          href="tel:9512085205"
          className="btn btn-primary btn-cute"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.2 + stagger * 3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Call to book ♥
        </motion.a>
      </div>
      <motion.div
        className="curved-loop-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <CurvedLoop
          marqueeText="Stuffed With Love ✦ Teddy Bears ✦ Parties ✦ Celebrations ✦"
          speed={1.5}
          curveAmount={-190}
          direction="left"
          interactive
          wrapperClassName="curved-loop-hero"
          className="curved-loop-hero-text"
        />
      </motion.div>
    </section>
  );
}
