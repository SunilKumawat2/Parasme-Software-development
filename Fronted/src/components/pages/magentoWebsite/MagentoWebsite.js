import React,{useState,useEffect} from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Award from "../../awards/Award";
import { Link } from "react-router-dom";
import magentowebsiteImg from "../../../assets/images/magento-website-development.png";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
import { useParams } from "react-router-dom";
import { API_BASE_URL,IMG_BASE_URL} from "../../../config/ApiConfig";
import axios from "axios";
const MagentoWebsite = () => {
  const magentowebsiteImgFunction = {
    backgroundImage: `url(${magentowebsiteImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const {_id} = useParams();
  const [WebEcommerceDetails,setEcommerceDetails] = useState({});
  const GetEcommerceDetails = async ()=>{
    await axios.get(`${API_BASE_URL}/OurServicesEcommerce/getById/${_id}`).then((response)=>{
      setEcommerceDetails(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  console.log("WebEcommerceDetails",WebEcommerceDetails)
  useEffect(()=>{
    GetEcommerceDetails();
  },[_id])
  return (
    <div>
      {/* This is Header section here */}
      <NewHeader />
      
      {/* This is Social Media Section here */}
      <SocialMediaLogo />
      {/* This is Magento Webite Development section here */}
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
                <h1>{WebEcommerceDetails.title}</h1>
                <div className="service_description">
                  <p>
                   {WebEcommerceDetails?.description}
                  </p>
                </div>
              </div>
                <figure
                className="brand-title-img"
              > <img src ={`${IMG_BASE_URL}${WebEcommerceDetails?.images}`} 
              style={{width:"400px",objectFit:"cover",borderRadius:"10px"}}/></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
               {WebEcommerceDetails.sub_title}
              </h2>
              <div className="container-left">
                <p>
                 {WebEcommerceDetails.sub_description}
                </p>
                
                <p>
                  <Link style={{ textDecoration: "underline" }} to="/Contactus">
                    <strong>Book a meeting NOW with Parasme</strong>
                  </Link>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
              <p>
                 <td dangerouslySetInnerHTML={{ __html: `${WebEcommerceDetails?.about_page}` }} />
                </p>
              </div>
              {/* <div className="container">
                <h2>Special custom-made elements</h2>
                <p>
                  Aside from the existing main features, our team can improve
                  your Magento websites with a few more customizable
                  components.&nbsp;
                </p>
                <p>
                  <strong>SEO friendly&nbsp;</strong>
                </p>
                <p>
                  Magento websites allow you to effectively manage indexing,
                  duplicate content, page traffic, landing pages, and more. You
                  can also attach descriptions or paragraphs with your products
                  to boost your website traffic through search engines.&nbsp;
                </p>
                <p>
                  At Parasme, our web development team will provide you with SEO
                  optimization and make sure that your website ranks high on
                  search engines, is easily discoverable, and attracts a lot of
                  new clients.
                </p>
                <p>
                  <strong>Google Shopping&nbsp;</strong>
                </p>
                <p>
                  Including your website in Google Shopping will help you find
                  more clients to target and allow you to create unique Google
                  Shopping ads that will help raise awareness of your business.
                  Moreover, people are more likely to engage with visually
                  pleasing ads that embody your brand and display your products
                  than basic worded ads.&nbsp;
                </p>
                <p>
                  Using Google Shopping will give you the benefit of featuring
                  your products via Google ads. It’s a highly effective tool to
                  promote your products and brand to a global audience. It will
                  also establish your professionalism by forming a trust bond
                  between you and your customers, making them feel more
                  comfortable, and ultimately convincing them to buy your
                  products.
                </p>
                <p>
                  <strong>Auto-Generated email replies&nbsp;</strong>
                </p>
                <p>
                  You can optimize your marketing strategy by programming your
                  Magento system to send personalized updates and newsletters to
                  your clients constantly.
                </p>
                <p>
                  <strong>Loyalty Points feature</strong>
                </p>
                <p>
                  Applying a loyalty points system with Magento will increase
                  your online store sales. Clients will be encouraged to buy
                  more products to collect more points and get more rewards.
                </p>
                <p>&nbsp;</p>
              </div>
              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  Magento websites developed by Parasme are simple to upgrade,
                  navigate, improve, manage, and can be adapted to keep up with
                  the continuous growth of your company.&nbsp;
                </p>
                <p>
                  <strong>
                    Getting through exceptional obstacles to transform your
                    business into a big success story is what Parasme is known
                    for!&nbsp;
                  </strong>
                </p>
                <p>
                  No matter the nature of the task or the size of your company,
                  our Magento developers will always provide you with an
                  aesthetically pleasing, easy to navigate, interactive, and
                  professional Magento website specifically designed to express
                  your brand’s message and goals.&nbsp;
                </p>
                <p>
                  We always want what’s best for our clients. Our web design
                  experts will use next-level coding and programming to build
                  your e-commerce website from the ground up and make it highly
                  functional. Our personalized premium marketing and advertising
                  services go hand in hand with our web development services to
                  fulfill all your brand’s needs.
                </p>
                <p>
                  Our professional, user-friendly, and eye-catching bespoke web
                  design outlines are based on industry observations, detailed
                  conversion research, and complete consumer analysis. They’re
                  tailored around seamless UX that provides the best shopping
                  experience for your customers from the first moment they visit
                  your website to the final checkout step.&nbsp;
                </p>
                <p>
                  We’ll implement a highly interactive feature on your company
                  website that’ll boost your business customer service, keeping
                  you up to date with your clients answering their questions and
                  claims.
                </p>
                <p>
                  Being one of the best branding agencies in the Middle East,
                  Parasme provides a myriad of services that will optimize your
                  marketing strategies and make your brand triumph over its
                  competitors.&nbsp;
                </p>
                <p>
                  <strong>
                    Put our Magento website development expertise to use, and
                    let us help your online business thrive!
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Get in touch today
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

export default MagentoWebsite;
