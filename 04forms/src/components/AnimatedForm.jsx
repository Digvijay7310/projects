import React, { useState } from "react";

const AnimatedForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show confirmation before submit
    const confirmMessage = `
      Please confirm your data:
      Name: ${formData.name}
      Email: ${formData.email}
      Password: ${formData.password}
      Age: ${formData.age}
      Gender: ${formData.gender}
    `;
    if (window.confirm(confirmMessage)) {
      alert("Form submitted!");
      // Reset form or send data to backend here
      setFormData({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
      });
    }
  };

  return (
    <div
    style={{
        background: 'linear-gradient(270deg, #ff416c, #833ab4, #00c6ff, #ff416c)',
        backgroundSize: "800% 800%",
        animation: "gradientAnimation 12s ease infinite",
    }}
     className="flex justify-center items-center min-h-md p-4 ">
        <style>
            {`
            @keyframes gradientAnimation {
            0% {background-position: 0% 50%; }
            50% {background-position: 100% 50%; }
            100% {background-position: 0% 50%; }
            }
            `}
        </style>
      <form
        onSubmit={handleSubmit}
        className=" p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{
            background: 'linear-gradient(200deg, #ff0000, #ffffff, #f5f5f5)',
            backgroundSize: "400% 400%",
            animation: 'gradient 3s ease infinite'
        }}
      >
        <style>
            {`
            @keyframes gradient {
            0% {background-position: 0% 50%}
            50% {background-position: 100% 50%}
            100% {background-position: 0% 50%}
            }
            `}
        </style>
        <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>

        {/* Name Input */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
            Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
            Email
          </label>
        </div>

        {/* Password Input */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
            Password
          </label>
        </div>

        {/* Age Input */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
            Age
          </label>
        </div>

        {/* Gender Select */}
        <div className="relative z-0 w-full mb-5">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40 appearance-none"
          >
            <option value="" disabled hidden></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
            Gender
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AnimatedForm;
