// Loader.jsx
import React from 'react';
import './Loader.css'; // Include the CSS for animation

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <img
                src="/Property1Variant10.svg"
                alt="Background"
                className="bg-black w-[full]"
                />
    </div>
  );
};

export default Loader;
