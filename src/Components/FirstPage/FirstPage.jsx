import "./FirstPage.css";
import "@fontsource/poppins/800.css";
import "@fontsource/league-spartan/500.css"; 
import yumquick from '../../assets/icons/Icon_yumquick.png';
import { useNavigate } from "react-router-dom";
const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="FirstPage">
      <img className="FirstPage_img" src={yumquick} alt="yumquick" />
      <p className="FirstPage_Title" style={{color: '#F5CB58'}}>YUM<span style={{color:'#ffffff'}}>QUICK</span></p>
      <p className="FirstPage_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      <button onClick={()=>navigate("/login")} className="FirstPage_login">Log In</button>
      <button onClick={()=>navigate("/signup")} className="FirstPage_signup">Sign Up</button>
    </div>
  );
};

export default FirstPage;