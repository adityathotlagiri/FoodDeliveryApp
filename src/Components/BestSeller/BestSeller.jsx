import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BestSeller.css";
import Navbar from "../Navbar/Navbar";
import shake from "../../assets/icons/Shake.png";
import lasagna from "../../assets/icons/HomeIcons/lasagna.png";
import rolls from "../../assets/icons/HomeIcons/rolls.png";
import pasta from "../../assets/icons/HomeIcons/pasta.png";
import snackIcon from "../../assets/icons/HomeIcons/Snacks.png";
import cartIcon from "../../assets/icons/HomeIcons/cartIconRed.png";

const bestSellerItems = [
  {
    id: 1,
    name: "Sunny Bruschetta",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: "$15.00",
    rating: "5.0",
    img: pasta,
    category: "Snacks",
  },
  {
    id: 2,
    name: "Gourmet Grilled Skewers",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: "$12.00",
    rating: "4.5",
    img: rolls,
    category: "Snacks",
  },
  {
    id: 3,
    name: "Barbecue Tacos",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: "$15.00",
    rating: "4.0",
    img: shake,
    category: "Meal",
  },
  {
    id: 4,
    name: "Broccoli Lasagna",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: "$12.00",
    rating: "3.5",
    img: lasagna,
    category: "Vegan",
  },
  {
    id: 5,
    name: "Iced Coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: "$15.00",
    rating: "4.8",
    img: shake,
    category: "Drinks",
  },
  {
    id: 6,
    name: "Strawberry Cheesecake",
    desc: "Lorem ipsum dolor sit amet, consectetur...",
    price: "$12.00",
    rating: "4.9",
    img: shake,
    category: "Dessert",
  },
];

const BestSeller = () => {
  const navigate = useNavigate();

  return (
    <div className="bs-screen">
      <div className="bs-card">

        {/* Header */}
        <div className="bs-header">
          <button className="bs-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="bs-header-title">Best Seller</h2>
        </div>

        {/* Body */}
        <div className="bs-body">

          <p className="bs-subtitle">Discover our most popular dishes!</p>

          {/* Grid */}
          <div className="bs-grid">
            {bestSellerItems.map((item) => (
              <div
                key={item.id}
                className="bs-item"
                onClick={() => navigate(`/food/${item.id}`, { state: { item: {
                  id: item.id,
                  name: item.name,
                  image: item.img,
                  price: parseFloat(item.price.replace("$", "")),
                  rating: item.rating,
                  desc: item.desc,
                  fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                  addons: [
                    { name: "Extra Sauce", price: 1.99 },
                    { name: "Cheese", price: 2.99 },
                    { name: "Bacon", price: 3.99 },
                    { name: "Avocado", price: 2.49 },
                  ],
                }}})}
              >
                {/* Image */}
                <div className="bs-img-wrap">
                  <img src={item.img} alt={item.name} className="bs-img" />
                  <span className="bs-price">{item.price}</span>
                  <button
                    className="bs-fav-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ❤️
                  </button>
                  <button
                    className="bs-cat-icon"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img src={snackIcon} alt="snackIcon" />
                  </button>
                </div>

                {/* Info */}
                <div className="bs-info">
                  <div className="bs-info-top">
                    <span className="bs-name">{item.name}</span>
                    <span className="bs-rating">{item.rating} ⭐</span>
                  </div>
                  <div className="bs-info-bottom">
                    <p className="bs-desc">{item.desc}</p>
                    <button
                      className="bs-cart-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img src={cartIcon} alt="cart"/>
                    </button>
                  </div>
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

BestSeller.propTypes = { children: PropTypes.node };
export default BestSeller;