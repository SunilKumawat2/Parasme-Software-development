import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Footer from "../../footer/Footer";
import Award from "../../awards/Award";
import { Link } from "react-router-dom";
import RemarketingImg from "../../../assets/images/Remarketing.png";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Remarketing = () => {
  const RemarketingImgFunction = {
    backgroundImage: `url(${RemarketingImg})`,
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
      {/* this is Remarketing section here */}
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
                <h1>Remarketing ad services</h1>
                <div className="service_description">
                  <p>
                    If you’re looking for ways to expand your audience by
                    targeting the people that interact with you but don’t buy
                    what you’re selling, then remarketing is the answer.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={RemarketingImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Remarketing ad services:
                <br /> What’s remarketing?
              </h2>
              <div className="container-left">
                <p>
                  Think of remarketing as a reset button that allows you to
                  connect with those who often engage with your app or site.
                  Then, cleverly displaying ads in front of these users on
                  social media, Google, or other partnered websites will be your
                  second shot at making them interested in your brand and
                  becoming full-paying customers.
                </p>
                <p>
                  From spreading brand awareness to growing your profit,
                  boosting your enlisting rate, reducing shopping cart
                  abandonment, or any business goal you might have, you need to
                  think about creating efficient retargeting strategies.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Book a meeting
                    </Link>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “Optimize your conversion funnel with Parasme’s smart
                      remarketing techniques.”
                    </strong>
                  </span>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Google ads remarketing techniques:</h2>
                <p>
                  ● &nbsp; &nbsp; <strong>&nbsp; Standard Remarketing: </strong>
                  Aimed at the users who always check your site when surfing the
                  Display Network.
                </p>
                <p>
                  ● &nbsp; &nbsp; &nbsp;<strong> Dynamic Remarketing: </strong>
                  Used to communicate ads targeting people who visit your
                  e-commerce website and yet make their purchases on other
                  sites. We will ensure your ads are displayed on these websites
                  to enhance conversions.&nbsp;
                </p>
                <p>
                  ● &nbsp; &nbsp;{" "}
                  <strong>&nbsp; Remarketing lists for search ads:</strong> Used
                  to target users that continue searching for the service or
                  product they’re looking for on Google after checking it on
                  your website.&nbsp;
                </p>
                <p>
                  ● &nbsp; &nbsp; &nbsp; <strong>Video Remarketing: </strong>
                  Display your ads to users that have watched your content on
                  social media or YouTube by strategically placing them in the
                  apps and sites they use or other videos they view.
                </p>
                <p>
                  ● &nbsp; &nbsp; &nbsp;
                  <strong> Customer list remarketing:</strong> Use the data your
                  clients have shared with you via Customer match to display
                  your ads throughout multiple Google searches and reconnect
                  with them. &nbsp;
                </p>{" "}
                <h2>Social Media Remarketing</h2>
                <p>
                  Social media remarketing’s primary function is to target users
                  that have checked your website through the social media
                  platforms of your choice to promote your products or services
                  and ultimately convert them into buying customers.
                </p>
                <p>
                  People might visit your website then leave to continue their
                  online search. This is when Parasme sets social media
                  remarketing strategies to display ads about the products that
                  people viewed on your site, remind them of your brand, and
                  encourage them to make a purchase.&nbsp;
                </p>
                <p>
                  With Instagram and Facebook, Parasme’s marketing team can
                  easily retarget consumers with numerous ad formats such as
                  text ads, videos, animation, and photos. When a shopper checks
                  your site, adds an item to the cart, makes a purchase, or
                  searches for specific products, we drop a cookie to register
                  these behaviors.&nbsp;
                </p>
                <p>
                  This cookie notifies us whenever one of your website visitors
                  opens their Facebook, Instagram, or any other social media
                  account so that we implement the correct advertisement to
                  match the client’s past engagement and behavior patterns. The
                  more people visit your website, the more Parasme presents ads
                  to the correct audience at the right place and time.&nbsp;
                </p>
                <p>
                  <strong>Types of Social media remarketing:</strong>
                </p>
                <p>
                  1-&nbsp; <strong>Pixel-based retargeting:</strong> Pixel-based
                  retargeting installs a discreet piece of JavaScript -also
                  known as a cookie- on a person’s web browser in order to track
                  the sites and products that they check. At Parasme, we get
                  notifications from this cookie and display specific ads for
                  that consumer based on their behaviors.&nbsp;
                </p>
                <p>
                  2-&nbsp;&nbsp;<strong>List-based:</strong> List-based
                  retargeting is achieved by uploading a list of emails from old
                  or current clients and sending them emails that promote your
                  products, services, or upcoming promotions so that they can
                  visit your website and make more purchases.
                </p>
                <p>
                  Parasme sets up Pay-Per-Click (PPC) remarketing campaigns on
                  the social media platforms you want. Our remarketing services
                  can even search for similar audiences; the ones that haven’t
                  visited your site but present the same behaviors and qualities
                  of the users that have, in order to boost brand awareness and
                  increase sales.
                </p>{" "}
              </div>
              <div className="container">
                <h2>The advantages of remarketing</h2>
                <p>
                  An efficient remarketing strategy knows which user to pursue
                  before employing methods to attract them. Delimiting your
                  target audience can be established in many ways, such as
                  demographic and geographic targeting, analyzing how much time
                  users spend on websites, what product pages they search for,
                  and how many pages they visit.
                </p>
                <p>
                  <strong>The benefits of remarketing are:</strong>
                </p>
                <p>
                  1.&nbsp; &nbsp;{" "}
                  <strong>Staying connected to your audience:</strong>{" "}
                  remarketing will allow you to keep in touch with your audience
                  even if they’re not visiting your site or looking for you via
                  search engines. It will come in handy to remind people about
                  your brand and encourage them to try your products and
                  services.
                </p>
                <p>
                  2.&nbsp; &nbsp; <strong>Increasing conversion rate:</strong>{" "}
                  using an online marketing strategy centered on remarketing
                  will jog people’s memories about your products and services.
                  It will make them remember your brand when they decide to make
                  new purchases.
                </p>
                <p>
                  3.&nbsp; &nbsp;{" "}
                  <strong>Higher ROI and lower cost per conversion:</strong> the
                  cost per click -or the cost per conversion- for remarketing
                  ads is usually less than the cost per click from search
                  campaigns. It’s imperative to remember that some of your
                  remarketing audience is generated straight out of your search
                  campaigns, so it’s better to manage both remarketing and
                  search campaigns together.
                </p>
                <p>
                  4.&nbsp; &nbsp; <strong>Free conversions:</strong> A free of
                  charge method, also known as “view-through conversions,” where
                  users randomly see your ad online, and instead of clicking on
                  it, they decide to visit your website and become paying
                  customers directly.
                </p>
                <p>
                  5.&nbsp; &nbsp; <strong>Niche targeting options:</strong> Very
                  beneficial when you have a massive remarketing audience, and
                  you’re not sure who to reach out to. You can filter out a
                  particular target audience by group, age, gender, marital
                  status, location, people that haven’t bought your products
                  yet, or any other option you want.
                </p>
                <p>
                  6.&nbsp; &nbsp; <strong>Efficiently targeted ad text:</strong>{" "}
                  if you know which people usually visit your site, you can
                  target them by designing aesthetic visuals or ad text that
                  will help you lure them back to your website to buy your
                  products.
                </p>
                <p>
                  7.&nbsp; &nbsp;{" "}
                  <strong>Effective Call-To-Action displays:</strong>{" "}
                  remarketing is an excellent method to display new compelling
                  Call-To-Action that will lead people to revisit your website
                  to check your products and services.
                </p>{" "}
              </div>
              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  Whether you’re a new customer seeking our remarketing
                  services, or an old client looking for a new remarketing
                  strategy, Parasme’s got you covered. Our skilled team is
                  devoted to evaluating your brand’s strengths and weaknesses
                  alongside your target audience’s needs and behaviors before
                  implementing a foolproof remarketing strategy.
                </p>
                <p>
                  Our remarketing services are flexible as they’re specifically
                  tailored to match your brand’s requirements. Our marketing
                  experts will implement all the techniques and retargeting
                  strategies necessary to turn prospective clients into paying
                  consumers.&nbsp;
                </p>
                <p>
                  We offer numerous remarketing services, from offline (flyers
                  and posters) to online (emails and social media)
                  remarketing.&nbsp;
                </p>
                <p>
                  Our services include sales funnel strategies that take your
                  customers on a journey reinforced with strong call-to-action,
                  powerful messages, and discounts until they finally buy your
                  products or services.
                </p>
                <p>
                  All these methods are carefully aimed to give your company
                  another opportunity to appeal to a larger audience and
                  successfully convert them into active clients.
                </p>
                <p>
                  <strong>
                    Need help narrowing down your target audience and setting
                    highly-effective remarketing strategies?
                  </strong>
                </p>
                <p>
                  <Link style={{ textDecoration: "underline" }} to="/Contactus">
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
              <Link to="/Contactus" className="btn yellow large">
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

export default Remarketing;
