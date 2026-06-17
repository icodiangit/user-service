import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>
            Your Career. <span>Your Way.</span>
          </h1>

          <p>
            CareerVia is a next-generation career ecosystem designed to empower
            learners, candidates, recruiters and organizations through
            innovation and technology.
          </p>
        </div>
      </section>

      {/* About Platform */}
      <section className="about-section">
        <div className="about-card">
          <h2>🚀 What is CareerVia?</h2>

          <p>
            CareerVia is more than just a recruitment platform. It is a smart
            digital ecosystem where candidates can learn, compete, grow, and
            connect with opportunities that match their skills and ambitions.
          </p>
        </div>

        <div className="about-card">
          <h2>💡 Why We Built It</h2>

          <p>
            We believe career growth should be skill-driven, accessible, and
            engaging. CareerVia was built to bridge the gap between talent and
            opportunity using AI-powered tools, gamification and meaningful
            recruiter connections.
          </p>
        </div>

        <div className="about-card">
          <h2>🌟 Our Vision</h2>

          <p>
            To redefine career development through intelligent learning,
            futuristic experiences and innovative hiring solutions that help
            every individual unlock their true potential.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <h2>Career Journey</h2>

        <div className="journey-container">
          <div className="journey-step">
            <span>1</span>
            <h3>Learn</h3>
            <p>Upgrade skills through courses and interactive learning.</p>
          </div>

          <div className="journey-step">
            <span>2</span>
            <h3>Compete</h3>
            <p>Participate in skill games and track your growth journey.</p>
          </div>

          <div className="journey-step">
            <span>3</span>
            <h3>Connect</h3>
            <p>Interact with recruiters and showcase your abilities.</p>
          </div>

          <div className="journey-step">
            <span>4</span>
            <h3>Succeed</h3>
            <p>Unlock opportunities and build your future career.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Active Learners</p>
        </div>

        <div className="stat-card">
          <h2>120+</h2>
          <p>Recruiters</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>AI Assistance</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Designed For Dreamers. Built For Achievers.</h2>

        <p>
          Join CareerVia and experience a smarter, faster and future-ready
          career journey.
        </p>

        <button>Explore Opportunities</button>
      </section>
    </div>
  );
}

export default AboutPage;
