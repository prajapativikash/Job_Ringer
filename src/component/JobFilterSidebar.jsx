import React, { useState } from "react";

function JobFilterSidebar() {
  const [keyword, setKeyword] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedWorkMode, setSelectedWorkMode] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");

  const jobCategories = [
    "Fresher", "Work From Home", "WFH", "IT", "HR", "Back Office", "BPO Jobs", "ITES",
    "Finance", "Accounts", "Medical", "Pharma", "Manager", "Developer", "CA", "Marketing",
    "Engineering", "Research"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching with", { keyword, experience, selectedWorkMode, selectedJobType });
  };

  return (
    <div className="w-full max-w-xs md:max-w-md lg:max-w-lg bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Filters</h2>
      
      {/* Keyword Search */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Keywords</h3>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Type keyword and press enter"
          className="w-full p-3 rounded-md border border-gray-300"
          onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        />
      </div>

      {/* Experience Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Experience</h3>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Enter years of experience"
          className="w-full p-3 rounded-md border border-gray-300"
        />
      </div>

      {/* Work Mode Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Work Mode</h3>
        <select
          value={selectedWorkMode}
          onChange={(e) => setSelectedWorkMode(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300"
        >
          <option value="">Select Work Mode</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="In-office">In-office</option>
        </select>
      </div>

      {/* Job Type Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Job Type</h3>
        <select
          value={selectedJobType}
          onChange={(e) => setSelectedJobType(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Quick Job Search Tags */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Quick Job Search</h3>
        <div className="flex flex-wrap gap-2">
          {jobCategories.map((category, index) => (
            <button
              key={index}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
            >
              #{category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default JobFilterSidebar;
