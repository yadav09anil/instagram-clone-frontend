import React, { useState } from "react";
import "./ForgotPage.css";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [formData, setFormData] = useState({
    phone: "",
    username: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { phone, username, password, password2 } = formData;

    if (!phone || !username || !password || !password2) {
      alert("Please fill all the fields");
      return;
    }

    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    // Simulate successful update
    alert("Password updated successfully!");

    // Reset form
    setFormData({
      phone: "",
      username: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className="mainbody">
      <div className="logo">
        <img src="/assets/logo1.png" alt="Logo" />
      </div>

      <div className="text">
        <p>Change Your Password</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="phone">
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="username">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="password1">
          <input
            type="password"
            placeholder="New Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="password2">
          <input
            type="password"
            placeholder="Re-Enter Password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button">
          <button type="submit">Set New Password</button>
        </div>
      </form>

      <div className="bottom">
        <p>
          Create New Account: <Link to="/signup">Yes</Link>
        </p>
        <h4>OR</h4>
        <p>
          Have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Forgot;
