import React from 'react'
import Hero from '../../Hero/Hero'
import About from '../../Components/About/About'
import ProjectsSection from '../../Components/ProjectSection/ProjectSection'
import Services from '../../Components/Services/Services'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Contact from '../../Components/Contact/Contact'
import Skills from '../../Components/Skills/Skills'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Services />
      <ProjectsSection />
      <Skills />
      <Testimonial />
      <Contact/>
    </div>
  )
}

export default Home
