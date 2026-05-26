import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Filter.css";
import Navbar from "../Navbar/Navbar";

import snackIcon from "../../assets/icons/HomeIcons/Snacks.png";
import mealIcon from "../../assets/icons/HomeIcons/Meals.png";
import veganIcon from "../../assets/icons/HomeIcons/Vegan.png";
import dessertIcon from "../../assets/icons/HomeIcons/Desserts.png";
import drinksIcon from "../../assets/icons/HomeIcons/Drinks.png";

import profileIcon from "../../assets/icons/HomeIcons/profile_icon.png";
import cartIcon from "../../assets/icons/HomeIcons/cart_icon.png";
import toast, { Toaster } from "react-hot-toast";
import ProfileDrawer from "../ProfileDrawer/ProfileDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";

const categories = [
  { icon: snackIcon, label: "Snacks" },
  { icon: mealIcon, label: "Meal" },
  { icon: veganIcon, label: "Vegan" },
  { icon: dessertIcon, label: "Dessert" },
  { icon: drinksIcon, label: "Drinks" },
];

const categoryItems = {
  Snacks: ["Bruschetta", "Spring Rolls", "Crepes", "Wings", "Skewers", "Salmon", "Mexican", "Baked", "Appetizer"],
  Meal: ["Sushi", "Pizza", "Chicken", "Curry", "Burger", "Cheese", "Fresh Prawn", "Ceviche", "Pad Thai"],
  Vegan: ["Bean Burger", "Lasagna", "Pizza", "Mushroom", "Risotto", "Broccoli", "Hummus", "Quinoa", "Salad"],
  Dessert: ["Crepes", "Macarons", "Cupcakes", "Ice Cream", "Flan", "Cheesecake", "Chocolate", "Cokes", "Brownie"],
  Drinks: ["Coffee", "Cocktail", "Juice", "Milkshake", "Wine", "Pina Colada", "Mojito", "Craft Beer", "Ice Tea"],
};

const Filter = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Snacks");
  const [selectedItems, setSelectedItems] = useState(["Skewers", "Salmon"]);
  const [rating, setRating] = useState(4);
  const [price, setPrice] = useState(30);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [CartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleSubmit = () =>{
    toast.success("Filter Set confirmed! Going back to Home", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#E95322",
          color: "#fff",
          fontFamily: "Nunito, sans-serif",
          fontWeight: "700",
          borderRadius: "50px",
          padding: "12px 24px",
        },
        iconTheme: {
          primary: "#fff",
          secondary: "#E95322",
        },
      });
      setTimeout(() => navigate("/home"), 2000);
    }
  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="fl-screen">
        <Toaster />
        <ProfileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
        <CartDrawer isOpen={CartDrawerOpen} onClose={()=>setCartDrawerOpen(false)} />
      <div className="fl-card">

        {/* Header */}
        <div className="fl-header">
          <button className="fl-back" onClick={() => navigate("/home")}>‹</button>
          <h2 className="fl-header-title">Filter</h2>
          <div className="fl-header-icons">
            <button className="fl-icon-btn" onClick={() => setCartDrawerOpen(true)}><img src={cartIcon} alt="cart" /></button>
            <button className="fl-icon-btn" onClick={() => setDrawerOpen(true)}><img src={profileIcon} alt="profile" /></button>
          </div>
        </div>

        {/* Body */}
        <div className="fl-body">

          {/* Categories */}
          <h3 className="fl-section-title">Categories</h3>
          <div className="fl-categories">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className={`fl-cat-item ${activeCategory === cat.label ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.label)}
              >
                <div className="fl-cat-icon-wrap">
                  <img src={cat.icon} alt={cat.label} />
                </div>
                <span className="fl-cat-label">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* Sort by */}
          <h3 className="fl-section-title">Sort by</h3>
          <div className="fl-rating-row">
            <span className="fl-rating-label">Top Rated</span>
            <div className="fl-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`fl-star ${star <= rating ? "active" : ""}`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Category items */}
          <h3 className="fl-section-title">Categories</h3>
          <div className="fl-items-wrap">
            {categoryItems[activeCategory].map((item) => (
              <button
                key={item}
                className={`fl-item-tag ${selectedItems.includes(item) ? "active" : ""}`}
                onClick={() => toggleItem(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Price range */}
            <div className="fl-price-header">
            <h3 className="fl-section-title">Price</h3>
            <span className="fl-price-value">${price}</span>
            </div>
            <div className="fl-price-wrap">
            <input
            type="range"
            min={1}
            max={100}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="fl-slider"
            style={{
                background: `linear-gradient(to right, #E95322 0%, #E95322 ${price}%, #ddd ${price}%, #ddd 100%)`
            }}
            />
            <div className="fl-price-labels">
                <span>$1</span>
                <span>$25</span>
                <span>$50</span>
                <span>$75</span>
                <span>$100+</span>
            </div>
            </div>

          {/* Apply button */}
          <button
            className="fl-btn-apply"
            onClick={() => handleSubmit()}
          >
            Apply
          </button>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

Filter.propTypes = { children: PropTypes.node };
export default Filter;