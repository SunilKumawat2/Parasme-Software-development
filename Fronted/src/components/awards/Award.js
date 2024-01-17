import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/main.css";
import "../../assets/css/responsive.css";
import "../../assets/css/slick-theme.css";
import "../../assets/css/slick.css";
import axios from "axios";
import { API_BASE_URL } from "../../config/ApiConfig";
const Award = () => {
  const [Awards, setAwards] = useState([]);

  const GetAward = async () => {
    await axios
      .get(`${ API_BASE_URL}/award/get`)
      .then((response) => {
        setAwards(response.data.images);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAward();
  }, []);
  return (
    <div>
      <section className="awards_section">
        <div className="container">
          <div className="row">
            <div className="awards-titles mb-5">
              <h1 className="headingtitle">Awards & Recognitions</h1>
              <p className="headingsubtitle">
                We are humbled and honored by the recognition from our peers
              </p>
            </div>
          </div>
          <div className="row extractrating">
            {Awards.map((AwardResult,id) => {
              return (
                <>
                  <div className="col-6 col-md-3 col-lg-3 col-xl-3">
                    <div className="awards_box">
                      <Link to="#">
                        <img src={`http://localhost:4000/photos/${AwardResult.images}`} alt="extract" />
                      </Link>
                      <div className="awardfram">
                        <h3>{AwardResult.heading}</h3>
                        <p>{AwardResult.paragraph}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className="col-6 col-md-3 col-lg-3 col-xl-3">
              <div className="awards_box">
                <Link to="#" style={{ background: "#e4f6ff" }}>
                  <img src={freelancer} alt="freelancer" />
                </Link>
                <div className="awardfram">
                  <h3>Clutch</h3>
                  <p>Recognized by Clutch with 5 Star Rating</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
              <div className="awards_box">
                <Link to="#" style={{ background: "#f2fee7" }}>
                  <img src={upwork} alt="upwork" />
                </Link>
                <div className="awardfram">
                  <h3>TopDevelopers</h3>
                  <p>Named a Top Native Mobile App Development Company</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 col-xl-3">
              <div className="awards_box">
                <Link to="#" style={{ background: "#ffefeb" }}>
                  <img src={appfutera} alt="appfutera" />
                </Link>
                <div className="awardfram">
                  <h3>GoodFirms</h3>
                  <p>Top-rated Company on GoodFirms with 5 Star Rating</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
