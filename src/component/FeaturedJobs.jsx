import React from "react";

const jobs = [
  {
    jobType: "In Office job",
    title: "Business Development Executive (BDE)",
    company: "SyStos Technology",
    jobNature: "Full Time - Permanent",
    experience: "1 - 3 Years",
    location: "Indore / India",
  },
  {
    jobType: "In Office job",
    title: "Inside Sales Representative",
    company: "MNC Job Wala",
    jobNature: "Full Time - Permanent",
    experience: "0 - 2 Years",
    location: "Bengaluru / Bangalore / India",
  },
  {
    jobType: "In Office job",
    title: "DNC Certificate Nurse (Female)",
    company: "Medico Hub",
    jobNature: "Full Time - Permanent",
    experience: "2 - 5 Years",
    location: "Delhi NCR | New Delhi / India",
  },
  {
    jobType: "Hybrid job",
    title: "Cloud Engineer",
    company: "Q1 Technologies, Inc.",
    jobNature: "Full Time",
    experience: "1 - 7 Years",
    location: "Toronto / Canada",
  },
  {
    jobType: "In Office job",
    title: "Senior React JS Developer",
    company: "GRNconnect.com",
    jobNature: "Full Time",
    experience: "1 - 7 Years",
    location: "New Delhi / India",
  },
  {
    jobType: "In Office job",
    title: "Technical Writer",
    company: "Zen Technologies Limited",
    jobNature: "Full Time - Permanent",
    experience: "0 - 2 Years",
    location: "Hyderabad - Secunderabad / India",
  },
  {
    jobType: "In Office job",
    title: "Java Developer-Senior Java Engineer",
    company: "Hiringhood",
    jobNature: "Full Time",
    experience: "2 - 9 Years",
    location: "Hyderabad - Secunderabad / India",
  },
  {
    jobType: "Hybrid job",
    title: "SSIS Developer-Solution Design & Implementation",
    company: "MResult",
    jobNature: "Full Time - Permanent",
    experience: "0 - 1 Years",
    location: "Bengaluru / Bangalore / India",
  },
];

function FeaturedJobs() {
  return (
    <section className="bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Featured Jobs
      </h1>
      <div className="overflow-x-auto py-4 px-6 scrollbar-hide">
        <div className="flex gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="min-w-[320px] bg-white shadow-lg rounded-xl p-6 border border-gray-300 hover:shadow-2xl transition duration-300"
            >
              <p className="text-xs text-gray-500 mb-2">{job.jobType}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{job.company}</p>
              <p className="text-sm text-gray-600 mb-1">{job.jobNature}</p>
              <p className="text-sm text-gray-600 mb-1">Experience: {job.experience}</p>
              <p className="text-sm text-gray-600 mb-4">Location: {job.location}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 w-full">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Remote Job */}

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Remote Jobs
      </h1>
      <div className="overflow-x-auto py-4 px-6 scrollbar-hide">
        <div className="flex gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="min-w-[320px] bg-white shadow-lg rounded-xl p-6 border border-gray-300 hover:shadow-2xl transition duration-300"
            >
              <p className="text-xs text-gray-500 mb-2">{job.jobType}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{job.company}</p>
              <p className="text-sm text-gray-600 mb-1">{job.jobNature}</p>
              <p className="text-sm text-gray-600 mb-1">Experience: {job.experience}</p>
              <p className="text-sm text-gray-600 mb-4">Location: {job.location}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 w-full">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;
