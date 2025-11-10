import React, { useState } from 'react';

function FloatingInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Both fields are required");
      return;
    }
    setError("");
    setSubmittedData({ email, password }); 
    setEmail("");
    setPassword("");
  };

  return (
    <div className='w-full max-w-md mx-auto bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50 p-6 rounded-2xl shadow-lg mt-10'>
        <h1 className='text-blue-500 text-center font-semibold text-xl'>Login Form</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        {error && <div className='text-red-600 text-center'>{error}</div>}

        {/* Email */}
        <div className='relative'>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            className='peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2'
            required
          />
          <label 
            htmlFor="email"
            className={`absolute left-0 text-gray-500 text-sm transition-all
              ${email || document.activeElement.id === "email" 
                ? "-top-3 text-indigo-500 text-sm" 
                : "top-2 text-gray-400 text-base"}`
            }
          >
            Email
          </label>
        </div>

        {/* Password */}
        <div className='relative'>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className='peer w-full border-b-2 border-gray-300 focus:border-indigo-500 outline-none py-2'
            required
          />
          <label 
            htmlFor="password"
            className={`absolute left-0 text-gray-500 text-sm transition-all
              ${password || document.activeElement.id === "password" 
                ? "-top-3 text-indigo-500 text-sm" 
                : "top-2 text-gray-400 text-base"}`
            }
          >
            Password
          </label>
          <button 
            type='button'
            onClick={() => setShowPassword(prev => !prev)}
            className='absolute right-0 top-2 text-sm text-indigo-500'
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button 
          type='submit' 
          className='bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition'
        >
          Submit
        </button>
      </form>

      {/* Show submitted data */}
      {submittedData && (
        <div className='mt-6 flex flex-col gap-2'>
          <div className='bg-green-100 p-3 rounded'>
            <p className='text-green-800'><strong>Submitted Email:</strong> {submittedData.email}</p>
          </div>
          <div className='bg-blue-100 p-3 rounded'>
            <p className='text-blue-800'><strong>Submitted Password:</strong> {submittedData.password}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingInput;
