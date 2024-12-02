import React from 'react';
import JobFilterSidebar from './JobFilterSidebar';
import JobListings from './JobListings';

function JobPage() {
  return (
    <div className='flex'>
        <JobFilterSidebar />
        <JobListings />
  
    </div>
  );
}

export default JobPage;
