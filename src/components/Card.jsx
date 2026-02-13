import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;