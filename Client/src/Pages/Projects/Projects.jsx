import react, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getProjects } from '../../API/api';
import "./Projects.scss"
const Projects = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [ind, setInd] = useState(0);

  const fetchAndCacheData = async () => {
    try {
      let cachedData = localStorage.getItem("projects");
      if (cachedData) {
        setProjects(JSON.parse(cachedData));
      } else {
        let fetchedData = await getProjects();
        localStorage.setItem("projects", JSON.stringify(fetchedData));
        setProjects(fetchedData);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchAndCacheData();
  }, []);

  let project = projects.find(item => item._id == id)

  useEffect(() => {
    let intervals = setInterval(() => {
      setInd((ind + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(intervals);
  }, [ind, project]);

  if (error) {
    console.log(error);
    return <div> OOPs! there is something errror.</div>;
  }

  return (
    <div className="container d-flex flex-column justify-content-center navbar__margin">
      <div className="row row-cols-1 row-cols-lg-2 m-0 g-3">
        <div className="carousel col img_col__slider pt-lg-5">
          <div className="carousel-inner overflow-hidden">
            {project && project.images.map((img, index) => {
              return (
                <img
                  src={img}
                  alt=""
                  className={`carousel-item img-fluid ${ind === index ? "active" : ""
                    }`}
                  key={`img_sliding${index}`}
                  loading="lazy"
                />
              );
            })}
          </div>
        </div>
        {
          project && (
            <div className="col projects__descriptioin text-right display-flex flex-column p-3 px-lg-5">
              <h3 className="project__heading">{project.title}</h3>
              <a href={project.link} className="project__link lead italic">
                Project Link
              </a>
              <div className="text-muted" dangerouslySetInnerHTML={{__html :project.description}}></div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Projects;
