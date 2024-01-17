import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import seosoftwareImg from "../../../assets/images/seo-software.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const SEOSoftware = () => {
  const seosoftwareImgFunction = {
    backgroundImage: `url(${seosoftwareImg})`,
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
              <div className="title">
                <h2>Services</h2>
                <h1>SEO Software</h1>
                <div className="service_description">
                  <p>
                    Parasme is well-experienced in setting good SEO strategies
                    and increasing online traffic. Although a team of experts is
                    in charge of most of our SEO services, SEO software prevents
                    human errors, gets more precise results, and continuously
                    updates stats and information. In addition, SEO software
                    takes away the pressure of gathering data and permits our
                    experts to focus on creating brilliant and successful SEO
                    strategies.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={seosoftwareImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                SEO Software:
                <br /> SEO software build better SEO campaigns
              </h2>
              <div className="container-left">
                <p>
                  Parasme builds a successful SEO campaign by combining our
                  team’s skills and knowledge of using cutting-edge SEO
                  software. It’s vital for people using SEO software to have
                  insight into how they work and whether or not they match the
                  targeted SEO and marketing campaigns. After that, you’ll have
                  accurate information in your hands and will be able to make
                  better choices that lead to higher website rankings.
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
                  <span style={{ fontSize: "26pt" }}>
                    <strong>
                      “SEO is the fine line between existing online and being
                      seen.”&nbsp;
                    </strong>
                  </span>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Types of SEO Software</h2>
                <p>
                  <strong>1-&nbsp;</strong>{" "}
                  <strong>Google Keyword Planner: </strong>Keyword Research is a
                  tool that usually comes with Google AdWords and is employed in
                  SEO campaigns because Google Keyword planner gives you a list
                  of numeral target keywords customized for your customers. The
                  ultimate benefit of the Keyword Research tool is that it
                  allows you to take a look over how many searches users in
                  specific towns and locations make that involve your chosen
                  keywords.
                </p>
                <p>
                  <strong>2-&nbsp;&nbsp;Google Webmaster Tools:</strong> used
                  for search and site analysis. This tool gives us a preview of
                  how Google showcases a website when users look for it.
                  Parasme’s staff employs it to:
                </p>
                <p>
                  -Send sitemaps to Google and save your website in their
                  database
                </p>
                <p>-Verify if your site is on Google’s radar</p>
                <p>-Make sure to target the right regions</p>
                <p>
                  -Go over the keywords Google is using to rank your website
                </p>
                <p>
                  <strong>3-&nbsp;&nbsp;Google Analytics: </strong>this tool is
                  vital for getting a good analysis report. Google Analytics’
                  features aid business owners to see how and when people
                  interact with their websites. From collecting data, observing
                  and examining web traffic, to reporting issues, Google
                  Analytics gives you an overview that presents how much time
                  people spend on your websites and the patterns behind their
                  behavior.
                </p>
                <p>
                  <strong>4-&nbsp;&nbsp;Trello:</strong> A tool like Trello is
                  perfect for website managers because when used with SEMrush,
                  it optimizes SEO.{" "}
                  <strong>
                    SEMrush is an online feature that allows users to evaluate
                    the SEO data of their website and their rivals’ sites.
                  </strong>{" "}
                  It’s also utilized for keyword research and online ranking
                  data, and gathers data about the keywords used on Google and
                  Bing search engines.{" "}
                  <strong>
                    Combining SEMrush with Trello lets you transform the SEMrush
                    data into tasks on Trello.
                  </strong>{" "}
                  For instance, with the Site Audit feature you can detect the
                  problems that are affecting SEO and convert them into tasks on
                  Trello to get them fixed. You can access other tools such as{" "}
                  <strong>Topic Research</strong> which tasks your copywriters
                  with new subjects to write about, or{" "}
                  <strong>Content Audit</strong> which lets you monitor your
                  website content and search engine ranking.
                </p>
                <p>
                  <strong>5-&nbsp;&nbsp;Majestic SEO:</strong> Parasme uses this
                  tool to keep tabs on link metrics, especially backlinks. It
                  lets us observe the common links between our clients’ websites
                  and their competitors.
                </p>
                <p>
                  <strong>6-&nbsp;&nbsp;Grammarly:</strong> this certified
                  proofreading software is a must-have for any content writer.
                  It examines grammar and spelling errors in the website content
                  you compose helps you find them and fix them because sites
                  with impeccable grammar and language have higher SEO. With the
                  Premium package, Grammarly goes through more than 8 million
                  websites allowing SEO experts to spot plagiarism to Parasme’s
                  copywriters constantly using it to evaluate the content they
                  produce, making sure that it’s unique so that your site ranks
                  better on search engines.
                </p>
                <p>
                  This certified proofreading software is a must-have for any
                  creative writer. Parasme’s copywriters constantly use it to
                  evaluate the content they produce before posting it.
                </p>
                <p>
                  <strong>7-&nbsp;&nbsp;Copyscape:</strong> this tool’s primary
                  goal is to verify whether the content you post on your website
                  is authentic or copied from another source. If you want your
                  website to have a high SEO ranking, your site needs to produce
                  unique material.
                </p>
                <p>
                  <strong>8-&nbsp;&nbsp;Web CEO: </strong>The first step Parasme
                  takes when working with a client is to put their website on
                  Web CEO; this tool inspects the ranking status of your target
                  keywords, SEO problems, broken links, inbound links, and more.
                  Our team will reach out to you every month with a complete
                  report about the scan.
                </p>
                <p>
                  <strong>9-&nbsp;&nbsp;Visual Website Optimizer: </strong>a
                  tool used for A/B testing. It contains a point-and-click
                  editor that helps us design various versions of your website
                  and landing pages to find which version generates the most
                  sales. This tool is also used for heat map analysis, the
                  process of evaluating heat map data to understand how users
                  engage with your site. It helps us improve our site designs,
                  increase traffic, and get better conversion rates.
                </p>
                <p>
                  <strong>
                    Are you having trouble with your SEO strategies and want to
                    optimize your online presence?
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
              <div className="container"></div>
              <div className="container"></div>
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

export default SEOSoftware;
