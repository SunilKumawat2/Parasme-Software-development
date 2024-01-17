import React, { useEffect, useState } from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import { Link, useParams } from "react-router-dom";
import onlinemarketingImg from "../../../assets/images/online-marketing.png";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
import axios from "axios";
import { API_BASE_URL, IMG_BASE_URL } from "../../../config/ApiConfig";
const Onlinemarketing = () => {
  const onlinemarketingImgFunction = {
    backgroundImage: `url(${onlinemarketingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
   const [SEODetails,setSEODetails] = useState({});
  const {_id} = useParams();

  const GetSEODetails = async ()=>{
    await axios.get(`${API_BASE_URL}/SEO/getById/${_id}`).then((response)=>{
      setSEODetails(response.data.data);
    }).catch((error)=>{
      console.log(error)
    })
  }
  console.log("SEODetails",SEODetails)
  useEffect(()=>{
    GetSEODetails();

  },[_id])
  return (
    <div>
      {/* This is Header section here */}
      <NewHeader />
   
      {/* This is Social Media Section here */}
      <SocialMediaLogo />
      {/* This is Online marketing Section here */}
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
                <h1>{SEODetails?.title}</h1>
                <div className="service_description">
                  <p>
                 {SEODetails?.description}
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
              > <img src ={`${IMG_BASE_URL}${SEODetails.images}`} 
              style={{width:"400px",objectFit:"cover",borderRadius:"10px"}}/></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
               {SEODetails?.sub_title}
              </h2>
              <div className="container-left">
                <p>
                {SEODetails?.sub_description}
                </p>
                {/* <p>
                  In this day and age, digital marketing is the key to growing
                  your business, due to the daily increase of people occupying
                  the internet and opening social media accounts.
                </p>
                <p>
                  Anyone can create a website for their business; the real
                  challenge comes when you want to make a profit. At Parasme, we
                  offer a wide range of online marketing services including SEO,
                  PPC, and social media marketing.&nbsp;
                </p>
                <p>
                  <strong>
                    The online world is a fierce place where the competition
                    gets tougher by the day. We will help your business STAND
                    OUT, using the most proficient online tools and strategies.
                  </strong>
                </p> */}
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Book a meeting today.
                    </Link>
                  </strong>
                </p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                    
                    </strong>
                  </span>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <p>
                 {/* {SEODetails.about_page} */}
                 <td dangerouslySetInnerHTML={{ __html: `${SEODetails?.about_page}` }} />
                </p>
                {/* <p>
                  Effective marketing strategies include making sure that your
                  site ranks high in search engines, has an online presence
                  across all social media platforms, and uses banner advertising
                  - a form of online advertising that’s image-based.&nbsp;
                </p>
                <p>
                  Furthermore, it’s important to keep an eye on the users that
                  interact with your content, by sending them targeted ads via
                  email or displaying your ads directly onto the websites they
                  usually visit.&nbsp;
                </p>{" "}
                <h2>What’s an inbound lead?</h2>
                <p>
                  By definition, an inbound lead is when a company posts content
                  that’s specifically made for its target audience. A company
                  with a solid online marketing strategy knows exactly which
                  customers to target, spending less time on lead conversion
                  processes – the process of turning users into clients.
                </p>{" "} */}
              </div>
              {/* <div className="container">
                <h2>Track your ROI with Parasme</h2>
                <p>
                  <strong>
                    Online marketing relies heavily on tracking and analyzing.{" "}
                  </strong>
                  To know which marketing channel benefits your business the
                  most, you have to monitor the number of leads coming from all
                  the channels you’re using.&nbsp;
                </p>
                <p>
                  Parasme provides our customers with different analytics and
                  tracking services; whether you have an eCommerce store and
                  want to know how many purchases have been made on your online
                  shop, or you’re a business owner that wants to know how many
                  users filled forms or contacted you from your website.&nbsp;
                </p>
                <p>
                  Our analysis will show you if the interactions made with your
                  website came from social media, PPC, or SEO. We can even dive
                  further and try to locate the exact keywords, ads, or posts
                  that lead the customer to you. Having all this data makes it
                  easier for you to see the exact revenue every channel of
                  marketing brings to your business.&nbsp;
                </p>{" "}
              </div>
              <div className="container">
                <h2>
                  {" "}
                  Choosing the right online marketing channel is important
                </h2>
                <p>
                  Online marketing includes a variety of channels such as email
                  marketing, video advertising, influencer marketing, PPC
                  advertising, social media marketing, and more. Choosing the
                  marketing channel that fits your business the best can be
                  tricky.&nbsp;
                </p>
                <p>
                  Parasme offers a free-of-charge consultation for your company
                  to find the right marketing strategy that suits your brand and
                  financial plan. Working with us will give you full access to
                  every online marketing service we provide.
                </p>
                <p>
                  <strong>
                    Tell us how we can boost your online presence today!&nbsp;
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link style={{ textDecoration: "underline" }} to="/Contactus">
                      Get in touch!
                    </Link>
                  </strong>
                </p>{" "}
              </div> */}
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
              <Link to="/ContactUs" className="btn yellow large">
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

export default Onlinemarketing;
