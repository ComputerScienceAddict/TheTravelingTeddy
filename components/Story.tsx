"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { RevealItem, RevealStagger } from "./ScrollReveal";
import CurvedLoop from "./CurvedLoop";

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.15, once: true });

  return (
    <section id="story" className="section section-story" ref={ref}>
      <div className="curved-loop-divider">
        <CurvedLoop
          marqueeText="The History of the Teddy Bear ✦ Stuffed With Love ✦"
          speed={1}
          curveAmount={-190}
          direction="right"
          interactive={false}
          className="curved-loop-divider-text"
        />
      </div>
      <div className="story-decor story-decor-top" aria-hidden>
        <span className="decor-dot">✦</span>
        <span className="decor-dot">♥</span>
        <span className="decor-dot">✦</span>
      </div>
      <div className="container">
        <div className="story-grid">
          <div className="story-content">
            <RevealStagger className="story-content-inner" staggerDelay={0.09} amount={0.12}>
              <RevealItem>
                <span className="section-label">Our Story</span>
              </RevealItem>
              <RevealItem>
                <h2 className="story-title-block">
                  <span className="story-title-line">The History Of</span>
                  <span className="story-title-script">The Teddy Bear</span>
                </h2>
              </RevealItem>
              <RevealItem>
                <div className="story-body-wrap">
                  <p className="story-body">
                    The teddy bear has been a beloved companion for over a century.
                    The story begins in 1902, when President Theodore Roosevelt
                    spared a bear cub on a hunting trip. Inspired by the tale,
                    Morris Michtom created the first &ldquo;Teddy&rsquo;s Bear,&rdquo;
                    and these plush friends have comforted generations of children —
                    and adults — with their gentle presence.
                  </p>
                  <h3 className="story-subtitle-script">Why Teddy Bears Became So Loved</h3>
                  <p className="story-body">
                    They&apos;re more than toys. They&apos;re friends made with
                    intention, stuffed with care, and named with love. At The
                    Traveling Teddy Co., we honor that tradition by creating moments
                    where every child gets to bring their bear to life.
                  </p>
                  <ul className="story-symbols">
                    <li>Comfort</li>
                    <li>Friendship</li>
                    <li>Gifts of love</li>
                    <li>Childhood memories</li>
                    <li>Emotional support</li>
                  </ul>
                </div>
              </RevealItem>
            </RevealStagger>
          </div>
          <motion.div
            className="story-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="story-accent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="accent-heart">♥</span>
              <span className="accent-text">Stuffed With Love</span>
              <span className="accent-est">Est. 2026</span>
            </motion.div>
            <div className="story-decor-inner" aria-hidden>
              <span>✦</span>
              <span>♥</span>
              <span>✦</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="story-decor story-decor-bottom" aria-hidden>
        ♥ · ✦ · ♥ · ✦ · ♥
      </div>
    </section>
  );
}
