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
import { Link } from "react-router-dom";
import BusinesscardbackgroundImg from "../../../assets/images/business-card-design.jpg";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Businesscard = () => {
  const BusinesscardbackgroundImgFun = {
    backgroundImage: `url(${BusinesscardbackgroundImg})`,
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
      {/* This is Business Cards Section here */}
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
                <h1> Business card design</h1>
                <div className="service_description">
                  <p>
                    Even though we live in a digital era, business cards are
                    still as relevant as ever, considering that they have an
                    important impact on people. They are essential for any
                    business; it keeps them relevant and spreads more awareness
                    to their brand.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={BusinesscardbackgroundImgFun}
              ></figure>
              <Link to="" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Business card design:
                <br /> Business cards are the pillar to your business
              </h2>
              <div className="container-left">
                <p>
                  Business cards are not just simply meant to be a way of
                  swapping contact information with your clients, they are in
                  fact an effective advertising strategy. When you’re giving out
                  your business cards, you’re not just trying to promote or sell
                  your products or services, you’re also letting people know
                  that you’re a professional that takes their work seriously.
                </p>
                <p>
                  Despite living in an age where everything is virtual and
                  online, actual traditional business cards are still vital to
                  your business. An original eye-catching business card design
                  will leave a good impression about your professionalism to
                  potential clients.
                </p>
                <p>
                  Bespoke business cards provide your potential customers with
                  something concrete that will leave an imprint. That way,
                  you’ll make sure that your business stands out from the other
                  businesses in the mind of the consumer.
                </p>
                <p>
                  It doesn’t matter if you have a huge online presence, every
                  professional business needs to have real business cards. At
                  Parasme, we can help you create business cards that are
                  completely suited to your company’s brand.
                </p>
                <p>
                  Always having business cards on you and handing them out
                  reflects on how genuinely professional you are and how much
                  you value your brand. Meticulously designed business cards are
                  very efficient when given out to potential clients as they
                  have a way of piquing their interest in your products and or
                  services.&nbsp;
                </p>
                <p>
                  When potential customers have something tangible in their hand
                  that represents your business and gives them accurate details
                  about your company, it makes them more invested in your brand
                  and influences their decision; hence increasing your
                  business's chances of being chosen.&nbsp;
                </p>
                <p>
                  Because business cards are a pillar of your advertising
                  strategy, you must be very careful when creating them. Don’t
                  forget to make sure that they’re a good fit for your brand.
                </p>
                <p>
                  Here at Parasme, we have your best interest in mind and will
                  work with you to create a business card that fits your image,
                  brand, and message.
                </p>
                <p>
                  <span style={{ fontSize: "14pt" }}>
                    <strong>
                      Need help with your business cards?{" "}
                      <Link
                        style={{ textDecoration: "underline" }}
                        to="/Contactus"
                      >
                        Book a meeting
                      </Link>{" "}
                      with Parasme now.
                    </strong>
                  </span>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            {/* This is Latest Branding Projects Section here */}
            <LatestBrndingProjects />
            <div className="text">
              <div className="container">
                <h2>Why do you need a business card?</h2>
                <p>
                  Owning a business card is super easy, but having one that
                  leaves a mark is more challenging. Many businesses will hand
                  you their card and you would soon forget about even having it,
                  while other cards will make a stronger impression. That’s what
                  distinguishes generic business cards from thoroughly crafted
                  ones.&nbsp;
                </p>
                <p>
                  Despite being a traditional technique for marketing, business
                  cards can get hold of a big number of people. They can
                  strongly and consistently advertise your business, especially
                  if they’re uniquely designed.
                </p>
                <p>
                  High-quality business cards can make a very good impression on
                  a client who will then give your business card to another
                  client and so on… spreading the word about your brand and
                  widening your clientele’s list
                </p>
                <p>
                  Our team of graphic designers will finish up your business
                  card with an original outline that suits the aesthetic of your
                  brand and includes all the information needed about your
                  company. Business cards are one of the best economical ways of
                  showing genuine faith in your brand and merchandise.
                </p>
                <p>
                  At Parasme, we value your opinion and feedback and encourage
                  every brand to express itself; from choosing the color palette
                  you want to using your current logo or deciding to create a
                  new one. We’ve got you covered as we’ve mastered the art of
                  making exclusive business cards and helped a lot of clients
                  with all their needs.
                </p>
                <p>
                  Remember, business cards are the most efficient way for you to
                  spread awareness about your brand at business conventions,
                  trade shows, or conferences. Distributing well-designed cards
                  saves your potential clients the pain of jotting down wrong
                  information about your business, and instead ensures that they
                  get the right details professionally and sensibly.
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "27pt" }}>
                    “Make your business cards stand out with Parasme”
                  </span>
                </p>
                <h2>Why Parasme?</h2>
                <p>
                  At Parasme, we strive to help you increase your brand
                  awareness by creating custom business cards that capture its
                  essence.
                </p>
                <p>
                  Note that business cards should be easy on the eye, with
                  simple clear details, and enough white space to avoid
                  cluttering the design. Ideally, they should include the name
                  and address of the company, as well as the contact info such
                  as the phone number, email, and website.
                </p>
                <p>
                  Every concept is unique and every company has its individual
                  take on its brand. Our Parasme team will help you achieve the
                  best results in applying the design, layout, and information
                  that match your brand’s identity and make your business card
                  attract the most attention. &nbsp;
                </p>
                <p>
                  When it comes to business cards, “out with the old, in with
                  the new” does not apply. Although technology rules modern
                  business and most of the work is now handled online,
                  traditionally refined business cards are often the first to
                  give life to your brand and boost its awareness.&nbsp;
                </p>
                <p>
                  If prospective associates or customers are impressed by the
                  originality of your card designs and interested in the
                  information presented, they’re more likely to choose your
                  services. Seeing you put lots of effort and energy into your
                  business card will show them how serious you are about your
                  brand image and encourage them to work with you.&nbsp;
                </p>
                <p>
                  No matter how good or compelling you are at pitching your
                  brand, if you’re representing your company at a networking
                  event against your competitors and you don’t have business
                  cards to hand out, your potential clients will lose interest
                  and forget about you as soon as they move on to the next
                  business stand.
                </p>
              </div>
              <div className="container">
                <h2>A practical and cost-effective advertising strategy</h2>
                <p>
                  The Parasme team is here to assist you in designing and
                  developing the perfect business card that reflects what both
                  you and your business are about. Our work is completely
                  personalized to your brand’s message and objectives.
                </p>
                <p>
                  Trade shows, business seminars, and conferences usually happen
                  in crowded and fast-paced settings. Business cards are the
                  most effective method to start circulating your brand.
                  Potential clients won’t have time to write down or take notes
                  about your company on their phones; high-quality business
                  cards provide them with all the necessary information about
                  your business.
                </p>
                <p>
                  In addition, business cards are very practical due to their
                  small size. You can display them on tables, counters, or
                  boards as well as your workplace and even hand them out to the
                  people attending conferences and business seminars.&nbsp;
                </p>
                <p>
                  Business cards make a cost-effective and efficient marketing
                  strategy that increases exposure and consumer awareness.&nbsp;
                </p>
                <p>
                  <strong>
                    Our graphic design team at Parasme wants to help you create
                    an exemplary business card that will attract the right
                    crowd.&nbsp;
                  </strong>
                </p>
                <p>
                  <span style={{ fontSize: "16pt" }}>
                    <strong>So what are you waiting for?&nbsp;</strong>
                  </span>
                  <br />
                  <span style={{ fontSize: "16pt" }}>
                    <strong>
                      Let’s get started on your business card today!
                    </strong>
                  </span>
                  <br />
                  <span style={{ fontSize: "16pt" }}>
                    <strong>
                      <Link
                        style={{ textDecoration: "underline" }}
                        to="/Contactus"
                      >
                        Click here to Get in touch.
                      </Link>
                    </strong>
                  </span>
                </p>
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

export default Businesscard;
