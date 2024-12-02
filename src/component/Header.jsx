import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import JobSeekeLogin from '../pages/JobSeekeLogin'

function Header() {
    const [isMenuOpen,setIsOpenMenu] = useState(false)
    return (
        <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">JobRinger</h1>

        {/* Dekstop Menu */}

        <nav className="hidden md:flex gap-4  items-center">
          <Link to ="/" className="hover:underline">Home</Link>
          <Link to ="/jobs" className="hover:underline">Jobs</Link>
          <Link to ="/about" className="hover:underline">Active Employeers</Link>
        <button className='bg-white text-blue-500 px-2 py-1 rounded-sm hover:bg-slate-400 font-bold'><Link to="/JobSeekerLogin">JobSeeker Login</Link></button>
        <button className='bg-white text-blue-500 px-2 py-1 rounded-sm hover:bg-green-400 font-bold'><Link to="/EmployerLogin">Employeer Login</Link></button>
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
          <Link to="/jobs" className="hover:underline">Jobs</Link>
          <Link to="/about" className="hover:underline">Employers</Link>
          <button className="bg-white text-blue-600 px-4 py-2 rounded"><Link to="/JobSeekerLogin">JobSeeker Login</Link></button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded"><Link to="/EmployerLogin">Employeer Login</Link></button>
        </nav>
      )}
      </header>
    )
}

export default Header
