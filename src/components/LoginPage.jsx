import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;
    const dummyUsername = "user";
    const dummyPassword = "12345678";

    if (username === dummyUsername && password === dummyPassword) {
      navigate("/home");
    } else {
      setShowError(true); // Show popup
    }
  };

  return (
    <div className="mainbody">
      {/* Error Popup */}
      {showError && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowError(false)}>
              &times;
            </span>
            <p>Incorrect username or password.</p>
          </div>
        </div>
      )}

      <div className="logo">
        <img src="/assets/logo1.png" alt="Logo" />
      </div>

      <div className="text">
        <p>Login</p>
      </div>

      <form onSubmit={handleSubmit}>
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

        <div className="password">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>

      <div className="or">
        <p>OR</p>
      </div>

      <div className="forgot">
        <Link to="/forgot">Forgot Password?</Link>
      </div>

      <div className="bottom">
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
