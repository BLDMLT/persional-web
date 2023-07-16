import React from 'react'

let logo = require("../../Assets/Images/logo.png");

function Footer() {
  return (
    <footer className="footer d-flex fixed-bottom flex-wrap justify-content-between align-items-center py-3 px-2 border-top bg-info-subtle">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <img src={logo} style={{ height: "24px", borderRadius: '10px'}} className="m-1" alt='logo' />
        </a>
        <span className="mb-3 mb-md-0 text-white">&copy; 2023 John Huang</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex px-4">
        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-twitter"></i></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-instagram"></i></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-facebook"></i></a></li>
      </ul>
    </footer>
  )
}

export default Footer