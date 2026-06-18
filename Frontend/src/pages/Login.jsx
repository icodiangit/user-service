import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {

    let newErrors = {};

    // Email Validation
    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    // Password Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {

      newErrors.password =
        "Password must contain uppercase, lowercase, number & special character";
    }

    // Role Validation
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // Validate Form
    if (!validate()) {
      return;
    }

    // Dummy Login Success

    alert("Login Successful ✅");

    // Redirect to Dashboard

    navigate("/welcome-dashboard");
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <div className="title">
          <h2>Welcome Back</h2>
          <p>Sign in to continue to your account</p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Email */}

          <label>
            Email / User Name
            <span className="mandatory">*</span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {errors.email && (
            <small className="error">
              {errors.email}
            </small>
          )}

          {/* Password */}

          <label>
            Password
            <span className="mandatory">*</span>
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {errors.password && (
            <small className="error">
              {errors.password}
            </small>
          )}

          {/* Remember Me + Forgot Password */}

          <div className="options">

            <label className="remember">

              <input type="checkbox" />

              <span>Remember me</span>

            </label>

            <Link to="/forgot-password">
              Forgot password?
            </Link>

          </div>

          {/* Role Dropdown */}

          <label>
            Select Role
            <span className="mandatory">*</span>
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >

            <option value="">
              -- Select Role --
            </option>

            <option value="USER">
              User
            </option>

            <option value="RECRUITER">
              Recruiter
            </option>

            <option value="ADMIN">
              Admin
            </option>

          </select>

          {errors.role && (
            <small className="error">
              {errors.role}
            </small>
          )}

          {/* Button */}

          <button type="submit">
            Sign In
          </button>

          {/* Register */}

          <div className="register">

            New user? <Link to="/">Register Now</Link>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Login;     