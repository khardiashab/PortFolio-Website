import React, { useEffect, useState } from 'react'

let testimonialData = [
  {
    _id: 1,
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    name: "Maria Kate",
    company: "xyz compay",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit    doloremque."
  },
  {
    _id: 2,
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    name: "Dinesh Godara",
    company: "xyz compay",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit    doloremque."
  },
  {
    _id: 3,
    imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    name: "Ajay Khardia",
    company: "xyz compay",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti    nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia    fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit    doloremque."
  },
]


const Testimonial = () => {
  const [curInd, setCurInd] = useState(0)
  useEffect(() =>{
    const interval = setInterval(() =>{
      setCurInd((curInd + 1) % 3)
    }, 3000)
    return ()=> clearInterval(interval)
  }, [curInd])

  return (
    <div className='testimonial py-5' id="testimonials">
      {/* <!-- Carousel wrapper --> */}
      <div className="text-center section__heading">What People say about me.</div>
      <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
        <div className="carousel-inner">
          {testimonialData.map((data, ind) => {
            return (
              <div className={`carousel-item  ${ind === curInd ? 'active' : ''}`}>
                <img className="rounded-circle shadow-1-strong mb-4"
                  src={data.imageUrl} alt="avatar"
                  style={{ width: "150px" }} />
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <h5 className="mb-3">{data.name}</h5>
                    <p>{data.company}</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      {data.desc}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}


        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
          data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
          data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Carousel wrapper --> */}
    </div>
  )
}

export default Testimonial
