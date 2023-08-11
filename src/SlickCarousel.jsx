import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

import Slider from "react-slick";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
