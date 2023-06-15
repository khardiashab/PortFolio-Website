import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectSection.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import { getProjects } from '../../API/api.js';




const ProjectsSection = () => {
      const [projects , setProjects] = useState([])
      const [error, setError] = useState(null)

      const fetchAndCacheData = async () =>{
        try {
          let cachedData = localStorage.getItem("projects")
          if( cachedData ) {
            setProjects(JSON.parse(cachedData))
          } else {
            let fetchedData = await getProjects()
            localStorage.setItem("projects", JSON.stringify(fetchedData))
            setProjects(fetchedData)
          }
        } catch (error) {
          setError(error)
        }
      }

      useEffect(()=>{
        fetchAndCacheData()
      }, [])

  if(error){
    console.log(error)
    return <div> OOPs! there is something errror.</div>
  }
      

  return (
    <section id="projects" className="projects-section">
      <div className="container py-5">
        <div className="text-center section__heading">Here is my Recent work</div>
        <div className="container row justify-content-center align-items-cente flex-wrap align-items-sterch m-0 gutter">
          {
            projects.map((project) => {
              return (
               <ProjectCard  project={project} />
              )
            })
          }
          <div className="text-center">
            <Link to={"/projects/full-stack"} className="btn btn-primary text-white rounded-0">View all Projects</Link>
          </div>
        </div>
        </div>
    </section>
  );
};

export default ProjectsSection;



