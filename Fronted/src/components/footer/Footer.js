import React, { useState, useEffect } from "react";
import facebookIcon from "../../assets/images/footer/facebook-icon.svg";
import twitterIcon from "../../assets/images/footer/twitter-icon.svg";
import instagramIcon from "../../assets/images/footer/instagram-icon.svg";
import YoutubeIcon from "../../assets/images/footer/youtube-icon.svg";
import LinkdinIcon from "../../assets/images/footer/linkedin-icon.svg";
import skypeIcon from "../../assets/images/footer/skype-icon.svg";
import logo3 from "../../assets/images/logo3.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {API_BASE_URL} from "../../config/ApiConfig"
const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("default");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [SocialMediaLogo, setSocialMediaLogo] = useState([]);
  const [FooterLogo, setFooterLogo] = useState([]);
  useEffect(() => {
    GetSocialMediaLogo();
    GetFooterLogo();
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  const FormHandlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    axios
      .post(`${API_BASE_URL}/mandatory/post`, {
        name,
        email,
        phone,
        budget,
        message,
      })
      .then((response) => {
        toast.success("Successfully Send The Message", {
          position: toast.POSITION.TOP_RIGHT, // You can customize the position
        });
        setName("");
        setEmail("");
        setPhone("");
        setBudget("");
        setMessage("");
        console.log(response);
      })
      .catch((error) => {
        toast.error("Error Sending the message", {
          position: toast.POSITION.TOP_RIGHT,
        });
  
        // Move the finally block here
        setLoading(false);
        
        console.log(error);
      })
      .finally(() => {
        // Always set isLoading to false after the request is complete
        setLoading(false);
      });
  
    console.log({ name, email, phone, budget, message });
  };
  console.log({ name, email, phone, budget, message });
  
  const handleChangeSelect = (e) => {
    setBudget(e.target.value);
  };

  const GetSocialMediaLogo = async () => {
    await axios
      .get(`${API_BASE_URL}/socialmedia/get`)
      .then((response) => {
        setSocialMediaLogo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const GetFooterLogo = async () => {
    await axios
      .get(`${API_BASE_URL}/logo/get`)
      .then((response) => {
        setFooterLogo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <footer className="footer-bg target-section">
        <div className="ftrs-section" id="contact-form">
          <div className="container">
            <div className="row ftrs-bg">
              <div className="col-lg-5 col-md-12 ftrs-form pe-5">
                <div className="ftrs-form-in">
                  <span className="mandatoryMessage"> * Mandatory fields</span>
                  <h4>Let's start a new project together!</h4>
                  <form id="form1" method="post" onSubmit={FormHandlesubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        id="top-footer-name"
                        aria-describedby="emailHelp"
                        placeholder="Your Name *"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="top-footer-email"
                        placeholder="Your Email *"
                      />
                    </div>
                    <div className="form-group countrycode-sec">
                      <div className="countries-codes">
                        <span className="selected toggle-codes">+91</span>
                        <ul className="country_code">
                          <li>
                            <Link to="#" data-value="+91">
                              India +91
                            </Link>
                          </li>
                          <li>
                            <Link to="#" data-value="+1">
                              US - 1
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <input
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                        id="bottombudget"
                        name="budget"
                        onChange={handleChangeSelect}
                      >
                        <option selected="">Budget</option>
                        <option value="Less than $5000">Less than $5000</option>
                        <option value="$5000-$10000">$5000-$10000</option>
                        <option value="$10000-$20000">$10000-$20000</option>
                        <option value="$20000-$35000">$20000-$35000</option>
                        <option value="Above $35000">Above $35000</option>
                        <option value="After Meeting">After Meeting</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="comment"
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        placeholder="Message *"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn yellow large"
                      id="top-footer-submit"
                    >
                      {isLoading ? "Loading…" : "Submit"}
                    </button>
                    <ToastContainer />
                  </form>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 ftrs-adrs my-auto">
                <span className="ftrs-cont">Come See Us</span>
                <h2>Let's build a Masterpiece Together!!</h2>
                <div className="row m-0">
                  <div className="col-md-6 cnt-adrs">
                    <div className="country-name">INDIA (JAIPUR)</div>
                    <div className="country-ad">
                      <>SN. 21, Near HDFC Bank Niwaru Road Jhotwara, Jaipur.</>
                    </div>
                    <div className="country-phn">
                      <>Phone +91-85628 10272</>
                      {/* <Link to="tel:+91-85628 10272">+91-85628 10272</Link> */}
                    </div>
                    <div className="country-phn">
                      <>Email:info@parasmesoft.com</>

                      {/* <Link to="tel:+91-85628 10272">+91-85628 10272</Link> */}
                    </div>
                  </div>
                  <div className="col-md-6 cnt-adrs">
                    <div className="country-name">South Africa</div>
                    <div className="country-ad">
                      Port Elizabeth, Eastern Cape, South Africa.
                    </div>
                    <div className="country-phn">
                      Phone:{" "}
                      <Link to="tel:+27 71 101 0937">+27 71 101 0937</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-2 col-md-3 my-auto">
              <Link to="/">
                {FooterLogo?.map((FooterLogoResult) => {
                  return (
                    <>
                      <div className="footerlogo">
                        {FooterLogoResult ? (
                          <img
                            src={`http://localhost:4000/photos/${FooterLogoResult?.logo}`}
                            width="120px"
                            height="63px"
                            alt="FooterLogo"
                          />
                        ) : (
                          <img
                            src={logo3}
                            width="120px"
                            height="63px"
                            alt="FooterLogo"
                          />
                        )}
                      </div>
                    </>
                  );
                })}
              </Link>
            </div>
            <div className="col-lg-5 col-md-5 borderleft">
              <ul className="nav footer_menus">
                <li>
                  <Link to="#">Career</Link>
                </li>
                <li>
                  <Link to="#">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
              </ul>
              <p className="copyrgt text-left">
                Copyright 2023 @{" "}
                <Link to="#">Parasme software & Technology , Jaipur</Link> All
                right reserved.by Parasme Pvt.Ltd
              </p>
            </div>
            <div className="col-lg-5 col-md-4 text-end my-auto">
              <ul className="nav gap-3 justify-content-end footer-social-media">
                {SocialMediaLogo?.map((SocialMediaLogoResult) => {
                  return (
                    <>
                      <li>
                        {SocialMediaLogoResult ? (
                          <Link
                            to={SocialMediaLogoResult?.facebook_link}
                            target="_blank"
                          >
                            <img src={facebookIcon} alt="Facebook" />
                          </Link>
                        ) : (
                          <Link
                            to="https://www.facebook.com/parasmesoftware/"
                            target="_blank"
                          >
                            <img src={facebookIcon} alt="Facebook" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {SocialMediaLogoResult ? (
                          <Link
                            to={SocialMediaLogoResult?.tiwtter_link}
                            target="_blank"
                          >
                            <img src={twitterIcon} alt="Twitter" />
                          </Link>
                        ) : (
                          <Link
                            to="https://twitter.com/parasmessoft"
                            target="_blank"
                          >
                            <img src={twitterIcon} alt="Twitter" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {SocialMediaLogoResult ? (
                          <Link
                            to={SocialMediaLogoResult?.instagram_link}
                            target="_blank"
                          >
                            <img src={instagramIcon} alt="Instagram" />
                          </Link>
                        ) : (
                          <Link
                            to="https://www.instagram.com/parasmejaipur/"
                            target="_blank"
                          >
                            <img src={instagramIcon} alt="Instagram" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {SocialMediaLogoResult ? (
                          <Link
                            to={SocialMediaLogoResult?.youtube_link}
                            target="_blank"
                          >
                            <img src={YoutubeIcon} alt="Youtube" />
                          </Link>
                        ) : (
                          <Link to="https://www.youtube.com/" target="_blank">
                            <img src={YoutubeIcon} alt="Youtube" />
                          </Link>
                        )}
                      </li>
                      <li>
                        {SocialMediaLogoResult ? (
                          <Link
                            to={SocialMediaLogoResult?.linkdin_link}
                            target="_blank"
                          >
                            <img src={LinkdinIcon} alt="Linkedin" />
                          </Link>
                        ) : (
                          <Link
                            to="https://www.linkedin.com/in/parasme-software-and-technology-a05b88183/"
                            target="_blank"
                          >
                            <img src={LinkdinIcon} alt="Linkedin" />
                          </Link>
                        )}
                      </li>
                      <li>
                        <Link to="" target="_blank">
                          <img src={skypeIcon} alt="Skype" />
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
