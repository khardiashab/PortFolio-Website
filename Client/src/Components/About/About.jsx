import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import "./About.scss"
import { getAbout } from '../../API/api'
const About = () => {

  const [about, setAbout] = useState({})
  const [err, setErr] = useState(null)


  /**
   * Fetch or cache data 
   */
  async function fetchAndCacheData(){
    try {
      let cacheData = localStorage.getItem("about")

      if(cacheData){
        setAbout(JSON.parse(cacheData))
      } else {
        let fetchData = await getAbout()
        localStorage.setItem("about", JSON.stringify(fetchData))
        setAbout(fetchData)
      }
    } catch (err) {
      setErr(err)
    }
  }

  /**
   * get data and mount
   */
  useEffect(()=>{
    fetchAndCacheData()
  }, [])

  /**
   * If error happens 
   */

  if(err){
    return (
      <div>
        OOps! There is something wrong please try again.
        <p className="text-mute">err</p>
      </div>
    )
  }

  console.log("This is about", "This is about")


  return (
    <section className='about-section navbar__margin' id='about'>
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center position-relative">
          <div className="fs-3 bg-transparent section__heading"><span className='text-underline section__heading'>Abou</span>t me</div>
          <div className='bg-effect'><div></div></div>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center p-2 p-lg-5 ">
          <p className="text-muted">{about.desc}</p>
          <div className="d-flex flex-column flex-lg-row g-3 g-lg-4">
            <a href={about.btn1Link}  target="_blank" className='btn btn-primary fw-bold rounded-0 text-monospace px-5 py-2 me-lg-2 my-2 text-white'>{about.btn1Text}</a>
            <a className='btn  btn-outline-primary fw-bold rounded-0 px-5 py-2 my-2' 
            href={about.btn2Link} download="Ajay-Resume.pdf">{about.btn2Text}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
