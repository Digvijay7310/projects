import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up interval to update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date) => {
    return date.toLocaleTimeString("en-IN", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
  }

  return (
    <div className='flex justify-center items-center h-screen gap-2 p-2 bg-yellow-950'>
      <div className="h-60 w-full max-w-[600px] rounded-2xl bg-black flex justify-center items-center flex-col shadow-2xl shadow-cyan-300">
        <i className='text-center text-gray-300 text-2xl shadow-amber-200 text-shadow-lg '>" Digital Clock "</i>
        <h2 className='text-white text-xl font-bold tracking-wider'>Current Time:</h2>
        <h6 className='text-[#00ffcc] font-semibold text-[50px]'>{formatTime(time)}</h6>
        <p className='text-[#f5fe56] font-semibold text-sm'>{formatDate(time)}</p>
      </div>
    </div>
  );
}

export default DigitalClock;
