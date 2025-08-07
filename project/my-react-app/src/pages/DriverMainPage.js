import React, { useState } from 'react';

const carData = [
  {
    title: 'ECONOMY CLASS',
    price: '₹13/Km',
    description: 'Perfect choice for short trips and smart savings',
    capacity: 'Passenger Capacity - 5',
    img: process.env.PUBLIC_URL + '/Images/thar-black.avif',
    alt: 'Economy Car',
  },
  {
    title: 'STANDARD CLASS',
    price: '₹18/Km',
    description: 'The comfort you deserve at the price you love',
    capacity: 'Passenger Capacity - 5',
    img: 'https://placehold.co/300x180/e0e0e0/343a40?text=Standard+Car',
    alt: 'Standard Car',
  },
  {
    title: 'BUSINESS CLASS',
    price: '₹25/Km',
    description: 'Perfect choice for business trips and luxury',
    capacity: 'Passenger Capacity - 4',
    img: 'https://placehold.co/300x180/e0e0e0/343a40?text=Business+Car',
    alt: 'Business Car',
  },
  {
    title: 'SUV',
    price: '₹28/Km',
    description: 'Spacious and comfortable for families and groups',
    capacity: 'Passenger Capacity - 7',
    img: 'https://placehold.co/300x180/e0e0e0/343a40?text=SUV',
    alt: 'SUV',
  },
];

