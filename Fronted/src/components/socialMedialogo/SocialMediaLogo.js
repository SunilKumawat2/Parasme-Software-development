import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { ImBehance2 } from "react-icons/im";
import axios from "axios";
import { API_BASE_URL } from "../../config/ApiConfig";

const SocialMediaLogo = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  const GetSocialMedia = async () => {
    axios
      .get(`${API_BASE_URL}/socialmedia/get`)
      .then((response) => {
        setSocialMedia(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    GetSocialMedia();
  }, []);
  return (
    <div>
      {/* This is Social Media Section here */}
      <ul className="social social-media fixed">
        {socialMedia.map((socialMediaResult) => {
          return (
            <>
              <li>
                {socialMedia ? (
                  <Link to={socialMediaResult.facebook_link} target="_blank">
                    <i className="fab fa-facebook text-primary fs-4"></i>
                  </Link>
                ) : (
                  <Link
                    to="https://www.facebook.com/parasmesoftware/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook text-primary fs-4"></i>
                  </Link>
                )}
              </li>
              <li>
                {socialMedia ? (
                  <Link to={socialMediaResult?.tiwtter_link} target="_blank">
                    <i className="fab fa-twitter text-primary fs-4"></i>
                  </Link>
                ) : (
                  <Link to="https://twitter.com/parasmessoft" target="_blank">
                    <i className="fab fa-twitter text-primary fs-4"></i>
                  </Link>
                )}
              </li>
              <li>
                {socialMedia ? (
                  <Link to={socialMediaResult?.instagram_link} target="_blank">
                    <SiInstagram
                      style={{ fontSize: "26px", color: "#bc2a8d" }}
                    />
                  </Link>
                ) : (
                  <Link
                    to="https://www.instagram.com/parasmejaipur/"
                    target="_blank"
                  >
                    <SiInstagram
                      style={{ fontSize: "26px", color: "#bc2a8d" }}
                    />
                  </Link>
                )}
              </li>
              <li>
                {socialMedia ? (
                  <Link to={socialMediaResult?.behance_link} target="_blank">
                    <ImBehance2
                      style={{
                        fontSize: "26px",
                        color: "blue",
                        background: "white",
                        borderRadius: "3px",
                      }}
                    />
                  </Link>
                ) : (
                  <Link to="https://www.behance.net/" target="_blank">
                    <ImBehance2
                      style={{
                        fontSize: "26px",
                        color: "blue",
                        background: "white",
                        borderRadius: "3px",
                      }}
                    />
                  </Link>
                )}
              </li>
              <li>
                {socialMedia ? (
                  <Link to={socialMediaResult?.youtube_link} target="_blank">
                    <i className="fab fa-youtube text-danger fs-4"></i>
                  </Link>
                ) : (
                  <Link to="youtube.com" target="_blank">
                    <i className="fab fa-youtube text-danger fs-4"></i>
                  </Link>
                )}
              </li>
              <li>
                {socialMedia ? (
                  <Link to={socialMediaResult?.linkdin_link} target="_blank">
                    <i className="fab fa-linkedin text-primary fs-3"></i>
                  </Link>
                ) : (
                  <Link
                    to="https://www.linkedin.com/in/parasme-software-and-technology-a05b88183/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin text-primary fs-3"></i>
                  </Link>
                )}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialMediaLogo;
