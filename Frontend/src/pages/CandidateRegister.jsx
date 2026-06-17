import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CandidateRegister() {
  const navigate = useNavigate();
  // State for form data
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8082/api/users", {
        email: form.email,
        phone: form.phone,
        password: form.password,
      });

      console.log(response.data);

      const userId = response.data.userId;

      // Redirect to complete profile page
      navigate(`/complete-profile/${userId}`);
    } catch (error) {
      console.error("FULL ERROR:", error);
      console.error("RESPONSE:", error.response);

      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        {/* Header */}
        <div className="register-header">
          <h2>
            <b>Candidate Registration</b>
          </h2>
          <p>
            <b>Start your career journey today</b>
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-group">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit number"
                value={form.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  setForm({
                    ...form,
                    phone: value,
                  });
                }}
                maxLength="10"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
                title="Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="create-btn">
              Create Account
            </button>

            <p style={{ marginTop: "20px", fontSize: "14px" }}>
              Already have an account?
              <a href="/login"> Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CandidateRegister;
