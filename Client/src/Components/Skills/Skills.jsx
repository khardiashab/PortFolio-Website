import React, { useState, useEffect } from 'react'
import "./Skills.scss"
import { getSkills } from '../../API/api'

const Skills = () => {

  const [skills, setSkills] = useState([])
  const [err, setErr] = useState(null)

  // fatch or cache data
  async function fetchAndCacheData() {
    try {
      let cacheData = localStorage.getItem("skills")
      if (cacheData) {
        setSkills(JSON.parse(cacheData))
      } else {
        const data = await getSkills()
        localStorage.setItem("skills", JSON.stringify(data))
        setSkills(data)
      }

    } catch (error) {
      setErr(error)
    }
  }
  /**
 * Loads the hero data on mount.
 */
  useEffect(() => {
    fetchAndCacheData();
  }, []);

  /**
   * Logs and renders the error if there is one.
   */
  if (err) {
    console.error(err);

    return (
      <div className="error-message">
        Oops! There was an error. Please try again later.
      </div>
    );
  }

  console.log("This is skills ", skills)

  return (
    <section className='skills__section overflow-hidden navbar__margin py-5 bg-light' id='skills'>
      <div className="container">
      <div className="text-center section__heading">Skills & Technologies</div>
      <div className="row m-0 gutter row-cols-2 row-cols-lg-4 justify-content-center align-items-center">
        {skills.length > 0 && skills.map((skill) => {
          return (
            <div className="col">
              <img
                key={`images_${skill._id}`}
                src={skill.logoUrl}
                alt={skill.title}
                className="img-cover"
              />
            </div>
          )
        })}
      </div>
      </div>
    </section>
  )
}

export default Skills
