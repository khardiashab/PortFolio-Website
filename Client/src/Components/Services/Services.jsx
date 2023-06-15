import React, { useEffect, useState } from 'react';
import "./Services.scss";
import img from "./../../Assests/bg.jpg";
import { getSpecifications } from '../../API/api.js';

const Services = () => {

  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  /**
   * Fetches the services data from APIs and cache it if not available
   */
  const fetchAndCacheServicesData = async () => {
    try {
      const cachedData = localStorage.getItem("services");
      if (cachedData) {
        setServices(JSON.parse(cachedData));
      } else {
        const fetchData = await getSpecifications();
        localStorage.setItem("services", JSON.stringify(fetchData));
        setServices(fetchData);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchAndCacheServicesData();
  }, []);

  /**
   * If an error happens, handle it
   */
  if (error) {
    return (
      <div>
        Oops! Something went wrong. Please try again later.
      </div>
    );
  }

  console.log("This is services", services);

  return (
    <section className='services__section navbar__heading' id='services'>
      <div className="text-center section__heading">Why Me?</div>
      <div className="row card-row">
        {services.map((card) => {
          return (
            <div className="col-md-4" key={card._id}>
              <div className="cards" style={{ backgroundImage: `url(${img})` }}>
                <div className="card-overlay" style={{ background: `linear-gradient(to bottom right, ${card.color1}, ${card.color2})` }}>
                  <div className="card-content">
                    <i className={card.imageIcon}></i>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
