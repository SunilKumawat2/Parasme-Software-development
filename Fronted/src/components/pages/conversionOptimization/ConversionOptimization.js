import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import conversionoptimizationImg from "../../../assets/images/conversion-optimization.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const ConversionOptimization = () => {
  const conversionoptimizationImgFunction = {
    backgroundImage: `url(${conversionoptimizationImg})`,
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
      {/* this is Online Banners section here */}
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
                <h1>Conversion optimization</h1>
                <div className="service_description">
                  <p>
                    One of the biggest challenges a business might face is
                    having good website traffic, yet not actual customers. If
                    your business is dealing with this issue, it means that your
                    website isn’t capable of converting web traffic into
                    profitable clients, and that you need to work on conversion
                    optimization.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={conversionoptimizationImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Conversion optimization:
                <br /> Make a profit out of web traffic
              </h2>
              <div className="container-left">
                <p>
                  Conversion optimization makes sure that the traffic your
                  website is getting turned into a good profit, saving your
                  business from losing money from potential clients.&nbsp;
                </p>
                <p>
                  In addition, greater traffic means greater ranking on search
                  engines. Your website will become more relevant as more people
                  spend time on it.&nbsp;
                </p>
              </div>
              <div className="container-right"></div>
            </div>

            <div className="text">
              <div className="container">
                <h2>Landing pages: the pillar of conversion optimization</h2>
                <p>
                  A landing page is generally the first page you see after
                  clicking on a website’s link. It’s the foundation that drives
                  both PPC and SEO.&nbsp;
                </p>
                <p>
                  Your business’s landing page has to be brilliantly captivating
                  for the user to spend more time, instead of closing it
                  promptly.&nbsp;
                </p>
                <p>
                  Many important factors encourage users to stay on your
                  website:
                </p>
                <p>
                  ● &nbsp; &nbsp; &nbsp;Compelling Unique Selling Propositions
                  (USPs)
                </p>
                <p>
                  ● &nbsp; &nbsp; &nbsp;Elements that promote trust in your
                  website&nbsp;
                </p>
                <p>● &nbsp; &nbsp; &nbsp;Persuasive call-to-action (CTA)</p>
                <p>
                  ● &nbsp; &nbsp; &nbsp;Clear answers to the user’s questions
                </p>
                <p>
                  ● &nbsp; &nbsp; &nbsp;Evident solutions for the user’s needs
                </p>
                <p>
                  When used correctly, aesthetic visuals can be a great
                  marketing tool, and not just a way to make your website appear
                  more eye-catching. Products that are professionally shot will
                  add more value to your business; even increase your sales
                  significantly.
                </p>
                <p>
                  The wordings and the titles that you use, play a huge part in
                  motivating visitors to buy your company’s product or service.
                  Badly spaced paragraphs with poor grammar and boring content
                  will discourage users from using your services, making them
                  leave your website.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: ":14pt" }}>
                      Convert your visitors to buyers -
                      <Link
                        style={{ textDecoration: "underline" }}
                        to="/Contactus"
                      >
                        Book a meeting with Parasme.
                      </Link>
                    </span>
                  </strong>
                </p>{" "}
                <h2>Using website funnels</h2>
                <p>
                  How you engineer your site makes a huge difference on
                  conversion rates. A website funnel consists of web traffic
                  that goes directly from one point to another, through an order
                  of actions that leads to a specific goal, for example from the
                  moment you start shopping online until you arrive to the
                  checkout page.&nbsp;
                </p>
                <p>
                  Creating pages and funnels that are easy to navigate with
                  clear instructions is essential to convert visitors into
                  buying clients.
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "28pt" }}>
                      “At Parasme, we offer the best marketing strategies that
                      increase conversion rates”
                    </span>
                  </strong>
                </p>{" "}
              </div>

              <div className="container">
                <h2>Efficient conversion optimization</h2>
                <p>
                  At Parasme, we have a professional team of neuromarketers and
                  funnel experts that analyze, and study your target audience
                  before designing the architecture of your website. They
                  conduct research, analyze competitors and gather information
                  about your businees to understand the thought process of your
                  consumers to create a web page that matches the needs of your
                  target audience perfectly.&nbsp;
                </p>
                <p>
                  Our team will thoroughly evaluate the layout and structure of
                  your site’s funnels, along with your client’s journey to get
                  your business the highest conversion rates possible.&nbsp;
                </p>
                <p>
                  If your company already has a website, and you need assistance
                  to make an efficient business tool out of it, our marketing
                  team is happy to offer you their expertise.&nbsp;
                </p>
                <p>
                  They will take a look and propose smart upgrades that will
                  increase your site’s profit.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>
                      <Link
                        style={{ textDecoration: "underline" }}
                        to="/Contactus"
                      >
                        Get in touch with us, and let us help you by optimizing
                        your conversions.
                      </Link>
                    </span>
                  </strong>
                </p>{" "}
              </div>
              <div className="container"></div>
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

export default ConversionOptimization;
