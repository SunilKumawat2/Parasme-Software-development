import React, { useEffect, useState } from "react";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/main.css";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/responsive.css";
import Partner from "../../partner/Partner";
import Award from "../../awards/Award";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import Slider from "react-slick";
import NewHeader from "../../newHeader/NewHeader";
import Footer from "../../footer/Footer";
import axios from "axios";
import { API_BASE_URL, IMG_BASE_URL } from "../../../config/ApiConfig";
const About = () => {
  const [clientReview, setClientreview] = useState([]);
  const [ImagesSlider, setImagesSlider] = useState([]);
  const [TeamSlider, setteamSlider] = useState([]);
  const [PartnerSlider, setPartnerSlider] = useState([]);
  useEffect(() => {
    GetClientReview();
    GetImagesSlider();
    GetTeamSlider();
    GetPartnerSlider();
  }, []);
  const GetClientReview = async () => {
    await axios
      .get(`${API_BASE_URL}/get/client`)
      .then((response) => {
        setClientreview(response.data.clients);
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

  const GetTeamSlider = async () => {
    await axios
      .get(`${API_BASE_URL}/get/team`)
      .then((response) => {
        setteamSlider(response.data.team);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetPartnerSlider = async () => {
    await axios
      .get(`${API_BASE_URL}/partner/get`)
      .then((response) => {
        setPartnerSlider(response.data.partner);
      })
      .catch((error) => [console.log(error)]);
  };
  console.log(PartnerSlider);
  const slickSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // Oue Team images Slider
  const OurTeamImgSalider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // Our Team images Slider Next Button and Prev Button
  const OurteamImgSilderRef = React.createRef();
  const goToNextTeam = () => {
    OurteamImgSilderRef.current.slickNext();
  };
  const goToPrevTeam = () => {
    OurteamImgSilderRef.current.slickPrev();
  };
  // this Function for the Slider Next and Prev
  const sliderRef = React.createRef();
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleSwipe = (direction) => {
    // Handle your navigation state changes or other logic here
    console.log(`Swiped ${direction}`);
  };

  const OurClients = {
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
      {/* This is header Section here */}
      <NewHeader />
      <div className="about-page">
        <section className="hero main-section">
          <div className="container">
            <h1 className="hidden">About</h1>
            <div className="container-left">
              <h3 className="fade-in-sequence in-view">
                <span className="fade-in">Ambition.</span>{" "}
                <span className="fade-in">Talent.</span>{" "}
                <span className="fade-in">Love.</span>
              </h3>
              <h3 className="fade-in-sequence in-view">
                <span className="fade-in">Call it what you want.</span>
              </h3>
              <h2 className="fade-in-sequence fade-from-bottom in-view">
                <span className="fade-in">We call it Parasme.</span>
              </h2>
              <p className="fade-in-sequence in-view">
                <span className="fade-in">
                  Parasme is a brand strategy and marketing agency that brings
                  brands and culture together. With a belief that culture drives
                  commerce, we leverage shared values and ideas to inform
                  strategy and design, creating experiences that inspire life
                  and inspire action.
                </span>
              </p>
              <p className="fade-in-sequence in-view">
                <span className="fade-in">
                  Our specialty of connecting brand, culture, and commerce has
                  earned us a reputation for doing award-winning work across
                  multiple categories. Our work is driven by our mission and our
                  mission is this… we exist to create things people love.
                </span>
              </p>
              <Link to="" className="btn yellow">
                Contact us
              </Link>
            </div>
            {/* This is Social Media Section */}
            <SocialMediaLogo />
            <Link to="" className="scroll-down desktop"></Link>
            <div className="container-right">
              <figure></figure>
            </div>
          </div>
        </section>
        <section className="values main-section scroll-to">
          <div className="container-right animation">
            <ul className="push-up-sequence">
              <li className="creative push-title-up">
                <figure></figure>
                <div>
                  <h3>Creative</h3>
                  <p>
                    To us, creativity is problem solving, and we believe in
                    solving the impossible. We never settle for the first,
                    easiest, or quickest solution.
                  </p>
                </div>
              </li>
              <li className="bold push-title-up">
                <figure></figure>
                <div>
                  <h3>Bold</h3>
                  <p>
                    To make an impact in today's world, you have to be able to
                    put yourself out there.
                  </p>
                </div>
              </li>
              <li className="transparent push-title-up">
                <figure></figure>
                <div>
                  <h3>Transparent</h3>
                  <p>
                    As a creative agency, we stand by complete honesty in every
                    aspect of our relationship with you.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="container-left">
            <h2 className="fade-in">The values that define us.</h2>
          </div>
        </section>
        <section className="work main-section mt-5">
          <div className="container">
            <div className="img-block reveal">
              <figure></figure>
            </div>
            <div className="text">
              <h2 className="fade-in">Our Work</h2>
              <p className="fade-in">
                Take a look at what we've created and get inspired
              </p>
              <Link to="/CaseStudy" className="btn white">
                View Work
              </Link>
            </div>
          </div>
        </section>
        <section className="clients main-section">
          <div className="animation-sequence-1sd">
            <h2 className="fade-in">Our Clients</h2>
            <p className="fade-in">Brands we've worked with</p>
          </div>
          <Slider
            {...OurClients}
            className="client-list custom-navigation carousel custome-carousel
             add-fade-from-bottom fade-from-bottom"
          >
            {ImagesSlider?.map((ImagesSliderResult) => {
              return (
                <li>
                  <Link>
                    <img
                      src={`${IMG_BASE_URL}${ImagesSliderResult?.images}`}
                      alt="client"
                    />
                  </Link>
                </li>
              );
            })}
          </Slider>
        </section>
        <section className="partners main-section">
          <div className="animation-sequence-1">
            <h2 className="fade-in">Our Partners</h2>
            <p className="fade-in">
              These are the badges that complete our experience
            </p>
          </div>
          <ul className="animation-sequence-2">
            <Slider ref={sliderRef} {...slickSettings}>
              {PartnerSlider?.map((PartnerSliderResult) => {
                return (
                  <li className="fade-in">
                    <figure>
                      <img
                        src={`${IMG_BASE_URL}${PartnerSliderResult?.images}`}
                        style={{ width: "250px", height: "120px" }}
                        alt="googlePartner"
                      />{" "}
                    </figure>
                    <span>{PartnerSliderResult?.name}</span>
                  </li>
                );
              })}
            </Slider>
          </ul>
        </section>
        {/* This is a Partner Section  */}
        <Partner />
        {/* This is a Awards Sections  */}
        <Award />
      </div>
      {/* This is Footer Section here */}
      <Footer />
      {/* This is Whatsappchat Section here */}
      <Whatsappchat />
    </div>
  );
};

export default About;
