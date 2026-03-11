"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.footer
      className="site-footer"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer-inner">
          <motion.div
            className="footer-logo-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Image
              src="/logo.png"
              alt="The Traveling Teddy Co."
              className="footer-logo"
              width={72}
              height={72}
              unoptimized
            />
          </motion.div>
          <p className="footer-tagline">Stuffed With Love · Est. 2026</p>
          <p className="footer-legal">
            The Traveling Teddy Co. — Mobile Bear-Stuffing Parties
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
