import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import searchnetworkImg from "../../../assets/images/google-network.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const DisplayNetwork = () => {
  const searchnetworkImgFunction = {
    backgroundImage: `url(${searchnetworkImg})`,
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
      {/* this is Display network  section here */}
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
                <h1>Display Network</h1>
                <div className="service_description">
                  <p>
                    Google display network is the collection of apps, websites,
                    and videos where your ads play, in order to raise awareness
                    of your business and lure future clients.&nbsp;
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={searchnetworkImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Display Network:
                <br />{" "}
              </h2>
              <div className="container-left">
                <p>
                  Companies use multiple captivating advertising formats such as
                  images, banners, animated content, and rich texts that deliver
                  their brand’s message to website visitors.
                </p>
                <p>
                  You can use Google Display Network to show these ads to your
                  target audience, by placing them anywhere on the internet.
                  From websites to videos, apps, and blogs that your prospective
                  clients use, or are related to the products, and services you
                  provide.
                </p>
                <p>&nbsp;</p>
              </div>
              <div className="container-right"></div>
            </div>

            <div className="text">
              <div className="container">
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “The sky's the limit when creating your ads, unleash your
                      creativity”
                    </strong>
                  </span>
                </p>
                <p>The benefits of display advertising:</p>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;You can use any format you like
                  (images, texts, videos, etc.)
                </p>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;You can put your ads anywhere
                  that matches your brand online.
                </p>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;You can target the audience that
                  will be most interested in your product.
                </p>
                <p>
                  <strong>
                    With Google Display Ads, you can reach people who are
                    genuinely interested in your brand in the most effective
                    ways.&nbsp;
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Book a meeting and let’s plan your Ad today!
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "28pt" }}>
                      “Our ads will put your business under the spotlight”
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>&nbsp;</p>{" "}
                <h2>What’s a Responsive Display ad?</h2>
                <p>
                  <strong>
                    According to Wordstream, Google Ads have an average
                    click-through rate (CTR) of 3.17% for the search network and
                    an average 0.46% CTR on display network.
                  </strong>
                </p>
                <p>
                  In fact, Display networks are filled with Responsive Display
                  ads. Their appearance, size, and format are automatically
                  accustomed by Google to fit vacant ad spaces online. They can
                  even match the tone and layout of the website they are
                  on.&nbsp;
                </p>
                <p>
                  The data you put into these ads, such as logos, titles,
                  images, quotes, and descriptions are automatically placed by
                  Google, as soon as an empty space is detected.&nbsp;
                </p>
                <p>
                  <strong>These ads can also be interactive</strong>; when a
                  visitor clicks on one of your ads, they will be transported to
                  the website of the business, or product the ad is
                  promoting.&nbsp;
                </p>
                <p>
                  Thus, Responsive Display ads own a wide reach and can target a
                  massive amount of people turning them into clients.
                </p>{" "}
              </div>

              <div className="container">
                <h2>How does targeting on the Display Network work?</h2>
                <p>
                  There are multiple targeting strategies that you can use on
                  Google Display Network. Keep in mind that every targeting
                  method is split into two categories:
                </p>
                <p>
                  1) &nbsp; &nbsp; Web-based targeting: used to display ads
                  online, targeting the websites that match the conditions and
                  description of your brand’s service or product.
                </p>
                <p>
                  2) &nbsp; &nbsp; User-based targeting: used to display ads
                  online to the users that match the customer profile of your
                  brand, through the websites they search for and visit on the
                  Google Display Network.
                </p>{" "}
              </div>

              <div className="container">
                <h2>Here are some targeting methods that you can use:</h2>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;
                  <strong>Managed Placements:</strong> the most straightforward
                  method to target a site, involves picking the websites and
                  pages that you definitely want your ad to be displayed on.
                </p>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;<strong>Topic Targeting:</strong>{" "}
                  this method centers on targeting websites and pages that
                  involve a chosen topic. It boosts your ads so they can be seen
                  by a wide scope of audience.
                </p>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;
                  <strong>Keyword Contextual Targeting:</strong> Similar to
                  Topic Targeting, only more inclusive. Your ads will be matched
                  with the websites that contain content associated with the
                  list of keywords that you generate.
                </p>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;
                  <strong>In-Market Audiences: </strong>This method will display
                  your ads to the users whose searches and internet browsing
                  implies that they might be interested in the product or
                  service that you offer. In-Market Audience targeting is best
                  suited for products and services that have large buying and
                  research cycles.
                </p>
                <p>
                  - &nbsp; &nbsp; &nbsp; &nbsp;
                  <strong>Affinity-Targeting: </strong>This method displays ads
                  to users that repeatedly visit websites that possess similar
                  topics.
                </p>
                <p>
                  <strong>
                    Are you interested in display advertising?&nbsp;
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Get in touch with us now.
                    </Link>
                  </strong>
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

export default DisplayNetwork;
