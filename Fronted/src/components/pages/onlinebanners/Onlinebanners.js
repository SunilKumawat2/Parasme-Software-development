import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import onlinebannersImg from "../../../assets/images/online-banners.jpg";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Onlinebanners = () => {
  const onlinebannersImgFunction = {
    backgroundImage: `url(${onlinebannersImg})`,
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
      {/* this is Online Banners section here */}
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
                <h1>Online banners</h1>
                <div className="service_description">
                  <p>
                    In the swift age of trends and social media, it has become
                    very challenging for a company to stay relevant. Therefore,
                    your repertoire of marketing strategies needs to be diverse
                    and fresh for you to promote your services, campaigns, or
                    products.{" "}
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={onlinebannersImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Online banners:
                <br /> A new form of digital advertising
              </h2>
              <div className="container-left">
                <p>
                  Online banners are minimal and efficient display ads designed
                  to promote your company and the services or products you
                  offer. What distinguishes online banners and makes them a
                  powerful marketing tool is their ability to entice your target
                  audience with a simple layout tailored for them. The appeal of
                  online banners is that they’re used to spread the main idea
                  about your company across the web in an aesthetically pleasing
                  format.
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>What makes online banners special?</h2>
                <p>
                  The ways you can use online banners to promote your company
                  are endless. Due to their high flexibility, they’re easily
                  adaptable and can be placed anywhere online.&nbsp;
                </p>
                <p>
                  Carefully designed banners attract traffic to your business
                  when you strategically place them on search engines, websites,
                  marketplaces, or any other place. Grabby online banners are
                  beneficial and help you establish your online identity while
                  advertising your company’s events, services, packages, or
                  products.&nbsp;
                </p>
                <p>
                  Online banners are easy to absorb and don’t overwhelm people
                  with too many details, making them one of the most
                  straightforward marketing techniques.
                </p>
                <p>
                  The advantage of using online banners is that their
                  flexibility not only allows you to display them on your
                  website but gives you the ability to work them in any online
                  space you see fit. In addition, you can manipulate them to fit
                  your company’s objectives and needs while spreading your
                  brand’s philosophy cleverly and concisely.
                </p>
                <p>
                  <strong>
                    <Link style={{ textDecoration: "none" }} to="/ContactUs">
                      Book a meeting
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “Good banners always make an excellent impression”
                    </strong>
                  </span>
                </p>{" "}
                <h2>
                  Infographics: Clear and beautiful visual representations
                </h2>
                <p>
                  If you’re worried that the information you’re communicating is
                  intricate and hard to grasp, you can always make use of
                  infographics to present images, figures, and data about your
                  company in a simple design.
                </p>
                <p>
                  People usually avoid massive paragraphs and get easily bored
                  reading numbers and details. As a result, businesses tend to
                  use visually engaging infographics to pass the necessary
                  information that convinces customers to buy their products and
                  services.&nbsp;
                </p>
                <p>
                  At Parasme, our expert graphic designers will convert
                  technical and cryptic information into coherent statistics and
                  data laid out onto carefully crafted infographics.&nbsp;
                </p>
                <p>
                  Opting for our services means having professional infographics
                  bespoke to your company's needs and objectives. We convey
                  infographics that stay true to your brand’s vision and follow
                  the same visuals, colors, and themes.&nbsp;
                </p>
                <p>
                  Our team operates with the latest software to create models
                  that can conform to all digital and analog platforms from
                  social media to classNameic print and everything in between.
                </p>{" "}
              </div>
              <div className="container">
                <h2>How can online banners help your business?</h2>
                <p>
                  Using online banners to promote your company’s services and
                  products is a brilliant marketing move that will spread your
                  brand awareness to a broader public and remarkably increase
                  your profit and return on investment (ROI).&nbsp;
                </p>
                <p>
                  <strong>
                    Remember, in business, first impressions are crucial.&nbsp;
                  </strong>
                </p>
                <p>
                  When people come across strikingly impressive online banners,
                  they will be tempted to look your company up, visit your
                  website, browse its content, and ultimately buy your products
                  or services.
                </p>
                <p>
                  Poorly executed ads won’t make people care about what you
                  offer and render you insignificant. It’s all about bonding
                  with your clients using aesthetically pleasing images that
                  represent your company as worthy and trustworthy. Once clients
                  have faith in your brand, they’ll rely on your services and
                  products to fulfill their needs.
                </p>
                <p>
                  Online banners are a unique marketing technique that helps
                  your business build its internet presence clearly and simply.
                  At Parasme, we design banners that incorporate and deliver key
                  information about your business through pictures, fonts,
                  styles, and color patterns that are sure to dazzle your target
                  audience.&nbsp;
                </p>{" "}
              </div>
              <div className="container">
                <h2>Parasme’s digital design services</h2>
                <p>
                  <strong>
                    High-quality digital designs are at the center of any
                    business success story.
                  </strong>{" "}
                  Aside from providing you with eye-popping online banners,
                  Parasme has a myriad of elite digital design services, from
                  email templates, logo design, illustrations to infographics
                  and many others. Our team works non-stop to produce digital
                  material that guarantees your business stays on top of the
                  rising market hassle.&nbsp;
                </p>
                <p>
                  Professional digital designs can benefit your business in
                  various ways, including making a big statement about your
                  brand and gaining the most exposure. However, no matter your
                  marketing angle, whether it’s promoting an upcoming offer, a
                  new service, an exciting sale, or the release of a product,
                  you always need up to standard graphic design services.
                </p>
                <h2>Mixing marketing services to boost your business</h2>
                <p>
                  At Parasme, we pride ourselves on being innovators in the
                  marketing and branding field. We take every project to heart
                  and push ourselves to the limit to execute your brand’s
                  vision.
                </p>
                <p>
                  Our skilled graphic designers will provide you with online
                  banners and other digital design services that are entirely
                  bespoke to align with your company’s goals and needs, optimize
                  your revenue, and single you out from other business
                  rivals.&nbsp;
                </p>
                <p>
                  Parasme has been around for 8 years and has become an expert
                  in online advertising. Our experts know how to design and
                  launch online banners that can support any type of business
                  and put it on the map. In addition to our excellent digital
                  designs, you will benefit from numerous services including,
                  web design, video advertising, and Search Engine
                  Optimization.&nbsp;
                </p>
                <p>
                  By blending multiple advertising tools and marketing
                  strategies, we will keep your business ten steps ahead of its
                  competitors.&nbsp;
                </p>
                <h2>Why Parasme?</h2>
                <p>
                  We live in the advanced era of technology where almost
                  everyone owns a laptop, smartphone, or any electronic device.
                  Parasme’s services are centered on keeping your business up
                  with the times.&nbsp;
                </p>
                <p>
                  We work hard to build you an impactful online presence,
                  combining our website design and management services with
                  premium graphic design services. We’ll make sure that your
                  website, as well as online banners or any other digital design
                  project, conforms to every device, screen, and internet
                  platform.
                </p>
                <p>
                  Our skilled web developers' actions cater to boost your
                  business conversion optimization. &nbsp;Our advertisers and
                  marketing specialists work hard to manage your online banners.
                  They study your target audience to find the exact time, place,
                  and users to promote your online banners.
                </p>
                <p>
                  <strong>
                    All our services balance each other so that every aspect of
                    your content is professionally taken care of
                  </strong>{" "}
                  <strong>-</strong> For example, combining our graphic design
                  expertise with creative copywriting skills will get you a
                  phenomenal advertising tool. Our copywriters write captivating
                  and personalized materials explicitly tailored to match the
                  style of your banners.&nbsp;
                </p>
                <p>
                  They also provide you with brilliant slogans using clever
                  word-play that entices viewers to visit your website. Our
                  aesthetic online banners design conveys compelling content to
                  promote your company's products or services.
                </p>
                <p>
                  <strong>
                    Are you looking for brilliantly designed online banners to
                    boost both your website traffic and sales numbers?{" "}
                  </strong>
                </p>
                <p>
                  <strong>Then you’re in the right place!&nbsp;</strong>
                </p>
                <p>
                  <strong>
                    Give us a call and so that we can start planning your online
                    takeover.
                  </strong>
                </p>
                <p>
                  <Link style={{ textDecoration: "underline" }} to="/ContactUs">
                    <strong>Get in touch</strong>
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

export default Onlinebanners;
