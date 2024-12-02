import React from "react";

function JobHighlights() {
  return (
    <section className="bg-gray-100 py-8 px-4">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
        Bringing You the Perfect Job!
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10">
        11,000+ JOBS to Apply
      </p>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Box */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Your Job
          </h2>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for jobs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Search Jobs Now
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
              View Jobs
            </button>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300 w-full">
            Register For FREE
          </button>
        </div>

        {/* Right Box */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quick Job Search
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Fresher",
              "Work From Home",
              "WFH",
              "IT",
              "HR",
              "Back Office",
              "BPO Jobs",
              "ITES",
              "Finance",
              "Accounts",
              "Medical",
              "Pharma",
              "Manager",
              "Developer",
              "Marketing",
              "Engineering",
              "Non Government Jobs",
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobHighlights;
