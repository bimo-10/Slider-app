import { useState, React, useEffect } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  console.log(people);

  const handlePrevSlide = () => {
    setCurrentPerson((prevState) => {
      const current = (prevState - 1 + people.length) % people.length;
      return current;
    });
  };
  const handleNextSlide = () => {
    setCurrentPerson((prevState) => {
      const current = (prevState + 1) % people.length;
      return current;
    });
  };

  // autoplay with cleanup function
  useEffect(() => {
    let sliderId = setInterval(() => {
      handleNextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
            <button type="button" className="prev" onClick={handlePrevSlide}>
              <FiChevronLeft />
            </button>
            <button type="button" className="next" onClick={handleNextSlide}>
              <FiChevronRight />
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Carousel;
