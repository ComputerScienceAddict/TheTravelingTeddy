"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface PackageCardProps {
  icon: string;
  name: string;
  ribbonClass: string;
  priceCurrent: string;
  priceWas: string;
  features: string[];
  extraGuests: string;
  ctaText: string;
  primary?: boolean;
  badge?: string;
  index?: number;
}

export default function PackageCard({
  icon,
  name,
  ribbonClass,
  priceCurrent,
  priceWas,
  features,
  extraGuests,
  ctaText,
  primary = false,
  badge,
  index = 0,
}: PackageCardProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.article
      ref={ref}
      className={`package-card ${primary ? "package-featured" : ""}`}
      initial={{ opacity: 0, y: 40, rotate: primary ? 0 : index === 0 ? -1.2 : 1 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              rotate: primary ? 0 : index === 0 ? -1.2 : 1,
            }
          : { opacity: 0, y: 40 }
      }
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
      }}
    >
      {badge && (
        <motion.div
          className="package-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.2, type: "spring", stiffness: 300, damping: 20 }}
        >
          {badge}
        </motion.div>
      )}
      <div className={`package-ribbon ${ribbonClass}`}>
        <motion.span
          className="package-icon-wrap"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: index * 0.12 + 0.1,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
        >
          <span className="package-icon">{icon}</span>
        </motion.span>
        <h3 className="package-name">{name}</h3>
      </div>
      <div className="package-header">
        <div className="package-price">
          <span className="price-current">{priceCurrent}</span>
          <span className="price-was">{priceWas}</span>
        </div>
      </div>
      <ul className="package-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p className="package-extra">{extraGuests}</p>
      <motion.a
        href="tel:9512085205"
        className={`btn ${primary ? "btn-primary btn-cute" : "btn-outline"}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {ctaText}
      </motion.a>
    </motion.article>
  );
}
