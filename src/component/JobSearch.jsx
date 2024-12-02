import React, { useState } from "react";

function JobSearch() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Here, you would handle the search logic, like filtering jobs based on the input values
    console.log("Searching for jobs with", { keyword, location, experience, salary });
  };

  return (
    <header className=" mt-3 mb-3 bg-gradient-to-r from-blue-600 to-teal-500 py-6">
      <div className="container mx-auto px-6">
        <h1 className="text-white text-3xl font-bold text-center mb-4">Job Search</h1>
        <form onSubmit={handleSearch} className="flex justify-between gap-4">
          {/* Keyword Input */}
          <div className="flex-1">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Job Keyword"
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>

          {/* Location Input */}
          <div className="flex-1">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Current Location"
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>

          {/* Experience Input */}
          <div className="flex-1">
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience (e.g. 1-3 years)"
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>

          {/* Salary Input */}
          <div className="flex-1">
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Salary (e.g. 50000-80000)"
              className="w-full p-3 rounded-md border border-gray-300"
            />
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default JobSearch;
