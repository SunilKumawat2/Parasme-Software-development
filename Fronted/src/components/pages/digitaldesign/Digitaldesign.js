import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Award from "../../awards/Award";
import DigitalDesign from "../../../assets/images/digital-design.jpg";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Digitaldesign = () => {
  const digitalDesign = {
    backgroundImage: `url(${DigitalDesign})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div>
      {/* This is Header section here */}
      <NewHeader />
      {/* This is Social Media Link section here */}
      <SocialMediaLogo />
      {/* This is Digital Design Section here */}
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
                <h1>Digital design</h1>
                <div className="service_description">
                  <p>
                    With the rise of the age of media, visual communication
                    became vital for businesses to keep their products and
                    services relevant and in demand. Digital design is meant to
                    foster this type of communication through any digital
                    interface, taking into consideration elements like the
                    business’s brand, message, and target audience.{" "}
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={digitalDesign}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>

          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Digital design:
                <br /> Original designs to put your business on the map
              </h2>
              <div className="container-left">
                <p>
                  The competition in the business world is fierce. Companies
                  that stick out the most are the ones that employ digital
                  design to their advantage to hook, line, and sinker people’s
                  attention.&nbsp;
                </p>
                <p>
                  At Parasme, we use attractive artwork, animated videos,
                  banners, illustrations, photo editing, email templates,
                  infographics, and more to move your clients, speak to their
                  artistic side, unlock their imagination, and make them
                  invested in your brand.&nbsp;
                </p>
                <p>
                  Digital designs are a valuable method to advertise your
                  products and services. Opting for our services will make your
                  company more noticeable and increase your sales. Our bold and
                  eye-catching designs are a certified tool that will optimize
                  your brand awareness strategy.
                </p>
                <p>
                  Digital designs will highlight your professionalism, creating
                  a bond of trust between your clients and your brand. That way
                  they’ll be more likely to choose your products or services
                  over any of your competitors.&nbsp;
                </p>
                <p>
                  <strong>
                    Give us a call to discuss how your business can profit from
                    our digital design services.
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      Book a meeting now
                    </Link>
                  </strong>
                </p>
              </div>
              <div className="container-right"></div>
            </div>

            <div className="text">
              <div className="container">
                <h2>Our creative process</h2>
                <p>
                  Since every brand has a distinctive voice and possesses a
                  proper form of expression, our mission at Parasme is to help
                  your company channel the voice that reflects its most
                  authentic self.&nbsp;
                </p>
                <p>
                  We offer our clients a variety of digital design packages,
                  each at a different price range. No design is like the other,
                  every service is specifically modified to satisfy your
                  business needs and objectives.
                </p>
                <p>
                  At Parasme, it’s all hands on deck when it comes to helping
                  your brand get the recognition it deserves. Our professional
                  designers will give your company the push it needs to stay
                  significantly ahead of its competitors by always keeping up
                  with the latest marketing strategies and having all the tips
                  and tricks that will keep your company on track.&nbsp;
                </p>
                <p>
                  Our experts will study everything about your business, taking
                  into consideration your brand message, needs, position, and
                  future plans, then meet with you to assess your goals.
                </p>
                <p>
                  Our methods are super-efficient. We aim to understand your
                  brand as a whole in order to determine the best course of
                  action to take for your marketing strategy.
                </p>
                <p>
                  Digital design is a journey that starts with an idea, that
                  later gets developed through in-depth research, testing, and
                  experimentation before being implemented in your marketing
                  strategy. Only unique designs that are certain to leave an
                  impact on your target audience and make your brand step out
                  from the shadow of its competitors.
                </p>
                <p>
                  Our purpose at Parasme is to bring out the singularity that
                  distinguishes your brand. We combine beautiful aesthetics and
                  informative visuals to advertise your products and
                  services.&nbsp;
                </p>
                <p>
                  <strong>
                    Do you have a concept in mind but don’t know how to
                    actualize it?
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="contacu-us.html"
                    >
                      Contact us now
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28px", textAlign: "center" }}>
                    <strong>
                      “Our designs won’t just breathe life to your brand,
                      they’ll make it immortal”
                    </strong>
                  </span>
                </p>{" "}
                <h2>Every digital design holds a deeper meaning</h2>
                <p>
                  With the advancement of technology and its effect on
                  businesses, digital design became a requisite to a company’s
                  success. The secret for the efficiency of digital design
                  relies more on the psychology it holds than on the added
                  marketing value.&nbsp;
                </p>
                <p>
                  When it comes to advertising, nothing is ever chosen randomly.
                  From the colors used, to the wording of the text, choice of
                  fonts, proportions and order of the overall display,
                  everything has a hidden meaning. Every element is purposely
                  calculated to have a mesmerizing effect on the people your
                  brand targets, unconsciously playing on their emotions or on a
                  certain need and turning them into paying customers.
                </p>
                <p>
                  Whether you’re introducing a new product, advertising a new
                  service, announcing an upcoming event or discount, your
                  digital designs are what reel in your customers. &nbsp;
                </p>
                <p>
                  At Parasme, we combine our digital design services with some
                  of our other services such as Search Engine Optimization
                  (SEO), so that we achieve the best results in growing your
                  business.
                </p>
                <p>
                  What truly makes digital design so special is its flexibility;
                  it can be effortlessly altered to match any business, no
                  matter its nature, needs, or necessities. Our team is well
                  experienced in all types of digital design projects; whether
                  it’s a simple yet impactful one, or it’s a sophisticatedly
                  unique piece de resistance, we’re always up for the challenge.
                  Our top-notch digital design services will put your brand,
                  products, and services under the spotlight.
                </p>{" "}
              </div>

              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  Founded in 2014, Parasme is known for its award-winning work
                  in the field of advertising. We thrive on combining brand,
                  culture, and commerce to transform your brand into a human
                  experience and help your business reach its full
                  potential.&nbsp;
                </p>
                <p>
                  We have a wide range of services at your disposal; from
                  bespoke business cards and brochures that raise awareness for
                  your company, to creating a website and producing video ads
                  that uniquely display your services - we’re here to have all
                  your marketing needs met.
                </p>
                <p>
                  Our philosophy is to create things people love, and it’s
                  reflected through the broad variety of digital design services
                  we offer. We never shy away from a challenging project and
                  always push ourselves to find the most artistic ways to push
                  through any setback or obstacle. The secret behind
                  successfully working with hundreds of customers and tackling
                  numerous fields is to always prioritize our customer’s needs.
                </p>
                <p>
                  Our professional team’s skills and capabilities remain
                  unmatched in the Middle East due to our thorough process of
                  hand picking the finest specialists in every area of service
                  we provide.&nbsp;
                </p>
                <p>
                  Opting for our services is a safe bet. Our creative team will
                  take good care of your business, flourish your brand’s
                  creative identity and maximize your profit.&nbsp;
                </p>
                <p>
                  Communicating with our clients is very important to us; our
                  team will back you up every step of the way from start to
                  finish, answering to all your questions, suggestions, or
                  concerns.
                </p>{" "}
              </div>

              <div className="container">
                <h2>Digital design is the pillar of a professional business</h2>
                <p>
                  Services like digital design have the sole purpose of
                  maintaining your business’s professional image and keeping
                  your brand positively relevant.
                </p>
                <p>
                  Portfolios, websites, brochures, flyers, or any advertising
                  tool that lacks originality and creativity won’t be taken
                  seriously by customers and will be easily forgotten. People
                  will only seek the services and products of the companies that
                  make a bold statement and leave them wanting more.
                </p>
                <p>
                  <strong>
                    Digital design can highlight your business and make it the
                    most valuable player in the field.{" "}
                  </strong>
                  At Parasme, we work hard to meet the expectations and
                  requirements set by your company, as well as grow your brand’s
                  reach and expand your clientele.
                </p>
                <p>
                  A successful business is the one that has established a bond
                  of trust with its customers, by staying true to the
                  premium-quality products and services it delivers. The digital
                  designs that Parasme offers will highly benefit your brand by
                  carefully upholding its genuine image and great reputation.
                </p>
                <p>
                  Our mission is to provide businesses with all the services
                  they need to make a name for themselves, activate their full
                  potential, and build a solid legacy that will be remembered
                  forever.
                </p>
                <p>
                  <strong>
                    Do you have an exceptional brand but don’t know how to
                    conquer the market?{" "}
                  </strong>
                </p>
                <p>
                  <strong>
                    Enlist our digital design services and let’s make history.
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      Get in touch!
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
              <Link to="contacu-us.html" className="btn yellow large">
                Get in Touch
              </Link>
            </div>
          </section>
        </div>

        {/* This is Award Section here */}
        <Award />
      </div>
      {/* This is Footer Section Here */}
      <Footer />
    </div>
  );
};

export default Digitaldesign;
