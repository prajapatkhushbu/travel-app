import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VehicleRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleNumber: "",
    vehicleModel: "",
    transmissionType: "",
    fuelType: "",
    acceptTerms: false,
  });

  const [files, setFiles] = useState({
    vehicleRC: null,
    vehicleInsurance: null,
    vehicleFitnessCertificate: null,
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

    if (
      !formData.vehicleType ||
      !formData.vehicleNumber ||
      !formData.vehicleModel ||
      !formData.transmissionType ||
      !formData.fuelType
    ) {
      alert("Please fill in all text fields.");
      return;
    }

    if (
      !files.vehicleRC ||
      !files.vehicleInsurance ||
      !files.vehicleFitnessCertificate ||
      !files.vehiclePhotos
    ) {
      alert("Please upload all required documents and photos.");
      return;
    }

    if (!formData.acceptTerms) {
      alert("You must accept the Terms & Conditions.");
      return;
    }

    alert("Vehicle registration submitted successfully! (Simulated)");
    navigate("/home");
  };

  return (
    <div className="vehicle-registration-container">
      <div className="container-fluid">
        <div className="header-section">
          <h2>Register Your Vehicle</h2>
        </div>

        <div className="form-area">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="vehicleType" className="form-label">
                Vehicle Type:
              </label>
              <input
                type="text"
                className="form-control"
                id="vehicleType"
                name="vehicleType"
                placeholder="Enter Vehicle Type"
                value={formData.vehicleType}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="vehicleNumber" className="form-label">
                Vehicle Number:
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
              <label htmlFor="vehicleModel" className="form-label">
                Vehicle Model:
              </label>
              <input
                type="text"
                className="form-control"
                id="vehicleModel"
                name="vehicleModel"
                placeholder="Enter Vehicle Model"
                value={formData.vehicleModel}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="transmissionType" className="form-label">
                Vehicle Transmission Type:
              </label>
              <input
                type="text"
                className="form-control"
                id="transmissionType"
                name="transmissionType"
                placeholder="Enter (Manual/Automatic)"
                value={formData.transmissionType}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fuelType" className="form-label">
                Vehicle Fuel Type:
              </label>
              <input
                type="text"
                className="form-control"
                id="fuelType"
                name="fuelType"
                placeholder="Enter (Petrol/Diesel/CNG/Electric)"
                value={formData.fuelType}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="vehicleRC" className="form-label">
                Vehicle Registration Certificate (RC):
              </label>
              <div className="upload-box">
                <input
                  type="file"
                  id="vehicleRC"
                  name="vehicleRC"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  required
                />
                <span className="upload-text">Upload here</span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="vehicleInsurance" className="form-label">
                Vehicle Insurance Copy:
              </label>
              <div className="upload-box">
                <input
                  type="file"
                  id="vehicleInsurance"
                  name="vehicleInsurance"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  required
                />
                <span className="upload-text">Upload here</span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="vehicleFitnessCertificate" className="form-label">
                Vehicle Fitness Certificate:
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
                <span className="upload-text">Upload here</span>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="vehiclePhotos" className="form-label">
                Vehicle Photos:
              </label>
              <div className="upload-box">
                <input
                  type="file"
                  id="vehiclePhotos"
                  name="vehiclePhotos"
                  accept="image/*"
                  onChange={handleFileChange}
                  multiple
                  required
                />
                <span className="upload-text">Upload here</span>
              </div>
            </div>

            <div className="form-check mb-4 text-start">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
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
        .vehicle-registration-container {
          font-family: "Inter", sans-serif;
          background-color: #f0f2f5;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          margin: 0;
          overflow-x: hidden;
        }

        .container-fluid {
          padding: 0;
          max-width: 400px;
          background-color: #fff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
          overflow-y: auto;
          max-height: 100vh;
        }

        .header-section {
          padding: 1.5rem 1.5rem 1rem;
          text-align: left;
          background-color: #fff;
          position: sticky;
          top: 0;
          z-index: 10;
          border-bottom: 1px solid #eee;
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
          font-weight: 500;
          color: #333;
          margin-bottom: 0.5rem;
          display: block;
        }

        .form-control {
          height: 50px;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          font-size: 1rem;
          border-radius: 8px;
        }

        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
        }

        .upload-box {
          border: 2px dashed #ddd;
          border-radius: 10px;
          padding: 2.5rem 1rem;
          text-align: center;
          color: #888;
          cursor: pointer;
          transition: border-color 0.3s ease;
          position: relative;
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
          border-radius: 0.25rem;
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
          vertical-align: middle;
        }

        .form-check-label {
          color: #333;
          font-size: 0.95rem;
          vertical-align: middle;
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
          transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            transform 0.2s ease;
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

export default VehicleRegistration;
