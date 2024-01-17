import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import { Link } from "react-router-dom";
import LocalSEOProcessImg from "../../../assets/images/Local-SEO-Process.png";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const LocalSEOProcess = () => {
  const LocalSEOProcessImgFunction = {
    backgroundImage: `url(${LocalSEOProcessImg})`,
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
      {/* this is Loacl Seo Process section here */}
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
                <h1>Local SEO Process</h1>
                <div className="service_description">
                  <p>
                    Because there are multiple ways to get a good ranking, and
                    every way possesses a particular series of rules to optimize
                    a website’s online presence, local SEO is a field that keeps
                    varying.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={LocalSEOProcessImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Local SEO Process:
                <br /> Parasme’s goal is to put your business on top
              </h2>
              <div className="container-left">
                <p>
                  Every industry has its system and every company, even those
                  from the same field, follows distinctive methods to select the
                  best target local search terms. At Parasme, we thoroughly
                  devise a surefire SEO strategy that matches your company
                  brand.
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>How Parasme manages local SEO</h2>
                <p>
                  <strong>Preparation</strong>
                </p>
                <p>
                  To tackle a local SEO campaign, Parasme’s team looks for the
                  search terms that will perfectly match your brand. Then, we
                  study terms with local intent and localized search terms to
                  see if they appear in the local organic results with a
                  location linked to Google maps or if they only showcase
                  significant organic results without localization.&nbsp;
                </p>
                <p>
                  <strong>Keyword research</strong>
                </p>
                <p>
                  1-&nbsp; Keywords targeted in local SEO: The terms or phrases
                  that your target audience or users type on search engines when
                  they’re looking for information or answers related to your
                  business.&nbsp;
                </p>
                <p>
                  2-&nbsp; Localized search terms: The keywords web surfers use
                  when looking for results in a specific geographic location.
                  They help people in your region become aware of your business
                  and boost your local search engine optimization results.
                </p>
                <p>
                  <strong>Terms with local intent</strong>
                </p>
                <p>
                  Search engines usually determine which search terms contain
                  local intent. The expression “local intent” refers to every
                  time Google thinks the user’s request seeks local
                  results.&nbsp;
                </p>
                <p>
                  Typically, the search terms with a service and location name
                  automatically display local results. Nonetheless, Google
                  believes that some users only search for a service; so if it
                  has a solid local intent, Google will showcase local results
                  established by your IP that defines your local settings.
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
                  <strong>
                    <span style={{ fontSize: "26pt" }}>
                      “Build a community of loyal customers with our Local SEO
                      services”
                    </span>
                  </strong>
                </p>{" "}
                <h2>How to reach the right terms</h2>
                <p>
                  <strong>Localized Landing pages</strong>
                </p>
                <p>
                  Parasme designs landing pages for the new regions your
                  business wants to reach. Our team makes sure that whenever we
                  build a landing page, we incorporate eloquent content,
                  localize the page, state details about your area comprising
                  access to your location on maps. We do our best to connect
                  your products or services with the right region so that your
                  brand gets the highest rank when people search for terms with
                  local intent or use localized search terms.
                </p>
                <p>
                  <strong>Google+ and verified local listings&nbsp;</strong>
                </p>
                <p>
                  Google permits every business displayed on its domain to
                  create its business profile. Signing up is free of charge and
                  provides you with infinite advantages.
                </p>
                <p>
                  When a local business opens a Google+ account, it can use it
                  as a shop front or service area. A shopfront consists of a
                  store that people check, such as restaurants, hotels, or
                  shopping stores, while a service area is when a business goes
                  to the client, such as electricians, plumbers, and builders.
                  It is always valuable for your company to notify Google about
                  the region, country, or town your company services in so they
                  can add you to the search results related to localized
                  searches.
                </p>
                <p>
                  Once you create a local business page, you must authenticate
                  the location of your business. It will allow Google to
                  corroborate that you’re a real, local business with a genuine
                  and reachable address. The verification process is simple:
                  Google sends a postcard containing an associate code to your
                  address that you enter into your local listing account to
                  verify your authenticity. It is advised for all businesses to
                  fill up their listing account with website links, photos,
                  social media accounts, company descriptions, logos, and videos
                  that they can link to a personal YouTube account.
                </p>
                <p>
                  <strong>On-page optimization&nbsp;</strong>
                </p>
                <p>
                  If you aim to target local or countrywide keywords, on-page
                  optimization is an aspect that applies to all SEO. But
                  targeting local keywords should be thoroughly calculated
                  because you need to select the correct terms in your
                  descriptions, headings, content, and titles of your website so
                  that you:
                </p>
                <p>●&nbsp; Target every important town</p>
                <p>●&nbsp; Target locations and terms that consumers lookup</p>
                <p>●&nbsp; Shouldn’t isolate any location</p>
                <p>
                  ●&nbsp; &nbsp;Should always take into consideration potential
                  clients from outside your region.
                </p>
                <p>
                  Remember that it's always good to create new pages that target
                  new places. When we target small regions, like 2 or 3 towns,
                  we usually include the key terms with the main service pages.
                  When working with multiple regions and countries, we start by
                  building a central page that describes your services without
                  giving information about your location. Then we design landing
                  pages, each aimed at a different location.&nbsp;
                </p>
                <p>
                  <strong>
                    Managing your online reputation and social media
                  </strong>
                </p>
                <p>
                  Search engines care about your online reputation. They dive
                  deep into the reviews that users leave about your business on
                  platforms such as Facebook, trip advisor, Google+ business
                  listings, and more. It helps them discover and evaluate
                  whether or not the quality of your business is good. Moreover,
                  potential clients are now more than ever following the same
                  pattern by searching for your social media profiles to observe
                  how you engage with your visitors.&nbsp;
                </p>
                <p>
                  Having a Google business profile gives you access to a
                  dashboard that allows you to check the reviews people write
                  about you from several sources. Parasme is dedicated to
                  maintain your online reputation, so we make sure that you
                  offer the best services. We have skilled community managers
                  that frequently respond to every review posted about your
                  business, whether positive or negative; we always encourage
                  clients to write reviews by leaving them links that are easy
                  to access.
                </p>
                <p>
                  <strong>
                    A good online presence gives way to great profit&nbsp;
                  </strong>
                </p>
                <p>
                  We know that dealing with SEO can be intricate and that some
                  businesses fail to handle this process on their own, while
                  others can easily do it without needing any help.&nbsp;
                </p>
                <p>
                  Our goal at Parasme is to facilitate your life and relieve you
                  from the local SEO responsibilities so that you can focus on
                  other company problems. Our services are versatile and can go
                  along with whatever you desire, whether you want us to take
                  control of the entire SEO-related services or simply guide and
                  help you through your SEO needs. Our service fees vary
                  according to the size, duration, and requirements of the
                  project on hand.&nbsp;
                </p>
                <p>
                  <strong>
                    If you need help boosting your local SEO then Parasme’s the
                    right place to grow your online presence.
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Get in touch
                    </Link>
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

export default LocalSEOProcess;
