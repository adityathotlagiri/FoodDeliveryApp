import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OnBoarding.css";

// Import your actual images & icons from assets
import pizza from "../../assets/images/pizza.png";
import icecream from "../../assets/images/icecream.png";
import coffee from "../../assets/images/coffee.png";
import orderIcon from "../../assets/icons/Onboarding_icon1.png";
import paymentIcon from "../../assets/icons/Onboarding_icon2.png";
import deliveryIcon from "../../assets/icons/Onboarding_icon3.png";

const slides = [
  {
    image: pizza,
    icon: orderIcon,
    title: "Order For Food",
    desc: "Lorem ipsum dolor sit amet, cursus cleetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: icecream,
    icon: paymentIcon,
    title: "Easy Payment",
    desc: "Lorem ipsum dolor sit amet, cursus cleetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: coffee,
    icon: deliveryIcon,
    title: "Fast Delivery",
    desc: "Lorem ipsum dolor sit amet, cursus cleetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const OnBoarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/GetStarted");
    }
  };

  const handleSkip = () => {
    navigate("/GetStarted");
  };

  const isLast = current === slides.length - 1;

  return (
    <div className="ob-wrapper">
      {/* Slider track */}
      <div className="ob-slider">
        <div
          className="ob-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="ob-slide" key={i}>
              {/* Top image */}
              <div className="ob-image-wrap">
                <img src={slide.image} alt={slide.title} className="ob-image" />
                {!isLast && (
                  <button className="ob-skip" onClick={handleSkip}>
                    Skip &rsaquo;
                  </button>
                )}
              </div>

              {/* Bottom card */}
              <div className="ob-card">
                <img src={slide.icon} alt="" className="ob-icon" />
                <h2 className="ob-title">{slide.title}</h2>
                <p className="ob-desc">{slide.desc}</p>

                {/* Dots */}
                <div className="ob-dots">
                  {slides.map((_, di) => (
                    <span
                      key={di}
                      className={`ob-dot ${di === current ? "active" : ""}`}
                    />
                  ))}
                </div>

                <button className="ob-btn" onClick={handleNext}>
                  {isLast ? "Get Started" : "Next"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;