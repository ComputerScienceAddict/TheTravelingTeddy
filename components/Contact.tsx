"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section id="contact" className="section section-contact" ref={ref}>
      <div className="contact-banner" />
      <div className="container">
        <motion.div
          className="contact-block"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="contact-title">Let&apos;s celebrate together!</h2>
          <p className="contact-tagline">
            Limited-time launch pricing — first 10 parties get this special rate.
          </p>
          <p className="contact-phone-label">
            <span className="contact-heart">♥</span> Text or call anytime
          </p>
          <a href="tel:9512085205" className="contact-phone">
            951-208-5205
          </a>
          <motion.a
            href="tel:9512085205"
            className="btn btn-primary btn-large btn-cute"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Call to book
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
