import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetStart = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    driverFullName: "",
    driverDOB: "",
    driverAddress: "",
    vehicleNumber: "",
    acceptTerms: false,
  });

  const [files, setFiles] = useState({
    drivingLicense: null,
    idProof: null,
    vehicleFitnessCertificate: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.driverFullName ||
      !formData.driverDOB ||
      !formData.driverAddress ||
      !formData.vehicleNumber
    ) {
      alert("Please fill in all text fields.");
      return;
    }

    if (
      !files.drivingLicense ||
      !files.idProof ||
      !files.vehicleFitnessCertificate
    ) {
      alert("Please upload all required documents.");
      return;
    }

    if (!formData.acceptTerms) {
      alert("You must accept the Terms & Conditions.");
      return;
    }

    // Navigate to form page
    navigate("/form");
  };

  return (
    <div className="get-start-container">
      <div className="container-fluid">
        <div className="header-section">
          <h2>Get Started as a Driver</h2>
        </div>
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="driverFullName"
                className="form-label required-star"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="driverFullName"
                name="driverFullName"
                placeholder="Enter Full Name"
                value={formData.driverFullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="driverDOB" className="form-label required-star">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="driverDOB"
                name="driverDOB"
                value={formData.driverDOB}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="driverAddress"
                className="form-label required-star"
              >
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="driverAddress"
                name="driverAddress"
                placeholder="Enter Address"
                value={formData.driverAddress}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="vehicleNumber"
                className="form-label required-star"
              >
                Vehicle Number
              </label>
              <input
                type="text"
                className="form-control"
                id="vehicleNumber"
                name="vehicleNumber"
                placeholder="Enter Vehicle Number"
                value={formData.vehicleNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="drivingLicense"
                className="form-label required-star"
              >
                Driving License
              </label>
              <div className="upload-box">
                <input
                  type="file"
                  id="drivingLicense"
                  name="drivingLicense"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  required
                />
                <span className="upload-text">Upload here</span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="idProof" className="form-label required-star">
                ID Proof (Aadhar, PAN, etc)
              </label>
              <div className="upload-box">
                <input
                  type="file"
                  id="idProof"
                  name="idProof"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  required
                />
                <span className="upload-text">Upload here</span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="vehicleFitnessCertificate"
                className="form-label required-star"
              >
                Medical Fitness Certificate
              </label>
              <div className="upload-box">
                <input
                  type="file"
                  id="vehicleFitnessCertificate"
                  name="vehicleFitnessCertificate"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  required
                />
                <span className="upload-text">Upload Here</span>
              </div>
            </div>

            <div className="form-check mb-4 text-start">
              <input
                className="form-check-input"
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="acceptTerms">
                Accept All Terms & Conditions
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .get-start-container {
          font-family: "Inter", sans-serif;
          background-color: #f0f2f5;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          height: 100vh;
          margin: 0;
          overflow-x: hidden;
        }

        .container-fluid {
          padding: 0;
          width: 400px;
          background-color: #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          overflow-y: auto;
        }

        .header-section {
          padding: 1.5rem 1.5rem 1rem;
          text-align: left;
          background-color: #fff;
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid #eee;
          margin-top: 20px;
        }

        .header-section h2 {
          color: #333;
          font-weight: 700;
          margin: 0;
          font-size: 1.8rem;
        }

        .form-area {
          padding: 2rem 1.5rem;
        }

        .form-group label,
        .form-label {
          font-size: 0.8rem;
          color: black;
          margin-bottom: 0.5rem;
          display: block;
          text-align: left;
        }

        .form-label.required-star::after {
          content: "*";
          color: red;
          margin-left: 4px;
        }

        .form-control {
          border-radius: 10px;
          height: 50px;
          padding: 0.75rem 1rem;
          border: 2px solid #ddd;
          font-size: 0.8rem;
          color: #333;
        }

        .form-control::placeholder {
          color: #bbb;
        }

        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
        }

        .upload-box {
          border: 2px solid #ddd;
          border-radius: 10px;
          padding: 2.5rem 1rem;
          text-align: center;
          color: #888;
          cursor: pointer;
          position: relative;
          transition: border-color 0.3s ease;
        }

        .upload-box:hover {
          border-color: #007bff;
        }

        .upload-box input[type="file"] {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        .upload-box .upload-text {
          font-weight: 500;
        }

        .form-check-input {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
          vertical-align: middle;
        }

        .form-check-label {
          color: #333;
          font-size: 0.8rem;
        }

        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
          border-radius: 10px;
          font-weight: 600;
          padding: 0.9rem 1.5rem;
          font-size: 1.1rem;
          width: 100%;
          margin-top: 1.5rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default GetStart;
