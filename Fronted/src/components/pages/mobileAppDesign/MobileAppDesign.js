import React,{useState,useEffect} from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import { Link, useParams } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
import axios from "axios";  
import { API_BASE_URL,IMG_BASE_URL } from "../../../config/ApiConfig";
const MobileAppDesign = () => {
  
  const {_id} = useParams();
  const [MobileDetails,setMobileDetails] = useState({});
  const GetMobileDetails = async ()=>{
    await axios.get(`${API_BASE_URL}/OurServicesMobile/getById/${_id}`).then((response)=>{
      setMobileDetails(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  console.log("WebMobileDetails",MobileDetails)
  useEffect(()=>{
    GetMobileDetails();
  },[_id])
  return (
    <div>
      {/* This is Header section here */}
      <NewHeader />
    
      {/* This is Social Media Section here */}
      <SocialMediaLogo />
      {/* This is Main Content here */}
      <div className="case-studies-page">
        <div className="mobile-menu-container fixed mobile transparent">
          <Link to="#" className="open-mobile-menu">
            <span></span>
          </Link>
        </div>
        <div className="service-page">
          <div className="mobile-menu-container fixed mobile transparent">
            <Link to="#" className="open-mobile-menu">
              <span></span>
            </Link>
          </div>
          <section className="page-header header-style-3">
            <div className="container">
              <div className="title">
                <h2>Services</h2>
                <h1>{MobileDetails?.title}</h1>
                <div className="service_description">
                  <p>
                   {MobileDetails?.description}
                  </p>
                </div>
              </div>

               <figure
                className="brand-title-img"
              > <img src ={`${IMG_BASE_URL}${MobileDetails?.images}`} 
              style={{width:"400px",objectFit:"cover",borderRadius:"10px"}}/></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                {MobileDetails?.sub_title}
                <br />{" "}
              </h2>
              <div className="container-left">
                <p>
                  {MobileDetails?.sub_description}
                </p>
              
                <p>&nbsp;</p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Contact us today
                    </Link>
                  </strong>{" "}
                  if you want to give your consumers a more efficient method to
                  engage with your company, reward loyalty, or if you just have
                  a brilliant app concept you want us to develop.
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
              <p>
                 <td dangerouslySetInnerHTML={{ __html: `${MobileDetails?.about_page}` }} />
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
              <Link to="contacu-us.html" className="btn yellow large">
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
        {/* This is Award section here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default MobileAppDesign;
