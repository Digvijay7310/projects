import React, { useState } from "react";

export default function FocusInput() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: "",
    terms: false,
  });

  const [open, setOpen] = useState(false);

  // Handle inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 border p-10 ">

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}
        <div className="relative w-full">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="peer border border-gray-400 w-full p-3 rounded focus:outline-none 
                       focus:border-blue-600 placeholder-transparent"
            placeholder="Email"
          />

          <label
            htmlFor="email"
            className="absolute left-3 top-3 text-gray-500 transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:-top-2
              peer-focus:text-sm
              peer-focus:text-blue-600
              bg-white px-1"
          >
            Email
          </label>
        </div>

        {/* Password */}
        <div className="relative w-full">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="peer border border-gray-400 w-full p-3 rounded focus:outline-none 
                       focus:border-blue-600 placeholder-transparent"
            placeholder="Password"
          />

          <label
            htmlFor="password"
            className="absolute left-3 top-3 text-gray-500 transition-all
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-base
              peer-focus:-top-2
              peer-focus:text-sm
              peer-focus:text-blue-600
              bg-white px-1"
          >
            Password
          </label>
        </div>

        {/* Gender Radio Buttons */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-600">Gender</p>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                className="accent-blue-600"
              />
              Male
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="accent-blue-600"
              />
              Female
            </label>
          </div>
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="accent-blue-600"
          />
          Accept Terms & Conditions
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Dialog Box */}
      {open && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-3">Form Data</h2>

            <p><b>Email:</b> {formData.email}</p>
            <p><b>Password:</b> {formData.password}</p>
            <p><b>Gender:</b> {formData.gender}</p>
            <p><b>Accepted Terms:</b> {formData.terms ? "Yes" : "No"}</p>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
