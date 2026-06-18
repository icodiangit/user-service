const Footer = () => {
  return (
    <footer
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        background: "linear-gradient(135deg, #020024, #090979, #000428)",
        color: "white",
        padding: "35px 20px",
        paddingBottom: "20px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div
          className="row text-left justify-content-left"
          style={{
            padding: "10px 170px",
            gap: "30px",
            alignItems: "flex-start",
          }}
        >
          <div className="col-md-3">
            <h5>CareerVia</h5>
            <p style={{ margin: "0", lineHeight: "1.4" }}>
              Find your dream job easily with us.
            </p>
          </div>

          <div className="col-md-2" style={{ marginLeft: "50px" }}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled" style={{ padding: 0 }}>
              <li>Home</li>
              <li>About</li>
              <li>Jobs</li>
              <li>Companies</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>Services</h6>
            <ul
              className="list-unstyled"
              style={{
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              <li>Job Search</li>
              <li>Resume Builder</li>
              <li>Career Guidance</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6>Contact</h6>
            <p style={{ marginBottom: "6px" }}>Email: support@careervia.com</p>

            <p
              style={{
                marginBottom: 0,
                whiteSpace: "nowrap",
              }}
            >
              Phone: +91 9876543216
            </p>
          </div>
        </div>

        <hr
          style={{
            borderColor: "#4b5563",
            marginBottom: "12px",
          }}
        />

        <p
          style={{
            textAlign: "center",
            marginTop: "0",
            marginBottom: "0",
          }}
        >
          © 2026 CareerVia iCodian. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
