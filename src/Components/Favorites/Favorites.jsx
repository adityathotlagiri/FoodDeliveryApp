import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Favorites.css";
import Navbar from "../Navbar/Navbar";
import shake from "../../assets/icons/Shake.png";
import burger from "../../assets/icons/HomeIcons/burger.png";
import lasagna from "../../assets/icons/HomeIcons/lasagna.png";
import pasta from "../../assets/icons/HomeIcons/pasta.png";
import mealIcon from "../../assets/icons/HomeIcons/Meals.png";

const initialFavorites = [
  { id: 1, name: "Chicken Curry", desc: "Lorem ipsum dolor sit amet, consectetur.", img: pasta, category: "Meal" },
  { id: 2, name: "Chicken Burger", desc: "Lorem ipsum dolor sit amet, consectetur.", img: burger, category: "Meal" },
  { id: 3, name: "Broccoli Lasagna", desc: "Lorem ipsum dolor sit amet, consectetur.", img: lasagna, category: "Vegan" },
  { id: 4, name: "Mexican Appetizer", desc: "Lorem ipsum dolor sit amet, consectetur.", img: shake, category: "Snacks" },
  { id: 5, name: "Chicken Wings", desc: "Lorem ipsum dolor sit amet, consectetur.", img: shake, category: "Snacks" },
  { id: 6, name: "Milkshakes", desc: "Lorem ipsum dolor sit amet, consectetur.", img: shake, category: "Drinks" },
];

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(initialFavorites);

  const removeFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  return (
    <div className="fav-screen">
      <div className="fav-card">

        <div className="fav-header">
          <button className="fav-back" onClick={() => navigate(-1)}>‹</button>
          <h2 className="fav-header-title">Favorites</h2>
        </div>

        <div className="fav-body">
          <p className="fav-subtitle">Itds time to buy your favorite dish.</p>

          <div className="fav-grid">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="fav-item"
                onClick={() => navigate(`/food/${item.id}`, {
                  state: {
                    item: {
                      id: item.id,
                      name: item.name,
                      image: item.img,
                      price: 15.00,
                      rating: "4.8",
                      desc: item.desc,
                      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                      addonsTitle: "Toppings",
                      addons: [
                        { name: "Extra Sauce", price: 1.99 },
                        { name: "Cheese", price: 2.99 },
                        { name: "Bacon", price: 3.99 },
                        { name: "Avocado", price: 2.49 },
                      ],
                    },
                  },
                })}
              >
                <div className="fav-img-wrap">
                  <img src={item.img} alt={item.name} className="fav-img" />
                  <button
                    className="fav-heart-btn"
                    onClick={(e) => removeFavorite(item.id, e)}
                  >
                    ❤️
                  </button>
                  <div className="fav-cat-icon"><img src={mealIcon} alt="mealIcon" /></div>
                </div>
                <p className="fav-item-name">{item.name}</p>
                <p className="fav-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

Favorites.propTypes = { children: PropTypes.node };
export default Favorites;