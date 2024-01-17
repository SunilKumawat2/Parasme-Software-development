import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Award from "../../awards/Award";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link } from "react-router-dom";
import Infographics1 from "../../../assets/images/Infographics.png";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Infographics = () => {
  const infographics = {
    backgroundImage: `url(${Infographics1})`,
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
      {/* This is infogragphics section here */}
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
                <h1>Infographics</h1>
                <div className="service_description">
                  <p>
                    Infographics are a visual representation of data or
                    information. They use a series of images, texts, symbols,
                    and numbers to explain complicated topics.
                  </p>
                </div>
              </div>
              <figure className="brand-title-img" style={infographics}></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Infographics:
                <br /> Intricate data captured through simple visuals
              </h2>
              <div className="container-left">
                <p>
                  People get overwhelmed and lose concentration when reading
                  about important and challenging topics. If you want to
                  enlighten your clients about your company’s services in a
                  simple yet visually captivating way, you need to design clever
                  infographics.&nbsp;
                </p>
                <p>
                  Infographics are a visual display of data and information
                  usually represented as graphs, charts, or images followed by
                  small captions. It’s the most effective method to sum up, and
                  simplify complex subjects.&nbsp;
                </p>
                <p>
                  With the unlimited access to the knowledge provided by the
                  internet, the tactics for gathering, analyzing, and presenting
                  data are continuously developing. At Parasme, we convert the
                  technical details about your business to artistic
                  representations that are easy to understand. These
                  infographics help your consumers learn any intricate
                  information about your company quickly and efficiently.&nbsp;
                </p>
                <p>
                  If your website contains high-density content, you'd want to
                  leverage the most out of your content marketing. In that case,
                  we suggest providing your consumers with "shareable"
                  infographics - Content they find insightful enough to share on
                  social media platforms.
                </p>
                <p>
                  Every aspect of our infographic has the potential to convey
                  the right message about your company. We use images, short
                  text, charts, graphs, and other relevant data to accurately
                  and uniquely represent your business and services.
                </p>
                <p>
                  <strong>
                    The best thing about infographics is their versatility
                  </strong>
                  ; they challenge your imagination and channel your creative
                  side by combining icons, illustrations, pictures, diagrams,
                  and any other element needed to communicate your
                  message.&nbsp;
                </p>
                <p>
                  Our expert graphic designers will take parts of your numerical
                  and technical information and successfully translate them into
                  coherent infographics. Opting for our services means meeting
                  your business’s expectations with an infographic that displays
                  clear and convenient data about your company.&nbsp;
                </p>
                <p>
                  Parasme’s infographics are carefully custom-made to match the
                  essence of your brand. Our graphic design team employs
                  state-of-the-art software to create unique artworks that can
                  automatically conform to any online platform and all kinds of
                  traditional print.&nbsp;
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="contacu-us.html"
                    >
                      Book a meeting
                    </Link>
                  </strong>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Every professional business needs a logo</h2>
                <p>
                  Logos are at the core of any business. They’re the key
                  embodiment of any brand, the first thing that any person
                  recognizes or visualizes when thinking about internationally
                  successful enterprises.
                </p>
                <p>
                  Your company must choose a suitable logo because it highly
                  affects your branding strategies. Easy on the eye and
                  carefully designed logos will make a great first impression on
                  people, no matter the industry.
                </p>
                <p>
                  At Parasme, our creative team will design and conceptualize a
                  logo that reflects your brand identity and professionalism. By
                  equipping your company's marketing strategy with a
                  long-lasting asset, we'll provide you with a remarkable brand
                  awareness boost.&nbsp;
                </p>
                <p>
                  A professionally developed logo can lift your company profile.
                  Our expert designers will provide you with a one-of-a-kind
                  logo that stays authentic to your brand’s identity and
                  highlights your valuable selling points.
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      ”Drive traffic to your website with Original infographics”
                    </strong>
                  </span>
                </p>{" "}
                <h2>Why Parasme?</h2>
                <p>
                  Founded in 2014, Parasme strives to combine culture with
                  commerce to create exceptional experiences that inspire life
                  and action. We’re a brand strategy and marketing agency that
                  can convey a myriad of services for every sector of any
                  business.&nbsp;
                </p>
                <p>
                  From building complete personalized websites that are Search
                  Engine Optimized to building fully-fledged marketing
                  strategies, we’ve proven ourselves capable of tackling any
                  project that comes our way.
                </p>
                <p>
                  Over the year, we have built a team of experienced
                  professionals skilled in all manners of interactive
                  development; creative, strategic, and technical. We ensure
                  that every service we offer is explicitly bespoke to match
                  your business objectives and embody your brand’s identity and
                  message.
                </p>
                <p>
                  Since no business can function or exist without a unique logo
                  that distinguishes it from its competitors, our team will
                  design the ideal logo to maintain your undeniable professional
                  image while growing your brand awareness.&nbsp;
                </p>
                <p>
                  Parasme strives to help your brand achieve individuality by
                  providing your company with services that enhance cultural
                  expression. We are shattering the B2B or B2C concepts and
                  making way to a new vision developed by Parasme, built around
                  the H2H -Human to Human- approach.
                </p>
                <p>
                  <strong>
                    If you have any project in mind, need help creating unique
                    infographics for your business, or want to know more about
                    our other services, feel free to
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      contact us
                    </Link>
                    .
                  </strong>
                </p>{" "}
              </div>
              <div className="container">
                <h2>The role of infographics in public sectors</h2>
                <p>
                  The human attention span is a mere 6 seconds. Nowadays, any
                  design should be able to catch people’s attention in the blink
                  of an eye.
                </p>
                <p>
                  What makes infographics so practical is their ability to
                  benefit any sector by being:
                </p>
                <ul>
                  <li>Extremely accurate</li>
                  <li>Easily shareable across any online platform</li>
                  <li>Accessible to everyone</li>
                  <li>Straight to the point</li>
                </ul>
                <p>&nbsp;</p>
                <p>
                  For example, during the Covid-19 pandemic, healthcare
                  professionals need infographics to convey medical updates to
                  the world. Now more than ever, both healthcare and scientific
                  fields have substantial data and statistics to collect and
                  analyze. Infographics help them convey important information
                  in simple, effective, and colorful ways.
                </p>
                <p>
                  Solid and trusted health information can influence people’s
                  decision-making skills and raise awareness about many
                  healthcare campaigns and issues.
                </p>
                <p>
                  Government departments also require infographics to share
                  intricate social, political, and public health-related data
                  through visually pleasing figures that viewers can digest.
                  Parasme works closely with governmental agencies designing
                  special infographics to help people grasp current political,
                  economic, and cultural issues.
                </p>
                <p>
                  Whether you want to communicate government strategy plans,
                  establish a new health care protocol, or share statistics
                  about national changes, Parasme will design any infographics
                  you desire.
                </p>{" "}
              </div>
              <div className="container">
                <h2> The influence that infographics have</h2>
                <p>
                  Parasme will make sure that your company uses infographics
                  efficiently to share insights and specifics about the services
                  and products you provide in a manner that every customer can
                  easily understand. &nbsp;
                </p>
                <p>
                  We resourcefully incorporate terms, data, shapes, graphics,
                  and figures to develop straightforward infographics to use
                  across all platforms. In addition, we consider the aesthetic
                  you’ve already established for your brand and work hard to
                  make sure that our infographics complement it.&nbsp;
                </p>
                <p>
                  People tend to process information delivered in a visually
                  pleasing design more quickly than basic text format.
                  Therefore, infographics make an excellent instrument for
                  optimizing engagement, as they achieve more interaction than a
                  standard post on social media or a placed CTA on your website.
                  &nbsp; &nbsp;
                </p>
                <p>
                  The term “data” usually alludes to something dull. However,
                  using infographics to address facts will captivate those who
                  might otherwise be uninterested when using a different medium.
                </p>
                <p>
                  The story behind an infographic is what counts most.
                  Storytelling is an essential component of marketing, and
                  infographics provide an excellent method to present
                  information in a visually appealing way.
                </p>
                <p>
                  <strong>
                    Infographics are the building blocks your company needs to
                    grab consumers' attention and establish its rightful place
                    in the competitive market.&nbsp;
                  </strong>
                </p>
                <p>
                  A carefully crafted infographic will receive considerably more
                  good feedback than a blog or posting a generic message on
                  social media platforms.
                </p>
                <p>
                  While lengthy form content is still a vital part of your
                  marketing strategy, infographics fill in where other content
                  cannot succeed.&nbsp;
                </p>
                <p>
                  In a nutshell, infographics help readers visualize the
                  information you're sharing about your products and services.
                  People enjoy reading them and sharing them with friends and
                  family. They also make an interesting and reliable reference
                  when writing an article or a blog.
                </p>
                <p>
                  <strong>
                    Are you looking for a visually appealing tool to share
                    information with your audience?
                  </strong>
                </p>
                <p>
                  <strong>Let’s get started on your infographics today!</strong>
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
              <Link to="/ContactUs" className="btn yellow large">
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

export default Infographics;
