import React from 'react'

function EmployerLogin() {
    return (
        <div className="bg-gray-900 flex justify-center  items-center min-h-screen">
   <div className="bg-gray-700 shadow-2xl rounded-lg p-8 max-w-sm w-full">
      <h2 className="text-white text-center text-2xl mb-6 font-bold"> Employer Login</h2>
      <form action="">
         <div className="mb-4">
            <label className="block mb-1 text-gray-300 text-sm font-medium" for="">Email</label>
            <input
               className="w-full px-2 py-1 bg-gray-600 text-white border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               type="email" name="" placeholder="Email" id="" />

         </div>
         <div>
            <label className="block mb-1 text-gray-300 text-sm font-medium" for="">Password</label>
            <input
               className="w-full px-2 py-1 bg-gray-600 text-white border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
               type="Password" name="" placeholder="Password" id="" />

            </div>
            <div className="mt-4">
               <button
                  className="w-full bg-blue-600 py-2 text-white text-sm rounded-md hover:bg-blue-700 shadow-2xl">Submit</button>
            </div>
      </form>
   </div>

</div>
    )
}

export default EmployerLogin
