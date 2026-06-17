import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import CandidateRegister from "./pages/CandidateRegister";
import CompleteProfile from "./pages/CompleteProfile";
import RecruiterRegister from "./pages/RecruiterRegister";
import CompanyRegistrationPage from "./pages/CompanyRegistrationPage";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";

/* NEW PAGES */
import AboutPage from "./pages/AboutPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingPage />
              <Footer />
            </>
          }
        />
        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutPage />
              <Footer />
            </>
          }
        />
        {/* FEATURES
        <Route
          path="/features"
          element={
            <>
              <Header />
              <FeaturePage />
              <Footer />
            </>
          }
        /> */}
        {/* CONTACT */}
        {/* <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          }
        /> */}
        {/* CANDIDATE REGISTER */}
        <Route
          path="/candidate-register"
          element={
            <>
              <Header />
              <CandidateRegister />
              <Footer />
            </>
          }
        />
        {/* COMPLETE PROFILE */}
        <Route
          path="/complete-profile/:userId"
          element={
            <>
              <Header />
              <CompleteProfile />
              <Footer />
            </>
          }
        />
        {/* RECRUITER REGISTER */}
        <Route
          path="/recruiter-register"
          element={
            <>
              <Header />
              <RecruiterRegister />
              <Footer />
            </>
          }
        />
        {/* COMPANY REGISTER */}
        <Route
          path="/company-register"
          element={
            <>
              <Header />
              <CompanyRegistrationPage />
              <Footer />
            </>
          }
        />
        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }
        />
        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />

          <Route path="jobs" element={<Jobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
