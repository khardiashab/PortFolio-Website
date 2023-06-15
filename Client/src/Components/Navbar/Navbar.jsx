import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss"
// import {logo} from "./../assests"
const Navbar = () => {
  let [navToggle, setToggle] = useState(false)
  const [activeLink, setActiveLink] = useState("home");
  

  return (

    <nav className="app__navbar px-2 px-lg-5 py-1 ">
      <div className="container d-flex  justify-content-between align-items-center">
        <div className="app__navbar__lo">
          <HashLink to="/" className="">
            <h1 className="link-primary">Aj.</h1>
          </HashLink>
        </div>

        <ul className="app__content__center d-none d-lg-flex ml-auto">
          {["home", "about", "projects","services", "skills", "contacts"].map(
            (item) => {
              return (

                <li key={`link-${item}`} className="app__navbar__links"
                onClick={()=>{
                  setActiveLink(item)
                
                }}
                >
                  <div></div>
                  <HashLink to={`${"/#" + item}`} className={`lead ${activeLink === item ?"active" : ""}`} isactive="active">{item}</HashLink>
                </li>
              )
            }
          )}
        </ul>

        {/* for large screen  */}
        <div className="d-block d-lg-none menu__button me-4"
          onClick={() => setToggle(true)}
        >
          <HamburgerMenu></HamburgerMenu>
        </div>



        <div className={`${navToggle ? "menu menu__show" : "menu"} d-flex flex-column  justify-content-start align-items-start`}>
          <p className=" w-100 px-5 text-end ">
            <span className="cancel-button"
              onClick={() => setToggle(false)}
            >x</span>
          </p>

          {["home", "about", "projects", "skills", "contacts"].map(
            (item) => {
              return (

                <li key={`link-${item}`} className="app__navbar__links"
                  onClick={() => setToggle(false)}
                >
                  <HashLink to={`/#${item}` }  end className="lead">{item}</HashLink>
                </li>
              )
            }
          )}

        </div>
      </div>
    </nav >

  )
}

export default Navbar

function HamburgerMenu() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "35px", width: "35px", borderRadius: "50%", backgroundColor: "var(--secondary-color)" }}>
      <div className="div w-50 mb-1 d-block" style={{ height: "4px", backgroundColor: "var(--white-color)" }}></div>
      <div className="div w-50 mt-1" style={{ height: "4px", backgroundColor: "var(--white-color)" }}></div>
    </div>
  )
}