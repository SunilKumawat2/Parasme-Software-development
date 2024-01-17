import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import CopywritingImg from "../../../assets/images/Copywriting.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Copywritingservices = () => {
  const CopywritingImgFunction = {
    backgroundImage: `url(${CopywritingImg})`,
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
      {/* This is main content here */}
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
                <h1>Copywriting services</h1>
                <div className="service_description">
                  <p>
                    When used cleverly, words have the power to influence
                    people’s buying choices. A well-composed website will
                    attract traffic and help your business build a special
                    relationship with your customers. Our Copywriters aim to
                    write interesting content fortified with keywords that help
                    your website rank higher in Search Engines.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={CopywritingImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Copywriting services:
                <br /> Good copywriting can make or break your business
              </h2>
              <div className="container-left">
                <p>
                  Search Engine Optimization (SEO) is all about knowing how to
                  use your words in the right way. To achieve great Google
                  rankings, your website needs to uphold a unique writing style,
                  but with how tough it is to make search engine algorithms work
                  for your favor, it’s easier said than done.&nbsp;
                </p>
                <p>
                  Having skilled copywriters at your disposal will help you
                  avoid posting incoherent content filled with lousy grammar,
                  typos, and unnecessary details that overwhelm readers. In
                  order to turn website visitors into paying clients, you need
                  to compose grade-A material that is catchy and compelling.
                </p>
              </div>
              <div className="container-right"></div>
            </div>

            <div className="text">
              <div className="container">
                <h2>Our standard copywriting services</h2>
                <p>
                  At Parasme, our web design services fees can include content
                  writing services. In addition, our professional copywriters
                  will work on composing a detailed description of every service
                  or product you provide.
                </p>
                <p>
                  Our team specializes in all sorts of copywriting, from press
                  releases to content marketing, newsletters, SEO copywriting,
                  and more. Our goal is to generate engaging copies that stay
                  faithful to your brand’s identity and truly represent what you
                  are offering.&nbsp;
                </p>{" "}
                <h2>Our process</h2>
                <p>
                  The first step before producing any writing material that’ll
                  optimize your marketing strategy is to set a meeting to learn
                  more about your company’s history, requirements, objectives,
                  and needs in order to understand the real message behind your
                  brand and proficiently channel your voice to boost the sales
                  of your services or products.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Book a meeting now
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “With Parasme’s copywriting services, words never fail to
                      impress”
                    </strong>
                  </span>
                </p>{" "}
              </div>

              <div className="container">
                <h2>Copywriting at its finest</h2>
                <p>
                  At Parasme, we match every business with a thorough marketing
                  strategy that refreshes its professional image. Our
                  copywriters will be careful to choose the right keywords and
                  sentences to build eloquent paragraphs that engage the readers
                  with fun and informative information.&nbsp;
                </p>
                <p>
                  We analyze your company goals and target audience to deliver
                  content that satisfies both and increases your revenue. We
                  write about technical and challenging topics in an enjoyable
                  yet intelligible way for any user to understand and
                  enjoy.&nbsp;
                </p>
                <p>
                  We aim to transform your business into an experience that
                  customers will be eager to try. Our team creates SEO-friendly
                  content that captures your brand's identity, showcases your
                  professionalism, and encourages more people to try your
                  products or services.
                </p>{" "}
              </div>

              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  Parasme keeps proving to be one of the best marketing agencies
                  in the Middle East. With our premium marketing, branding, and
                  copywriting services, we’re ready to help any business in all
                  sectors deal with any issues they might have and grow their
                  ROI.&nbsp;
                </p>
                <p>
                  Our copywriters work hand-in-hand with our in-house teams to
                  ensure that the provided written content matches your brand's
                  overall aesthetic. We employ polished copies to depict your
                  business in ways that entice visitors to seek what you’re
                  selling.
                </p>
                <p>
                  Working with Parasme will give you access to our multilingual
                  copywriting services, including English, Arabic, French,
                  Spanish, and Italian. We provide your company with the
                  advantage of reaching a broader audience by posting eloquent
                  content in various languages.&nbsp;
                </p>
                <p>
                  But first and foremost, our multilingual copywriting services
                  are custom-made to match our SEO copywriting. Our cultured
                  copywriters will optimize your web visibility to rank higher
                  in Search Engines and achieve more traffic.
                </p>
                <p>
                  Whether we’re writing for E-commerce, SEO landing pages,
                  websites, blogs, social media platforms, or any other channel,
                  our copywriters will present your business in the best way
                  possible.&nbsp;
                </p>
                <p>
                  If you have any inquiries about our copywriting services or
                  need more details, contact us to set up a consultation.
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

        {/* This is Awards section here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default Copywritingservices;
