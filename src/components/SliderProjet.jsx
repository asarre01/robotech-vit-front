import React from "react";
import Slider from "react-slick";
import Projet from "./Projet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderProjet() {
	const projets = [
    {
      nom: "Projet 1",
      image: "/assets/lab.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid culpa, labore ut ad esse, necessitatibus quasi minus rem officia animi non, iure accusamus porro cumque! Aperiam sapiente totam distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid culpa, labore ut ad esse, necessitatibus quasi minus rem officia animi non, iure accusamus porro cumque! Aperiam sapiente totam distinctio?",
    },
    {
      nom: "Projet 2",
      image: "/assets/arduino.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid culpa, labore ut ad esse, necessitatibus quasi minus rem officia animi non, iure accusamus porro cumque! Aperiam sapiente totam distinctio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid culpa, labore ut ad esse, necessitatibus quasi minus rem officia animi non, iure accusamus porro cumque! Aperiam sapiente totam distinctio?",
    },
  ];
  const settings = {
    dots: true,
	  infinite: true,
	  autoplay: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="projet" className="slider-container py-24">
      <Slider {...settings}>
		{
				  projets.map((projet, i) => (
				<Projet key={i} projet={projet}/>
			))
		}
      </Slider>
    </section>
  );
}

export default SliderProjet;
