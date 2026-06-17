import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(2, 0, 36, 0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "3px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        {/* Logo + Tagline */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* Large Logo */}
          <img
            src="/logo.png"
            alt="CareerVia Logo"
            style={{
              height: "80px",
              width: "80px",
              objectFit: "contain",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                background: "linear-gradient(90deg,#00c6ff,#a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "1rem",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              Your Career Your Way!!
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <Link to="/" style={navStyle}>
            Home
          </Link>

          <a href="#features" style={navStyle}>
            Features
          </a>

          <a href="/about" style={navStyle}>
            About
          </a>

          <a href="#contact" style={navStyle}>
            Contact
          </a>

          <Link
            to="/login"
            style={{
              background: "linear-gradient(90deg,#00c6ff,#a855f7)",
              padding: "10px 22px",
              borderRadius: "30px",
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

const navStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
};

export default Header;
