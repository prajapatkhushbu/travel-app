import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisteredVehicles = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sort by");
  const [vehicles] = useState([
    {
      id: "innova",
      name: "Toyota Innova",
      type: "SUV",
      vehicleNumber: "RJ27 AB 1234",
      seatingCapacity: "6+1",
      acType: "Both",
      registrationDate: "2 Jan, 2024",
      fuelType: "Diesel",
      transmission: "Manual",
    },
    {
      id: "force-traveller",
      name: "Force Traveller",
      type: "MINI BUS",
      vehicleNumber: "RJ27 CD 5678",
      seatingCapacity: "15+1",
      acType: "Both",
      registrationDate: "15 March, 2023",
      fuelType: "Diesel",
      transmission: "Manual",
    },
  ]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleAddVehicle = () => {
    alert("Add More Vehicle functionality would open here!");
    console.log("Add More Vehicle button clicked.");
  };

  const handleEditVehicle = (vehicleId, vehicleName) => {
    alert(`Edit vehicle functionality would open for: ${vehicleName}!`);
    console.log(`Edit icon clicked for vehicle: ${vehicleId}`);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    alert(`Vehicles sorted by: ${sortOption}!`);
    console.log(`Sorting vehicles by: ${sortOption}`);
  };

  return (
    <div className="registered-vehicles-page">
      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      

      <div className="main-container">
        <div className="header-top">
         
          <h2>Registered Vehicles</h2>
          
        </div>

        <div className="summary-row">
          <span className="summary-text">
            Registered Vehicles : {vehicles.length}
          </span>
          <div className="dropdown">
            <button
              className="btn sort-dropdown dropdown-toggle"
              type="button"
              id="sortDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {sortBy}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="sortDropdown"
            >
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("Date Added (Newest)")}
                >
                  Date Added (Newest)
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("Date Added (Oldest)")}
                >
                  Date Added (Oldest)
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("Vehicle Type (A-Z)")}
                >
                  Vehicle Type (A-Z)
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSort("Vehicle Number (A-Z)")}
                >
                  Vehicle Number (A-Z)
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="add-vehicle-wrapper">
          <button className="btn add-vehicle-btn" onClick={handleAddVehicle}>
            <i className="fas fa-plus"></i> Add More Vehicle
          </button>
        </div>

        {/* Vehicle Cards */}
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <i
              className="fas fa-pencil-alt edit-icon"
              onClick={() => handleEditVehicle(vehicle.id, vehicle.name)}
            ></i>
            <h3>{vehicle.name}</h3>
            <p className="vehicle-type">{vehicle.type}</p>
            <div className="vehicle-details">
              <div className="detail-label">Vehicle Number</div>
              <div className="detail-value">{vehicle.vehicleNumber}</div>

              <div className="detail-label">Seating Capacity</div>
              <div className="detail-value">{vehicle.seatingCapacity}</div>

              <div className="detail-label">AC/Non-AC</div>
              <div className="detail-value">{vehicle.acType}</div>

              <div className="detail-label">Registration Date</div>
              <div className="detail-value">{vehicle.registrationDate}</div>

              <div className="detail-label">Fuel Type</div>
              <div className="detail-value">{vehicle.fuelType}</div>

              <div className="detail-label">Transmission</div>
              <div className="detail-value">{vehicle.transmission}</div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .registered-vehicles-page {
          font-family: "Inter", sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 1rem 0 2rem;
        }

        .main-container {
          width: 100%;
          max-width: 500px;
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
        }

        .back-arrow,
        .menu-btn {
          background: none;
          border: none;
          color: #343a40;
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .back-arrow:hover,
        .menu-btn:hover {
          color: #0d6efd;
        }

        .header-top h2 {
          font-weight: 700;
          color: #343a40;
          font-size: 1.8rem;
          margin: 0;
          flex-grow: 1;
          text-align: center;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background-color: #ffffff;
        }

        .summary-text {
          font-weight: 600;
          color: #343a40;
          font-size: 1.1rem;
        }

        .dropdown {
          position: relative;
        }

        .sort-dropdown {
          background-color: transparent;
          border: none;
          font-weight: 500;
          color: #6c757d;
          padding-right: 0;
          cursor: pointer;
        }

        .sort-dropdown:focus {
          box-shadow: none;
          outline: none;
        }

        .dropdown-menu {
          border: 1px solid #dee2e6;
          border-radius: 0.375rem;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }

        .dropdown-item {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          color: #495057;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #16181b;
        }

        .add-vehicle-wrapper {
          display: flex;
          justify-content: flex-end;
          padding: 0 1.5rem;
          margin-bottom: 1.5rem;
        }

        .add-vehicle-btn {
          background-color: #ffffff;
          color: #0d6efd;
          border: 1px solid #ced4da;
          border-radius: 0.75rem;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          cursor: pointer;
        }

        .add-vehicle-btn:hover {
          background-color: #f8f9fa;
          border-color: #a0a0a0;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
        }

        .vehicle-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 0.25rem 1rem rgba(153, 153, 153, 1);
          padding: 1.5rem;
          margin: 0 1.5rem 1.5rem;
          position: relative;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .vehicle-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.12);
        }

        .vehicle-card .edit-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: #6c757d;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .vehicle-card .edit-icon:hover {
          color: #0d6efd;
        }

        .vehicle-card h3 {
          font-weight: 700;
          color: #343a40;
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .vehicle-card .vehicle-type {
          font-size: 0.95rem;
          color: rgba(98, 98, 98, 1);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .vehicle-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 0.5rem;
        }

        .vehicle-details .detail-label {
          font-weight: 500;
          color: black;
          font-size: 0.95rem;
        }

        .vehicle-details .detail-value {
          font-weight: 600;
          color: rgba(98, 98, 98, 1);
          font-size: 0.95rem;
          text-align: right;
        }

        .vehicle-details .detail-label,
        .vehicle-details .detail-value {
          padding-bottom: 0.5rem;
        }

        .vehicle-details div:nth-child(2n) {
          padding-left: 1rem;
        }

        .vehicle-details div:last-child,
        .vehicle-details div:nth-last-child(2) {
          border-bottom: none;
        }

        /* Sidebar Styling */
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1050;
        }

        .sidebar-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 300px;
          height: 100%;
          background-color: #1a1a1a;
          color: #fff;
          z-index: 1060;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          padding-top: 20px;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
        }

        .sidebar-menu.active {
          transform: translateX(0);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 20px;
        }

        .sidebar-header .back-arrow {
          font-size: 1.25rem;
          color: #fff;
          cursor: pointer;
          margin-right: 15px;
          background: none;
          border: none;
        }

        .sidebar-header .user-account-text {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }

        .sidebar-menu-item {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .sidebar-menu-item:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }

        .sidebar-menu-item.active {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .sidebar-menu-item .icon {
          font-size: 1rem;
          margin-right: 15px;
          width: 20px;
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
        }

        .sidebar-menu-item.no-icon .icon {
          display: none;
        }

        .sidebar-menu-item .text {
          flex-grow: 1;
          font-size: 0.95rem;
          font-weight: 400;
        }

        .sidebar-menu-item .sub-text {
          font-size: 0.75rem;
          color: #aaa;
          display: block;
          margin-top: 2px;
        }

        .sidebar-menu-item .arrow {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          margin-left: auto;
        }

        .sidebar-menu-item .toggle-switch-wrapper {
          margin-left: auto;
        }

        .sidebar-menu-item .toggle-switch-wrapper .form-check-input {
          width: 40px;
          height: 22px;
          border-radius: 20px;
          background-color: #ff4757;
          border: none;
          transition: background-color 0.2s ease-in-out;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
          background-position: left center;
        }

        .count-badge {
          background-color: #ff4757;
          color: white;
          font-size: 0.75rem;
          padding: 2px 7px;
          border-radius: 12px;
          margin-left: 10px;
          min-width: 18px;
          text-align: center;
        }

        .sidebar-section-title {
          color: #aaa;
          font-size: 0.8rem;
          text-transform: uppercase;
          padding: 10px 20px 5px 20px;
          margin-top: 15px;
          margin-bottom: 5px;
        }

        .sidebar-menu-item.contact-us {
          color: #5dade2;
          border-top: none;
        }

        .sidebar-menu-item.logout {
          color: #ff4757;
          border-top: none;
        }

        @media (max-width: 576px) {
          .registered-vehicles-page {
            padding: 0.5rem 0 1rem;
          }

          .main-container {
            max-width: 100%;
            border-radius: 0;
          }

          .header-top {
            padding: 1rem;
          }

          .header-top h2 {
            font-size: 1.5rem;
          }

          .summary-row {
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .vehicle-card {
            padding: 1rem;
            margin: 0 1rem 1rem;
          }

          .vehicle-details {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .vehicle-details .detail-value {
            text-align: left;
            padding-left: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisteredVehicles;
