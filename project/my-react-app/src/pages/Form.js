import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleNumber: "",
    vehicleModel: "",
    transmissionType: "",
    fuelType: "",
    agreeCheck: false,
  });

  const [files, setFiles] = useState({
    vehicleRC: null,
    vehicleInsurance: null,
    vehicleFitness: null,
    vehiclePhotos: null,
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
      [name]: selectedFiles,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.vehicleType ||
      !formData.vehicleNumber ||
      !formData.vehicleModel ||
      !formData.transmissionType ||
      !formData.fuelType
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (
      !files.vehicleRC ||
      !files.vehicleInsurance ||
      !files.vehicleFitness ||
      !files.vehiclePhotos
    ) {
      alert("Please upload all required documents.");
      return;
    }

    if (!formData.agreeCheck) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    // Navigate to home (driver dashboard)
    navigate("/home");
  };

  return (
    <div className="form-container">
      <div className="container-fluid">
        <h2>Register Your Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label required">Vehicle Type</label>
            <input
              type="text"
              className="form-control"
              name="vehicleType"
              placeholder="Enter Vehicle Type"
              value={formData.vehicleType}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label required">Vehicle Number</label>
            <input
              type="text"
              className="form-control"
              name="vehicleNumber"
              placeholder="Enter Vehicle Number"
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label required">Vehicle Model</label>
            <input
              type="text"
              className="form-control"
              name="vehicleModel"
              placeholder="Enter Vehicle Model"
              value={formData.vehicleModel}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label required">
              Vehicle Transmission Type
            </label>
            <input
              type="text"
              className="form-control"
              name="transmissionType"
              placeholder="Enter (Manual / Automatic)"
              value={formData.transmissionType}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label required">Vehicle Fuel Type</label>
            <input
              type="text"
              className="form-control"
              name="fuelType"
              placeholder="Enter (Petrol/Diesel/CNG/Electric)"
              value={formData.fuelType}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label required">
              Vehicle Registration Certificate
            </label>
            <div className="upload-box">
              <input
                type="file"
                name="vehicleRC"
                onChange={handleFileChange}
                required
              />
              <span className="upload-text">Upload here</span>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label required">Vehicle Insurance</label>
            <div className="upload-box">
              <input
                type="file"
                name="vehicleInsurance"
                onChange={handleFileChange}
                required
              />
              <span className="upload-text">Upload here</span>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label required">
              Vehicle Fitness Certificate
            </label>
            <div className="upload-box">
              <input
                type="file"
                name="vehicleFitness"
                onChange={handleFileChange}
                required
              />
              <span className="upload-text">Upload here</span>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label required">Vehicle Photos</label>
            <p className="note">(Front, Back and side photos required)</p>
            <div className="upload-box">
              <input
                type="file"
                name="vehiclePhotos"
                multiple
                onChange={handleFileChange}
                required
              />
              <span className="upload-text">Upload here</span>
            </div>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="agreeCheck"
              name="agreeCheck"
              checked={formData.agreeCheck}
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="agreeCheck">
              Accept All Terms & Condition
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>

      <style jsx>{`
        .form-container {
          font-family: "Inter", sans-serif;
          background-color: #f0f2f5;
          display: flex;
          justify-content: center;
          padding: 20px 10px;
          min-height: 100vh;
        }

        .container-fluid {
          width: 400px;
          background-color: #fff;
          padding: 2rem 1.5rem;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .form-label {
          font-size: 0.7rem;
          margin-bottom: 0.5rem;
          color: #000;
        }

        .form-label.required::after {
          content: "*";
          color: red;
          margin-left: 4px;
        }

        .form-control {
          border-radius: 10px;
          padding: 0.75rem 1rem;
          height: 50px;
          font-size: 0.8rem;
          border: 2px solid #ddd;
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
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }

        .upload-text {
          font-weight: 500;
        }

        .form-check-input {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }

        .form-check-label {
          color: #333;
          font-size: 0.8rem;
        }

        .btn-primary {
          background-color: #007bff;
          border: none;
          width: 100%;
          padding: 0.9rem;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 10px;
          margin-top: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }

        .note {
          font-size: 0.75rem;
          color: #888;
          margin-top: -1rem;
          margin-bottom: 1rem;
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default Form;
