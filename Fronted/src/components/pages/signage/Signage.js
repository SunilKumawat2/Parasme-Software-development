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
import signageImg from "../../../assets/images/signage.webp";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Signage = () => {
  const signageImgFunction = {
    backgroundImage: `url(${signageImg})`,
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
      {/* THis is Signage Page Section here */}
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
                <h1>Signage</h1>
                <div className="service_description">
                  <p>
                    Signs are an artistic way of catching people’s attention as
                    they embody a company’s essence. Quality signage is a subtle
                    way to communicate your brand and influence potential
                    clients.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={signageImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Signage:
                <br /> An effortless way to draw attention to your brand
              </h2>
              <div className="container-left">
                <p>
                  Even if you have top-tier marketers and brand ambassadors, no
                  one has the time to endorse or promote your company
                  round-the-clock. Here’s where a perfectly crafted sign comes
                  in handy.&nbsp;
                </p>
                <p>
                  Signage is a bulletproof investment that gets you a massive
                  profit as time passes as your strategically placed signs drive
                  more clients and business deals. However, what actually makes
                  signs a powerful marketing tool is that you are free to place
                  them anywhere you want, not just on company grounds.
                </p>
                <p>
                  Wherever substantial foot traffic occurs is the ideal place
                  for displaying your signage. Whether it’s on the corner of a
                  busy street, the rooftop of a sky-high building downtown, or
                  at a largely crowded social occasion, setting distinctive
                  signage will be completely riveting and convey key information
                  about your brand.&nbsp;
                </p>
                <p>
                  Adding signage to your marketing campaign and thoroughly
                  picking the locations they’re placed, will significantly boost
                  your ROI.
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Make an impact with compelling signage</h2>
                <p>
                  In the cut-throat world of business, first impressions are
                  everything. A sign channels the heart and soul of your
                  business, giving people a glimpse into your brand, identity,
                  philosophy, story, and potential.&nbsp;
                </p>
                <p>
                  At Parasme, we value imagination and freedom of expression.
                  Our team is eager to learn everything about your company to
                  design the ultimate signage.&nbsp;
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      If you’re curious about Parasme’s Signage services, book a
                      meeting today, so we can discuss the best plan of action
                      to take for your business goals and needs.
                    </Link>
                  </strong>
                </p>{" "}
                <h2>Our creative process</h2>
                <p>
                  The first meeting usually dives deep into your history,
                  ethics, products, and services to understand your brand
                  essence.
                </p>
                <p>
                  Once all the information is gathered, we start with the
                  planning stage where our Brand &amp; Design Managers keep tabs
                  on what’s trending, guide you through selecting your target
                  audience, and examine the visual elements that give your brand
                  aesthetic a stable theme. Our goal is to design signs that
                  convey your brand in a way that appeals to your prospective
                  clients and satisfies their needs.
                </p>
                <p>
                  When you settle on the design, our skilled experts will
                  perform regular follow-ups throughout every step of the
                  process from conception to conclusion. Intelligent designs are
                  Parasme’s forte combining a mixture of 3D computer renderings,
                  conceptual design, mock-ups, prototypes, and sketches. We
                  won’t move to the next design phase unless you sign off on it,
                  meaning your signs will be polished and tested through every
                  stage of development.
                </p>
                <p>
                  It’s essential for us to test out your signs to understand if
                  they will perform well. Based on the results, we provide the
                  modifications your signage needs to raise your brand awareness
                  and increase your profit.&nbsp;
                </p>
                <p>
                  Rest assured that this entire process will stay true to your
                  brand image and stay within the limits of the given budget. At
                  Parasme, we want what’s best for your business and work hard
                  to design signage that will highlight your company. We never
                  shy away from a challenge and always find creative solutions
                  for any problem or obstacle is thrown our way.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      If you have a concept in mind and don’t know what to do,
                      contact our team, and they’ll take charge of making all
                      your ideas come to life.
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "26pt" }}>
                    <strong>
                      “If you’re reading this, it’s a sign that Parasme is the
                      right fit for you”
                    </strong>
                  </span>
                </p>{" "}
              </div>
              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  <strong>
                    Parasme aims to create long-lasting experiences in this
                    world for brands and ourselves.
                  </strong>{" "}
                  We highly believe that telling other brands' stories will
                  shape ours. Being one of the best innovative branding and
                  marketing agencies in the Middle East, we strive to satisfy
                  all your business needs. Our traditional print services are
                  widely spread from signage, leaflets, billboards, and
                  brochures, to any design you require, delivered by experienced
                  experts who have what it takes to make your brand STAND OUT..
                </p>
                <p>
                  <strong>
                    Our vision is to take the first step in connecting things.
                    We connect brands with ideas, resources, and the right
                    audiences.{" "}
                  </strong>
                  We believe that authentic creativity relies on connecting
                  thoughts, individuals, and things in a way that makes people
                  notice. No matter your line of work, whether you’re a
                  mechanic, chef, architect, or doctor, our signage services
                  will be the perfect match for your brand.
                </p>
                <p>
                  We got you covered every step of the way. Our graphic
                  designers will make sure that your signage project is
                  meticulously catered for and fulfill all the requirements that
                  will make your brand stand out from its competitors. Opting
                  for our designing expertise also gives you access to a myriad
                  of services like packaging design, business cards, booklets,
                  leaflets, posters, and stationery. We will make your brand a
                  living sensation across every virtual and physical platform.
                </p>
                <p>
                  We collaborate with the best sign makers to materialize your
                  ideas and concepts. Our designs include but are not limited to
                  acrylic signage, window graphics, shop fascia, A-Boards,
                  vehicle graphics, and roll-up banners. At Parasme, we
                  carefully monitor the creation and production stages, assuring
                  that all signs are top-of-the-line.
                </p>{" "}
              </div>
              <div className="container">
                <h2>Highly noticeable and cost-effective</h2>
                <p>
                  A professional business knows how to build foolproof marketing
                  campaigns that put its brand on the map. Signs are a valuable
                  asset to promote your services, products, brand, and company,
                  whether you’re a start-up or a well-known business empire.
                  Premium signage help increase your profit, connect with your
                  clients and build a trustworthy brand.
                </p>
                <p>
                  Placing signs in the right places notifies people about your
                  market presence, how they can get in touch with you, and your
                  location. If you position your signage in another province,
                  people unaware of your business might discover you and become
                  clients. Signs are a clever marketing method to give your
                  brand a wide exposure, interconnect with people, and advertise
                  new products, events, services, and sales.
                </p>
                <p>
                  <strong>People engage better with friendly brands. </strong>
                  They tend to hang out in the places they have an emotional
                  connection to, such as a go-to restaurant, a favorite store,
                  or a cherished coffee shop. Parasme’s signage services include
                  your banners and logos in a way that boosts customer
                  attachment and makes them loyal to your brand.
                </p>
                <p>
                  <strong>
                    Signs that lack certain panache fail to create intrigue in
                    people’s minds.
                  </strong>{" "}
                  Parasme specializes in creating distinctive and outstanding
                  signage designs that are guaranteed to convey brand character,
                  add value to your company, turn heads, and influence people to
                  seek your services and, or shop from your products.
                </p>
                <p>
                  <strong>
                    At the end of the day, signage will continue to be the best
                    marketing method
                  </strong>{" "}
                  because it’s the only investment that will forever generate
                  more income for your company. If you’re seeking new signage
                  designs or want to upgrade your old ones, Parasme guarantees
                  that we will keep your sign game unmatched.&nbsp;
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
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
        {/* This is Award Section Here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default Signage;
