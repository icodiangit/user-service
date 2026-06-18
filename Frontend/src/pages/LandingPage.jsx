import { useNavigate } from "react-router-dom";

import "../styles/styles.css";

import candidateImg from "../assets/images/group.png";
import recruiterImg from "../assets/images/recruitment.png";
import adminImg from "../assets/images/admin.png";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Cards */}
      <div className="card-container">
        {/* Candidate */}
        <div className="card candidate">
          <div className="card-icon">
            <img src={candidateImg} alt="Candidate" />
          </div>

          <h2>Candidate</h2>

          <h4>LEARN • COMPETE • SUCCEED</h4>

          <p>
            Gamified learning platform with skills, challenges and courses to
            upgrade yourself.
          </p>

          <ul>
            <li>XP & Level System</li>
            <li>Skill Games</li>
            <li>Courses</li>
          </ul>

          <button onClick={() => navigate("/candidate-register")}>
            Register as Candidate
          </button>
        </div>

        {/* Recruiter */}
        <div className="card recruiter">
          <div className="card-icon">
            <img src={recruiterImg} alt="Recruiter" />
          </div>

          <h2>Recruiter</h2>

          <h4>DISCOVER • EVALUATE • HIRE</h4>

          <p>
            Post jobs, evaluate candidates based on their skills and courses and
            build an exceptional team.
          </p>

          <ul>
            <li>Smart Job Posting</li>
            <li>AI Candidate Matching</li>
            <li>Team Analytics</li>
          </ul>

          <button onClick={() => navigate("/recruiter-register")}>
            Register as Recruiter
          </button>
        </div>

        {/* Admin */}
        <div className="card admin">
          <div className="card-icon">
            <img src={adminImg} alt="Admin" />
          </div>

          <h2>Admin</h2>

          <h4>MONITOR • CONTROL • OPTIMIZE</h4>

          <p>
            Comprehensive system control, company approvals and platform
            analytics.
          </p>

          <ul>
            <li>System Control</li>
            <li>Approval Center</li>
            <li>Analytics Dashboard</li>
          </ul>

          <button onClick={() => navigate("/company-register")}>
            Register as Admin
          </button>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="landing-footer">
        <p>Already have an account?</p>

        <button onClick={() => navigate("/login")} className="signin-btn">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
