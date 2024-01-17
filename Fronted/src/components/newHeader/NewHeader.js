import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import logo3 from "../../assets/images/logo3.png";
import standrad from "../../assets/images/standard-quality.jpg";
import seojpg from "../../assets/images/seo.jpg";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL, IMG_BASE_URL } from "../../config/ApiConfig";
const NewHeader = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("default");
  const [company, setCompany] = useState("");
  const [helps, setHelps] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [SocialMediaLogo, setSocialMediaLogo] = useState([]);
  const [HeaderLogo, setHeaderLogo] = useState([]);

  //  This is SEO Usestate section here
  const [SEO, setSEO] = useState([]);
  // Our Services Graphics Section
  const [Graphics, setGraphics] = useState([])
  const [WebDesign, setWebDesign] = useState([])
  const [Ecommerce, setEcommerce] = useState([])
  const [Mobile, setMobile] = useState([])
  const [PPC, setPPC] = useState([])
  useEffect(() => {
    GetSocialMediaLogo();
    GetHedaderLogo();
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

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

  const GetHedaderLogo = async () => {
    await axios
      .get(`${API_BASE_URL}/logo/get`)
      .then((response) => {
        setHeaderLogo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // This UseState for the responsive Mobile Toggle Menu
  const [menuActive, setMenuActive] = useState(false);
  const [menuActive1, setMenuActive1] = useState(false);
  const [subMenuTitle, setSubMenuTitle] = useState("");
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [subMenuActive1, setSubMenuActive1] = useState(false);
  const subMenu = null;
  const subMenu2 = null;
  //  This UseEffect use for the Responsive Mobile toogle on the navabr
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuActive) {
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  //  Toogle Menu For the Toggle Responsiveness Mobile Toggle Menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (subMenuActive) {
      hideSubMenu();
    }
    setMenuActive1(!menuActive1);
    if (subMenuActive1) {
      hideSubMenu();
    }
  };

  //  This function useFul for the Our Services Li Link Mobile Toggle Menu
  const showOurServices = (hasChildren) => {
    setSubMenuActive(true);
    setSubMenuTitle(hasChildren);
  };

  // This function UseFul for the SEO Section
  const ShowSEOSection = (hasChildrenOfServices) => {
    setSubMenuActive1(true);
    setSubMenuTitle(hasChildrenOfServices);
  };
  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu.classList.remove("active");
        setSubMenuActive(false);
        setSubMenuActive1(false);
        setSubMenuTitle("");
      }, 300);
    }
  };
  const menuSectionClickHandler = (e) => {
    if (!menuActive) {
      return;
    }
    if (e.target.closest(".menu-item-has-children")) {
    }
  };

  // This code for the Message Popup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // This Usestate For the Open-mobile-menu(Left nav dark color)
  const [isMainMenuActive, setMainMenuActive] = useState(false);
  const [isMobileMenuWhite, setMobileMenuWhite] = useState(false);
  const handleMobileMenuClick = (e) => {
    e.preventDefault();
    setMainMenuActive(true);
  };
  const handleCloseMenuClick = (e) => {
    e.preventDefault();
    setMainMenuActive(false);
  };

  //   This UseEffec for the open-mobile-menu (Left nav dark color)
  useEffect(() => {
    const handleScroll = () => {
      const openMobileMenu = document.querySelector(".open-mobile-menu");
      const footerOffset = 0;

      if (openMobileMenu) {
        const openMobileMenuOffset = openMobileMenu.offsetTop;

        if (openMobileMenuOffset >= footerOffset) {
          setMobileMenuWhite(true);
        } else {
          setMobileMenuWhite(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelectChange = (event) => {
    setCountry(event.target.value);
  };

  // This function for the Message Box
  const formHandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API_BASE_URL}/messagebox`, {
        name,
        email,
        phone,
        country,
        company,
        helps,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Successfully Send The Message", {
          position: toast.POSITION.TOP_RIGHT, // You can customize the position
        });
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setCompany("");
        setHelps("");
      })
      .catch((error) => {
        toast
          .error("Error Sending the message", {
            position: toast.POSITION.TOP_RIGHT,
          })
          .finally(() => {
            // Always set isLoading to false after the request is complete
            setLoading(false);
          });
        console.log(error);
      });
  };

  const goBack = () => {
    window.history.back();
  };

  // Show the SEO Section data 
  const GetSEO = async () => {
    await axios.get(`${API_BASE_URL}/SEO/get`).then((response) => {
      setSEO(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  // Show Graphics section data
  const GetGraphics = async () => {
    await axios.get(`${API_BASE_URL}/OurServicesGraphics/get`).then((response) => {
      setGraphics(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const GetWebDesign = async () => {
    await axios.get(`${API_BASE_URL}/OurServicesWebDesign/get`).then((response) => {
      setWebDesign(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const GetEcommerce = async () => {
    await axios.get(`${API_BASE_URL}/OurServicesEcommerce/get`).then((response) => {
      setEcommerce(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const GetMobile = async () => {
    await axios.get(`${API_BASE_URL}/OurServicesMobile/get`).then((response) => {
      setMobile(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const GetPPC = async () => {
    await axios.get(`${API_BASE_URL}/OurServicesPPC/get`).then((response) => {
      setPPC(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  console.log("PPC", PPC)

  useEffect(() => {
    GetSEO();
    GetGraphics();
    GetWebDesign();
    GetEcommerce();
    GetMobile();
    GetPPC();
  }, [])



  return (
    <div>
      <header className="header header_section darkHeader">
        <div className="container-fluid px-5">
          <div className="wrapper">
            <div className="header-item-left">
              {HeaderLogo?.map((HeaderLogoResult) => {
                return (
                  <>
                    <div>
                      {HeaderLogoResult ? (
                        <Link to="/" className="logo fixed-logos">
                          <img
                            src={`${IMG_BASE_URL}${HeaderLogoResult?.logo}`}
                            alt="HeaderLogo"
                          />
                        </Link>
                      ) : (
                        <Link to="/" className="logo fixed-logos">
                          <img src={logo3} alt="HeaderLogo" />
                        </Link>
                      )}
                    </div>
                    <div>
                      {HeaderLogoResult ? (
                        <Link to="/" className="logo02 fixed-logos">
                          <img
                            src={`${IMG_BASE_URL}${HeaderLogoResult?.logo}`}
                            className="img"
                            alt="HeaderLogo"
                          />
                        </Link>
                      ) : (
                        <Link to="/" className="logo02 fixed-logos">
                          <img src={logo3} className="img" alt="HeaderLogo" />
                        </Link>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
            {/* This For the Left Responsive Mobile Toggle Menu  */}
            <div className="header-item-center">
              <div
                className={`overlay ${menuActive ? "active" : ""}`}
                onClick={toggleMenu}
              ></div>
              <nav className={`menu ${menuActive ? "active" : ""}`}>
                <div
                  className={`menu-mobile-header ${subMenuActive ? "active" : ""
                    }`}
                >
                  <button
                    type="button"
                    className="menu-mobile-arrow"
                    onClick={goBack}
                  >
                    <i className="fa fa-angle-left"></i>
                  </button>
                  <div className="menu-mobile-title">{subMenuTitle}</div>
                  <button
                    type="button"
                    className="menu-mobile-close"
                    onClick={toggleMenu}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
                <ul className="menu-section" onClick={menuSectionClickHandler}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() => showOurServices("Our Services")}
                  >
                    <Link to="#">Our Services</Link>
                    <div
                      className={`menu-subs menu-mega row ${subMenuActive ? "active" : ""
                        }`}
                      ref={subMenu}
                    >
                      <div className="list-item col-md-3">
                        <h4 className="title">BRANDING & GRAPHIC DESIGN</h4>
                        <ul>
                          {
                            Graphics.map((GraphicsResult) => {
                              return (
                                <>
                                  <li>
                                    <Link to={`/BrandImages/${GraphicsResult?._id}`}>{GraphicsResult?.title}</Link>
                                  </li>
                                </>
                              )
                            })
                          }

                          {/* <li>
                            <Link to="/Brochures">Brochures</Link>
                          </li>
                          <li>
                            <Link to="/Businesscard">Business Card Design</Link>
                          </li>
                          <li>
                            <Link to="/Digitaldesign">Digital Design</Link>
                          </li>
                          <li>
                            <Link to="/FlyersDesign">Flyers Design</Link>
                          </li>
                          <li>
                            <Link to="/Infographics">Infographics</Link>
                          </li>
                          <li>
                            <Link to="/Leaflets">Leaflets</Link>
                          </li>
                          <li>
                            <Link to="/Stationery">Stationery</Link>
                          </li>
                          <li>
                            <Link to="/Onlinebanners">Online Banners</Link>
                          </li>
                          <li>
                            <Link to="/Posters">Posters Design</Link>
                          </li>
                          <li>
                            <Link to="/Presentationproposaldesign">
                              Presentation and Proposal Design
                            </Link>
                          </li>
                          <li>
                            <Link to="/Printdesign">Print Design</Link>
                          </li>
                          <li>
                            <Link to="/Menudesign">Menu Design</Link>
                          </li>
                          <li>
                            <Link to="/Signage">Signage</Link>
                          </li> */}
                        </ul>
                      </div>
                      <div className="list-item col-md-3">
                        <h4 className="title">WEB DESIGN</h4>
                        <ul>
                          {
                            WebDesign.map((WebDesignResult) => {
                              return (
                                <>
                                  <li>
                                    <Link to={`/BusinessInformation/${WebDesignResult?._id}`}>
                                      {WebDesignResult?.title}
                                    </Link>
                                  </li>
                                </>
                              )
                            })
                          }
                        </ul>
                        <h4 className="title">e-COMMERCE</h4>
                        <ul>
                          {
                            Ecommerce?.map((EcommerceResult) => {
                              return (
                                <>
                                  <li>
                                    <Link to={`/MagentoWebsiteDevelopment/${EcommerceResult?._id}`}>
                                      {EcommerceResult?.title}
                                    </Link>
                                  </li>
                                </>
                              )
                            })
                          }
                        </ul>
                        <h4 className="title">MOBILE APPS</h4>
                        <ul>
                          {
                            Mobile?.map((MobileResult) => {
                              return (
                                <>
                                  <li>
                                    <Link to={`/MobileAppDesign/${MobileResult?._id}`}>
                                      {MobileResult?.title}
                                    </Link>
                                  </li>
                                </>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="list-item col-md-3">
                        <h4 className="title">PPC</h4>
                        <ul>
                          {
                            PPC.map((PPCResult) => {
                              return (
                                <>
                                  <li>
                                    <Link to={`/Searchnetwork/${PPCResult?._id}`}>{PPCResult?.title}</Link>
                                  </li>
                                </>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="list-item col-md-3 bg-warning">
                        <h4 className="title">SEO</h4>
                        <img
                          src={standrad}
                          className="img-fluid rounded"
                          alt="standrad"
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() => ShowSEOSection("SEO")}
                  >
                    <Link to="#">SEO </Link>
                    <div
                      className={`menu-subs menu-mega mege_menusa row px-3 ${subMenuActive1 ? "active" : ""
                        }`}
                      ref={subMenu2}
                    >
                      <div className="list-item col-md-5 mt-2">
                        <ul>
                          {
                            SEO?.map((SEOResult) => {
                              return (
                                <>
                                  <li>
                                    <Link to={`/Onlinemarketing/${SEOResult?._id}`}>{SEOResult?.title}</Link>
                                  </li>
                                </>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="col-md-7">
                        <div className="bg-warning p-3 rounded">
                          <img
                            src={seojpg}
                            className="img-fluid rounded"
                            alt="seojpg"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/CaseStudy">Case Studies</Link>
                  </li>
                  <li>
                    <Link to="/Portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* This is Message Logo  Section here */}
            <div className="header-item-right">
              <div className="fixed-menu">
                <Link to="#" className="about contact desktop">
                  <i
                    className="fa fa-envelope"
                    variant="primary"
                    onClick={handleShow}
                  ></i>
                </Link>
              </div>
              {/* Toggle button  */}
              <button
                type="button"
                className="menu-mobile-trigger"
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        {/* This code for the Left nav dark color */}
        <div className={`main-menu ${isMainMenuActive ? "active" : ""}`}>
          <div className="menu-move">
            <Link
              to="#"
              className="close-menu"
              onClick={handleCloseMenuClick}
            ></Link>
            <div className="top-container">
              <div className="container-right mobile">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/CaseStudy">Case Studies</Link>
                  </li>
                  <li>
                    <Link to="/Services">Services</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="container-left">
                <Link to="/" className="logos">
                  <img width="250" src={logo} alt="logo" />
                </Link>
                <div>
                  <p>Have a Project in mind ?</p>
                  <h2>
                    Let's create something
                    <br /> amazing together...
                  </h2>
                  <Link to="/Contactus" className="goto-landing">
                    Start a Project
                  </Link>
                </div>
                <ul className="social">
                  {SocialMediaLogo?.map((SocialMediaLogoResult) => {
                    return (
                      <>
                        <li>
                          {SocialMediaLogoResult ? (
                            <Link
                              to={SocialMediaLogoResult?.facebook_link}
                              target="_blank"
                            >
                              <i className="fab fa-facebook"></i>
                            </Link>
                          ) : (
                            <Link
                              to="https://www.facebook.com/parasmesoftware/"
                              target="_blank"
                            >
                              <i className="fab fa-facebook"></i>
                            </Link>
                          )}
                        </li>
                        <li>
                          {SocialMediaLogoResult ? (
                            <Link
                              to={SocialMediaLogoResult?.tiwtter_link}
                              target="_blank"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                          ) : (
                            <Link
                              to="https://twitter.com/parasmessoft"
                              target="_blank"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                          )}
                        </li>
                        <li>
                          {SocialMediaLogoResult ? (
                            <Link
                              to={SocialMediaLogoResult?.instagram_link}
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          ) : (
                            <Link
                              to="https://www.instagram.com/parasmejaipur/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram"></i>
                            </Link>
                          )}
                        </li>
                        <li>
                          {SocialMediaLogoResult ? (
                            <Link
                              to={SocialMediaLogoResult?.behance_link}
                              target="_blank"
                            >
                              <i className="fab fa-behance"></i>
                            </Link>
                          ) : (
                            <Link to="https://www.behance.net/" target="_blank">
                              <i className="fab fa-behance"></i>
                            </Link>
                          )}
                        </li>
                        <li>
                          {SocialMediaLogoResult ? (
                            <Link
                              to={SocialMediaLogoResult?.youtube_list}
                              target="_blank"
                            >
                              <i className="fab fa-youtube-play"></i>
                            </Link>
                          ) : (
                            <Link to="https://www.youtube.com/" target="_blank">
                              <i className="fab fa-youtube-play"></i>
                            </Link>
                          )}
                        </li>
                        <li>
                          {SocialMediaLogoResult ? (
                            <Link
                              to={SocialMediaLogoResult?.linkdin_list}
                              target="_blank"
                            >
                              <i className="fab fa-linkedin"></i>
                            </Link>
                          ) : (
                            <Link
                              to="https://www.linkedin.com/in/parasme-software-and-technology-a05b88183/"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin"></i>
                            </Link>
                          )}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="container-right desktop">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/CaseStudy">Case Studies</Link>
                  </li>
                  <li>
                    <Link to="/Services">Services</Link>
                  </li>
                  <li>
                    <Link to="/ContactUs">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/Blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-container">
              <div className="list">
                <ul>
                  <li className="header">
                    <Link to="tel:+91-85628 10272">
                      INDIA (JAIPUR): +91-85628 10272
                    </Link>
                  </li>
                  <li>
                    <> SN. 21, Near HDFC Bank Niwaru Road Jhotwara, Jaipur.</>
                  </li>
                </ul>
              </div>
              <div className="list">
                <ul>
                  <li className="header">
                    <Link to="tel:+27 71 101 0937">
                      SOUTH AFRICA: +27 71 101 0937
                    </Link>
                  </li>
                  <li>Port Elizabeth, Eastern Cape, South Africa.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* This code for the contact overlay popup */}
        <Modal className="contact-overlay" show={show}>
          <form onSubmit={formHandleSubmit} method="post">
            <Modal.Header
              closeButton
              onHide={handleClose}
              className="close"
            ></Modal.Header>
            <h3> Write to us</h3>
            <div className="full">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="full">
              <input type="hidden" name="code" />
              <input
                type="number"
                maxLength="12"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
              />
            </div>
            <div className="full">
              <div className="countries-codes">
                <p className="countries-codes_label">
                  Please Select Your Country
                </p>
                <p>
                  {" "}
                  <select
                    name="country"
                    id=""
                    className="form-control"
                    value={country}
                    onChange={handleSelectChange}
                  >
                    <option value="default" disabled>
                      Please select Your Country
                    </option>
                    <option value="India">India</option>
                    <option value="England">England</option>
                  </select>
                </p>
              </div>
            </div>
            <div className="full">
              <textarea
                name="helps"
                value={helps}
                onChange={(e) => setHelps(e.target.value)}
                placeholder="How can we help you ?"
              ></textarea>
            </div>
            <button
              to="#"
              variant="primary"
              disabled={isLoading}
              className="btn yellow submit_form"
              type="submit"
            >
              {isLoading ? "Loading…" : "Send Message"}
            </button>
            <ToastContainer />
            <p>
              By submitting you are agreeing to our{" "}
              <Link to="privacy-policy.html">Privacy Policy</Link>
            </p>
          </form>
        </Modal>
      </header>
      {/* This code section for the left nav desktop */}
      <div className="left-nav desktop">
        <Link
          to="#"
          className={`open-mobile-menu new-mobilemenu ${isMobileMenuWhite ? "active" : ""
            }`}
          onClick={handleMobileMenuClick}
        >
          |||
        </Link>
        <div className="copyrights">
          <p>© Parasme 2022</p>
        </div>
      </div>
    </div>
  );
};

export default NewHeader;
