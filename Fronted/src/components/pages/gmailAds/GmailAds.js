import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Award from "../../awards/Award";
import { Link } from "react-router-dom";
import GmailadsImg from "../../../assets/images/Gmail-ads.png";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const GmailAds = () => {
  const GmailadsImgFunction = {
    backgroundImage: `url(${GmailadsImg})`,
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
      {/* this is Gmail Ads  section here */}
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
                <h1>Gmail ads</h1>
                <div className="service_description">
                  <p>
                    If you’re looking for a chance to spread awareness for your
                    brand, then advertising over Gmail is what you need to bring
                    into play. Gmail has become one of the leading email
                    services online, amassing more than 1.4 billion users; it’s
                    the perfect platform for your business to grow.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={GmailadsImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Gmail ads:
                <br /> A Smart Marketing Tool
              </h2>
              <div className="container-left">
                <p>
                  The bespoke Gmail Ad strategies that Parasme offers are
                  unmatched in the field of advertising; we have a proven track
                  record that every Gmail strategy we develop reaches a large
                  number of potential clients and generates excellent
                  opportunities for your business.
                </p>
                <p>
                  Gmail ads are located at the top of Gmail inbox tabs -
                  &nbsp;If they pique the user’s interest, they can expand and
                  read them. These interactive ads contain videos, inserted
                  links, and images that allow you to engage prospective
                  clients, and you only have to pay per click.
                </p>
                <p>
                  Gmail ads will boost your brand awareness and inspire
                  potential clients to seek out your brand. Using data from
                  YouTube, Google Chrome, and other services permits Google to
                  target their clients. This data delivers tailored advertising
                  that matches the user’s behaviors, goals, and interests and
                  advertising to former clients using remarketing records.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Book a meeting
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “Gmail ads have changed the outlook on email marketing”
                    </strong>
                  </span>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>
                  Just like the Display campaigns, Google ads have the following
                  targeting options:
                </h2>
                <p>
                  <strong>1.&nbsp;</strong> &nbsp;{" "}
                  <strong>Custom Affinity audiences:</strong> gives you the
                  chance to target your clients’ interests and online behaviors
                  by displaying ads on selected websites such as blogger or
                  rival sites that your client might check to raise your brand
                  awareness.
                  <br />
                  In-Market audiences: gives you the chance to target customers
                  who are currently on the lookout for products and want to
                  purchase a product or a service similar to the one you offer.
                </p>
                <p>
                  2. &nbsp; &nbsp;<strong>In-Market audiences:</strong> gives
                  you the chance to target customers who are currently on the
                  lookout for products and want to purchase a product or a
                  service similar to the one you offer.&nbsp;
                </p>
                <p>
                  This type of targeting depends on the stage of the customer’s
                  journey your client is on and targets the people who are sure
                  to purchase your products and services after clicking on your
                  ad. It also categorizes interest in general groups like
                  “Sports &amp; Leisure,” “Financial &amp; Business Services,”
                  or in specific groups like “Basketball” or “Investment
                  Strategies.”
                </p>
                <p>
                  3.&nbsp; &nbsp; <strong>Keywords:</strong> Gives you the
                  chance to select specific words and phrases related to your
                  service or product. Google displays your ad to customers that
                  use or search for these keywords. Moreover, keywords allow you
                  to target by demographics, devices, locations, and more.
                  &nbsp;
                  <br />
                  Most people are very busy and can’t always check through their
                  emails. Gmail allows them to save the ads they’re interested
                  in on their inbox and watch them later.&nbsp;
                </p>
                <p>
                  <strong>
                    Gmail ads remain a highly-efficient marketing tool that uses
                    PPC strategies to optimize brand awareness. If you’re
                    interested in our Gmail Ad, or any other marketing services,
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      call us now to set a consultation
                    </Link>
                    .
                  </strong>
                </p>{" "}
              </div>
              <div className="container">
              </div>
              <div className="container">
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

export default GmailAds;
