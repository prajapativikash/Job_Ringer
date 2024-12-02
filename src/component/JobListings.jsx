import React, { useState } from 'react';

function JobListings() {
  const jobs = [
    {
      company: "Trunefy HR Services",
      title: "SALES MANAGER MOTOR INSURANCE DELHI EXP 1-2 YRS",
      experience: "1 - 3 Years",
      salary: "₹ 3 Lac - 4 Lac P.A",
      jobType: "Full Time - Permanent",
      location: "New Delhi",
      keySkills: "motor insurance, insurance sales, agency channel, agency recruitment, Agency, team building, team leading skills, team handling",
      posted: "1 day ago",
    },
    {
      company: "Trunefy HR Services",
      title: "SALES MANAGER HEALTH INSURANCE DELHI EXP 1-2 YRS",
      experience: "1 - 3 Years",
      salary: "₹ 4 Lac - 5 Lac P.A",
      jobType: "Full Time - Permanent",
      location: "rajendra nagar",
      keySkills: "Health Insurance, insurance sales, Insurance, Team Management, team building, Agency Manager, agency channel, agent recruitment",
      posted: "1 day ago",
    },
    {
      company: "Trunefy HR Services",
      title: "FIELD EXECUTIVE @ MADURANTHAGAM FRESHER",
      experience: "0 - 5 Years",
      salary: "₹ 2.5 Lac - 3 Lac P.A",
      jobType: "Full Time - Permanent",
      location: "Chennai",
      keySkills: "Field Sales, Field Executive, Customer Servicing, Client Relationship, Client Relations, business conversion, Consultant, color consultant",
      posted: "3 days ago",
    },
    {
      company: "Continental HR Services",
      title: "RELATIONSHIP MANAGER",
      experience: "1 - 17 Years",
      salary: "₹ 2 Lac - 3 Lac P.A",
      jobType: "Full Time - Permanent",
      location: "Jagityal | Hyderabad | Warangal | Nizamabad.",
      keySkills: "Micro lap, lap, hl, sales manager, sales, home loan",
      posted: "4 days ago",
    },
    {
      company: "Trunefy HR Services",
      title: "FIELD EXECUTIVE @ COIMBATORE FRESHER",
      experience: "0 - 5 Years",
      salary: "₹ 2.5 Lac - 3 Lac P.A",
      jobType: "Full Time - Permanent",
      location: "Coimbatore",
      keySkills: "Field Executive, Customer Support, Client Relations, Consultant, business conversion, Customer Service",
      posted: "8 days ago",
    },
    // Add more job data for pagination to make it work better...
  ];

  const jobsPerPage = 3; // Number of jobs per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Slice the jobs for the current page
  const currentJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Don't go out of bounds
    setCurrentPage(page);
  };

  return (
    <div className="flex-1 p-6">
      <div className="space-y-6">
        {currentJobs.map((job, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">Company: {job.company}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <p className="text-gray-600">Experience: {job.experience}</p>
            <p className="text-gray-600">Salary: {job.salary}</p>
            <p className="text-gray-600">Job Type: {job.jobType}</p>
            <p className="text-gray-600">Key Skills: {job.keySkills}</p>
            <p className="text-gray-500">Posted: {job.posted}</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Apply
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center mt-6">
        <button
          className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default JobListings;