const DriverMainPage = () => {
  const [activeTab, setActiveTab] = useState('driver');
  const [pickupLocation, setPickupLocation] = useState('My current location');
  const [dropoffLocation, setDropoffLocation] = useState('105 William St, Chicago, US');
  const [messageBox, setMessageBox] = useState({ show: false, title: '', content: '' });

  // Fetch GPS location
  const fetchGPSLocation = () => {
    if (navigator.geolocation) {
      setMessageBox({ show: true, title: 'Getting Location...', content: 'Please wait while we fetch your current location.' });
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const mockAddress = `Current Location (Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)})`;
          setPickupLocation(mockAddress);
          setMessageBox({ show: true, title: 'Location Found!', content: 'Your current location has been updated.' });
        },
        (error) => {
          let title = 'Error';
          let content = 'An unknown error occurred while fetching your location.';
          switch (error.code) {
            case error.PERMISSION_DENIED:
              title = 'Location Denied';
              content = 'Please enable location services and grant permission to fetch your current location.';
              break;
            case error.POSITION_UNAVAILABLE:
              title = 'Location Unavailable';
              content = 'Your location information is unavailable. Please try again.';
              break;
            case error.TIMEOUT:
              title = 'Location Timeout';
              content = 'The request to get user location timed out. Please try again.';
              break;
            default:
              break;
          }
          setMessageBox({ show: true, title, content });
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setMessageBox({ show: true, title: 'GPS Not Supported', content: 'Geolocation is not supported by your browser. Please enter your location manually.' });
    }
  };

  React.useEffect(() => {
    // Fetch GPS location on mount for driver tab
    if (activeTab === 'driver') fetchGPSLocation();
    // eslint-disable-next-line
  }, [activeTab]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handlePickupClick = () => {
    fetchGPSLocation();
  };

  const handleMapClick = () => {
    setMessageBox({ show: true, title: 'Map Selection', content: 'Map functionality to select drop-off location would open here. (Simulated)' });
  };

  const handleClearDropoff = () => {
    setDropoffLocation('Enter Drop-off Location');
    setMessageBox({ show: true, title: 'Location Cleared', content: 'Drop-off location has been cleared.' });
  };

  const closeMessageBox = () => {
    setMessageBox({ ...messageBox, show: false });
  };

  // Styles (inline for simplicity, can be moved to CSS module)
  const styles = {
    mainContainer: {
      width: '100%',
      maxWidth: 500,
      background: '#fff',
      borderRadius: '1rem',
      boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.1)',
      overflow: 'hidden',
      margin: '2rem auto',
    },
    tabSelector: {
      display: 'flex',
      background: '#e9ecef',
      borderRadius: '2rem',
      padding: '0.25rem',
      margin: '1.5rem auto',
      width: 'fit-content',
      position: 'relative',
      zIndex: 1,
    },
    tabOption: (active) => ({
      flex: 1,
      padding: '0.75rem 1.5rem',
      borderRadius: '2rem',
      cursor: 'pointer',
      fontWeight: 600,
      color: active ? '#fff' : '#495057',
      background: active ? '#0d6efd' : 'transparent',
      boxShadow: active ? '0 0.25rem 0.5rem rgba(0,0,0,0.1)' : 'none',
      textAlign: 'center',
      minWidth: 150,
      transition: 'all 0.3s',
    }),
    locationBlock: (type) => ({
      background: '#f8f9fa',
      borderRadius: '0.75rem',
      padding: '1rem',
      marginBottom: '1.5rem',
      textAlign: 'left',
      position: 'relative',
      boxShadow: 'inset 0 0 5px rgba(0,0,0,0.05)',
    }),
    locationIcon: (type) => ({
      position: 'absolute',
      top: '50%',
      left: '1rem',
      transform: 'translateY(-50%)',
      color: type === 'pickup' ? '#28a745' : '#dc3545',
      fontSize: '1.25rem',
    }),
    locationInputWrapper: {
      paddingLeft: '2.5rem',
      position: 'relative',
    },
    mapIconBtn: {
      position: 'absolute',
      right: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      padding: '0.5rem',
      cursor: 'pointer',
      color: '#0d6efd',
      fontSize: '1.25rem',
    },
    clearLocationBtn: {
      position: 'absolute',
      right: '2.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      padding: '0.5rem',
      cursor: 'pointer',
      color: '#6c757d',
      fontSize: '1rem',
    },
    carCard: {
      background: '#fff',
      borderRadius: '1rem',
      boxShadow: '0 0.25rem 0.5rem rgba(0,0,0,0.08)',
      padding: '1rem',
      marginBottom: '1.5rem',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    carImg: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '0.5rem',
      marginBottom: '1rem',
      objectFit: 'cover',
    },
    messageBoxOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: messageBox.show ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      opacity: messageBox.show ? 1 : 0,
      visibility: messageBox.show ? 'visible' : 'hidden',
      transition: 'opacity 0.3s, visibility 0.3s',
    },
    messageBox: {
      background: '#fff',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0 0.5rem 1.5rem rgba(0,0,0,0.2)',
      textAlign: 'center',
      maxWidth: 300,
      transform: messageBox.show ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'transform 0.3s',
    },
  };

  // FontAwesome icons via CDN in public/index.html, or use react-icons if available
  return (
    <div style={styles.mainContainer}>
      <div style={styles.tabSelector}>
        <div
          style={styles.tabOption(activeTab === 'driver')}
          className={activeTab === 'driver' ? 'tab-option active' : 'tab-option'}
          onClick={() => handleTabSwitch('driver')}
        >
          Driver
        </div>
        <div
          style={styles.tabOption(activeTab === 'selfDrive')}
          className={activeTab === 'selfDrive' ? 'tab-option active' : 'tab-option'}
          onClick={() => handleTabSwitch('selfDrive')}
        >
          Self Drive
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-3">
        <h4 className="text-center mb-4" style={{ color: '#343a40' }}>Choose Your Ride Style</h4>
        {/* Pickup Location */}
        <div style={styles.locationBlock('pickup')} className="location-block pickup">
          <span style={styles.locationIcon('pickup')} className="location-icon">
            <i className="fas fa-dot-circle"></i>
          </span>
          <div style={styles.locationInputWrapper} onClick={handlePickupClick} className="location-input-wrapper" id="pickupLocationInput">
            <label className="location-label">PICKUP</label>
            <span className="location-text" id="pickupLocationText">{pickupLocation}</span>
          </div>
        </div>
        {/* Drop-off Location */}
        <div style={styles.locationBlock('dropoff')} className="location-block dropoff">
          <span style={styles.locationIcon('dropoff')} className="location-icon">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <div style={styles.locationInputWrapper} className="location-input-wrapper">
            <label className="location-label">DROP-OFF</label>
            <span className="location-text" id="dropoffLocationText">{dropoffLocation}</span>
            <button style={styles.clearLocationBtn} className="clear-location-btn" onClick={handleClearDropoff}>
              <i className="fas fa-times"></i>
            </button>
            <button style={styles.mapIconBtn} className="map-icon-btn" onClick={handleMapClick}>
              <i className="fas fa-map"></i>
            </button>
          </div>
        </div>
        {/* Car Cards */}
        <div className="row">
          {carData.map((car, idx) => (
            <div className="col-md-6 mb-3" key={car.title + idx}>
              <div style={styles.carCard} className="car-card">
                <img src={car.img} alt={car.alt} style={styles.carImg} />
                <h5>{car.title}</h5>
                <p className="price">{car.price}</p>
                <p className="description">{car.description}</p>
                <p className="capacity">{car.capacity}</p>
                <button className="btn btn-details">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Message Box Overlay */}
      <div style={styles.messageBoxOverlay}>
        <div style={styles.messageBox}>
          <h4>{messageBox.title}</h4>
          <p>{messageBox.content}</p>
          <button onClick={closeMessageBox}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default DriverMainPage; 