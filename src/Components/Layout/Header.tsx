import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { SD_Themes } from '../../Utility/SD'


function Header() {
  const [themeDisplay, setThemeDisplay] = useState(SD_Themes.LIGHT)


  useEffect(()=>{
    const htmlDom = document.querySelector("html")
    const btnLight = document.querySelector(".btn-light")
    console.log("btnLight",btnLight)
    if(htmlDom !== null){
      htmlDom.setAttribute("data-bs-theme","light")
    }
  },[])

  const handleTheme = (themeValue: SD_Themes) => {
    const htmlDom = document.querySelector("html")
   
    if(themeValue === SD_Themes.LIGHT){
      setThemeDisplay(SD_Themes.LIGHT)
      if(htmlDom !== null){
        htmlDom.setAttribute("data-bs-theme","light")
      }  
    }
    if(themeValue === SD_Themes.DARK) {
      setThemeDisplay(SD_Themes.DARK)
      if(htmlDom !== null){
        htmlDom.setAttribute("data-bs-theme","dark")
      }
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
              <li className="nav-item col-6 col-lg-auto">
                <a className="nav-link py-2 px-0 px-lg-2" href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="navbar-nav-svg"
                    viewBox="0 0 512 499.36"
                    role="img">
                    <title>GitHub</title>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path>
                  </svg>
                  <small className="d-lg-none ms-2">GitHub</small>
                </a>
              </li>
              <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                <hr className="d-lg-none my-2 text-white-50" />
              </li>

              <li className="nav-item dropdown">
                <button
                  className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-label="Toggle theme">
                  {themeDisplay === SD_Themes.LIGHT ? (
                    <i className="bi bi-brightness-high-fill px-2"></i>
                  ) : (
                    <i className="bi bi-moon-stars-fill px-2"></i>
                  )}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                  <li>
                    <button
                      type="button"
                      id="btn-light"
                      className={`dropdown-item d-flex align-items-center ${themeDisplay === SD_Themes.LIGHT? 'active':''}`}
                      onClick={()=> handleTheme(SD_Themes.LIGHT)}
                      data-bs-theme-value="light">
                      <i className="bi bi-brightness-high-fill px-2"></i>
                      Light
                      {themeDisplay === SD_Themes.LIGHT ? <i className="bi bi-check2 px-2"></i>:''}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="btn-dark"
                      className={`dropdown-item d-flex align-items-center ${themeDisplay === SD_Themes.DARK? 'active':''}`}
                      onClick={()=> handleTheme(SD_Themes.DARK)}
                      data-bs-theme-value="dark">
                      <i className="bi bi-moon-stars-fill px-2"></i>
                      Dark
                      {themeDisplay === SD_Themes.DARK?<i className="bi bi-check2 px-2"></i>:''}
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
