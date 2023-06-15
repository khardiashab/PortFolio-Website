import React, { useEffect, useState } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { Link, useParams } from 'react-router-dom';
import { getProjects } from '../../API/api';

const types = ['full-stack', 'front-end', 'back-end', 'other'];

const AllProjects = () => {
  const { type } = useParams();
  const [href, setHref] = useState(type);
  const [filterProjects, setFilterProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const fetchAndCacheData = async () => {
    try {
      let cachedData = localStorage.getItem('projects');
      if (cachedData) {
        setProjects(JSON.parse(cachedData));
      } else {
        let fetchedData = await getProjects();
        localStorage.setItem('projects', JSON.stringify(fetchedData));
        setProjects(fetchedData);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchAndCacheData();
  }, []);

  useEffect(() => {
    let filter = projects.filter((item) => item.category === href);
    setFilterProjects(filter);
  }, [href, projects]);

  if (error) {
    console.log(error);
    return <div> OOPs! there is something errror.</div>;
  }

  console.log("this is type", type)

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center navbar__margin">
        <div className="text-center  my-3">
          <span className="bg-primary text-white boder fs-3 p-1 px-4">
            All Projects
          </span>{' '}
        </div>
        <div className="d-flex justify-content-center pb-3 border-bottom mb-2 ">
          {types.map((item) => {
            return (
              <Link to={`/projects/${item.toLocaleLowerCase()}`}>
                <button
                  className={`btn btn-outline-info btn-sm px-2 mx-2 border mx-lg-3 ${
                    href === item.toLowerCase() ? 'bg-primary text-white' : ''
                  }`}
                  key={item}
                  onClick={() => setHref(item.toLowerCase())}
                >
                  {item}
                </button>
              </Link>
            );
          })}
        </div>
        <div className="container row justify-content-center align-items-center">
          {filterProjects.map((project, ind) => {
            return <ProjectCard project={project} key={ind} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
