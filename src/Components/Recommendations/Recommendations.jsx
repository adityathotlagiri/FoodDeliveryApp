import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Recommendations.css";
import Navbar from "../Navbar/Navbar";
import shake from "../../assets/icons/Shake.png";
import burger from "../../assets/icons/HomeIcons/burger.png";
import lasagna from "../../assets/icons/HomeIcons/lasagna.png";
import pasta from "../../assets/icons/HomeIcons/pasta.png";
import cartIcon from "../../assets/icons/HomeIcons/cartIconRed.png";

const recItems = [
  {
    id: 1,
    name: "Chocolate and Fresh Fruit Crepes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15.00,
    rating: "5.0",
    img: lasagna,
    isNew: true,
    large: true,
  },
  {
    id: 2,
    name: "Bean and vegetable burger",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: 15.00,
    rating: "4.0",
    img: burger,
    isNew: false,
    large: false,
  },
  {
    id: 3,
    name: "Creamy milkshakes",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: 15.00,
    rating: "4.5",
    img: shake,
    isNew: false,
    large: false,
  },
  {
    id: 4,
    name: "Chicken Curry",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: 15.00,
    rating: "4.8",
    img: pasta,
    isNew: false,
    large: false,
  },
  {
    id: 5,
    name: "Veggie Bowl",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: 15.00,
    rating: "4.3",
    img: shake,
    isNew: false,
    large: false,
  },
];

const Recommendations = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/food/${item.id}`, {
      state: {
        item: {
          ...item,
          image: item.img,
          fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          addonsTitle: "Add on ingredients",
          addons: [
            { name: "Extra Sauce", price: 1.99 },
            { name: "Cheese", price: 2.99 },
            { name: "Bacon", price: 3.99 },
            { name: "Avocado", price: 2.49 },
          ],
        },
      },
    });
  };

  const firstItem = recItems[0];
  const restItems = recItems.slice(1);

  return (
    <div className="rec-screen">
      <div className="rec-card">

        {/* Header */}
        <div className="rec-header">
          <button className="rec-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="rec-header-title">Recommendations</h2>
        </div>

        {/* Body */}
        <div className="rec-body">

          <p className="rec-subtitle">
            Discover the dishes recommended by the chef.
          </p>

          {/* First item — large horizontal */}
          <div className="rec-item-large" onClick={() => handleClick(firstItem)}>
            <div className="rec-large-img-wrap">
              <img src={firstItem.img} alt={firstItem.name} className="rec-large-img" />
              <span className="rec-rating-badge">{firstItem.rating} ⭐</span>
            </div>
            <div className="rec-large-info">
              {firstItem.isNew && <span className="rec-new-badge">New Product</span>}
              <p className="rec-item-name">{firstItem.name}</p>
              <p className="rec-item-desc">{firstItem.desc}</p>
              <div className="rec-item-bottom">
                <span className="rec-item-price">${firstItem.price.toFixed(2)}</span>
                <div className="rec-qty-wrap">
                  <button className="rec-qty-btn">−</button>
                  <span className="rec-qty">1</span>
                  <button className="rec-qty-btn plus">+</button>
                </div>
                <button className="rec-cart-btn"><img src={cartIcon} alt="cart"/></button>
              </div>
            </div>
          </div>

          {/* Rest — 2 column grid */}
          <div className="rec-grid">
            {restItems.map((item) => (
              <div
                key={item.id}
                className="rec-item"
                onClick={() => handleClick(item)}
              >
                <div className="rec-img-wrap">
                  <img src={item.img} alt={item.name} className="rec-img" />
                  <span className="rec-rating-badge small">{item.rating} ⭐</span>
                </div>
                <p className="rec-item-name small">{item.name}</p>
                <p className="rec-item-desc small">{item.desc}</p>
                <div className="rec-item-bottom">
                  <span className="rec-item-price">${item.price.toFixed(2)}</span>
                  <div className="rec-qty-wrap small">
                    <button className="rec-qty-btn">−</button>
                    <span className="rec-qty">1</span>
                    <button className="rec-qty-btn plus">+</button>
                  </div>
                  <button className="rec-cart-btn"><img src={cartIcon} alt="cart"/></button>
                </div>
              </div>
            ))}
          </div>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

Recommendations.propTypes = { children: PropTypes.node };
export default Recommendations;