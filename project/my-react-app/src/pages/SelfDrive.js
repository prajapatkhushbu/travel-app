import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const selfDriveCars = [
  {
    name: 'MAHINDRA THAR',
    price: '₹4,500 / day',
    img: process.env.PUBLIC_URL + '/images/tharblack.jpg',
    details: '4 SEATER | DIESEL | 4X4 | MANUAL | 4.4 K | SOFT TOP | CONVERTIBLE',
  },
  {
    name: 'TATA PUNCH',
    price: '₹1,800 / day',
    img: process.env.PUBLIC_URL + '/images/punch.jpg',
    details: '5 SEATER | PETROL | 17K | TANK | MANUAL',
  },
  {
    name: 'HONDA AMAZE',
    price: '₹1,900 / day',
    img: process.env.PUBLIC_URL + '/images/amaze.jpg',
    details: '5 SEATER | PETROL | 13K | TANK | MANUAL',
  },
  {
    name: 'MARUTI SUZUKI ERTIGA',
    price: '₹2,000 / day',
    img: process.env.PUBLIC_URL + '/images/ertiga.jpg',
    details: '7 SEATER | PETROL | CNG | 17K | TANK | MANUAL',
  },
];

const SelfDrive = () => {
  const [activeTab, setActiveTab] = useState('self');
  const [pickupLocation, setPickupLocation] = useState('My current location');
  const [dropoffLocation, setDropoffLocation] = useState('105 William St, Chicago, US');
  const navigate = useNavigate();

  return (
    <div style={{ background: '#222', minHeight: '100vh', padding: '0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 400, width: '100%', background: '#fff', minHeight: '100vh', boxShadow: '0 0 20px rgba(0,0,0,0.15)' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 1.2rem 0.5rem 1.2rem' }}>
          <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: 1 }}>GVW <span style={{ fontWeight: 400, fontSize: 14 }}>Rent a Car</span></div>
          <i className="fas fa-cog" style={{ fontSize: 20, color: '#222' }}></i>
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '1.2rem 0' }}>
          <button className={`btn ${activeTab === 'driver' ? 'btn-primary' : 'btn-outline-primary'}`} style={{ borderRadius: 20, minWidth: 120 }} onClick={() => navigate('/customer-ride-selection')}>Driver</button>
          <button className={`btn ${activeTab === 'self' ? 'btn-primary' : 'btn-outline-primary'}`} style={{ borderRadius: 20, minWidth: 120 }} onClick={() => setActiveTab('self')}>Self Drive</button>
        </div>
        {/* Location */}
        <div style={{ background: '#f8f9fa', borderRadius: 16, margin: '0 1.2rem', padding: '1rem', marginBottom: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <i className="fas fa-dot-circle" style={{ color: '#28a745', marginRight: 10 }}></i>
            <div>
              <div style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>PICKUP</div>
              <div style={{ fontWeight: 600, color: '#222', fontSize: 15 }}>{pickupLocation}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-map-marker-alt" style={{ color: '#dc3545', marginRight: 10 }}></i>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: '#888', fontWeight: 500 }}>DROP-OFF</div>
              <div style={{ fontWeight: 600, color: '#222', fontSize: 15 }}>{dropoffLocation}</div>
            </div>
            <button className="btn btn-link p-0" style={{ color: '#0d6efd' }}><i className="fas fa-map"></i></button>
          </div>
        </div>
        {/* Section Title and Filter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '1.2rem 1.2rem 0.5rem 1.2rem' }}>
          <div style={{ fontWeight: 700, fontSize: 18, color: '#222' }}>Grab the Keys & Go</div>
          <button className="btn btn-link p-0" style={{ color: '#222', fontWeight: 600, fontSize: 15 }}><i className="fas fa-filter"></i> Filter</button>
        </div>
        {/* Car List */}
        <div style={{ margin: '0 1.2rem 1.2rem 1.2rem' }}>
          {selfDriveCars.map((car, idx) => (
            <div key={car.name} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 16, marginBottom: 18, border: '1.5px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <img
                src={car.img}
                alt={car.name}
                style={{ width: '100%', height: 170, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: 6 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#222' }}>{car.name}</div>
                <div style={{ color: '#222', fontWeight: 700, fontSize: 15, background: '#f8f9fa', borderRadius: 8, padding: '4px 12px' }}>{car.price}</div>
              </div>
              <div style={{ fontSize: 12, color: '#888', marginBottom: 10 }}>{car.details}</div>
              <button className="btn btn-primary w-100" style={{ borderRadius: 8, fontWeight: 600, background: '#1877f2', border: 'none', transition: 'background 0.2s' }}>BOOK NOW</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfDrive; 