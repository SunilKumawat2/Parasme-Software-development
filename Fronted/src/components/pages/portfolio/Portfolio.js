import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link, useParams } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NewHeader from "../../newHeader/NewHeader";
import axios from "axios";
import { API_BASE_URL, IMG_BASE_URL } from "../../../config/ApiConfig";
import Award from "../../awards/Award";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const { _id } = useParams();

  const [AllCategory, setAllCategory] = useState([]);
  const [WebPortFolios, setWebPortFolios] = useState([]);
  const [MobilePortFolios, setMobilePortFolios] = useState([]);
  const [AllCategoryDetails, setAllCategoryDetails] = useState({});
  const [WebPortFoliosDetails, setWebPortFoliosDetails] = useState({});
  const [MobilePortFoliosDetails, setMobilePortFoliosDetails] = useState({});

  const GetAllCategory = async () => {
    await axios.get(`${API_BASE_URL}/allportfolios/get`).then((response) => {
      setAllCategory(response.data.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  const GetAllPortFoliosDetails = async (_id) => {
    await axios.get(`${API_BASE_URL}/allportfolios/getById/${_id}`).then((response) => {
      setAllCategoryDetails(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const GetWebPortFolios = async () => {
    await axios.get(`${API_BASE_URL}/webportfolios/get`).then((response) => {
      setWebPortFolios(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const GetWebPortFoliosDetails = async (_id) => {
    await axios.get(`${API_BASE_URL}/webportfolios/getById/${_id}`).then((response) => {
      setWebPortFoliosDetails(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const GetMobilePortFolios = async () => {
    await axios.get(`${API_BASE_URL}/MobilePortFolios/get`).then((response) => {
      setMobilePortFolios(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  const GetMobilePortFoliosDetails = async (_id) => {
    await axios.get(`${API_BASE_URL}/MobilePortFolios/getById/${_id}`).then((response) => {
      setMobilePortFoliosDetails(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    GetAllCategory();
    GetAllPortFoliosDetails();
    GetWebPortFolios();
    GetMobilePortFolios();
    GetWebPortFoliosDetails();
    GetMobilePortFoliosDetails();
  }, [_id])

  return (
    <div>
      {/* This is Header Section Here */}
      <NewHeader />
      {/* This is Left Side NAv Section Here */}
      {/* This is Page Header Section Here */}
      <section className="page-header header-style-2">
        <div className="title">
          <h2 className="fade-in">Case Studies</h2>
          <h1 className="fade-in">
            <span>The Brands we’ve worked with aren’t trophies, </span>they’re
            Friends we met on our journey.
          </h1>
        </div>
        {/* This is Social Media Section here */}
        <SocialMediaLogo />
        <Link to="#" className="scroll-down">
          <p className="" style={{ transition: "all 1s ease 0s" }}>
            See how we’ve helped our clients!
          </p>
        </Link>
      </section>
      {/* This is a Portfolio section here */}
      <div className="case-studies-page">
        <div className="mobile-menu-container fixed mobile transparent">
          <Link to="#" className="open-mobile-menu">
            <span></span>
          </Link>
        </div>
        <section className="case-studies scroll-to">
          {/* This is Tab section for the Filter PortFolios  */}
          <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" variant="pills"
            className="customebtns justify-content-center gap-3 mb-3">

            <Tab className="filter_items" eventKey="home" title="All Categories">
              <div className="cases-list services-boxes">
                {
                  AllCategory?.map((AllCategoryResult) => {
                    return (
                      <>
                        <div onClick={() => GetAllPortFoliosDetails(AllCategoryResult?._id)}
                          className="add-fade-from-bottom gallery-item filtered_items cat_1 fade-from-bottom">
                          <div
                            variant="primary"
                            className="popup-link"
                            onClick={handleShow}
                          >
                            <img
                              src={`${IMG_BASE_URL}${AllCategoryResult?.images}`}
                              style={{ width: "300px", height: "370px" }}
                              className="img-fluid w-100"
                              alt={AllCategoryResult?.title}
                            />
                          </div>
                          <h6 className="headingsubtitle mb-0">{AllCategoryResult?.title}</h6>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </Tab>

            <Tab eventKey="profile" title="Website Design & Development">
              <div className="cases-list services-boxes">
                {
                  WebPortFolios.map((WebPortFoliosResult) => {
                    return (
                      <>
                        <div onClick={() => GetWebPortFoliosDetails(WebPortFoliosResult?._id)} className="add-fade-from-bottom gallery-item filtered_items cat_1 fade-from-bottom">
                          <div
                            variant="primary"
                            className="popup-link"
                            onClick={handleShow1}
                          >
                            <img
                              src={`${IMG_BASE_URL}${WebPortFoliosResult?.images}`}
                              style={{ width: "300px", height: "370px" }}
                              className="img-fluid w-100"
                              alt="psychicheroes"
                            />
                            <div className="image-details" style={{ display: "none" }}>
                              <h3>{WebPortFoliosResult?.title}</h3>
                              <p>
                                {WebPortFoliosResult?.description}
                              </p>
                              <div className="app_url">
                                <h5>Andriod</h5>
                                <button className="btn btn-outline-secondary">
                                  {WebPortFoliosResult?.andriod_link}
                                </button>
                                <h5>iOS</h5>
                                <button className="btn btn-outline-secondary">
                                  {WebPortFoliosResult?.ios_link}
                                </button>
                              </div>
                            </div>
                          </div>
                          <h6 className="headingsubtitle mb-0">{WebPortFoliosResult?.title}</h6>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </Tab>

            <Tab eventKey="contact" title="Mobile App Development">
              <div className="cases-list services-boxes">
                {
                  MobilePortFolios?.map((MobilePortFoliosResult) => {
                    return (
                      <>
                        <div onClick={() => GetMobilePortFoliosDetails(MobilePortFoliosResult?._id)} className="add-fade-from-bottom gallery-item filtered_items cat_1
                         fade-from-bottom">
                          <div
                            variant="primary"
                            className="popup-link"
                            onClick={handleShow2}
                          >
                            <img
                              src={`${IMG_BASE_URL}${MobilePortFoliosResult?.images}`}
                              style={{ width: "300px", height: "370px" }}
                              className="img-fluid w-100"
                              alt="Crossroadshelplines"
                            />
                            <div className="image-details" style={{ display: "none" }}>
                              <h3>{MobilePortFoliosResult?.title}</h3>
                              <p>
                                {MobilePortFoliosResult?.description}
                              </p>
                              <div className="app_url">
                                <h5>Andriod</h5>
                                <button className="btn btn-outline-secondary">
                                  {MobilePortFoliosResult?.andriod_link}
                                </button>
                                <h5>iOS</h5>
                                <button className="btn btn-outline-secondary">
                                  {MobilePortFoliosResult?.ios_link}
                                </button>
                              </div>
                            </div>
                          </div>
                          <h6 className="headingsubtitle mb-0">{MobilePortFoliosResult?.title}</h6>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </Tab>

          </Tabs>
        </section>
        {/* This is Award Section Here  */}
        <Award />

      </div>
      {/* This is a Footer Section Here? */}
      <Footer />
      {/* This is Whatsapp chat section here */}
      <Whatsappchat />
      <Link className="blantershow-chat" to="" title="Show Chat">
        <svg width="20" viewBox="0 0 24 24">
          <defs />
          <path
            fill="#eceff1"
            d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"
          />
          <path
            fill="#4caf50"
            d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"
          />
          <path
            fill="#fafafa"
            d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9
             0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2
              5.6 2.7 3.5 4.2 4.2 6.8 5
               .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
          />
        </svg>
      </Link>
      {/* <!-- The popup container For The Show details Of the All Category PortFolios --> */}
      <Modal show={show} onHide={handleClose} className="popup-container" size="xl">
        <Modal.Header closeButton className="Case_Study_Popup_Modals_header"><h4>Portfolio Details</h4> </Modal.Header>
        <Modal.Body className="popup-image">

          {" "}
          <div className="d-flex">
            <div>
              <img src={`${IMG_BASE_URL}${AllCategoryDetails?.images}`}
                style={{ width: "470px" }} alt="psychicheroes" />
            </div>
            <div>
              <h1 className="text-center font-weight-bold ">{AllCategoryDetails?.title}</h1>
              <p className="text-justify ml-2 popup-deatils">
                {AllCategoryDetails?.decripation}
              </p>
              <div className="app_url popup-deatils">
                <h3>Andriod</h3>
                <button className="btn btn-outline-secondary">
                  {AllCategoryDetails?.andriod_link}
                </button>
                <h3>iOS</h3>
                <button className="btn btn-outline-secondary">
                  {AllCategoryDetails?.ios_link}
                </button>
              </div>
            </div>
          </div>

        </Modal.Body>

      </Modal>
      {/* <!-- The popup container For The Show details Of the Webdevelopment PortFolios --> */}
      <Modal show={show1} onHide={handleClose1} size="xl" className="popup-container">
        <Modal.Header closeButton className="Case_Study_Popup_Modals_header"><h4>Portfolio Details</h4> </Modal.Header>
        <Modal.Body className="popup-image">
          {" "}
          <div className="d-flex">
            <div>
              <img src={`${IMG_BASE_URL}${WebPortFoliosDetails?.images}`}
                style={{ width: "470px", height: "300px" }} alt="psychicheroes" />
            </div>
            <div>
              <h1 className="text-center font-weight-bold ">{WebPortFoliosDetails?.title}</h1>
              <p className="text-justify ml-2 popup-deatils">
                {WebPortFoliosDetails?.description}
              </p>  
              <div className="app_url popup-deatils">
                <h3>Andriod</h3>
                <button className="btn btn-outline-secondary">
                  {WebPortFoliosDetails?.andriod_link}
                </button>
                <h3>iOS</h3>
                <button className="btn btn-outline-secondary">
                  {WebPortFoliosDetails?.ios_link}
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>
      {/* <!-- The popup container For The Show details Of the Mobile App Development  PortFolios --> */}
      <Modal show={show2} size="xl" onHide={handleClose2} className="popup-container">
        <Modal.Header closeButton className="Case_Study_Popup_Modals_header"><h4>Portfolio Details</h4> </Modal.Header>
        <Modal.Body className="popup-image">
          {" "}
          <div className="d-flex">
            <div>
              <img src={`${IMG_BASE_URL}${MobilePortFoliosDetails?.images}`} style={{ width: "470px", height: "300px" }} alt="psychicheroes" />

            </div>
            <div>
              <h1 className="text-center font-weight-bold ">{MobilePortFoliosDetails?.title}</h1>
              <p className="text-justify ml-2 popup-deatils">
                {MobilePortFoliosDetails?.description}
              </p>
              <div className="app_url popup-deatils">
                <h3>Andriod</h3>
                <button className="btn btn-outline-secondary">
                  {MobilePortFoliosDetails?.andriod_link}
                </button>
                <h3>iOS</h3>
                <button className="btn btn-outline-secondary">
                  {MobilePortFoliosDetails?.ios_link}
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  );
};

export default Portfolio;
