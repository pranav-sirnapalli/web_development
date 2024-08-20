import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Calendar from "./Pages/Calendar";
import Calculator from "./Pages/Calculator";
import PhoneGallery from "./Pages/PhoneGallery";
import SignupPage from "./Pages/SignupPage";
import Welcome from "./Pages/Welcome";
import Navbars from "./Pages/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); 


  return (
    <Router>
      <div>
        <Navbars isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Welcome userName={userName}isLoggedIn={isLoggedIn} />} />
          <Route
            path="/login"
            element={<LoginPage setUserName={setUserName}setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<SignupPage setIsLoggedIn={setIsLoggedIn} />}
          />
          {isLoggedIn && (
            <>
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/phone-gallery" element={<PhoneGallery />} />

              <Route path="/go-home" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
