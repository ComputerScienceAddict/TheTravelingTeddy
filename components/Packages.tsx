"use client";

import Image from "next/image";
import PackageCard from "./PackageCard";
import { ScrollReveal } from "./ScrollReveal";

const PACKAGES = [
  {
    icon: "🐻",
    name: "Classic Party",
    ribbonClass: "package-ribbon-blue",
    priceCurrent: "$250",
    priceWas: "$395",
    features: [
      "12–16\" Teddy Bear",
      "Decorative Teddy Tee",
      "Adoption Certificate",
      "Wish & Promise Moment",
      "Teddy Naming Moment",
    ],
    extraGuests: "Additional guests: $25 each",
    ctaText: "Book Classic",
  },
  {
    icon: "🎈",
    name: "Deluxe Party",
    ribbonClass: "package-ribbon-gold",
    priceCurrent: "$425",
    priceWas: "$525",
    features: [
      "18–16\" Teddy Bear",
      "Decorative Teddy Tee",
      "Adoption Certificate",
      "Wish & Promise Moment",
      "Teddy Outfit of Choosing",
      "Teddy Bear Celebration Parade",
    ],
    extraGuests: "Additional guests: $28 each",
    ctaText: "Book Deluxe",
    primary: true,
    badge: "Our Fave ♥",
  },
  {
    icon: "🌈",
    name: "Ultimate Party",
    ribbonClass: "package-ribbon-brown",
    priceCurrent: "$575",
    priceWas: "$695",
    features: [
      "18–16\" Teddy Bear",
      "Everything in Classic & Deluxe",
      "Special Birthday Teddy for Birthday Child",
      "Birthday Crown or Badge",
    ],
    extraGuests: "Additional guests: $30 each",
    ctaText: "Book Ultimate",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section section-packages">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-label">Grand Opening Special</span>
          <h2 className="section-title">Pick your party</h2>
          <p className="section-subtitle">
            Each package includes our Wish & Promise Ceremony and a 90-minute host.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="packages-flyer-wrap">
          <a href="#contact" className="packages-flyer-link" aria-label="View Grand Opening flyer and book today">
            <Image
              src="/grand-opening-flyer.png"
              alt="The Traveling Teddy Co. Grand Opening Special — Classic, Deluxe & Ultimate party packages. Book today: 951-208-5205"
              className="packages-flyer-img"
              width={900}
              height={600}
              priority={false}
            />
          </a>
        </ScrollReveal>

        <div className="packages-grid">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.name} {...pkg} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.15} className="packages-perks" as="div">
          <div className="perks-ribbon">
            <span className="perks-icon">🎁</span>
            <h4 className="perks-title">Every party includes</h4>
          </div>
          <p className="perks-intro">All of these lovely extras:</p>
          <ul className="perks-list">
            <li>Birthday or Event Teddy Tee</li>
            <li>Social Media Shoutout</li>
            <li>Wish & Promise Ceremony</li>
          </ul>
          <p className="perks-note">
            50% deposit required. Travel included within 30 miles.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
