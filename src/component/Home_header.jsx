import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home_header() {
    const [isMenuOpen,setIsOpenMenu] = useState(false)
    return (
      <div className=' mt-3 mb-3  px-3 rounded-lg flex w-full justify-center item center'>

        <header className= "w-full rounded-lg  bg-[#0F63A5] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employer</h1>
        <h2>WELCOME OFFER - FREE JOB Postings and Much More.</h2>

        {/* Dekstop Menu */}

        <nav className="hidden md:flex gap-4  items-center">
        
        <button className='bg-yellow-500 text-black px-2 py-1 rounded-sm hover:bg-slate-400 font-bold'><Link to="/EmpRegister">Register for free</Link></button>
        <button className='bg-white text-black px-2 py-1 rounded-sm hover:bg-green-400 font-bold'><Link to="/EmployerLogin">Post A Job</Link></button>
        <Link to="/" className="hover:underline">Sales equity</Link>
        </nav>

        {/* mobile menu button */}

        <button  onClick={()=>setIsOpenMenu(!isMenuOpen)}
        className="md:hidden bg-white text-blue-600 px-4 py-2 rounded">
             {isMenuOpen ? "Close" : "Menu"}
          
        </button>
        {/* Mobile Menu */}                                                 
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center gap-4 py-4">
          <Link to="/" className="hover:underline">Home</Link>
         
          <button className="bg-white text-blue-600 px-4 py-2 rounded"><Link to="/JobSeekerLogin">JobSeeker Login</Link></button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded"><Link to="/EmployerLogin">Employeer Login</Link></button>
        </nav>
      )}
      </header>
      </div>
    )

}

export default Home_header
