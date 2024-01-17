import React, { useEffect, useState } from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import LatestBrndingProjects from "../../BrandingProjects/LatestBrandingProjects";
import { Link, useParams } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
import axios from "axios";
import { API_BASE_URL,IMG_BASE_URL } from "../../../config/ApiConfig";
const BusinessInformation = () => {
  const {_id} = useParams();
  const [WebDesignDetails,setWebDesignDetails] = useState({});
  const GetWebDesignDetails = async ()=>{
    await axios.get(`${API_BASE_URL}/OurServicesWebDesign/getById/${_id}`).then((response)=>{
      setWebDesignDetails(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  console.log("WebDesignDetails",WebDesignDetails)
  useEffect(()=>{
    GetWebDesignDetails();
  },[_id])
  return (
    <div>
      {/* This is Header section here */}
      <NewHeader />

      {/* This is Social Media Section here */}
      <SocialMediaLogo />
      {/*This is Business Information section here */}
      <div className="case-studies-page">
        <div className="mobile-menu-container fixed mobile transparent">
          <Link to="" className="open-mobile-menu">
            <span></span>
          </Link>
        </div>
        <div className="service-page">
          <div className="mobile-menu-container fixed mobile transparent">
            <Link to="" className="open-mobile-menu">
              <span></span>
            </Link>
          </div>
          <section className="page-header header-style-3">
            <div className="container">
              <div className="title services-title-2">
                <h2>Services</h2>
                <h1>{WebDesignDetails?.title}</h1>
                <div className="service_description">
                  <p>
                   {WebDesignDetails?.description}
                  </p>
                </div>
              </div>
               <figure
                className="brand-title-img"
              > <img src ={`${IMG_BASE_URL}${WebDesignDetails?.images}`} 
              style={{width:"400px",objectFit:"cover",borderRadius:"10px"}}/></figure>
              <Link to="" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
               {WebDesignDetails?.sub_title}
              </h2>
              <div className="container-left">
                <p>{WebDesignDetails?.sub_description}</p>
              </div>
              <div className="container-right"></div>
            </div>
            {/* This is Latest Branding Projects section here */}
            <LatestBrndingProjects />
            <div className="text">
              <div className="container">
                <p>
                 <td dangerouslySetInnerHTML={{ __html: `${WebDesignDetails?.about_page}` }} />
                </p>
              </div>
            </div>
          </article>
          <section className="call-to-action main-section style-1">
            <div className="container-left">
              <figure className="desktop"></figure>
            </div>
            <div className="container-right">
              <p>Book a meeting?</p>
              <h2 className="desktop">
                We’d love
                <br />
                to hear from you
              </h2>
              <h2 className="mobile">We’d love to hear from you</h2>
              <Link to="/Contactus" className="btn yellow large">
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
        {/* This is Award Section here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default BusinessInformation;
