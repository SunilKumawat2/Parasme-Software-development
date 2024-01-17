import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import googletoolsImg from "../../../assets/images/google-tools.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const GoogleTools = () => {
  const googletoolsImgFunction = {
    backgroundImage: `url(${googletoolsImg})`,
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
      {/* this is Google Tools section here */}
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
                <h1>Google Tools</h1>
                <div className="service_description">
                  <p>
                    Google is known to have a vast selection of apps and tools,
                    like photo editing, blogs, email accounts, and more, all
                    designed to make people’s online experience better. At
                    Parasme, we have a team of experts that studies, monitors,
                    and applies changes to your Google tools to improve your
                    business website and get you higher search engine rankings.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={googletoolsImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Google Tools:
                <br /> Why is Google my business a necessity?
              </h2>
              <div className="container-left">
                <p>
                  It’s utterly imperative for every business to have a Google My
                  Business page because it becomes their personal Google
                  business record. You will be able to:
                </p>
                <p>
                  ●&nbsp; Write down your business name, description, photos,
                  videos, address, opening schedules, and more.&nbsp;
                  <br />
                  ●&nbsp; Advertise your business since it will be displayed in
                  search results.
                  <br />
                  ●&nbsp; Have a location via Google Maps: a GPS application
                  that has become crucial in this day and age of mobile shopping
                  and browsing. Consumers download it to locate nearby stores.
                </p>
                <p>
                  Parasme works to enhance your Google listings by utilizing our
                  breakdown of search types, knowledge of the regional Google
                  rankings, and keyword evaluation. Our goal is to ensure that
                  your local listing regularly and successfully shows up on
                  search engines. Furthermore, we will link your listing to your
                  Google+ page, providing you with full access to all Google
                  services.
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
                <h2>Google Analytics</h2>
                <p>
                  Google Analytics is a wide-ranging service. In the following
                  list, we will deliver a list of the essential features Parasme
                  uses to boost your company website SEO and grow your online
                  presence.&nbsp;
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Content</span>
                  </strong>
                  <br />
                  Businesses can observe the way visitors navigate their
                  website: the pages they check, move to, and exit from; it’s
                  significant to know if your clients are exiting your site
                  without buying anything or getting in touch with your company.
                  Likewise, pinpointing which page they’re leaving helps
                  determine and repair your website flaws.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Optimization</span>
                  </strong>
                  <br />
                  To have an in-depth understanding of how specific keywords
                  influence your business and affect your website click-through
                  rate, Parasme links your analytics with your webmaster tools
                  account to enrich your content and make it proficient.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Traffic</span>
                  </strong>
                  <br />
                  Google Analytics provides an overall understanding of your
                  site traffic - from Google PPC, Google organic results,
                  referral traffic, social sites, business listings, and partner
                  sites. We will demonstrate the online places where your
                  advertising strategy is functional, defective, or needs to be
                  modified. In addition, Google organic results can reveal the
                  keywords that bring the most clicks to your website.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Conversions</span>
                  </strong>
                  <br />
                  E-commerce websites discover the keywords that are more
                  lucrative for their business by using Google Analytics. They
                  receive precise data that let them comprehend the keywords
                  visitors enter in search engine results when they’re making a
                  purchase. This gives websites a better awareness of the
                  keywords they’re targeting and the chance of adding more
                  words.&nbsp;
                </p>{" "}
                <h2>Google AdWords</h2>
                <p>
                  Google AdWords is a highly-effective pay-per-click (PPC)
                  product. It helps you design ads that target specific keywords
                  associated with your brand by displaying them above or on the
                  right corner of Google’s organic search results whenever a
                  user looks for terms related to your company. The cost of your
                  adverts varies depending on how frequently the keywords you
                  want to target are used; the benefit of Google AdWords is that
                  you only pay when a user clicks on your ad.
                </p>
                <p>
                  When used strategically, PPC allows you to shape your organic
                  search strategy. For example, while trying multiple keywords
                  with PPC, you will discover the most suitable keywords that
                  increase traffic. Ultimately, you will use this information to
                  enhance your content creation and optimize organic results.
                </p>
              </div>
              <div className="container">
                <h2>Google Trends</h2>
                <p>
                  When combined with Google AdWords, Google Trends becomes a
                  remarkable tool that guides you through picking the right
                  keywords.
                </p>
                <p>Google Trends helps you assess:</p>
                <ul>
                  <li>
                    If certain words are commonly used and compare them with
                    different keyword combinations
                  </li>
                  <li>
                    Evaluate how their impact changes with time and in various
                    languages and areas
                  </li>
                  <li>
                    Present correlated keywords which can benefit you in
                    discovering new keyword suggestions.
                  </li>
                </ul>
                <p>&nbsp;</p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "28pt" }}>
                      “Parasme and Google Tools are the grounds for a thriving
                      SEO strategy”
                    </span>
                  </strong>
                </p>{" "}
              </div>
              <div className="container">
                <h2>The role of Webmaster search console</h2>
                <p>
                  Another service that Google is growing and developing is the
                  Webmaster search console. It acts as a great intermediate that
                  transfers information about your site to Google. It also
                  serves as a medium for Google to notify you about your search
                  engine success and the problems your website faces. At
                  Parasme, we use this tool to help your website rank higher in
                  Google and optimize your presence in Google’s eyes.&nbsp;
                  <br />
                  Here is an overview of the significant advantages of Webmaster
                  tools:&nbsp;
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Sitemaps</span>
                  </strong>
                </p>
                <p>
                  Parasme produces an XML site map for your website and
                  registers it inside webmaster tools, which will push Google to
                  locate all your website pages and easily display them within
                  its search results. Webmaster tools can also report how many
                  of your pages are listed from your site map.&nbsp;
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Search Requests</span>
                  </strong>
                </p>
                <p>
                  Webmaster tools present the total of data involving the
                  keywords that users type into Google and the results that show
                  your website. For every search term, webmaster tools offer
                  information about:
                  <br />
                  <br />● &nbsp; &nbsp;The total of impressions: how often your
                  website shows up in the results
                  <br />● &nbsp; &nbsp;The total of times users have visited
                  your website straight from Google results
                  <br />● &nbsp; &nbsp;An estimate of your click-through rate
                  <br />● &nbsp; &nbsp;The monthly alterations of the previous
                  numbers.
                  <br />
                  <br />
                  Our skilled team at Parasme carefully examines the results and
                  identifies any potential problems in how Google or visitors
                  view your search results and website.&nbsp;
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Crawl data</span>
                  </strong>
                </p>
                <p>
                  Webmaster tools give fundamental information about how many
                  search robots have access to your website, handing you control
                  over managing the frequency and rapidity of your data
                  crawling. They also notify you of the mistakes encountered
                  when crawling your website, from URL errors and robots.txt
                  errors to server errors.&nbsp;
                </p>
                <p>
                  At Parasme, we strive to keep an eye on these errors and avoid
                  them. In the case of any crawling error, our team restores
                  them on the spot and strives to uphold both your search
                  rankings and website in excellent conditions.&nbsp;
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>Linking</span>
                  </strong>
                </p>
                <p>
                  With Webmaster Tools, Google displays two major factors
                  concerning the links to your website.&nbsp;
                </p>
                <p>
                  First, there’s the display of your internal linking in a
                  strategic way that boosts website engagement -internal links
                  are a link that takes the form of a photo, document, or
                  hyperlink connecting two pages in the same online
                  domain.&nbsp;
                </p>
                <p>
                  Second, there’s the display of all the backlinks from
                  different sites that come into play when ranking your website.
                  (Backlinks or inbound links are links exhibited on sites that
                  are not yours and lead to a page on your website). Since the
                  links coming from low-grade sites can damage your rankings,
                  Webmaster tools offer you the option of rejecting these
                  links.&nbsp;
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "16pt" }}>
                      Organized search snippets
                    </span>
                  </strong>
                </p>
                <p>
                  Search snippets generate extracts in SERP (Search Engine
                  Results Pages) that display the content of a specific
                  website.&nbsp;
                </p>
                <p>
                  Webmaster tools have a new feature that allows you to test and
                  monitor your website’s organized data. Our team at Parasme
                  employs this tool to generate effective snippets that draw
                  more attention to your web pages.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Get in touch with Parasme today and let us help your brand
                      gain momentum online.
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
        {/* This is Award Sections here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default GoogleTools;
