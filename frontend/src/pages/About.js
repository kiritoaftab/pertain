import React from 'react'
import logo from "../assets/images/logo.png"

function About() {
  return (
    <>
    <div  className='container'>
    <div className=' mt-5 p-5 text-center fw-bold border-lg'>
    <img src={logo} height={100}/>

        <h2> Page is Under Development </h2>
        <p className="text-info">
            We will be live soon
        </p>
    </div>
    </div>
    </>
  )
}

export default About