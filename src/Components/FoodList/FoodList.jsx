import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./FoodList.css";
import Navbar from "../Navbar/Navbar";
import { foodData } from "../../data/foodData";

import cartIcon from "../../assets/icons/HomeIcons/cart_icon.png";
import bellIcon from "../../assets/icons/HomeIcons/bell_icon.png";
import profileIcon from "../../assets/icons/HomeIcons/profile_icon.png";
import filterIcon from "../../assets/icons/HomeIcons/filter.png"


import snackIcon from "../../assets/icons/HomeIcons/Snacks.png";
import mealIcon from "../../assets/icons/HomeIcons/Meals.png";
import veganIcon from "../../assets/icons/HomeIcons/Vegan.png";
import dessertIcon from "../../assets/icons/HomeIcons/Desserts.png";
import drinksIcon from "../../assets/icons/HomeIcons/Drinks.png";
import ProfileDrawer from "../ProfileDrawer/ProfileDrawer";
import NotificationsDrawer from "../NotificationsDrawer/NotificationsDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";

const categories = [
  { icon: snackIcon, label: "Snacks" },
  { icon: mealIcon, label: "Meal" },
  { icon: veganIcon, label: "Vegan" },
  { icon: dessertIcon, label: "Dessert" },
  { icon: drinksIcon, label: "Drinks" },
];

const FoodList = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || "Snacks");
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [nDrawerOpen, setnDrawerOpen] = useState(false);
  const [CartDrawerOpen, setCartDrawerOpen] = useState(false);
  const items = foodData[activeCategory] || [];

  return (
    <div className="flist-screen">
        <ProfileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
              <NotificationsDrawer isOpen={nDrawerOpen} onClose={()=>setnDrawerOpen(false)} />
              <CartDrawer isOpen={CartDrawerOpen} onClose={()=>setCartDrawerOpen(false)} />
      <div className="flist-card">

        {/* Header */}
        <div className="flist-header">
          <div className="flist-search-row">
            <div className="flist-search-box">
              <input className="flist-search-input" type="text" placeholder="Search" />
              <button className="flist-filter-btn" onClick={() => navigate("/filter")}>
                <img src={filterIcon} alt="filter" />
              </button>
            </div>
            <div className="flist-header-icons">
              <button className="flist-icon-btn" onClick={() => setCartDrawerOpen(true)}><img src={cartIcon} alt="cart" /></button>
              <button className="flist-icon-btn" onClick={() => setnDrawerOpen(true)}><img src={bellIcon} alt="bell" /></button>
              <button className="flist-icon-btn" onClick={() => setDrawerOpen(true)}><img src={profileIcon} alt="profile" /></button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flist-body">
            <span id="body-color"></span>
          {/* Categories */}
          <div className="flist-categories">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className={`flist-cat-item ${activeCategory === cat.label ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.label)}
              >
                <div className="flist-cat-icon-wrap">
                  <img src={cat.icon} alt={cat.label} />
                </div>
                <span className="flist-cat-label">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* Sort row */}
          <div className="flist-sort-row">
            <span className="flist-sort-label">Sort By <strong>Popular</strong></span>
            <button className="flist-sort-btn"><img src={filterIcon} alt="filter" /></button>
          </div>

          {/* Food items */}
          <div className="flist-items">
            {items.map((item) => (
              <div
                key={item.id}
                className="flist-item"
                onClick={() => navigate(`/food/${item.id}`, { state: { item } })}
              >
                <img src={item.image} alt={item.name} className="flist-item-img" />
                <div className="flist-item-info">
                  <div className="flist-item-top">
                    <span className="flist-item-name">{item.name}</span>
                    <span className="flist-item-rating"> {item.rating} ⭐</span>
                    <span className="flist-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="flist-item-desc">{item.fullDesc}</p>
                </div>
                <div className="co2-divider" />
              </div>
            ))}
          </div>

        </div>

        <Navbar />
        
      </div>
    </div>
  );
};

FoodList.propTypes = { children: PropTypes.node };
export default FoodList;