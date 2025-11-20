import React, { useState } from "react";

const NewAnimatedForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmMessage = `
      Please confirm your data:
      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Password: ${formData.password}
      Phone: ${formData.phone}
      Role: ${formData.role}
    `;
    if (window.confirm(confirmMessage)) {
      alert("Form submitted!");
      setFormData({ fullName: "", email: "", password: "", phone: "", role: "" });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: "linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
        backgroundSize: "400% 400%",
        animation: "gradientAnim 10s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientAnim {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        {/* Full Name */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all 
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all 
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Email
          </label>
        </div>

        {/* Password */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all 
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Password
          </label>
        </div>

        {/* Phone Number */}
        <div className="relative z-0 w-full mb-5">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder=" "
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
          />
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all 
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Phone Number
          </label>
        </div>

        {/* Role Select */}
        <div className="relative z-0 w-full mb-5">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-5 pb-2 text-gray-900 focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-40 appearance-none"
          >
            <option value="" disabled hidden></option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Guest">Guest</option>
          </select>
          <label className="absolute left-3 top-2.5 text-gray-500 text-sm transition-all 
            peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Role
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewAnimatedForm;
