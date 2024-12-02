

// import React from "react";
// import { Link } from "react-router-dom";

// function Footer() {
//     return (
//         <footer className="bg-gray-500 text-white py-3">
//             <div className="container mx-auto px-4">
                

//                 {/* Jobs in India and International Jobs side by side */}
//                 <div className="flex flex-wrap gap-6 my-6 border-b border-gray-600 pb-6 p-4 ">
//                     {/* Jobs in India */}
//                     <div className="flex-1 bg-gray-600 p-7">
//                         <h3 className="font-semibold text-2xl text-center mb-3">Jobs in India</h3>
//                         <div className="flex flex-wrap gap-4 ">
//                             {['Mumbai', 'Delhi', 'Ajmer', 'Pune', 'Hyderabad', 'Agra', 'Chennai', 'Kolkata', 'Indore', 'Gurugram', 'Jaipur', 'Ahmedabad'].map(city => (
//                                 <span key={city} className="text-xl">{`#${city}`}</span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* International Jobs */}
//                     <div className="flex-1 bg-gray-600 p-7">
//                         <h3 className="font-semibold text-2xl text-center mb-3">International Jobs</h3>
//                         <div className="flex flex-wrap gap-4 ">
//                             {['Africa', 'USA', 'UK', 'Australia', 'Canada', 'Singapore', 'Dubai', 'Saudi Arabia', 'New Zealand'].map(city => (
//                                 <span key={city} className="text-xl">{`#${city}`}</span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stats below Jobs */}


//                 <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-gray-600 pb-6 text-center">
//                     <div>
//                         <p className="text-xl font-bold">Jobs Posted</p>
//                         <p>31091</p>
//                     </div>
//                     <div>
//                         <p className="text-xl font-bold">Jobs Filled</p>
//                         <p>15153</p>
//                     </div>
//                     <div>
//                         <p className="text-xl font-bold">Employers</p>
//                         <p>19879</p>
//                     </div>
//                     <div>
//                         <p className="text-xl font-bold">Active Users</p>
//                         <p>1294180</p>
//                     </div>
//                 </div>

//                 {/* Disclaimer */}
//                 <div className="my-6 text-xl text-center border-b border-gray-600 pb-6">
//                     <p>
//                         Disclaimer: All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard.
//                     </p>
//                 </div>

//                 {/* Footer Links */}
//                 <div className="text-center text-xl">
//                     <ul className="flex justify-center gap-8">
//                         <li><Link to="/terms" className="hover:underline">Terms and Conditions</Link></li>
//                         <li><Link to="/refund" className="hover:underline">Refund / Cancellation Policy</Link></li>
//                         <li><Link to="/about" className="hover:underline">About Us</Link></li>
//                         <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
//                         <li>< Link to="/faq" className="hover:underline">FAQ</Link></li>
//                     </ul>
//                 </div>

//                 {/* Copyright */}
//                 <div className="my-4 text-center text-lg">
//                     <p>&copy; 2024 Jobtech Ventures Private Limited. All Rights Reserved.</p>
//                 </div>

//                 {/* Follow Us */}
//                 <div className="my-6 text-center">
//                     <h4 className="font-semibold">Follow Us on</h4>
//                     <div className="flex justify-center gap-6">
//                         <Link to="https://facebook.com" className="hover:underline">Facebook</Link>
//                         <Link to="https://twitter.com" className="hover:underline">Twitter</Link>
//                         <Link to="https://linkedin.com" className="hover:underline">LinkedIn</Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">

        {/* Jobs in India and International Jobs side by side */}
        <div className="flex flex-wrap gap-4 my-4 border-b border-gray-600 pb-4">
          {/* Jobs in India */}
          <div className="flex-1 bg-gray-700 p-4 rounded-md">
            <h3 className="font-semibold text-xl text-center mb-2">Jobs in India</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {['Mumbai', 'Delhi', 'Ajmer', 'Pune', 'Hyderabad', 'Agra', 'Chennai', 'Kolkata', 'Indore', 'Gurugram', 'Jaipur', 'Ahmedabad'].map(city => (
                <span key={city} className="">{`#${city}`}</span>
              ))}
            </div>
          </div>

          {/* International Jobs */}
          <div className="flex-1 bg-gray-700 p-4 rounded-md">
            <h3 className="font-semibold text-xl text-center mb-2">International Jobs</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {['Africa', 'USA', 'UK', 'Australia', 'Canada', 'Singapore', 'Dubai', 'Saudi Arabia', 'New Zealand'].map(city => (
                <span key={city} className="">{`#${city}`}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats below Jobs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4 text-center text-sm">
          <div>
            <p className="font-semibold">Jobs Posted</p>
            <p>31091</p>
          </div>
          <div>
            <p className="font-semibold">Jobs Filled</p>
            <p>15153</p>
          </div>
          <div>
            <p className="font-semibold">Employers</p>
            <p>19879</p>
          </div>
          <div>
            <p className="font-semibold">Active Users</p>
            <p>1294180</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-center my-4 border-b border-gray-600 pb-4">
          <p>
            Disclaimer: All Trademarks and Logos are the property of their respective owners. Jobringer.com has ensured that information is genuine, but job applicants should evaluate independently.
          </p>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm">
          <ul className="flex justify-center gap-6">
            <li><Link to="/terms" className="hover:underline">Terms</Link></li>
            <li><Link to="/refund" className="hover:underline">Refund Policy</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="my-4 text-center text-sm">
          <p>&copy; 2024 Jobtech Ventures. All Rights Reserved.</p>
        </div>

        {/* Follow Us */}
        <div className="my-4 text-center">
          <h4 className="font-semibold">Follow Us</h4>
          <div className="flex justify-center gap-4 text-sm">
            <Link to="https://facebook.com" className="hover:underline">Facebook</Link>
            <Link to="https://twitter.com" className="hover:underline">Twitter</Link>
            <Link to="https://linkedin.com" className="hover:underline">LinkedIn</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
