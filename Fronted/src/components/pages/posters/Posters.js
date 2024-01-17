import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import PostersImg from "../../../assets/images/posters.jpg";
import { Link } from "react-router-dom";
import Award from "../../awards/Award";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Posters = () => {
  const PostersImgFunction = {
    backgroundImage: `url(${PostersImg})`,
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
      {/* This is Paters section here */}
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
                <h1>Posters</h1>
                <div className="service_description">
                  <p>
                    Posters are one of the most crucial components of a
                    print-based advertising strategy. They make a powerful
                    communication tool as they embody your brand’s essence and
                    can target both large and small crowds. Through
                    aesthetically pleasing designs, Parasme strives to make your
                    business pop out.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={PostersImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Posters:
                <br /> The finest paper marketing method
              </h2>
              <div className="container-left">
                <p>
                  <strong>
                    It is a given that striking imagery attracts people more
                    than written words.
                  </strong>{" "}
                  Posters give your business a remarkable marketing advantage
                  because they’re created to incorporate visuals that draw
                  attention to your brand.&nbsp;
                </p>
                <p>
                  Posters are considerably less expensive to design in
                  comparison to the budget of standard paper advertisements used
                  in printed media. First-rate posters can be given out and
                  displayed by your company personnel to cut down on marketing
                  fees and boost your brand awareness.&nbsp;
                </p>
                <p>
                  Small businesses and start-up companies usually have a limited
                  advertising budget and can’t afford newspaper or magazine ad
                  placements. Therefore, creating superior posters is an
                  excellent and cost-effective plan B.&nbsp;
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Create your poster however you see fit</h2>
                <p>
                  Whether you want us to design tiny posters that notify your
                  clients about an upcoming sale or bold artworks that showcase
                  your fresh products or services, Parasme has all your
                  requirements covered. Our expert graphic designers have worked
                  on numerous projects and designed hundreds of bespoke posters
                  for various businesses. Every shape, color palette, size,
                  font, and element we use is carefully hand-picked to cater to
                  all your brand’s goals and needs.
                </p>
                <p>
                  <strong>
                    The advantage that poster advertising holds is its high
                    flexibility.
                  </strong>{" "}
                  Parasme offers unlimited creative options; we aim to
                  personalize your poster however you see fit. So whether you
                  want to add QR codes or give out coupons with your posters, we
                  aim to bestow your brand with a solid engagement among its
                  target audience.
                </p>
                <p>
                  Whenever a company introduces a new service, announces a
                  future sale, or releases a new product, it needs a powerful
                  weapon to grow product awareness. Poster design is a fail-safe
                  marketing technique that uses beautiful prints to further your
                  exposure.&nbsp;
                </p>
                <p>
                  <strong>
                    If you have any inquiries about our poster design services,
                    you’re welcome to contact us and get a consultation free of
                    charge.
                  </strong>
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
                </p>{" "}
                <h2>Posters: an endless source of creativity</h2>
                <p>
                  <strong>
                    An ideal poster carries your brand’s philosophy and message.
                  </strong>{" "}
                  Poster designs are practical for advertising your services or
                  merchandise because you’re free to combine outstanding visuals
                  and typography or only use one. Businesses that want to make a
                  brilliant and commanding statement while promoting their new
                  services and advertising their company will usually opt for
                  artistic posters.
                </p>
                <p>
                  Paper advertisements inside magazines and newspapers will be
                  doodled on and quickly forgotten after people finish reading
                  the material. With our posters, you have the freedom to decide
                  where to display them and the power to influence a bigger
                  number of people.&nbsp;
                </p>
                <p>
                  You have to be smart and strategic about the locations you
                  choose to showcase your posters, ensuring that they get a ton
                  of daily traffic. Parasme will provide you with exclusive
                  designs and keen location scouting services to make your brand
                  the talk of the town.
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "28pt" }}>
                      “Posters are the window to your business”
                    </span>
                  </strong>
                </p>{" "}
              </div>
              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  For the last 8 years, Parasme still strives to thoroughly
                  craft experiences that will create a lasting impression for
                  you and your brand. We provide our customers with complete
                  optimized search engine websites as well as premium digital
                  and print designs.
                </p>
                <p>
                  Our skilled graphic designers will build your poster from
                  scratch, using every creative tool at their disposal. In case
                  you have already picked the visuals you want in your poster,
                  our reprographics team will work hard to fulfill your wishes
                  and avoid any print issues.&nbsp;
                </p>
                <p>
                  Every brand has a story, and posters are an efficient means to
                  share it with your audience. Our poster designs are catered to
                  match every size and are completely bespoke to your
                  requirements.&nbsp;
                </p>
                <p>
                  Our graphic design team will work alongside our copywriters
                  and give life to eye-catching posters that will dazzle the
                  consumers and make them want to buy your products and
                  services.
                </p>{" "}
              </div>
              <div className="container">
                <h2>An “Old but Gold” marketing technique</h2>
                <p>
                  Ultimately, posters are the most versatile marketing method;
                  Parasme’s designs will ensure that the odds are in your
                  company’s favor. In addition, resourceful posters have a
                  different feel than other printed materials because they
                  explicitly hit the spot by catering to your business’s target
                  audience.&nbsp;
                </p>
                <p>
                  Hanging your posters in the places your consumers hang out
                  will increase your interactions with them. Therefore, choosing
                  the right color, patterns, fonts, and shapes is crucial to
                  reflect your company’s essence in its most authentic
                  form.&nbsp;
                </p>
                <p>
                  From brainstorming to development and applying the finishing
                  touches, Parasme has a team of professionals equipped to
                  handle the entire creation process. Our outlines aim to embody
                  your brand’s identity and grow your following.
                </p>
                <p>
                  <strong>
                    We welcome all ideas and want to help you realize
                    them.&nbsp;
                  </strong>
                </p>
                <p>
                  Since every project is unique, Parasme will sit with you to
                  understand all your requirements to get the best out of our
                  services. Whether you’re looking for a simple design with a
                  memorable catch-phrase or you’re aiming for a poster that is
                  more elaborate and ends with a straightforward call to action,
                  we are here to execute your vision.&nbsp;
                </p>
                <p>
                  Colorful posters that stimulate people’s brains and leave a
                  good impression are a cost-effective old-fashioned marketing
                  tool. Charming prints will turn heads on your company’s
                  products, services, events, and discount deals. In addition,
                  Parasme’s services strive to make your business look
                  professional.
                </p>
                <p>
                  No matter the field you work in, Parasme will connect your
                  brand to the public. Our designs will solidify your marketing
                  strategy by piquing people’s interest when they pass through
                  the locations in which you cleverly display your
                  posters.&nbsp;
                </p>
                <p>
                  <strong>
                    Get started on your poster design today and give your
                    audience the wow factor that will keep your brand stuck in
                    their minds.&nbsp;
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      Give us a call!
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

export default Posters;
