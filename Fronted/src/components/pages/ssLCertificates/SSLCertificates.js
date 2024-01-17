import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import SSLIntegrationImg from "../../../assets/images/SSL-Integration.png";
import { Link } from "react-router-dom";
import Award from "../../awards/Award";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const SSLCertificates = () => {
  const SSLIntegrationImgFunction = {
    backgroundImage: `url(${SSLIntegrationImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div>
      {/* This is Header section here */}
      <NewHeader />

      {/* This is Social Media Section here */}
      <SocialMediaLogo />
      {/* This is Main content page */}
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
                <h1>SSL Integration</h1>
                <div className="service_description">
                  <p>
                    It’s crucial for your business to have a highly secure
                    website to survive on the internet and provide a good user
                    experience. With the increase of hackers, websites
                    containing elements of data transfer risk having their
                    private and secret information stolen. Therefore, Parasme
                    constantly advises for an SSL certificate placement.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={SSLIntegrationImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                SSL Integration:
                <br /> Play it safe with SSL integration
              </h2>
              <div className="container-left">
                <p>
                  <span style={{ fontSize: "18pt" }}>
                    <strong>What is an SSL certificate?</strong>
                  </span>
                </p>
                <p>
                  Installing Secure Socket Layer (SSL) Certificates provide
                  small data files that trigger the security lock on the HTTPS
                  protocol and set up a safe connection between a web server and
                  a customer’s browser.&nbsp;
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Parasme’s SSL Integration services</h2>
                <p>
                  We provide a diverse range of SSL certificates; we hook you up
                  with the right fit after analyzing your business needs and
                  goals. From basic protection to the strongest SSL
                  certificates, our experts will offer your company’s website a
                  complete registration and application of the transport layer
                  protocol.&nbsp;
                </p>
                <p>
                  <Link style={{ textDecoration: "underline" }} to="/Contactus">
                    Book a meeting
                  </Link>
                </p>{" "}
              </div>
              <div className="container">
                <h2>The importance of SSL</h2>
                <p>
                  When people engage with your website, they might be asked to
                  create a profile or register details about their preferred
                  payment method. If your website doesn’t have an SSL
                  Certificate, your customer’s information will be at risk of
                  being corrupted or stolen. The prime role of an SSL
                  certificate is to encrypt your users’ personal information
                  like credit card numbers or passwords and keep them
                  safe.&nbsp;
                </p>
                <p>
                  Another benefit of having an SSL Certificate is that they
                  prevent your business and your clients from being a victim of
                  phishing attacks. Phishing emails are sent illegally from spam
                  users that pose as your website to try and get sensitive
                  information from people. An SSL Certificate hinders the
                  scammers’ job because your website becomes very hard to
                  impersonate.&nbsp;
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "28pt" }}>
                      “Delivering a reliable user experience is Parasme’s number
                      one priority”
                    </span>
                  </strong>
                </p>{" "}
              </div>
              <div className="container">
                <h2>The benefits that SSL adds to your website:</h2>
                <p>
                  1-&nbsp; <strong>Authentication:</strong> SSL Certificates
                  assure that the servers you connect with are real and not
                  spammers, hackers, or viruses.&nbsp;
                </p>
                <p>
                  2-&nbsp; <strong>Data reliability: </strong>SSL Certificates
                  ensure that the data exchanged between your servers and
                  clients’ browsers remains safe and untouched by any
                  malware.&nbsp;
                </p>
                <p>
                  3-&nbsp; <strong>Encryption:</strong> SSL Certificates ensure
                  that the communication between your website server and users’
                  browsers stays hidden and confidential from online hackers.
                </p>
                <p>
                  4-&nbsp; <strong>SEO Ranking:</strong> Websites that utilize
                  HTTPS with SSL Certificates get an increase in their Google
                  ranking and will turn up in a higher position on search
                  engines.&nbsp;
                </p>
                <h2>Why Parasme?</h2>
                <p>
                  <strong>
                    Parasme has been a powerful network of visionary experts
                    ever since its foundation in 2014.
                  </strong>{" "}
                  Our skilled experts go above and beyond to provide you with a
                  wide range of services such as SEO, PPC, graphic design, and
                  social media to deliver the message your brand wants to
                  send.&nbsp;
                </p>
                <p>
                  They will thoroughly go through your business goals and
                  requirements before tackling your issues and finding helpful
                  solutions to solve them. For example, if your customers have
                  to share their private information on your website, you need
                  to own SSL Certificates that guarantee they’re fully
                  protected. Parasme follows a fast and straightforward protocol
                  of applying sure-fire SSL Certificates for your website.
                </p>
                <p>
                  <strong>
                    Are you interested to know more about getting an SSL
                    Certificate for your website?
                  </strong>
                </p>
                <p>
                  <Link style={{ textDecoration: "underline" }} to="/Contactus">
                    <strong>Get in touch</strong>
                  </Link>
                </p>{" "}
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
          {/* this is Award Section here */}
          <Award />
        </div>
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default SSLCertificates;
