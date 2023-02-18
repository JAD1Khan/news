import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "./styles.css";
import image1 from "./1.jpg";

const slides = [
  {
    title: "عکس 1",
    subtitle: "توضیحات",
    // control: <input type="email" placeholder="Email" />,
    image: image1,
  },
  {
    title: "عکس 2",
    subtitle: "توضیحات",
    // control: <input type="password" placeholder="Password" />,
    image: image1,
  },
  {
    title: "عکس 3",
    subtitle: "توضیحات",
    // control: <button>Sign Up</button>,
    image: image1,
  },
  {
    title: "عکس 4",
    subtitle: "توضیحات",
    // control: <button>Sign Up</button>,
    image: image1,
  },
  {
    title: "عکس 5",
    subtitle: "توضیحات",
    // control: <button>Sign Up</button>,
    image: image1,
  },
];

export const Carousel = () => (
  <div className="Carousel-card">
    <ReactCarousel
      className="react-carousel"
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
    >
      {slides.map((slide) => (
        <div key={slide.title} className="react-carousel-slide">
          <div className="image-wrapper">
            <img src={slide.image} />
          </div>
          <h2 className="titleImage-Carousel">{slide.title}</h2>
          <h3 className="textImage-Carousel">{slide.subtitle}</h3>
          {slide.control}
        </div>
      ))}
    </ReactCarousel>
  </div>
);
