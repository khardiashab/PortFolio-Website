import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({project, ind}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 project__card d-flex justify-content-center" key={project._id}>
    <div className="card">
      <div className="bg-image"
        data-mdb-ripple-color="light">
        <img src={project.images[0]} alt={project.title}
          className="w-100" />
      </div>
      <div className="card-body">
        <h5 className="card-title mb-3">{project.title}</h5>
        <p  className='fon-monospace text-muted'>{project.briefExplanation}</p>
        <Link to={`/projects/${project.category}/${project._id}`} className="">
          <p className="font-italic text-primary">{project.title}</p>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard