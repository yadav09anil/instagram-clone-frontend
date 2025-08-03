import React, { useState } from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    phone: "",
    fullname: "",
    username: "",
    password: "",
    password2: "",
  });

  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d{0,10}$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { phone, fullname, username, password, password2 } = formData;

    if (!phone || !fullname || !username || !password || !password2) {
      setPopupMessage("Please fill all the fields.");
      return;
    }

    if (phone.length !== 10) {
      setPopupMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (password.length < 8) {
      setPopupMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== password2) {
      setPopupMessage("Passwords do not match.");
      return;
    }

    console.log("Signup Data:", formData);

    setFormData({
      phone: "",
      fullname: "",
      username: "",
      password: "",
      password2: "",
    });

    setPopupMessage("Registration successful!");
  };

  const closePopup = () => {
    setPopupMessage("");
  };

  return (
    <div className="mainbody">
      {popupMessage && (
        <div className="popup">
          <button className="close-btn" onClick={closePopup}>
            &times;
          </button>
          <p>{popupMessage}</p>
        </div>
      )}

      <div className="logo">
        <img src="/assets/logo1.png" alt="Logo" />
      </div>

      <div className="text">
        <p>Sign Up</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength="10"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password (min 8 characters)"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Re-Enter Password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
        <div className="button">
          <button type="submit">Signup</button>
        </div>
      </form>

      <div className="terms">
        <p>
          People who use our service may have uploaded your contact information
          to Social Sync.
        </p>
        <a href="#">Learn More</a>
        <p>
          By signing up, you agree to our <a href="#">Terms</a>,{" "}
          <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>.
        </p>
      </div>

      <div className="bottom">
        <p>
          Have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
