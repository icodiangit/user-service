import React, { useState } from "react";
import "../styles/RecruiterRegister.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecruiterRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyId: "",
    companyName: "",
    website: "",
    location: "",
    industry: "Technology",
    designation: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for phone
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Email Validation
    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    // Phone Validation
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Password Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number & special character";
    }

    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const dataToSend = {
      ...formData,
      status: "ACTIVE",
    };

    try {
      const response = await fetch("http://localhost:8081/api/hrs/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();

      console.log("Saved:", result);
      alert("Registration Successful ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        companyId: "",
        companyName: "",
        website: "",
        location: "",
        industry: "Technology",
        designation: "",
        description: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      alert("Error: Failed to fetch ❌");
    }
  };

  return (
    <div className="recruiter-page">
      <div className="recruiter-container">
        {/* Header */}
        <div className="recruiter-title">
          <h1>Recruiter Registration</h1>

          <p className="recruiter-subtitle">
            Create your corporate account to start hiring
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="recruiter-form-grid">
            {/* Personal Information */}
            <div>
              <div className="recruiter-section-title">
                Personal Information
              </div>

              <label>
                Full Name <span className="mandatory">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>
                Email Address <span className="mandatory">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <small className="error">{errors.email}</small>}

              <label>
                Contact Number <span className="mandatory">*</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Contact Number"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                required
              />
              {errors.phone && <small className="error">{errors.phone}</small>}

              <div className="recruiter-two-col">
                <div>
                  <label>
                    Password <span className="mandatory">*</span>
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
                    <small className="error">{errors.password}</small>
                  )}
                </div>

                <div>
                  <label>
                    Confirm Password <span className="mandatory">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <small className="error">{errors.confirmPassword}</small>
                  )}
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <div className="recruiter-section-title">Company Information</div>

              <label>
                Company ID <span className="mandatory">*</span>
              </label>
              <input
                type="text"
                name="companyId"
                placeholder="Enter Company ID"
                value={formData.companyId}
                onChange={handleChange}
                required
              />

              <label>
                Company Name <span className="mandatory">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              <div className="recruiter-two-col">
                <div>
                  <label>
                    Website <span className="mandatory">*</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    placeholder="Enter Website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>
                    Location <span className="mandatory">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="recruiter-two-col">
                <div>
                  <label>
                    Industry Type <span className="mandatory">*</span>
                  </label>

                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                  </select>
                </div>

                <div>
                  <label>
                    Designation <span className="mandatory">*</span>
                  </label>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Enter Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <label>
                Company Description <span className="mandatory">*</span>
              </label>
              <textarea
                name="description"
                placeholder="Enter Company Description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <button onClick={() => navigate("/WelcomeDashboard")}>
            Register
          </button>

          <div className="recruiter-text">
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruiterRegister;
