import React from 'react';
import {  useNavigate, Link, useLocation } from 'react-router-dom';
import vegRestaurantData from '../RestaurantData';


function Restaurants() {
  const location = useLocation()
  const navigate = useNavigate();

  // Get pincode passed from Home component
  const pincode = location.state?.pincode;

  if (!pincode) {
    return (
      <div className="p-4">
        <h2>No pincode selected.</h2>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Go Back
        </button>
      </div>
    );
  }

  const restaurants = vegRestaurantData[pincode] || [];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Restaurants in Pincode: {pincode}</h1>
      {restaurants.length === 0 ? (
        <p>No restaurants found for this pincode.</p>
      ) : (
        <Link to="/your-restaurants"
         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {restaurants.map((rest, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img src={rest.photo} alt={rest.name} className="w-full h-40 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{rest.name}</h2>
              <p>Rating: {rest.rating} ⭐</p>
              <p>Timings: {rest.opening} - {rest.closing}</p>
              <p>Famous for: {rest.famousFor}</p>
              <p>Address: {rest.address}</p>
            </div>
          ))}
        </Link>
      )}
      <button onClick={() => navigate('/')} className="mt-8 px-4 py-2 bg-red-600 text-white rounded">
        Change Location
      </button>
    </div>
  );
}

export default Restaurants;
