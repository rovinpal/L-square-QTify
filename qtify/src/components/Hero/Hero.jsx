import React from "react";
import HeroHeadphone from "../../assets/hero_headphone.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div className={styles.imageContainer}>
          <img
            className="headphone-img"
            src={HeroHeadphone}
            alt="hero-headphones"
          />
      </div>
      </div>
    </div>
  );
}

export default Hero;
