import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cityData = {
  "New Delhi": ["110071", "110078", "110058", "110049"],
  "Mumbai": ["220071", "220078", "220058", "220049"],
  "Chennai": ["330071", "330078", "330058", "330049"],
  "Kolkata": ["440071", "440078", "440058", "440049"]
};

function Home() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedPincode("");
  };

  const handlePincodeChange = (e) => {
    setSelectedPincode(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (selectedCity && selectedPincode) {
      console.log("Selected:", selectedCity, selectedPincode);
      navigate("/restaurants", {state: {pincode: selectedPincode}});
    } else {
      alert("Please select both city and pincode");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen w-full bg-[#FFF8F0]'>
      <form
        onSubmit={submitHandler}
        className='flex flex-col min-w-[380px] sm:flex-row gap-4 p-6 rounded-lg shadow-lg bg-[#FCBF49] text-[#2E1F1B]'
      >
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className='px-4 py-2 rounded sm:max-w-[400px] border focus:outline-none focus:ring-2 focus:ring-[#F77F00]'
        >
          <option value="">Select City</option>
          {Object.keys(cityData).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          value={selectedPincode}
          onChange={handlePincodeChange}
          disabled={!selectedCity}
          className='px-4 py-2 rounded sm:max-w-[400px]  border focus:outline-none focus:ring-2 focus:ring-[#F77F00]'
        >
          <option value="">Select Pincode</option>
          {selectedCity &&
            cityData[selectedCity].map((pin) => (
              <option key={pin} value={pin}>
                {pin}
              </option>
            ))}
        </select>

        <button
          type='submit'
          className='bg-[#D62828] text-white px-5 py-2 rounded hover:bg-[#b91c1c] transition duration-150'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
