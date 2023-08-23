import React from 'react'
import "../assets/style/core.css"
import logo from "../assets/images/logo.png"

function Nav() {
  return (
    <>
     <nav className="navbar custom-nav navbar-expand-lg navbar-white bg-white  shadow-sm border-bottom">
                <div className="container">
                    <a className="navbar-brand d-flex justify-content-center align-items-center" href="/">
                        <img src={logo} className='img-fluid me-2'/>
                        <span className='fs-5 fw-bolder'>PERTAIN EVENTS</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            {/* <li className="nav-item px-3">
                                <a className="nav-link" href="/explore">Explore</a>
                            </li> */}
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/profile/:username">Profile</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/login">Add Events</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </>
  )
}

export default Nav