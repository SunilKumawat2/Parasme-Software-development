import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import Brouchers from "../../../assets/images/brochures.jpg";
import LatestBrndingProjects from "../../BrandingProjects/LatestBrandingProjects";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Brochures = () => {
  const brouchers = {
    backgroundImage: `url(${Brouchers})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div>
      {/* This is Header Section here */}
      <NewHeader />

      {/* This is Social Media Link section here */}
      <SocialMediaLogo />
      {/* This is Main Content of this Page */}
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
                <h1> Brochures</h1>
                <div className="service_description">
                  <p>
                    Having brochures is a great opportunity to show corporate
                    information about the services provided by your business
                    because they’re brief and straight to the point. They are
                    small but have a great impact, which encourages clients to
                    hold on to and keep them at their homes.
                  </p>
                </div>
              </div>
              <figure className="brand-title-img" style={brouchers}></figure>
              <Link to="" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Brochures:
                <br /> Brochures make the ideal communication medium
              </h2>
              <div className="container-left">
                <p>
                  Stationing brochures in smart places will give out information
                  about your business to a big number of people and draw in new
                  clients. You can easily put them in advertising promotions
                  that you send in your emails or display them on the tables in
                  your workplace.
                </p>
                <p>
                  A lot of businesses give out a variety of things with their
                  brochures, particularly in market shows. Even if the product
                  is likely to be the first reason why customers check you out,
                  they will examine your brochures later to look into what your
                  brand is about.
                </p>
                <p>
                  Brochures make a wonderful and economical marketing plan. At
                  Parasme, we will help you meticulously create a design that
                  completely embodies the brand and message that your company
                  carries. Our skilled graphic design team will make sure your
                  brochures go with your company’s current artistic
                  vision.&nbsp;
                </p>
                <p>
                  Parasme makes trendy brochures that will perfectly spread the
                  information your company wants to circulate. They can be sent
                  to prospective and or current clients along with business
                  associates and new contacts.&nbsp;
                </p>
                <p>
                  Adaptability is the greatest reason why businesses go for
                  custom-made brochures. Based on your target audience and
                  company goals you can reach clients by sending them brochures
                  via mail, giving them out at malls or trade shows and
                  conferences, or utilizing them on site.
                </p>
                <p>
                  Brochures are easy to distribute and can be displayed in a
                  variety of places like company offices, exhibitions, inside
                  your shop, and more. To make the best impact on readers,
                  brochures are carefully designed and produced with special
                  print effects like rich laminate covers, spot UV glossed
                  components, and custom-made cut-out folds and forms.
                </p>
                <p>
                  <strong>
                    Need help with your brochures?{" "}
                    <Link to="/ContactUs">Book a meeting</Link> with Parasme
                    now.
                  </strong>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            {/* This is latest Branding Projects Section here */}
            <LatestBrndingProjects />
            <div className="text">
                <div className="container">
                  <h2>The benefits of using brochures</h2>
                  <p>
                    Brochures facilitate the connection with your clients and
                    show what your company offers without diving deeply into
                    details. They are also beneficial as in-company pamphlets
                    that help remind your customers and team about your brand
                    values. This will widen your market reach as people will
                    start talking about your brand offline or online, discussing
                    the brochures they received from your company.
                  </p>
                  <p>
                    <strong>A brochure made by Parasme is the way to go</strong>
                    . Our skilled graphic design team will conceive custom-made
                    brochures and Parasmeal layouts for your business ideas. Our
                    high-class designs will build some brand awareness and
                    increase your business opportunities.&nbsp;
                  </p>
                  <p>
                    An eye-catching brochure will boost clients’ trust in your
                    brand. Agencies are free to incorporate any insights about
                    their products including details, and information about
                    their brand and its goals.
                  </p>
                  <p>
                    All brochures that Parasme designs and develops are
                    exclusively made for you. Whether or not you already chose
                    the color palettes you want to go with, or need our graphic
                    design team to come up with it, we got you covered.
                  </p>
                  <p>
                    If you want to incorporate prices with details about your
                    product or share the fascinating story behind your brand, we
                    will make a design that embodies your concept flawlessly. We
                    will make sure to pique your clients’ interest with our
                    informational and spectacular visuals.
                  </p>
                  <p>
                    A well-crafted brochure will give out a multitude of
                    information:
                  </p>
                  <p>● &nbsp; &nbsp; &nbsp;Enterprise history</p>
                  <p>● &nbsp; &nbsp; &nbsp;Product summary</p>
                  <p>● &nbsp; &nbsp; &nbsp;Service information</p>
                  <p>● &nbsp; &nbsp; &nbsp;Contact lists</p>
                  <p>
                    ● &nbsp; &nbsp; &nbsp;Overviews about your brand that build
                    trust and inspire action.
                  </p>
                  <p>&nbsp;</p>
                  <p style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "27pt" }}>
                      <strong>
                        “Parasme makes custom made designs best suited for your
                        business”
                      </strong>
                    </span>
                  </p>
                  <p style={{ textAlign: "center" }}>&nbsp;</p>{" "}
                  <h2>Why choose us?</h2>
                  <p>
                    As a leading brand development agency that brings brands and
                    culture together, we strive to design one-of-a-kind
                    brochures that will make your business stand out and gather
                    more customers. Our team consists of carefully selected
                    professionals in the tactical, methodical, and creative
                    aspects of interactive development.&nbsp;
                  </p>
                  <p>
                    Brochures are a vital marketing tool that allows you to
                    compress plenty of details about your company into a tiny
                    section. Our graphics team will draw up the best design that
                    packs together the information in a legible manner and a
                    smooth outline.
                  </p>
                  <p>
                    Here at Parasme, we adapt our services accordingly to fit
                    the singular needs of each of our customers for you to meet
                    your business goals.&nbsp;
                  </p>
                  <p>
                    Our creative designers will help you craft the perfect
                    layout for your brochure and our competent writers will
                    eloquently describe your message in concise and attractive
                    expressions.&nbsp;
                  </p>
                  <p>
                    We possess the services and competencies to work with you
                    closely and create Parasmeal and customized booklets that
                    impeccably embody the brand and image you’re trying to get
                    to your clients, business partners, or staff.
                  </p>
                  <p>
                    Unique brochures are the utmost efficient tactic to reach
                    your target audience. They are the perfect addition to a
                    wide-ranging marketing strategy.&nbsp;
                  </p>
                  <p>
                    <strong>
                      <Link to="/Contactus">Communicate with us</Link> to start
                      planning your brochure today.
                    </strong>
                  </p>{" "}
                </div>

                <div className="container">
                  <h2>A quality brochure makes quality business</h2>
                  <p>
                    Brochures are great, beneficial, and cost-effective. They
                    would be an amazing new approach to your business plan.
                    Printed brochures are still very essential to this day, as
                    people are pleased by the bespoke touch that they add.
                  </p>
                  <p>
                    You can count on us to deliver you the best brochure layout,
                    based on your objectives. From classic tri-fold designs to
                    thorough accordion four-folds or any other design that you
                    envision, we will help you craft the finest brochure.
                  </p>
                  <p>
                    Whether the people seeing your brochure are prospective
                    customers, present industry clients, or staff that works in
                    the enterprise, they will engage positively with a well-made
                    outline that has brief content and proper pictures.
                  </p>
                  <p>
                    The Parasmeality of the design and the final results are
                    what make the difference in how your brochure will be
                    welcomed by your target audience. We will provide you with
                    custom made cost-effective brochures to use as an impactful
                    marketing tool.
                  </p>
                  <p>
                    When your customer reads your brochure, it opens up a line
                    of communication between the both of you. This way is more
                    intimate and efficient than addressing your overall
                    audience. We find the most helpful ways and manageable
                    methods to deliver your brand’s message.
                  </p>
                  <p>
                    Brochures are an absolute asset to show your target audience
                    how serious you are about your brand and how invested you
                    are in making it grow, creating trust with your customers,
                    and increasing your reach. Parasme is here to assist you in
                    getting your message delivered to the largest audience
                    possible in a concise, creative, and efficient way.&nbsp;
                  </p>
                  <p>
                    <Link to="/Contactus">
                      We’d love to hear from you! Contact us.
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
              <Link to="/ContactUs" className="btn yellow large">
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
        {/* This is a Award Section here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      <div id="whatsapp-chat" className="hide">
        <div className="header-chat">
          <div className="head-home">
            <div className="info-avatar">
              <img src="images/logo2.png" alt="" />
            </div>
            <p>
              <span className="whatsapp-name">Parasme Software & Technology</span>
              <br />
              <small>11:20Am Today</small>
            </p>
          </div>
          <div className="get-new hide">
            <div id="get-label"></div>
            <div id="get-nama"></div>
          </div>
        </div>
        <div className="home-chat"></div>
        {/* This is whatapp chat section here */}
        <Whatsappchat />
      </div>
    </div>
  );
};

export default Brochures;
