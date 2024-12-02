import React from 'react';

function ActiveEmployersHeader() {
  return (
    <div className=" mx-3 my-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-white">Active Employers on Jobringer</h1>
        
        {/* Active Jobs and Recent Filters */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Active Jobs
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            Recent
          </button>
        </div>
      </div>

      {/* Alphabetical Filter */}
      <div className="flex flex-wrap gap-4">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Others'].map((letter) => (
          <button
            key={letter}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ActiveEmployersHeader;
