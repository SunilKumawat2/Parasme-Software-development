import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link } from "react-router-dom";
import Award from "../../awards/Award";
import StationeryImg from "../../../assets/images/corporate-stationery.png";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Stationery = () => {
  const Stationeryfunctionimg = {
    backgroundImage: `url(${StationeryImg})`,
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

      {/* This is Stationary section here */}
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
              <div className="title services-title-2">
                <h2>Services</h2>
                <h1>On-brand corporate stationery</h1>
                <div className="service_description">
                  <p>
                    As much as logos are essential for your business to grow,
                    they will lose their appeal if your brand's corporate
                    stationery doesn’t hold the same aesthetic. People trust
                    your business when you create a stable brand with bespoke
                    stationery that bears unique signage and instantly reminds
                    them of your brand.{" "}
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={Stationeryfunctionimg}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
                On-brand corporate stationery:
                <br /> Keep an eye on the tiny details!
              </h2>
              <div className="container-left">
                <p>
                  The corporate stationery consists of multiple products that
                  display your logo. They can take the form of printed material
                  such as notebooks, letters, bookmarks, business cards,
                  invoices, envelopes, receipts, documents, paper, etc. Or they
                  can include objects such as office supplies, USB flash drives,
                  and pencils.&nbsp;
                </p>
                <p>
                  Sharing your stationery with prospective clients and spreading
                  them around your offices reinforces the idea of your brand and
                  its image. In addition, it helps raise your brand’s
                  profile.&nbsp;
                </p>
                <p>
                  At Parasme, we will design any stationery object you want
                  while taking into consideration your budget so that we can
                  provide you with the content and material that fits your brand
                  the best.&nbsp;
                </p>
                <p>
                  If you’re looking to design stationery items like new
                  calendars, cups, paper pads, or more, we have very skilled
                  creative graphic designers who can create innovative corporate
                  stationery that fit your brand personality.&nbsp;
                </p>
                <p>
                  Keep your brand top of mind with Parasme’s remarkable graphic
                  design services.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      Book a meeting
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “Details set the difference between good and excellent
                      marketing”
                    </strong>
                  </span>
                </p>
              </div>
              <div className="container-right"></div>
            </div>

            <div className="text">
              <div className="container">
                <h2>
                  Business cards: a crucial element of corporate stationery
                </h2>
                <p>
                  Business cards continue to be the key to advertising your
                  company. This type of corporate stationery is essential for
                  introducing your business to the market and boosting your
                  brand awareness.&nbsp;
                </p>
                <p>
                  Without being affected by technological advancements, business
                  cards remain extremely valuable. Owning them will make a
                  unique first impression on your clients, proving that you’re a
                  professional company that cares about its image.&nbsp;
                </p>
                <p>
                  Business cards are more than just an easy way of sharing your
                  contact information with prospective customers. Instead,
                  first-className business cards are the perfect means to make
                  people start talking about your business as they forge
                  trustworthy relationships between the two of you.&nbsp;
                </p>{" "}
                <h2>Parasme’s corporate stationery services</h2>
                <p>
                  At Parasme, our graphic design team will come up with a
                  fitting business card outline that embodies your brand’s
                  identity. Our designs feature captivating and stylish fonts
                  and an easy-to-read structure that isn’t jam-packed. Instead,
                  they only cover the most important elements about your
                  company, such as its name, address, and contact
                  information.&nbsp;
                </p>
                <p>
                  Our creative experts will deliver extraordinary designs for
                  all your stationery needs, considering your budget and
                  double-checking all the data they have on your company before
                  making any moves.
                </p>
                <p>
                  We aim to grow your clients’ base by providing distinctive and
                  easily sharable corporate stationery items that will keep your
                  brand current and fresh.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      Get in touch with us today and benefit from our on-brand
                      corporate stationery services.
                    </Link>
                  </strong>
                </p>{" "}
              </div>

              <div className="container"></div>

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

export default Stationery;
