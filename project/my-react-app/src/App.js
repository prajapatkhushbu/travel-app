import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import SplashScreen from "./pages/SplashScreen";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OtpVerification from "./pages/OtpVerification";
import Home from "./pages/Home";
import VehicleRegistration from "./pages/VehicleRegistration";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import Wallet from "./pages/Wallet";
import Tips from "./pages/Tips";
import RideHistory from "./pages/RideHistory";
import Rating from "./pages/Rating";
import Try from "./pages/Try";
import Success from "./pages/Success";
import GetStart from "./pages/GetStart";
import Form from "./pages/Form";
import ReferEarn from "./pages/ReferEarn";
import GVWPlans from "./pages/GVWPlans";
import CommissionBreakdown from "./pages/CommissionBreakdown";
import RegisteredVehicles from "./pages/RegisteredVehicles";
import CustomerRideSelection from "./pages/CustomerRideSelection";
import SelfDrive from "./pages/SelfDrive";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main app flow */}
          <Route path="/" element={<SplashScreen />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OtpVerification />} />
          <Route path="/try" element={<Try />} />
          <Route path="/success" element={<Success />} />
          <Route path="/get-start" element={<GetStart />} />
          <Route path="/form" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/vehicle-registration" element={<VehicleRegistration />} />
          <Route path="/customer-ride-selection" element={<CustomerRideSelection />} />
          <Route path="/self-drive" element={<SelfDrive />} />

          {/* Profile and user pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/refer-earn" element={<ReferEarn />} />
          <Route path="/gvw-plans" element={<GVWPlans />} />
          <Route path="/commission-breakdown" element={<CommissionBreakdown />} />
          <Route path="/registered-vehicles" element={<RegisteredVehicles />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/ride-history" element={<RideHistory />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
