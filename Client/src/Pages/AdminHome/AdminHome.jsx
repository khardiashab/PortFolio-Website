import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Styles.scss"
import Navigation from "./Navbar"
import ImageInput from './Image'
import ProjectInputForm from "./ProjectInput"
import AddSkill from './SkillsInput'
import ImageThumbnail from './ImageThumbnail'
const AdminHome = () => {
  return (
    <div className='' >
      {/* <Navigation /> */}
      <div className="m-5"></div>
      <div className="m-5"></div>
      <ImageThumbnail />
      {/* <div className="m-5"></div> */}
      <ProjectInputForm />
      <AddSkill />
      


    </div>
  )
}

export default AdminHome
