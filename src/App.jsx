import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import Header from './component/Header'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Job from './pages/Job.jsx'
import Footer from './component/Footer.jsx';
import JobSeekeLogin from './pages/JobSeekeLogin.jsx';
import EmployerLogin from './pages/EmployerLogin.jsx';
import Emp_Register from './pages/Emp_Register.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Job />} />
        <Route path='/jobSeekerLogin' element={<JobSeekeLogin/>}/>
        <Route path='/EmployerLogin' element={<EmployerLogin/>}/>
        <Route path = '/EmpRegister' element={<Emp_Register/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
