"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { RevealItem, RevealStagger } from "./ScrollReveal";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section id="about" className="section section-about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <RevealStagger className="about-text-inner" amount={0.15} staggerDelay={0.1}>
              <RevealItem>
                <h2 className="section-title about-title">About Us</h2>
              </RevealItem>
              <RevealItem>
                <p className="about-subtitle">Mobile Bear-Stuffing Parties</p>
              </RevealItem>
              <RevealItem>
                <p className="about-body">
                  The Traveling Teddy Co. brings the joy of bear-stuffing directly
                  to your home or venue. Our mobile parties transform birthdays and
                  celebrations into unforgettable experiences — complete with
                  adoption certificates, teddy naming moments, and interactive
                  hosting.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="about-body">
                  We believe every child deserves a friend made with care. Our bears
                  are stuffed with love, quite literally.
                </p>
              </RevealItem>
              <RevealItem>
                <ul className="about-features">
                  <li>90-minute interactive host</li>
                  <li>Adoption certificates & naming ceremony</li>
                  <li>Travel within 30 miles included</li>
                </ul>
              </RevealItem>
            </RevealStagger>
          </div>
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-card">
              <div className="about-card-ribbon">Stuffed With Love</div>
              <div className="about-card-inner">
                <Image
                  src="/logo.png"
                  alt="The Traveling Teddy Co."
                  className="about-logo"
                  width={140}
                  height={140}
                />
                <p className="about-card-tagline">Est. 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
