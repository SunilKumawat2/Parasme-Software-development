import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import {API_BASE_URL} from "../../config/ApiConfig"
const LatestBrndingProjects = () => {
  const [letestProjects, setLetestProjects] = useState([]);

  const GetLetestProjects = async () => {
    await axios
      .get(`${API_BASE_URL}/brandingproject/get`)
      .then((response) => {
        setLetestProjects(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetLetestProjects();
  }, []);
  const slickSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = React.createRef();
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div>
      <div className="text">
        <div className="container">
          <h2>Latest Branding Projects</h2>
        </div>
        <ul
          className="custom-navigation carousel projects-carousel latest-branding 
                      add-fade-from-bottom fade-from-bottom"
        >
          <Slider {...slickSettings} ref={sliderRef}>
            {letestProjects.map((letestProjectsResult) => {
              return (
                <li>
                  <Link to="#">
                    <img
                      src={`http://localhost:4000/photos/${letestProjectsResult.images}`}
                      style={{ width: "93%" }}
                      alt=""
                    />
                    <div className="overlay">
                      <h3>{letestProjectsResult.name}</h3>
                      <span></span>
                      <figure>
                        <p>
                          View Case Study<i></i>
                        </p>
                      </figure>
                    </div>
                  </Link>
                </li>
              );
            })}
          </Slider>
        </ul>
        <div className="carousel-navigation">
          <div>
            <Link
              onClick={goToPrev}
              to=""
              className="navigate prev"
              data-direction="prev"
            ></Link>
            <Link
              onClick={goToNext}
              to=""
              className="navigate next"
              data-direction="next"
            ></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBrndingProjects;
