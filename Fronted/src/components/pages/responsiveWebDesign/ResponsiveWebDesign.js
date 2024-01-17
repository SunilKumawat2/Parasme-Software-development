import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import LatestBrndingProjects from "../../BrandingProjects/LatestBrandingProjects";
import responsivemockupImg from "../../../assets/images/responsive-mockup.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const ResponsiveWebDesign = () => {
  const responsivemockupImgFunction = {
    backgroundImage: `url(${responsivemockupImg})`,
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
      {/* This is Responsive Web design section here */}
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
                <h1>Responsive Web Design</h1>
                <div className="service_description">
                  <p>
                    <strong>
                      Website Should Be Accessible To All Visitors
                    </strong>
                  </p>
                  <p>
                    With the development of technology in today's day and age,
                    websites are used across many different devices. A website
                    needs to be easily viewed on any computer or mobile device
                    and have compatibility with every browser variation out
                    there.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={responsivemockupImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Responsive Web Design:
                <br />{" "}
              </h2>
              <div className="container-left">
                <p>
                  In addition to our creative design and content services for
                  websites, we make sure the development phase is flawless and
                  responsive for desktop browsers, Internet Explorer, Mozilla
                  Firefox, Google Chrome, Android Tablets and Phones, Iphones,
                  Ipads, and Mac devices.
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            {/* This is Latest Branding Projects Section here */}
            <LatestBrndingProjects />
            <div className="text">
              <div className="container">
                <h2>Benefits Of Responsive Design</h2>
                <p>
                  The website should be responsive for a more enjoyable user
                  experience. You get an enhanced web browsing and loading speed
                  thanks to features like caching, image display which increases
                  the time it takes to load all pages of your site. It’s also
                  easier to fill out forms on a responsive website, which
                  increases the chances of converting leads to customers, and
                  visitors to subscribers.
                </p>
                <p>
                  As for e-Commerce sites, a responsive design allows customers
                  to zoom in and out on products, a very important aspect when
                  browsing shopping websites. With many people now buying online
                  via their smartphones and tablets, this feature might mean the
                  difference between shoppers choosing your website or going to
                  a competitor’s website to buy the products. &nbsp;
                </p>
                <p>
                  The benefits of having a mobile-friendly design can't be
                  overlooked in today's increasingly technological world we live
                  in. The responsiveness will make for better viewing between
                  different platforms such as smartphones or tablets rather than
                  just computers where one normally browses websites.
                </p>
                <p>
                  <strong>
                    “68.1% of all website visits in 2020 came from mobile
                    devices”
                  </strong>
                </p>
                <p>
                  According to the Pew Research Center, in 2020, 68.1% of
                  internet traffic came from mobile devices. Therefore, your
                  website needs to be optimized to fit on all types of screens,
                  allowing your customers to browse freely no matter the device
                  they are using.
                </p>
                <p>
                  Having a responsive web design allows businesses to edit and
                  upload content from their smartphones, which means you can
                  edit and add content to your website however you please.
                </p>
                <p>
                  <strong>
                    The end product is a website that is both visually appealing
                    and practical.
                  </strong>
                </p>
                <p>
                  Your website visitors will be easily guided from one page to
                  another, without endless scrolling, increasing their
                  satisfaction, which ultimately leads to profit. Even better,
                  responsive websites benefit from better rankings on search
                  engines, which boosts your company's online visibility.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Book a meeting
                    </Link>{" "}
                    with Parasme to discuss all the details.
                  </strong>
                </p>{" "}
                <h2>Google Prefers Mobile-Friendly Websites</h2>
                <p>
                  Google’s algorithm hates slow-loading websites. The faster
                  your website is to load the higher its chances of being ranked
                  on top of your competitors.
                </p>
                <p>
                  Our team members are experts when it comes to SEO, Google
                  Analytics, and Ad Words. They know how to construct responsive
                  website designs that can help your firm rank higher in Google
                  searches, allowing you to stand out from the crowd. Taking
                  into consideration the content developed for your website, the
                  easy-to-navigate information architecture, and intuitive
                  design.
                </p>
                <p>
                  Additionally, by choosing a responsive website, You can
                  control the website with a single set of URLs, simplifying
                  maintenance and saving time. As a result, you'll get the
                  flexibility to develop a single SEO approach that works across
                  various devices. A single website is significantly easier to
                  optimize and consumes less time. This results in less material
                  for your business to handle.
                </p>{" "}
              </div>
              <div className="container">
                <h2>Easier monitoring and reporting</h2>
                <p>
                  A responsive website means that businesses would no longer
                  need to track their visitors’ journey across different sites.
                  Instead, you can benefit from having all of the information
                  needed in one place. Using advanced tools like Google
                  Analytics will allow you to track consumer behavior
                  successfully and generate a single. easy-to-understand report.
                </p>
                <p>
                  Therefore, you will benefit from easy analytics reports where
                  you gather all the necessary information to improve and expand
                  your business.
                </p>{" "}
              </div>
              <div className="container">
                <h2>First Impressions Matter</h2>
                <p>
                  It takes 6 seconds for a new user to form an opinion about
                  your website, based on its navigation and branding. Therefore,
                  if your site loads slowly, has a clunky design, or has
                  perplexing navigation, then you risk losing customers. If you
                  want to increase conversions and minimize bounce rates, all
                  you need is a responsive web design.
                </p>
                <p>
                  Our responsive website design solution may be combined with
                  various additional services to improve your website even more.
                  &nbsp;Our creative team of graphic designers can produce
                  compelling visuals that establish your brand image and make a
                  positive first impression. While our SEO, PPC, eCommerce, and
                  Mobile Apps specialists can make your brand reach your
                  audience and stay one step ahead of the competition.
                </p>
                <p>
                  <strong>
                    As an award-winning agency for website design with extensive
                    experience in UX/UI, our websites are always creative and
                    tailored to suit the purpose of your business. At Parasme,
                    we take your online presence and branding seriously. We'll
                    work with you to create a website that provides an
                    unforgettable user experience.
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Contact us
                    </Link>{" "}
                    to learn more about how your business can benefit from our
                    custom responsive website design services.
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

export default ResponsiveWebDesign;
