import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString('en-IN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  const formatDate = (date) =>
    date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className='flex justify-center items-center h-screen p-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900'>
      <div className="h-60 w-full max-w-[600px] rounded-3xl bg-gray-800 flex flex-col justify-center items-center shadow-2xl shadow-indigo-500/50">
        <i className='text-gray-400 text-2xl mb-2'>" Digital Clock "</i>
        <h2 className='text-white text-xl font-semibold tracking-wider font-serif'>Current Time:</h2>
        <h6 className='text-teal-400 font-bold text-[50px] mt-2'>{formatTime(time)}</h6>
        <p className='text-pink-300 font-medium mt-1'>{formatDate(time)}</p>
      </div>
    </div>
  );
}

export default DigitalClock;
