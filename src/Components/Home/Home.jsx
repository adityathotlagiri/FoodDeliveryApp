import "./Home.css";
import ProfileDrawer from "../ProfileDrawer/ProfileDrawer";
import cartIcon from "../../assets/icons/HomeIcons/cart_icon.png";
import bellIcon from "../../assets/icons/HomeIcons/bell_icon.png";
import profileIcon from "../../assets/icons/HomeIcons/profile_icon.png";
import filterIcon from "../../assets/icons/HomeIcons/filter.png"

import snackIcon from "../../assets/icons/HomeIcons/Snacks.png";
import mealIcon from "../../assets/icons/HomeIcons/Meals.png";
import veganIcon from "../../assets/icons/HomeIcons/Vegan.png";
import dessertIcon from "../../assets/icons/HomeIcons/Desserts.png";
import drinksIcon from "../../assets/icons/HomeIcons/Drinks.png";

import sushi from "../../assets/icons/HomeIcons/sushi.png";
import pasta from "../../assets/icons/HomeIcons/pasta.png";
import lasagna from "../../assets/icons/HomeIcons/lasagna.png";
import cupcake from "../../assets/icons/HomeIcons/cupcake.png";
import pizza from "../../assets/icons/HomeIcons/Pizza.png";
import burger from "../../assets/icons/HomeIcons/burger.png";
import rolls from "../../assets/icons/HomeIcons/rolls.png";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import NotificationsDrawer from "../NotificationsDrawer/NotificationsDrawer";
import CartDrawer from "../CartDrawer/CartDrawer";

const categories = [
  { icon: snackIcon, label: "Snacks" },
  { icon: mealIcon, label: "Meal" },
  { icon: veganIcon, label: "Vegan" },
  { icon: dessertIcon, label: "Dessert" },
  { icon: drinksIcon, label: "Drinks" },
];

const bestSellers = [
  { img: sushi, price: "$103.0" },
  { img: pasta, price: "$50.0" },
  { img: lasagna, price: "$12.99" },
  { img: cupcake, price: "$8.20" },
];

const recommended = [
  { img: burger, price: "$10.0", rating: "5.0" },
  { img: rolls, price: "$25.0", rating: "5.0" },
];

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [nDrawerOpen, setnDrawerOpen] = useState(false);
  const [CartDrawerOpen, setCartDrawerOpen] = useState(false);

  return (
    <div className="hm-screen">
      <ProfileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
      <NotificationsDrawer isOpen={nDrawerOpen} onClose={()=>setnDrawerOpen(false)} />
      <CartDrawer isOpen={CartDrawerOpen} onClose={()=>setCartDrawerOpen(false)} />
      <div className="hm-card">

        {/* Top yellow header */}
        <div className="hm-header">
          {/* Search bar */}
          <div className="hm-search-row">
            <div className="hm-search-box">
              <input className="hm-search-input" type="text" placeholder="Search" />
              <button className="hm-filter-btn">
                <img src={filterIcon} alt="filter" />
              </button>
            </div>
            
            <div className="hm-header-icons">
              <button className="hm-icon-btn" onClick={() => setCartDrawerOpen(true)}><img src={cartIcon} alt="cart" /></button>
              <button className="hm-icon-btn" onClick={() => setnDrawerOpen(true)}><img src={bellIcon} alt="bell" /></button>
              <button className="hm-icon-btn" onClick={() => setDrawerOpen(true)}><img src={profileIcon} alt="profile" /></button>
            </div>
          </div>

          {/* Greeting */}
          <div className="hm-greeting">
            <h2 className="hm-greeting-title">Good Morning</h2>
            <p className="hm-greeting-sub">Rise And Shine! Its Breakfast Time</p>
          </div>
        </div>

        {/* White scrollable body */}
        <div className="hm-body">

          {/* Categories */}
          <div className="hm-categories">
            {categories.map((cat, i) => (
              <div className="hm-cat-item" key={i}>
                <div className="hm-cat-icon-wrap">
                  <img src={cat.icon} alt={cat.label} />
                </div>
                <span className="hm-cat-label">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* Best Seller */}
          <div className="hm-section-header">
            <h3 className="hm-section-title">Best Seller</h3>
            <button className="hm-view-all">View All &rsaquo;</button>
          </div>

          <div className="hm-best-seller-list">
            {bestSellers.map((item, i) => (
              <div className="hm-bs-item" key={i}>
                <img src={item.img} alt="food" className="hm-bs-img" />
                <span className="hm-bs-price">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Promo banner */}
          <div className="hm-promo">
            <div className="hm-promo-text">
              <p className="hm-promo-sub">Experience our delicious new dish</p>
              <h3 className="hm-promo-discount">30% OFF</h3>
            </div>
            <img src={pizza} alt="promo" className="hm-promo-img" />
          </div>

          {/* Recommend */}
          <div className="hm-section-header">
            <h3 className="hm-section-title">Recommend</h3>
          </div>

          <div className="hm-recommend-list">
            {recommended.map((item, i) => (
              <div className="hm-rec-item" key={i}>
                <img src={item.img} alt="food" className="hm-rec-img" />
                <div className="hm-rec-info">
                  <span className="hm-rec-rating">⭐ {item.rating}</span>
                  <span className="hm-rec-price">{item.price}</span>
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

export default Home;