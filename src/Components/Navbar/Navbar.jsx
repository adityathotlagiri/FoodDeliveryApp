// Import your icons from assets
import homeIcon from "../../assets/icons/Home.png";
import menuIcon from "../../assets/icons/Menu.png";
import heartIcon from "../../assets/icons/heart.png";
import orderIcon from "../../assets/icons/Order.png";
import supportIcon from "../../assets/icons/Support.png";
import { useNavigate } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
    return(
        <>
           <div className="ln-navbar">
                     <button className="ln-nav-item" onClick={() => navigate("/home")}>
                       <img src={homeIcon} alt="Home" />
                     </button>
                     <button className="ln-nav-item">
                       <img src={menuIcon} alt="Menu" />
                     </button>
                     <button className="ln-nav-item">
                       <img src={heartIcon} alt="Favourites" />
                     </button>
                     <button className="ln-nav-item">
                       <img src={orderIcon} alt="Orders" />
                     </button>
                     <button className="ln-nav-item">
                       <img src={supportIcon} alt="Support" />
                     </button>
                   </div>
        </>
    )

}
export default Navbar;