import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCPlusPlus, faBars, faSearch, faGridAlt, faUser, faChat, faPieChartAlt2, faFolder, faCartAlt, faHeart, faCog, faLogOut, faHome, faSignOut, faLayerGroup, faBell, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import proImg from "../assets/images/proImg.jpg"
import logo from "../assets/images/logo.png"

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSearchToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        menuBtnChange();
    };

    const menuBtnChange = () => {
        return isSidebarOpen ? (
            <FontAwesomeIcon icon={faBars} />
        ) : (
            <FontAwesomeIcon icon={faBars} />
        );
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="logo-details">
                <img src={logo} height={50} onClick={handleSidebarToggle} className={`hamburger ${isSidebarOpen ? "open" : ""}`} />
                <div className="logo_name text-info  fw-bolder m-3">PERTAIN</div>
                {/* <FontAwesomeIcon
          icon={faBars}
          id="btn"
          onClick={handleSidebarToggle}
          
        /> */}
            </div>
            <ul className="nav-list" style={{ paddingLeft: "12px" }}>
                {/* <li>
          <FontAwesomeIcon icon={faHome}  onClick={handleSearchToggle} />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li> */}
                <li className="mb-4 mt-5">
                    <a href="/">
                        <FontAwesomeIcon icon={faHome} size="xl" className="me-3 text-dark" />
                        <span className="links_name fs-6">Home</span>
                    </a>
                    <span className="tooltip">Home</span>
                </li>
                <li className="mb-4 mt-5">
                    <a href="/explore">
                        <FontAwesomeIcon icon={faLayerGroup} size="xl" className="me-3 text-dark" />
                        <span className="links_name">Explore</span>
                    </a>
                    <span className="tooltip">Explore</span>
                </li>
                <li className="mb-4 mt-5">
                    <a href="/notification">
                        <FontAwesomeIcon icon={faBell} size="xl" className="me-3 text-dark" />
                        <span className="links_name">Notification</span>
                    </a>
                    <span className="tooltip">Notification</span>
                </li>
                <li className="mb-4 mt-5">
                    <a href="/profile">
                        <FontAwesomeIcon icon={faUser} size="xl" className="me-3 text-dark" />
                        <span className="links_name">Profile</span>
                    </a>
                    <span className="tooltip">Profile</span>
                </li>
                <li className="mb-4 mt-5">
                    <a href="/evepage" onClick={handleOpenModal}>
                        <FontAwesomeIcon icon={faPlusCircle} size="xl" className="me-3 text-dark" />
                        <span className="links_name">Add Event</span>
                    </a>
                    <span className="tooltip">Add Event</span>
                </li>

                {showModal && (
                    <div className="modal" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Event</h5>
                                    <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                                </div>
                                <div className="modal-body">
                                    <h5 className="d-flex justify-content-center align-items-center fw-bolder">Register or LogIn Now to Add An Event!</h5>
                                    <div className="mb-3 d-flex justify-content-center align-items-center mt-4">
                                        <a className="btn btn-info fw-bolder me-4" href="/login">LogIn</a>
                                        <a className="btn btn-secondary fw-bolder" href="/register">SignUp</a>
                                    </div>
                                </div>
                                {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
               </div> */}
                            </div>
                        </div>
                    </div>
                )}


                <li className="profile">
                    <div className="profile-details">
                        <img src={proImg} alt="profileImg" />
                        <div className="name_job">
                            <a href="/profile"> <div className="name fw-bold">John Doe</div> </a>
                            <FontAwesomeIcon icon={faSignOut} id="log_out" className="text-dark" size="xl" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
