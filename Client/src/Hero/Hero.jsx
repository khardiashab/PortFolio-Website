import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { getHero } from "../API/api";

const HeroSection = () => {
  const [hero, setHero] = useState({});
  const [error, setError] = useState(null);

  /**
   * Fetches the hero data from the API and caches it if not already cached.
   */
  const fetchAndCacheHeroData = async () => {
    try {
      const cachedData = localStorage.getItem("hero");
      if (cachedData) {
        setHero(JSON.parse(cachedData));
      } else {
        const data = await getHero();
        localStorage.setItem("hero", JSON.stringify(data[0]));
        setHero(data[0]);
      }
    } catch (error) {
      setError(error);
    }
  };

  /**
   * Loads the hero data on mount.
   */
  useEffect(() => {
    fetchAndCacheHeroData();
  }, []);

  /**
   * Logs and renders the error if there is one.
   */
  if (error) {
    console.error(error);
    
    return (
      <div className="error-message">
        Oops! There was an error. Please try again later.
      </div>
    );
  }

  /**
   * Renders the hero section.
   */
  return (
    <section className="hero navbar__margin" id="home">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">{hero?.bigHeading}</h1>
          <p className="hero__subtitle">{hero?.desc}</p>
          <a href={hero?.btnLink}>
            <button className="hero__cta-btn">{hero?.btnText}</button>
          </a>
        </div>
        <div className="hero__image">
          <img src={hero?.imageUrl} alt="MERN stack developer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
