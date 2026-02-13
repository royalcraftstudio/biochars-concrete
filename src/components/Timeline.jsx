import React from 'react';

const Timeline = ({ steps }) => {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold flex-shrink-0">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
            )}
          </div>
          <div className="pb-8">
            <p className="text-lg text-gray-700 leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;