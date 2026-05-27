import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import bag from "../../assets/icons/notificationsIcons/bagWhite.png"
import "./FoodDetail.css";
import Navbar from "../Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

const FoodDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;
  const [qty, setQty] = useState(1);
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [isFav, setIsFav] = useState(false);
  const isPromo = item?.discount != null;
  const handleSubmit = () =>{
    toast.success(`${item?.name} Added to cart Successfully!`, {
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
      setTimeout(() => navigate(-1), 2000);

  }
//   const addonPrice = selectedAddon
//     ? item?.addons?.find((a) => a.name === selectedAddon)?.price || 0
//     : 0;

//   const total = ((item?.price || 0) + addonPrice) * qty;

  return (
    <div className="fd-screen">
        <Toaster />
      <div className="fd-card">

        {/* Yellow header */}
        <div className="fd-header">
          <button className="fd-back" onClick={() => navigate(-1)}>‹</button>
          <div className="fd-header-center">
            <h2 className="fd-header-name">{item?.name}</h2>
            <span className="fd-rating-badge">{item?.rating}⭐</span>
          </div>
          <button
            className={isFav ? 'fd-fav-btn active' : 'fd-fav-btn'} aria-pressed="false"
            onClick={() => setIsFav(!isFav)}
          >
            🤍
          </button>
        </div>

        {/* Body */}
        <div className="fd-body">

          {/* Food image card */}
          <div className="fd-image-card">
            <img src={item?.image} alt={item?.name} className="fd-image" />
            {isPromo && (
              <div className="fd-discount-badge">-{item?.discount}%</div>
            )}
          </div>

          {/* Price & qty */}
          <div className="fd-price-row">
            <div className="fd-price-wrap">
              <span className="fd-price">${item?.price?.toFixed(2)}</span>
              {isPromo && (
                <span className="fd-original-price">${item?.originalPrice?.toFixed(2)}</span>
              )}
            </div>
            <div className="fd-qty-wrap">
              <button className="fd-qty-btn minus" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="fd-qty">{qty}</span>
              <button className="fd-qty-btn plus" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>
            <div><div className="fd-divider" /></div>
          {/* Name & description */}
          <div className="fd-desc-section">
            <p className="fd-item-name">{item?.desc}</p>
            <p className="fd-item-desc">{item?.fullDesc}</p>
          </div>

          {/* Toppings / Add-ons */}
          <div className="fd-addons-section">
            <h3 className="fd-addons-title">
              {item?.addonsTitle || "Toppings"}
            </h3>
            <div className="fd-addons-list">
              {item?.addons?.map((addon) => (
                <div key={addon.name}>
                  <div className="fd-addon-item">
                    <span className="fd-addon-name">{addon.name}</span>
                    <div className="fd-addon-right">
                      <span className="fd-addon-price">${addon.price.toFixed(2)}</span>
                      <button
                        className={`fd-radio ${selectedAddon === addon.name ? "selected" : ""}`}
                        onClick={() =>
                          setSelectedAddon(
                            selectedAddon === addon.name ? null : addon.name
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="fd-addon-divider" />
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart button */}
          <button className="fd-btn-cart" onClick={handleSubmit}>
            <span><img src={bag} alt="icons" /></span>Add to Cart
          </button>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

FoodDetail.propTypes = { children: PropTypes.node };
export default FoodDetail;