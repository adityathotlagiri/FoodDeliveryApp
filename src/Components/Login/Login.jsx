import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import eyeOffIcon from "../../assets/icons/Eyeofficon.png";
import fingerprint from "../../assets/icons/Fingerprint.png";
import backIcon from "../../assets/icons/BackIcon.png";
import Navbar from "../Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object({
  emailOrPhone: Yup.string()
    .required("Email or phone number is required.")
    .test(
      "email-or-phone",
      "Enter a valid email or phone number.",
      (value) => {
        if (!value) return false;
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone = /^\+?[\d\s]{7,15}$/.test(value);
        return isEmail || isPhone;
      }
    ),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      toast.success("Success! You are now logged in.", {
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
    },
  });
  return (
    <div className="ln-screen">
      <Toaster />
      <div className="ln-card">

        {/* Header */}
        <div className="ln-header">
          <button className="ln-back" onClick={() => navigate(-1)}>
            <img src={backIcon} alt="back" style={{ width: "6px", height: "8px" }} />
          </button>
          <h2 className="ln-header-title">Hello!</h2>
        </div>

        {/* Body */}
        <div className="ln-body">
          <h3 className="ln-welcome">Welcome</h3>

          {/* Email or Phone */}
          <div className="ln-field-group">
            <label className="ln-label">Email or Mobile Number</label>
            <input
              className={`ln-input ${
                formik.touched.emailOrPhone && formik.errors.emailOrPhone
                  ? "ln-input-error"
                  : formik.touched.emailOrPhone && !formik.errors.emailOrPhone
                  ? "ln-input-success"
                  : ""
              }`}
              type="text"
              name="emailOrPhone"
              placeholder="example@example.com or +123 456 789"
              value={formik.values.emailOrPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
              <span className="ln-error">{formik.errors.emailOrPhone}</span>
            )}
          </div>

          {/* Password */}
          <div className="ln-field-group">
            <label className="ln-label">Password</label>
            <div className="ln-input-wrap">
              <input
                className={`ln-input ${
                  formik.touched.password && formik.errors.password
                    ? "ln-input-error"
                    : formik.touched.password && !formik.errors.password
                    ? "ln-input-success"
                    : ""
                }`}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                className="ln-eye"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={eyeOffIcon} alt="toggle password" />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <span className="ln-error">{formik.errors.password}</span>
            )}
            <div className="ln-forgot-wrap">
              <button
                className="ln-forgot"
                type="button"
                onClick={() => navigate("/forgot-password")}
              >
                Forget Password
              </button>
            </div>
          </div>

          {/* Login button */}
          <button
            className="ln-btn-login"
            onClick={formik.handleSubmit}
          >
            Log In
          </button>

          <p className="ln-or">or</p>

          {/* Fingerprint */}
          <button
            className="ln-fingerprint"
            type="button"
          >
            <img src={fingerprint} alt="fingerprint login" />
          </button>

          {/* Sign Up */}
          <p className="ln-signup-text">
            Don&apos;t have an account?{" "}
            <span
              className="ln-signup-link"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>

        <Navbar />
      </div>
    </div>
  );
};

export default Login;