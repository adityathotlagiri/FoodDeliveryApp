import { useNavigate } from "react-router-dom";
import "./PaymentMethod.css";
import Navbar from "../Navbar/Navbar";
import card from "../../assets/icons/PaymentMethods/cardIcon.png";
import apple from "../../assets/icons/PaymentMethods/appleIcon.png";
import paypal from "../../assets/icons/PaymentMethods/paypalIcon.png";
import googleplay from "../../assets/icons/PaymentMethods/GoogleplayIcon.png";
import { useState } from "react";

const initialPaymentMethods = [
  { id: 1, name: "*** *** ***43", icon:card },
  { id: 2, name: "ApplePay",  icon:apple },
  { id: 3, name: "PayPal", icon:paypal  },
  { id: 4, name: "Google Play", icon: googleplay },
];
const PaymentMethod = () =>{
    const [pmethod] = useState(initialPaymentMethods);
    const [selected, setSelected] = useState(null);

    const navigate = useNavigate();
    return(
        <div className="pm-screen">
            <div className="pm-card">
                <div className="pm-header">
                    <button className="pm-back" onClick={() => navigate('/home')}>‹</button>
                    <h2 className="pm-header-title">Payment Methods</h2>
                </div>
                <div className="pm-body">
                    <div className="pm-list">
                        {pmethod.map((item) => (
                          <div key={item.id}>
                            <button
                              className="pm-item"
                                onClick={() => setSelected(item.id)}
                            >
                            <div className="pm-item-left">
                                    <div className="pm-icon-wrap">
                                    <img src={item.icon} alt="home icon" />
                                    </div>
                                    <div>
                                        <p className="pm-item-name">{item.name}</p>
                                    </div>
                            </div>
                            <span className={`pm-radio ${selected === item.id ? "active" : ""}`} />
                            </button>
                            <div className="pm-divider" />                                  
                          </div>
                         ))}
                    </div>
                    <div className="pm-btn">
                    <button className="pm-btn-add" onClick={()=>navigate("/AddCard")}>
                        Add new Card
                    </button>
                    </div>
                </div> 
            <Navbar />
            </div>
        </div>
    )
}
export default PaymentMethod;