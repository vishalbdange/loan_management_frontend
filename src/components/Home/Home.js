import React from 'react'
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
const Home = () => {
    const navigate = useNavigate();
    const gotoAdminLogin = () => {
        navigate("/adminlogin")
    }
  return (
    <>
    <div className='justify-center mt-35'>

            <div className="h2 m-4 "> Loan Management System</div>
            <button type="button" className="btn btn-danger m-2" onClick={gotoAdminLogin} >Admin Portal</button>
            <button type="button" className="btn btn-danger m-2" >User Portal</button>  
    </div>
    </>
  )
}

export default Home;