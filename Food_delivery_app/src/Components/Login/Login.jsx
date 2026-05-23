import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// Import your icons from assets
import eyeOffIcon from "../../assets/icons/Eyeofficon.png";
import fingerprint from "../../assets/icons/Fingerprint.png";
import backIcon from "../../assets/icons/BackIcon.png";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="ln-screen">
      <div className="ln-card">

        {/* Top orange header */}
        <div className="ln-header">
          <button className="ln-back" onClick={() => navigate(-1)}>
            <img src={backIcon} alt="back" style={{width: '6px',height:'8px'}}/>
          </button>
          <h2 className="ln-header-title">Hello!</h2>
        </div>

        {/* White form body */}
        <div className="ln-body">
          <h3 className="ln-welcome">Welcome</h3>

          {/* Email / Mobile */}
          <div className="ln-field-group">
            <label className="ln-label">Email or Mobile Number</label>
            <input
              className="ln-input"
              type="text"
              placeholder="example@example.com"
            />
          </div>

          {/* Password */}
          <div className="ln-field-group">
            <label className="ln-label">Password</label>
            <div className="ln-input-wrap">
              <input
                className="ln-input"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
              />
              <button
                className="ln-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={eyeOffIcon} alt="toggle password" />
              </button>
            </div>
            <div className="ln-forgot-wrap">
              <button className="ln-forgot">Forget Password</button>
            </div>
          </div>

          {/* Log In button */}
          <button className="ln-btn-login">Log In</button>

          {/* OR divider */}
          <p className="ln-or">or</p>

          {/* Fingerprint */}
          <button className="ln-fingerprint">
            <img src={fingerprint} alt="fingerprint login" />
          </button>

          {/* Sign Up link */}
          <p className="ln-signup-text">
            Don&apos;t have an account?{" "}
            <span className="ln-signup-link" onClick={() => navigate("/signup")}>
              Sign Up
            </span>
          </p>
        </div>

        {/* Bottom nav bar */}
        <Navbar />
      </div>
    </div>
  );
};

export default Login;