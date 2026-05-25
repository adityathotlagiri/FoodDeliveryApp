import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import "./AddAddress.css";
import Navbar from "../Navbar/Navbar";
import HomeIcon from "../../assets/icons/HomeIcon.png";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
});

const AddAddress = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", address: "" },
    validationSchema,
    onSubmit: () => {
      toast.success("Address added successfully!", {
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
      setTimeout(() => navigate("/address"), 2000);
    },
  });

  return (
    <div className="aa-screen">
      <Toaster />
      <div className="aa-card">

        <div className="aa-header">
          <button className="aa-back" onClick={() => navigate('/address')}>‹</button>
          <h2 className="aa-header-title">Add New Address</h2>
        </div>

        <div className="aa-body">

          {/* House icon */}
          <div className="aa-icon-wrap">
            <img className="aa-icon-img" src={HomeIcon} alt="home icon" />
          </div>

          {/* Name */}
          <div className="aa-field-group">
            <label className="aa-label">Name</label>
            <input
              className={`aa-input ${formik.touched.name && formik.errors.name ? "aa-input-error" : ""}`}
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter the name for Address"
            />
            {formik.touched.name && formik.errors.name && (
              <span className="aa-error">{formik.errors.name}</span>
            )}
          </div>

          {/* Address */}
          <div className="aa-field-group">
            <label className="aa-label">Address</label>
            <textarea
              className={`aa-textarea ${formik.touched.address && formik.errors.address ? "aa-input-error" : ""}`}
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Example address"
            />
            {formik.touched.address && formik.errors.address && (
              <span className="aa-error">{formik.errors.address}</span>
            )}
          </div>

          <button className="aa-btn-apply" onClick={formik.handleSubmit}>
            Apply
          </button>

        </div>

        <Navbar />
      </div>
    </div>
  );
};

AddAddress.propTypes = { children: PropTypes.node };

export default AddAddress;