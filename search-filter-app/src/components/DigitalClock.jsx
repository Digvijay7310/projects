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
    <div className='flex justify-center items-center min-h-screen gap-2 bg-pink-950'>
      <div className="h-60 w-100 rounded-2xl bg-black flex justify-center items-center flex-col shadow-2xl shadow-cyan-300">
        <h2 className='text-white text-xl font-bold tracking-wider'>Current Time:</h2>
        <h1 className='text-[#00ffcc] font-semibold text-[50px]'>{formatTime(time)}</h1>
        <p className='text-[#f5fe56] font-semibold text-xl'>{formatDate(time)}</p>
      </div>
    </div>
  );
}

export default DigitalClock;
