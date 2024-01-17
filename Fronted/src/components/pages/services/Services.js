import React from "react";
import Award from "../../awards/Award";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import brandingImg from "../../../assets/images/brand-img.png";
import mobileappsImg from "../../../assets/images/mobileapps-img.png";
import arvrImg from "../../../assets/images/ar-vr-img.png";
import marketingImg from "../../../assets/images/marketing-img.png";
import webdesignImg from "../../../assets/images/web-design-img.png";
import NewHeader from "../../newHeader/NewHeader";
const Services = () => {
  // This function for the Background img Url in the style
  const brandingImgFunction = {
    backgroundImage: `url(${brandingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  // This function for the Background img Url in the style
  const mobileappsImgFunction = {
    backgroundImage: `url(${mobileappsImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  // This function for the Background img Url in the style
  const arvrImgFunction = {
    backgroundImage: `url(${arvrImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  // This function for the Background img Url in the style
  const marketingImgFunction = {
    backgroundImage: `url(${marketingImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  // This function for the Background img Url in the style
  const webdesignImgFunction = {
    backgroundImage: `url(${webdesignImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div>
      {/* This is Header section here */}
      <NewHeader />
      <div className="services-page">
        <div className="mobile-menu-container fixed mobile transparent">
          <Link to="#" className="open-mobile-menu">
            <span></span>
          </Link>
        </div>
        <section className="page-header header-style-4">
          <div className="title">
            <h2 className="fade-in">Our Services</h2>
            <h1 className="fade-in">
              <span>
                We fuse insights with strategy, design and communications for
              </span>{" "}
              immediate business impact.
            </h1>
          </div>
          <Link to="#" className="scroll-down">
            <p
              className=""
              style={{ transition: "all 1s ease 0s", color: "#fff" }}
            >
              See what we have to offer
            </p>
          </Link>
        </section>
        <section className="services scroll-to">
          <div className="service">
            <div className="container-left info-container">
              <div className="description">
                <div className="animation-sequence-1">
                  <h2 className="fade-in">Branding &amp; Graphic Design</h2>
                  <p className="fade-in">
                    We are experienced in everything that makes an effective
                    brand, from logo and naming to branded items, and corporate
                    style.
                  </p>
                </div>
                <ul className="animation-sequence-2">
                  <li className="push-title-up">Brand Image</li>
                  <li className="push-title-up">Stationery</li>
                  <li className="push-title-up">Brochures</li>
                  <li className="push-title-up">Online Banners</li>
                  <li className="push-title-up">Business Card Design</li>
                  <li className="push-title-up">Posters Design</li>
                  <li className="push-title-up">Digital Design</li>
                  <li className="push-title-up">
                    Presentation and Proposal Design
                  </li>
                  <li className="push-title-up">Flyers Design</li>
                  <li className="push-title-up">Print Design</li>
                  <li className="push-title-up">Infographics</li>
                  <li className="push-title-up">Menu Design</li>
                  <li className="push-title-up">Leaflets</li>
                  <li className="push-title-up">Signage</li>
                </ul>
                <Link to="#" className="btn black">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="container-right">
              <div className="img-block reveal">
                <figure style={brandingImgFunction}></figure>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="container-left">
              <div className="img-block reveal">
                <figure style={webdesignImgFunction}></figure>
              </div>
            </div>
            <div className="container-right info-container">
              <div className="description">
                <div className="animation-sequence-1">
                  <h2 className="fade-in">Web Design &amp; Development</h2>
                  <p className="fade-in">
                    The full cycle of services to create and launch a website
                    from scratch or redesign a live website along with the
                    modern trends and requirements.
                  </p>
                </div>
                <ul className="animation-sequence-2">
                  <li className="push-title-up">Business Information Sites</li>
                  <li className="push-title-up">Magento Website Development</li>
                  <li className="push-title-up">Creative Portfolio Sites</li>
                  <li className="push-title-up">E Commerce Website Hosting</li>
                  <li className="push-title-up">Responsive Web Design</li>
                  <li className="push-title-up">WooCommerce Development</li>
                  <li className="push-title-up">Website Hosting</li>
                  <li className="push-title-up">SSL Certificates</li>
                  <li className="push-title-up">Website Management</li>
                  <li className="push-title-up">Ecommerce Copywriting</li>
                </ul>
                <Link to="#" className="btn black">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="container-left info-container">
              <div className="description">
                <div className="animation-sequence-1">
                  <h2 className="fade-in">Mobile Apps Services</h2>
                  <p className="fade-in">
                    All the way from idea to launch for iOS and Android mobile
                    apps. We create the elegant user experience for applications
                    that achieve business goals and make users happy.
                  </p>
                </div>
                <Link to="#" className="btn black">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="container-right">
              <div className="img-block reveal">
                <figure style={mobileappsImgFunction}></figure>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="container-left">
              <div className="img-block">
                <figure style={marketingImgFunction}></figure>
              </div>
            </div>
            <div className="container-right info-container">
              <div className="description">
                <div className="animation-sequence-1">
                  <h2>Marketing Services</h2>
                  <p>
                    Marketing is an ongoing strategy of aligning your messaging
                    to fit your customer’s emotional needs and choosing the
                    right channels to distribute your messaging.
                  </p>
                  <p>
                    It starts with an understanding of what makes your customers
                    tick emotionally, and an analysis of what channels can best
                    carry the story behind your product. But it doesn’t end
                    there.
                  </p>
                </div>
                <Link to="#" className="btn black">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="container-left info-container">
              <div className="description">
                <div className="animation-sequence-1">
                  <h2>Augmented &amp; Virtual Reality</h2>
                  <p>
                    We develop memorable, innovative augmented and virtual
                    marketing experiences to help brands stand out from their
                    competitors while offering customers unique and useful
                    applications.
                  </p>
                </div>
                <Link to="#" className="btn black">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="container-right">
              <div className="img-block">
                <figure style={arvrImgFunction}></figure>
              </div>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="animation-sequence-1">
            <h2>Frequently Asked Questions</h2>
            <p>
              Can’t find the answer you’re looking for? Here are the most asked
              questions to help you!
            </p>
          </div>
          <ul className="animation-sequence-2">
            <li className="active">
              <h3>I’d love to work with you, how do we get started?</h3>
              <div className="answer active">
                <p>
                  <span style={{ fontWeight: "400" }}>
                    It’s as easy as chatting with a friend. All you have to do
                    is shoot us a message at{" "}
                  </span>
                  <Link to="mailto:info@parasmesoft.com">
                    <span style={{ fontWeight: "400" }}>
                      info@parasmesoft.com
                    </span>
                  </Link>
                  <span style={{ fontWeight: "400" }}> or </span>
                  <Link to="https://parasme.com/contact">
                    <span style={{ fontWeight: "400" }}>
                      https://parasme.com/contact
                    </span>
                  </Link>
                  <span style={{ fontWeight: "400" }}>
                    {" "}
                    or give us a quick call to discuss what you have in mind:
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: "400" }}> </span>
                  <span style={{ fontWeight: "400" }}>
                    <br />
                  </span>
                  <span style={{ fontWeight: "400" }}>
                    Riyadh:{" "}
                    <Link to="tel:+966502005083">+966 50 200 50 83</Link>
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: "400" }}>
                    Beirut: <Link to="tel:+96171742799">+961 71 74 27 99</Link>
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: "400" }}>
                    Dubai: <Link to="tel:+971506499503">+971 50 64 99 503</Link>
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: "400" }}>
                    Damascus:{" "}
                    <Link to="tel:+963954170017">+963 954 17 00 17</Link>
                  </span>
                </p>
                <p>
                  <span style={{ fontWeight: "400" }}>
                    Doha: <Link to="tel:+97450156800">+974 50 15 68 00</Link>
                  </span>
                </p>
              </div>
            </li>
            <li>
              <h3>How much does a website cost?</h3>
              <div className="answer">
                <p>
                  <span style={{ fontWeight: "400" }}>
                    Website costs vary greatly, largely based on the type of
                    site you need, the development type, the designs implemented
                    in it, its copywriting, its intended use. How about sending
                    us a message or info@parasme.com or
                    https://parasme.com/contact or give us a quick call to
                    discuss what suits you and your brand.{" "}
                  </span>
                </p>
              </div>
            </li>
            <li>
              <h3>Do you require upfront payment?</h3>
              <div className="answer">
                <p>
                  <span style={{ fontWeight: "400" }}>
                    To ensure you get the best results and the most value of our
                    services we do ask for an upfront payment. The type of
                    payment depends on the project we will be working on, the
                    timeline, and of course, it’s always backed up with a
                    written guarantee from both parties.{" "}
                  </span>
                </p>
              </div>
            </li>
            <li>
              <h3>How does strategy impact creativity?</h3>
              <div className="answer">
                <p>
                  <span style={{ fontWeight: "400" }}>
                    Creativity runs in our blood, and we depend on it in every
                    project we work on. A crucial element of every strategy is
                    creativity, but also creativity can sometimes run wild
                    without a strategy. At Parasme, we believe that they both go
                    hand in hand to deliver the best results in a timely manner.{" "}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="call-to-action main-section style-2">
          <div className="container-right">
            <p>Want to be part of this experience?</p>
            <h2 className="add-fade-from-bottom">Let's work together</h2>
            <Link to="#" className="btn yellow large">
              Get in Touch
            </Link>
          </div>
        </section>
        {/* This is Award Section here */}
        <Award />
      </div>
      {/* This is Footer Section Page */}
      <Footer />
    </div>
  );
};

export default Services;
