import React, { useEffect, useState } from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import brandimg from "../../../assets/images/brand-img.png";
import Award from "../../awards/Award";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import LatestBrndingProjects from "../../BrandingProjects/LatestBrandingProjects";
import { Link, useParams } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
import axios from "axios";
import { API_BASE_URL, IMG_BASE_URL } from "../../../config/ApiConfig";
const BrandImages = () => {
  const brandImg = {
    backgroundImage: `url(${brandimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const {_id} = useParams();
  const [GraphicsDetails,SetGraphicsDetails] = useState({})
  const GetGraphicsDetails = async()=>{
    await axios.get(`${API_BASE_URL}/OurServicesGraphics/getById/${_id}`).then((response)=>{
      SetGraphicsDetails(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  console.log("GraphicsDetails",GraphicsDetails)
  useEffect(()=>{
    GetGraphicsDetails();
  },[_id])
  return (
    <div>
      {/* This is a Header Section Here */}
      <NewHeader />
      {/* This is Social Media link Section */}
      <SocialMediaLogo />
      {/* This is a Brand Images Section Here */}
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
                <h1>{GraphicsDetails?.title}</h1>
                <div className="service_description">
                  <p>
                    {GraphicsDetails?.description}
                  </p>
                </div>
              </div>
              <figure className="brand-title-img" >
                <img  src={`${IMG_BASE_URL}${GraphicsDetails.images}`}/>
              </figure>
              <Link to="" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
               {GraphicsDetails?.sub_title}
              </h2>
              <div className="container-left">
                <p>
                  {GraphicsDetails?.sub_description} 
                </p>
              </div>
              <div className="container-right"></div>
            </div>

            {/* This is Latest Branding Projects Section here */}
            <LatestBrndingProjects />
            <div className="text">
              <div className="container">
              <p>
                 {/* {SEODetails.about_page} */}
                 <td dangerouslySetInnerHTML={{ __html: `${GraphicsDetails?.about_page}` }} />
                </p>
              </div>

              {/* <div className="container">
                <h2>Marketing services for a tailor-made provision</h2>
                <p>
                  For many businesses, creating a website and establishing a
                  brand is simply the tip of the iceberg, as there are many
                  other factors to consider in order to remain one step ahead of
                  your competitors. As well as our exceptional brand image
                  service, our experienced strategic, technical and creative
                  team can offer a service that is truly comprehensive, and
                  tailored precisely to your business’ precise requirements.
                  With this in mind, you won’t have to source each service you
                  require elsewhere and can rest assured that your business’
                  online presence is in highly capable and expert hands. So,
                  whether you seek a fully comprehensive marketing service that
                  encompasses branding, website development and all things SEO,
                  or just a one-off branding service, your search is over now
                  that you have discovered Parasme. At Parasme, we pride
                  ourselves on going that extra mile to ensure that your
                  business never misses a beat. With this in mind, we offer an
                  exceptional website management service to ensure that your
                  site remains up to date with all of the latest functions and
                  features. This, combined with our brand image service, ensures
                  that your site consistently remains professional, easy to
                  navigate and ahead of the game. To find out more about our
                  brand image service and how we can establish your company’s
                  physical and digital presence, get in touch using one of the
                  contact methods below. Our helpful team will be more than
                  happy to assist.
                </p>{" "}
              </div> */}

              {/* <div className="container">
                <h2>Why choose us?</h2>
                <p>
                  Established in 2014, Parasme first had Parasmes as a digital
                  company offering templated websites at highly affordable
                  prices. However, over the past years, we have gone from
                  strength to strength, and now pride ourselves on being one of
                  the leading branding &amp; marketing companies in the Middle
                  East, precisely in Beirut, Dubai, Damascus, Doha, and Riyadh.
                  Now, our dedicated team of strategic , creative and technical
                  experts can offer a fully comprehensive service that is
                  tailored precisely to your requirements. With this in mind, we
                  are the obvious ch oice for all of your marketing needs. We
                  love taking on a challenge, and no reque st is too big or
                  small for our talented and highly knowledgeable team of
                  experts. If you’re a new business wishing to establish
                  yourself in today’s competitive ma rket, why not also enlist
                  us for website design and development services? Ensuri ng that
                  your site is accessible across all devices, including
                  smartphone, tablet or desktop, is imperative to create a
                  seamless experience. Or, perhaps you’re l ooking to further
                  enhance your online presence with PPC and Facebook Ads? At Pa
                  rasme, our team possesses a wealth of knowledge to assist with
                  this, as well as much more. Included with our services is a
                  bespoke web applications provision, meaning that, whatever you
                  wish to have included on your site, we can create just that.
                  We understand the importance of maintaining a professional
                  image b oth on and offline, meaning we also offer stationery,
                  poster and brochure ser vices, as well as leaflets, flyers and
                  much more. With this in mind, your bus iness will have all it
                  needs to establish itself both digitally and physically.
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
              <Link
                to="https://parasmesoft.com/contact"
                className="btn yellow large"
              >
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </div>
      {/* This is a Award Section Here */}
      <Award />
      {/* This is a footer Section here */}
      <Footer />
      {/* This is Whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default BrandImages;
