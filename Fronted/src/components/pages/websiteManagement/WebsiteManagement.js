import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import websitemanagementImg from "../../../assets/images/website-management.png";
import { Link } from "react-router-dom";
import Award from "../../awards/Award";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const WebsiteManagement = () => {
  const websitemanagementImgFunction = {
    backgroundImage: `url(${websitemanagementImg})`,
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

      {/* This is Website Management section here */}

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
                <h1>Website Management</h1>
                <div className="service_description">
                  <p>
                    Optimize your online presence by keeping your company
                    website up to standards with the latest internet updates. In
                    case you have your hands full with other responsibilities,
                    Parasme offers a website management service that fulfills
                    all your business requirements.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={websitemanagementImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Website Management:
                <br /> Keeping track of the internet
              </h2>
              <div className="container-left">
                <p>
                  The key to keeping your business successful is carefully
                  managing and updating your website. Parasme’s web management
                  services are centered on continuously procuring updates for
                  your website. We want your designs and content to conform to
                  the newest versions of your website. In addition, good web
                  management leads to a good user experience which increases
                  customer conversion.
                </p>
                <p>
                  Even if you own the latest and most competent striking
                  website, the online world will still find ways to quickly
                  overshadow you with its never-ending high-tech designs,
                  marketing tactics, and development. Consequently, your company
                  needs to monitor the newest internet trends to stay one step
                  ahead of your rivals.
                </p>
                <p>
                  If you select Parasme’s website management services, our
                  experts will keep an eye on any possible website expansions
                  and present you with essential upgrades that will keep your
                  business current.
                </p>
              </div>
              <div className="container-right"></div>
            </div>

            <div className="text">
              <div className="container">
                <h2>Focusing on your company needs</h2>
                <p>
                  <strong>
                    The majority of companies aim to progress with time. With
                    Parasme's services, web management has never been more
                    fruitful.&nbsp;
                  </strong>
                </p>
                <p>Some of our web management services include:</p>
                <p>
                  ●&nbsp; Reviewing your information to match client’s
                  feedback&nbsp;
                </p>
                <p>●&nbsp; Releasing new products and services&nbsp;</p>
                <p>
                  ●&nbsp; Renovating your logo to have a more contemporary
                  feel&nbsp;
                </p>
                <p>●&nbsp; Undertaking rebranding strategies</p>
                <p>
                  ●&nbsp; Revising your fees and bundles to match recent market
                  prices or new branch locations.
                </p>
                <p>
                  Any modification to your business should come with a similar
                  alteration to your website. At Parasme, we save your company
                  the time and energy of making important updates that are
                  crucial for your website to stay up and running and take care
                  of it ourselves.&nbsp;
                </p>
                <p>
                  Parasme’s web management services are custom-made to meet your
                  desires. So, whether you want an impromptu review and plugins
                  set-up, or you’re looking for weekly, monthly, or yearly
                  website management and inspections, our team will take charge
                  of all clients, old and new.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      If you want a professional team of web managers armed with
                      cutting-edge tools and quality experience taking care of
                      your website, book a meeting now.
                    </Link>
                  </strong>
                </p>{" "}
                <h2>The importance of Content Management Systems</h2>
                <p>
                  Instead of constantly contacting and paying your webmaster,
                  each time your site needs any adjustments or add-ons, you can
                  simply access and manage your content by logging in to CMS
                  Content Management Systems.
                </p>
                <p>
                  At Parasme, we create quality CMS systems, making sure that
                  your company website is reliable, fast, and fully operational.
                  In addition, the CMS websites we provide are modern and
                  user-friendly, two elements that are significant for your
                  clients, business, and search engines.
                </p>
                <p>
                  When you frequently update your website with different
                  contents, you’re guaranteed to appear on the radar of major
                  search engines like Google. Getting visited and indexed by
                  Google allows your website to get a superior search engine
                  ranking and promotes your brand, giving you the jumpstart you
                  need to have the upper hand on your competitors.&nbsp;
                </p>
                <p>
                  Our expert webmasters offer boundless possibilities that are
                  entirely bespoke to satisfy all your website needs and budget.
                  In addition, Parasme’s CMS services present many benefits;
                  they’re valuable in advertising and updating your company
                  site, as well as raising awareness for your brand online.
                </p>{" "}
              </div>

              <div className="container">
                <h2>CMS training for clients</h2>
                <p>
                  Whenever we develop a website, we seek to prepare our
                  customers and teach them how to manage it all by
                  themselves.&nbsp;
                </p>
                <p>
                  In addition to providing content management systems that are
                  easy to access, we conduct thorough tutoring sessions to
                  familiarize our clients with CMS and offer them support in
                  case of any technical hiccup.
                </p>
                <p>
                  Our web management department will give you training sessions
                  that include:
                </p>
                <p>
                  ●&nbsp; An overall understanding of how to edit your website
                  pages
                </p>
                <p>●&nbsp; How to insert new content and or blog posts</p>
                <p>●&nbsp; How to add new images or media</p>
                <p>●&nbsp; How to use special features</p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "26pt" }}>
                      “Grow your digital presence with content management
                      software”&nbsp;
                    </span>
                  </strong>
                </p>{" "}
              </div>

              <div className="container">
                <h2>Website hosting services</h2>
                <p>
                  Opting for Parasme’s website management gives you access to
                  numerous other services such as website hosting. We can
                  connect you with quick, safe, and trustworthy website hosting
                  servers like Amazon web servers.&nbsp;
                </p>
                <p>
                  We always link our customers with highly efficient servers
                  like Amazon. Our aim is to connect your website with the
                  perfect host, one that has high speed servers and maintains
                  unmatched security levels.
                </p>
                <p>
                  Our skilled professionals are here to help you at all times,
                  monitor your website, solve any technical issues, and guide
                  you through any concerns. We arm your website with email
                  storage, bandwidth, and space that are unlimited.&nbsp;
                </p>
                <p>
                  On top of connecting you with a website host that suits you
                  best and provides your site with no downtime, you will have
                  access to unlimited storage for your emails. We want to save
                  you from always having to delete important old emails to clear
                  some space. Instead, you will now be able to get in touch with
                  your clients and send them as many emails as you want.
                </p>
                <h2>The role of website tracking and analysis</h2>
                <p>
                  If you want to study the way your consumers engage with your
                  advertising campaigns, you need website tracking and analysis
                  services.&nbsp;
                </p>
                <p>
                  Offline promotion is great, but it doesn’t hold a candle to
                  internet marketing which tells you exactly where users are
                  visiting your website and how they’re engaging with your
                  content.
                </p>
                <p>
                  Every professional online marketing strategy begins with the
                  meticulous website tracking to monitor your business every
                  step of the way. That’s why Parasme needs to be on the same
                  page with our clients to enhance their marketing strategies
                  and aim for better results.
                </p>
                <h2>Parasme’s copywriting services</h2>
                <p>
                  To get the best out of our website management, you can combine
                  it with our excellent copywriting services. Our team strives
                  to produce eloquent content that embodies your brand and
                  resonates with your audience. Displaying unique copies on your
                  site encourages your visitors to share them across social
                  media, hence boosting your search engine ranking.
                </p>
                <p>
                  Carefully choosing your words achieves good Search Engine
                  Optimization (SEO) results which helps your site content get
                  better Google rankings. Nowadays, search engine algorithms are
                  highly advanced; because Google is constantly analyzing the
                  value and significance of your content, you need expert
                  copywriters that know how to use their words.
                </p>
                <p>
                  At Parasme, we calculate the estimated fees of our copywriting
                  services according to your website.&nbsp;
                </p>
                <p>
                  Our website management service settles all the complementary
                  needs that follow. From website development to finding the
                  right host server and providing you with powerful copywriting,
                  rest assured that Parasme will make your brand go viral.&nbsp;
                </p>
                <p>
                  <strong>
                    Contact us and set a consultation to discuss an adequate
                    action plan your business needs to conquer the online world.
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

export default WebsiteManagement;
