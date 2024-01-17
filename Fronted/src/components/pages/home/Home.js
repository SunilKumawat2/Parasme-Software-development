import React, { useRef, useEffect, useState } from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import logo from "../../../assets/images/Logo.png";
import Imageabout from "../../../assets/images/image-about.png";
import OutsourcingServices from "../../../assets/images/Outsourcing-Services.jpg";
import backgroundVideo from "../../../assets/videos/video1.mp4";
import { Link, useParams } from "react-router-dom";
import Partner from "../../partner/Partner";
import Award from "../../awards/Award";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/slick.css";
import Slider from "react-slick";
import axios from "axios";
import { API_BASE_URL, IMG_BASE_URL } from "../../../config/ApiConfig";
const Home = () => {
  const [ImagesSlider, setImagesSlider] = useState([]);
  const [Technology, setTechnology] = useState([]);
  const [clientReview, setClientreview] = useState([]);
  const [PortFolios, setPortFolios] = useState([]);
  const [DevelopmentServices, setDevelopmentServices] = useState([]);
  const [DevelopmentServicesDetails, setDevelopmentServicesDetails] = useState([]);
  const { _id } = useParams();
  useEffect(() => {
    GetImagesSlider();
    GetTechnology();
    GetClientReview();
    GetPortFolios();
    GetDevelopmentServices();
    GetDevelopmentServicesDetails(_id);
  }, [_id]);

  const GetTechnology = async () => {
    await axios
      .get(`${API_BASE_URL}/technology/get`)
      .then((response) => {
        setTechnology(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetImagesSlider = async () => {
    await axios
      .get(`${API_BASE_URL}/slider/get`)
      .then((response) => {
        setImagesSlider(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetClientReview = async () => {
    await axios
      .get(`${API_BASE_URL}/client/get`)
      .then((response) => {
        setClientreview(response.data.clients);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetPortFolios = async () => {
    await axios
      .get(`${API_BASE_URL}/portfolios/get`)
      .then((response) => {
        setPortFolios(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetDevelopmentServices = async () => {
    await axios
      .get(`${API_BASE_URL}/DevelopmentServices/get`)
      .then((response) => {
        setDevelopmentServices(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const GetDevelopmentServicesDetails = async (_id) => {
    console.log('_id', _id)
    await axios
      .get(`${API_BASE_URL}/DevelopmentServicesDeatils/getById/${_id}`)
      .then((response) => {
        setDevelopmentServicesDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("DevelopmentServicesDetails", DevelopmentServicesDetails)

  const slickSettings = {
    slidesToShow: 3, // Display 3 slides at a time
    slidesToScroll: 2, // Move 2 slides at a time
    swipeToSlide: true,
    touchThreshold: 10,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: false, // Set centerMode to false
    centerPadding: 0, // Set centerPadding to 0
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // this Function for the Slider Next and Prev
  const sliderRef = React.createRef();
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  // For the video Auto play reunning
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, []);

  const handleSwipe = (direction) => {
    // Handle your navigation state changes or other logic here
    console.log(`Swiped ${direction}`);
  };

  const dataSlick = {
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1300,
    swipe: true,
    onSwipe: (event) => {
      const direction = event.direction === "left" ? "left" : "right";
      handleSwipe(direction);
    },
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* This is a Header Section Here */}
      <Header />
      {/* This is a Home Page Section Here */}
      <div className="homepage">
        <section className="header main-section menu_envelop videos-play-se video-background">
          <video ref={videoRef} autoplay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <Link to="/" className="logo">
            <img src={logo} className="img-fluid" alt="logo" />
          </Link>
          <h1 className="hidden">Parasme</h1>
          {/* This is Social Media Section here */}
          <SocialMediaLogo />
          <Link to="" className="scroll-down"></Link>
          <div className="circle-container-1 circle-container">
            <div className="bg bg-1 animate-this"></div>
          </div>
          <div className="circle-container-2 circle-container">
            <div className="bg bg-2 animate-this"></div>
          </div>
          <div className="circle-container-3 circle-container">
            <div className="bg bg-3 animate-this"></div>
          </div>
        </section>
        <section className="clientss main-sections bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 justify-content-md-center">
                <Slider
                  {...dataSlick}
                  className="client-list custom-navigation carousel 
                  custome-carousel add-fade-from-bottom fade-from-bottom col-md-12"
                >
                  {ImagesSlider?.map((ImagesSliderResult) => {
                    return (
                      <li>
                        <Link>
                          <img
                            src={`${IMG_BASE_URL}${ImagesSliderResult?.images}`}
                            className="rounded"
                            style={{ width: "200px", height: "100px" }}
                            alt="client2"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <div className="feature-images-wrapper section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <!-- section-title-wrap Start --> */}
                <div className="section-title-wrap text-center pt-5">
                  <div className="awards-titles pb-4">
                    <h1 className="headingtitle text-white">
                      Our Web & App Development Services
                    </h1>
                    <p className="headingsubtitle text-white textwhite">
                      A well-designed and user-friendly app or website can
                      significantly improve customer satisfaction, leading to
                      increased engagement and higher retention rates.
                    </p>
                  </div>
                </div>
                {/* <!-- section-title-wrap Start --> */}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="feature-images__one">
                  <div className="row">
                    {/* <!-- ht-box-icon Start --> */}

                    {
                      DevelopmentServices?.map((DevelopmentServicesResult) => {
                        return (
                          <div className="col-lg-4 col-md-6">
                            <div className="ht-box-images style-01">
                              <div className="image-box-wrap">
                                <div className="box-image">
                                  <img
                                    className="img-fulid"
                                    src={`${IMG_BASE_URL}${DevelopmentServicesResult?.images}`}
                                    alt="icons1"
                                  />
                                </div>
                                <div className="content">
                                  <h5 className="heading">{DevelopmentServicesResult?.main_title} </h5>
                                  <div className="text">
                                    {DevelopmentServicesResult?.short_description}
                                  </div>
                                  <div className="circle-arrow">
                                    <div className="middle-dot"></div>
                                    <div className="middle-dot dot-2"></div>
                                    <Link to="">
                                      <i
                                        className="fa fa-arrow-right"
                                        aria-hidden="true"
                                      ></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div 
                                className="back_hover"
                                onMouseOver={() =>
                                  GetDevelopmentServicesDetails(DevelopmentServicesResult?._id)}
                              >
                                {
                                  DevelopmentServicesDetails?.map((DevelopmentServicesDetailsResult) => {
                                    return (
                                      <div    >
                                        <ul key={DevelopmentServicesResult?._id}>
                                          <li>
                                            <Link to="" target="_blank">
                                              <i
                                                className="fa fa-check"
                                                aria-hidden="true"
                                              ></i>{" "}
                                              {DevelopmentServicesDetailsResult?.title}
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>

                                    )
                                  })
                                }

                                {/* <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Cake PHP
                                    </Link>
                                  </li> */}
                                {/* <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      CodeIgniter/Ci
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Yii
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Magento
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Shopify
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Opencart
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Drupal
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Moodle
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Wordpress
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="" target="_blank">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Woo Commerce
                                    </Link>
                                  </li> */}

                              </div>
                              
                            </div>
                          </div>
                        )
                      })
                    }

                    {/* <!-- ht-box-icon End --> */}

                    <div className="col-lg-4 col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      {/* <div className="ht-box-images style-01">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              className="img-fulid"
                              src={icons2}
                              alt="icons2"
                            />
                          </div>
                          <div className="content">
                            <h5 className="heading">Full stack</h5>
                            <div className="text">
                              Full-stack development refers to the practice of
                              working on both the front-end and back-end aspects
                              of web development. A full-stack developer is
                              proficient in both front-end technologies (HTML,
                              CSS, JavaScript, etc.) and back-end technologies
                              (server-side scripting, databases, server
                              management, etc.).
                            </div>
                            <div className="circle-arrow">
                              <div className="middle-dot"></div>
                              <div className="middle-dot dot-2"></div>
                              <Link to="">
                                <i
                                  className="fa fa-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="back_hover">
                          <h4>Full Stack</h4>
                          <ul>
                            <li>
                              {" "}
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Angular JS
                              </Link>
                            </li>
                            <li>
                              <Link to="/" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                Node JS
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                React JS
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      {/* <div className="ht-box-images style-01">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              className="img-fulid"
                              src={icons3}
                              alt="icons3"
                            />
                          </div>
                          <div className="content">
                            <h5 className="heading">Mobile App Development</h5>
                            <div className="text">
                              Mobile app development refers to the process of
                              creating applications that run on mobile devices,
                              such as smartphones and tablets. Mobile apps can
                              be developed for various platforms, including iOS
                              (Apple devices) and Android (Google's operating
                              system).
                            </div>
                            <div className="circle-arrow">
                              <div className="middle-dot"></div>
                              <div className="middle-dot dot-2"></div>
                              <Link to="">
                                <i
                                  className="fa fa-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="back_hover">
                          <h4>Mobile App Development</h4>
                          <ul>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Android
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                iOS
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                React Native
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Flutter
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      {/* <div className="ht-box-images style-01">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              className="img-fulid"
                              src={icons4}
                              alt="icons4"
                            />
                          </div>
                          <div className="content">
                            <h5 className="heading">Digital Marketing</h5>
                            <div className="text">
                              SEO focuses on optimizing a website's content and
                              structure to improve its visibility in search
                              engine results. The goal is to increase organic
                              (non-paid) traffic by ranking higher for relevant
                              search queries.
                            </div>
                            <div className="circle-arrow">
                              <div className="middle-dot"></div>
                              <div className="middle-dot dot-2"></div>
                              <Link to="">
                                <i
                                  className="fa fa-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="back_hover">
                          <h4>Digital Marketing</h4>
                          <ul>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                SEO
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                SMO
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                PPC
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                SMM
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Content Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      {/* <div className="ht-box-images style-01">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              className="img-fulid"
                              src={icons5}
                              alt="icons5"
                            />
                          </div>
                          <div className="content">
                            <h5 className="heading">Salesforce Development</h5>
                            <div className="text">
                              Salesforce development refers to the process of
                              customizing, extending, and building applications
                              on the Salesforce platform. Salesforce is a
                              cloud-based Customer Relationship Management (CRM)
                              system that helps businesses manage their customer
                              data, sales, marketing, and service operations.
                            </div>
                            <div className="circle-arrow">
                              <div className="middle-dot"></div>
                              <div className="middle-dot dot-2"></div>
                              <Link to="">
                                <i
                                  className="fa fa-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="back_hover">
                          <h4>Salesforce Development</h4>
                          <ul>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Salesforce
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Implementation
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Integration
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Migration
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Lighting
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* <!-- ht-box-icon Start --> */}
                      {/* <div className="ht-box-images style-01">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img
                              className="img-fulid"
                              src={icons6}
                              alt="icons6"
                            />
                          </div>
                          <div className="content">
                            <h5 className="heading">eCommerce & Marketing</h5>
                            <div className="text">
                              eCommerce and marketing are two interconnected
                              elements that play a crucial role in the success
                              of online businesses. Let's explore each of them
                              in more detail:
                            </div>
                            <div className="circle-arrow">
                              <div className="middle-dot"></div>
                              <div className="middle-dot dot-2"></div>
                              <Link to="">
                                <i
                                  className="fa fa-arrow-right"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="back_hover">
                          <h4>eCommerce &amp; Marketing</h4>
                          <ul>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                eCommerce
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                Magento
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                Woo Commerce
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>{" "}
                                Shopify
                              </Link>
                            </li>
                            <li>
                              <Link to="" target="_blank">
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                                Opencart
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                      {/* <!-- ht-box-icon End --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="intro scroll-to main-section">
          <div className="container-left">
            <h2 className="add-fade-from-bottom">
              We create experiences & customer journeys
            </h2>
            <p>
              We allow you to focus on your business while we keep the gears
              running smoothly in the background.
            </p>
            <Link to="/about" className="btn yellow">
              About us
            </Link>
          </div>
          <div className="container-right">
            <div className="img-block">
              <figure className="partner-portfo">
                <img src={Imageabout} alt="Imageabout" />
              </figure>
            </div>
          </div>
        </section>
        <section className="about main-section">
          <div className="background"></div>
          <div className="container-left">
            <p className="add-fade-in">
              We provide bespoke solutions that bridge the gap between
              commercial possibilities and creative resolution, while delivering
              effectiveness for our clients.
            </p>
            <figure className="desktop"></figure>
          </div>
          <div className="container-right">
            <ul>
              <li className="add-push-title-up">
                <i>01</i>
                <h3>Strategic Branding</h3>
              </li>
              <li className="add-push-title-up">
                <i>02</i>
                <h3>Website Design</h3>
              </li>
              <li className="add-push-title-up">
                <i>03</i>
                <h3>Mobile Apps</h3>
              </li>
              <li className="add-push-title-up">
                <i>04</i>
                <h3>Marcom</h3>
              </li>
              <li className="add-push-title-up">
                <i>05</i>
                <h3>AR/VR</h3>
              </li>
            </ul>
            <p>
              Whatever the challenge, we always deliver a solution to help you
              <br />
              Stand Out !
            </p>
            <Link to="" className="btn white medium">
              Our Services
            </Link>
          </div>
        </section>
        <section className="call-to-action main-section style-1 pb-5 my-5">
          <div className="container-left">
            <div className="img-block">
              <img
                src={OutsourcingServices}
                width="100% rounded"
                alt="OutsourcingServices"
              />
            </div>
          </div>
          <div className="container-right hireingsection">
            <p className="hireings">Hire Experienced Software Engineers</p>
            <h2 className="add-fade-from-bottom">
              Resource Outsourcing Services
            </h2>
            <p>
              Choose your dream team of technology experts and software
              programmers at Citta's dedicated technological development center.
            </p>
            <div className="buttnes">
              <Link to="" className="btn yellow">
                Explore More
              </Link>
              <Link to="" className="btn black border">
                BROCHURE{" "}
                <i className="fa fa-cloud-download" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>
        <section className="work our_portfolio_sec">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6">
                <h2>We Work with Top Giants in the World</h2>
                <p className="subtitle">
                  We have helped some renown global business giants with
                  sustainable, cost saving, revenue generating, and cutting-edge
                  technology solutions.
                </p>
              </div>
              <div className="col-md-6 text-end">
                <Link to="/Portfolio" className="btn yellow large ms-auto">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="row box_top101 position-relative">
              {PortFolios?.map((PortFoliosResult, index) => {
                return (
                  <div className="col-md-6 portfolio1210" key={index}>
                    <div className="portfolio-boxes">
                      <div className="portfolio-banner-images">
                        <img
                          src={`${IMG_BASE_URL}${PortFoliosResult?.images}`}
                          alt="PsychicHeros"
                        />
                      </div>
                      <div className="overlay-content">
                        <div className="d-flex gap-5">
                          <div className="number_portfolio">0{index + 1}</div>
                          <div>
                            <h2>{PortFoliosResult?.title}</h2>
                            <p className="subtitle">
                              {PortFoliosResult?.decription}
                            </p>
                            <div className="d-flex gap-3">
                              <Link to={PortFoliosResult?.android_link}>
                                <i
                                  className="fab fa-android"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                              <Link to={PortFoliosResult?.ios_link}>
                                <i
                                  className="fab fa-apple"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                              <Link to={PortFoliosResult?.web_link}>
                                <i
                                  className="fa fa-desktop"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="work main-section bg-black-box position-relative mt-5">
          <h2 className="text-white">What our clients say</h2>
          <p className="subtitle text-secondary">
            We have satisfied clients and their reviews are positive that
            motivates our team members to
            <br />
            increase the concern towards customer delight.
          </p>
          <ul
            className="custom-navigation carousel custome-carousel projects-carousel
                add-fade-from-bottom fade-from-bottom"
          >
            <Slider ref={sliderRef} {...slickSettings}>
              {clientReview?.map((clientResult) => {
                return (
                  <li>
                    <div className="testimonial-slider__one">
                      <div className="testimonial-slider--info">
                        <div className="testimonial-slider__author">
                          <div className="testimonial-rating">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <div className="author-info">
                            <h6 className="name">{clientResult?.name}</h6>
                            <span className="designation">
                              {clientResult?.technology}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-slider__text">
                        {clientResult?.paragraph}
                      </div>
                    </div>
                  </li>
                );
              })}
            </Slider>
          </ul>
          <div className="carousel-navigation carouseltopnav">
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

          <div class="our_technology">
            <h3 class="text-white">
              Get Services Built with the Latest Robust Technologies
            </h3>
            <p class="subtitle text-secondary">
              Parasme Software & Technology Solutions uses cutting-edge
              technologies to develop unique solutions for your business. Our
              team’s deep expertise covers a vast range of technologies, making
              us stand above other companies.
            </p>
            <div className="row ParasmeTechnolgy">
              {Technology?.map((TechnologyResult) => {
                return (
                  <div className="col-md-3 col-6">
                    <div className="technology-box">
                      <button
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Ios"
                      >
                        <img
                          src={`${IMG_BASE_URL}${TechnologyResult?.images}`}
                          className="img-fluid"
                          alt="appleIcon"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* This is a Partner Section  */}
        <Partner />
        {/* This is a Awards Sections  */}
        <Award />
      </div>
      
      {/* This is Footer section here */}
      <Footer />
      {/* This is Whatsapp Chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default Home;
