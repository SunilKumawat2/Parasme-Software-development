import React from "react";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/main.css";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import MobileMarketingImg from "../../../assets/images/Mobile-Marketing.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const MobileMarketing = () => {
  const MobileMarketingImgFunction = {
    backgroundImage: `url(${MobileMarketingImg})`,
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
      {/* this is Mobile mArketing  section here */}
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
                <h1>Mobile Marketing</h1>
                <div className="service_description">
                  <p>
                    Phones are no longer just devices that we use to call each
                    other; they have become an asset for marketing. Most
                    advertisers prefer using mobile marketing to promote their
                    services or products because of their high search traffic.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={MobileMarketingImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Mobile Marketing:
                <br /> Phones: a vital necessity
              </h2>
              <div className="container-left">
                <p>
                  People have become so attached to their phones that they build
                  their entire lives around them, relying on mobile devices
                  daily to get things done, from setting alarms and reminders to
                  using google maps, sending emails, and much more. As a result,
                  businesses can constantly reach prospective clients through
                  mobile devices.
                </p>
                <p>
                  Mobile ads are highly influential. The places they can be
                  displayed are unlimited; whether users are ordering food,
                  searching for a specific item, booking a flight or a hotel, or
                  browsing for a workshop online, you can always find a way to
                  get their attention.
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
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Different types of mobile marketing</h2>
                <p>
                  The internet has made it easy for you to study your clients’
                  lifestyles, monitor their online behaviors, and influence them
                  at the right time regardless of their location.&nbsp;
                </p>
                <p>
                  There are numerous ways to communicate with your audience:
                </p>
                <p>
                  ●&nbsp; <strong>Text Ads:</strong> Appear in the highest ranks
                  when users search for keywords or expressions that connect to
                  your brand, products, or services.&nbsp;
                </p>
                <p>
                  ●&nbsp;<strong> Display Ads:</strong> Parasme’s team can
                  provide you with spectacular graphics, from dazzling static
                  images to animated visuals to charm your target audience. The
                  beauty of display ads is that they can be presented everywhere
                  on the display network, including Gmail, inside Apps, and many
                  websites like YouTube.&nbsp;
                </p>
                <p>
                  ●&nbsp; <strong>Shopping Ads: </strong>The most efficient way
                  to showcase various products is to display them on paid or
                  organic search results on Google. It’s essential to add the
                  product’s name, price, and image for your audience to see.
                </p>
                <p>
                  ●&nbsp; <strong>Maps:</strong> The most efficient way to
                  showcase various products is to use paid or organic search
                  results and display them on Google. It’s important to add the
                  product’s name, price, and image for your audience to
                  see.&nbsp;
                </p>
                <p>
                  ●&nbsp; <strong>Geo-targeting:</strong> If you want to make
                  sure that the right people are watching your ads, you can use
                  your analytics to find out in what area, city, or country most
                  of your audience lives, which helps you target them
                  explicitly.&nbsp;
                </p>
                <p>
                  ●&nbsp; <strong>Custom Audiences:</strong> classNameify people
                  based on the sites they visit. By using Custom Audiences, you
                  will be able to specifically target the users you want and
                  effectively capture their interest.
                </p>
                <p>
                  ●&nbsp; <strong>Remarketing:</strong> When people check your
                  ad, browse your website and yet don’t enlist your services or
                  buy your products, Parasme instigates a good remarketing
                  strategy for your business. We create custom lists and target
                  users who visit your website in the hopes of driving them back
                  to your website for them to finish their booking or purchase.
                  Remarketing is a clever technique to employ as it optimizes
                  brand awareness and gives your business a second chance to
                  shine.&nbsp;
                </p>
                <p>
                  Parasme will gather a team of professionals to handle your
                  Mobile Marketing, from strategy to application. We will help
                  you stay top of users' minds -{" "}
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      give us a call
                    </Link>
                  </strong>
                  .&nbsp;
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "28pt" }}>
                      “With mobile marketing, you have the world in the palm of
                      your hand.”
                    </span>
                  </strong>
                </p>{" "}
                <h2>The benefits of Mobile Marketing</h2>
                <p>
                  <strong>
                    According to Datareportal, as of 2021, there are 5.22
                    billion mobile phone users in the world.{" "}
                  </strong>
                  Seeing the constant increase of smartphone users, companies
                  started to focus on mobile marketing, and you should
                  too.&nbsp;
                </p>
                <p>
                  Regardless of the nature of your business, having a strategic
                  mobile marketing strategy lets you influence clients faster
                  than any other traditional marketing tool. From the many
                  excellent mobile marketing benefits, we list the following:
                </p>
                <p>
                  <strong>1- Fast and Accessible:&nbsp;</strong>
                </p>
                <p>
                  <strong>
                    According to Oberlo, 56.7% of web traffic in 2021 has come
                    from mobile devices.{" "}
                  </strong>
                  To stay current, you have to follow your consumers, and that’s
                  where you need to be. Mobile marketing is successful because
                  it’s easy to access. With Parasme's mobile marketing
                  campaigns, you can instantly target your audience and connect
                  with them anywhere and at any moment.&nbsp;
                </p>
                <p>
                  <strong>
                    2- Allows you to target worldwide audiences and segment
                    them:
                  </strong>
                </p>
                <p>
                  If your company wants to get hold of a wider audience, mobile
                  marketing has the power to spread your business on an
                  international level. You will be in control of the audience
                  you want to reach by setting preference filters such as
                  location, gender, purchase behaviors, hobbies, or age.
                </p>
                <p>
                  <strong>3- A variety of marketing channels:</strong>
                </p>
                <p>
                  <strong>Mobile websites:</strong> Since most website traffic
                  derives from mobile devices, mobile websites make an efficient
                  marketing channel. Many people check their smartphones on the
                  go to look for specific websites and make purchases; that is
                  why your business website should be mobile-friendly.&nbsp;
                </p>
                <p>
                  <strong>Mobile Apps: </strong>You can showcase your ads inside
                  mobile apps or design a personal app for your business. Having
                  an app makes purchasing easier on your consumers, grows your
                  brand awareness, and allows you to engage with your clients.
                </p>
                <p>
                  <strong>SMS Marketing: </strong>Text messages have shown a
                  more effective response rate than email or Facebook.
                </p>
                <p>
                  <strong>QR Codes: </strong>A new trend for mobile marketing,
                  people can scan QR codes and be taken to a website to see
                  specific content.
                </p>
                <p>
                  <strong>In-Game Mobile Marketing:</strong> Another way to
                  reach an enormous audience is through displaying your ads
                  inside mobile games.
                </p>
                <p>
                  <strong>4- Cost-effective:</strong>
                </p>
                <p>
                  Improving your company site for mobile use or sending text
                  messages to promote your products or services is more
                  cost-efficient than other known marketing methods. A
                  remarkable advantage for new small businesses that don’t have
                  a large budget for marketing, they can create brief and
                  straightforward content that reaches a massive audience and
                  optimizes their sales.&nbsp;
                </p>
                <p>
                  <strong>5- You can go viral:</strong>
                </p>
                <p>
                  Because mobile content is highly sharable, it gives you the
                  chance of going viral. Parasme can help you produce Grade-A
                  content that people will automatically share with their family
                  and friends, resulting in your brand getting massive free
                  exposure.
                </p>
                <p>
                  <strong>6- Mobile marketing is more intimate:</strong>
                </p>
                <p>
                  People’s dependency on smartphones has developed to the point
                  where these devices have become an extension of themselves.
                  The content that consumers view on their phones has a more
                  intimate feel than any other source. Your business can take
                  advantage of this point to produce more personal and relatable
                  marketing strategies and gain a big following, &nbsp;
                </p>
                <p>
                  <strong>7- Easy to track results:</strong>
                </p>
                <p>
                  With the advancement of technology, it is now super easy for
                  your business to track your mobile marketing campaigns. By
                  examining the click-through rate and interpreting the
                  responses to your mobile marketing, you can elaborately adjust
                  your campaign. As a result, your brand will become more
                  relevant, flexible, and authentic, which will result in a
                  greater Return on Investment (ROI).
                </p>
                <p>
                  <strong>8- Optimizes your search engine rankings:</strong>
                </p>
                <p>
                  If your business stays highly active across all social media
                  platforms, it will rank better on search engines. Linking your
                  social media accounts like Facebook, Instagram, or Twitter to
                  your company website will boost your SEO rankings. Moreover,
                  Parasme provides pay-per-click strategies and creates unique
                  content for your mobile marketing strategy to enhance SEO,
                  placing your brand at the top.
                </p>
                <p>
                  <strong>
                    9- Mobile experiences influence purchasing decisions:
                  </strong>
                </p>
                <p>People that use smartphones expect to be able to:</p>
                <p>- lookup your business online</p>
                <p>- browse its website and social media accounts</p>
                <p>- contact it&nbsp;</p>
                <p>- find offers, discounts, and packages</p>
                <p>- make purchases</p>
                <p>
                  They expect their mobile user experience to be fast, smooth,
                  and efficient; a positive mobile experience leads to online
                  and offline purchases. Any bad experience like downtime,
                  glitches, or bugs will push them to abandon your brand and
                  look at your competitors.
                </p>
                <p>
                  <strong>10- The ability to test your results:</strong>
                </p>
                <p>
                  You can use A/B testing for your mobile marketing campaigns.
                  You will be able to test the performance of every aspect of
                  your marketing strategy, from content, CTAs, and video ads, to
                  targeting preferences. You will see which one offers higher
                  traffic and engaging rates with your users and discover which
                  element works for your brand and which one doesn’t.&nbsp;
                </p>
                <p>
                  <strong>
                    Parasme will ensure that your mobile marketing campaigns are
                    constantly analyzed, measured, and upgraded for your
                    business to keep getting the best results and optimizing
                    your profit.
                  </strong>
                </p>
                <p>
                  <strong>
                    Give us a call and schedule a consultation to plan your
                    mobile marketing strategy.
                  </strong>
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
              <div className="container">
              </div>
              <div className="container">
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
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default MobileMarketing;
