import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import SEOSiteAnalysisImg from "../../../assets/images/SEO-Site-Analysis.png";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const SEOSiteAnalysis = () => {
  const SEOSiteAnalysisImgFunction = {
    backgroundImage: `url(${SEOSiteAnalysisImg})`,
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
                <h1>SEO Site Analysis</h1>
                <div className="service_description">
                  <p>
                    Businesses that want to accentuate their online presence and
                    focus on SEO in their marketing strategy have to figure out
                    how their website is doing online first, what rank it has on
                    search engines, and how much traffic and engagement it
                    attracts.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={SEOSiteAnalysisImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                SEO Site Analysis:
                <br /> How SEO affects your online presence
              </h2>
              <div className="container-left">
                <p>
                  The challenges that follow creating a solid marketing campaign
                  centered on SEO are many, especially when there are various
                  components to ponder. Parasme knows that building a website is
                  not even the hard part; you need to organize and develop your
                  content, determine your site’s online presence, and examine
                  your backlink profile as well as your social media
                  performance.
                </p>
                <p>
                  Opting for the SEO analysis services that our well-informed
                  and skilled team of specialists provides will make your
                  website thrive online. Our SEO site analysts start their work
                  by familiarizing themselves with your business and its goals,
                  then checking out your current marketing strategy and site.
                  After that, they’ll set a foolproof maneuver to boost your
                  online presence and help you accomplish your business goals.
                </p>
                <p>
                  You will be given a run through our SEO services and an
                  accurate timeline that determines when and how we’ll reach
                  your goals. At Parasme, we value our customers. Therefore, we
                  are all hands on deck throughout our service for any issues,
                  notes, comments, or queries. Our professional team is fully
                  equipped and devoted to helping your brand become the next big
                  thing.
                </p>
                <p>
                  We evaluate your online presence and performance and take into
                  consideration important factors. Afterward, we'll provide you
                  with an in-depth analysis that contains all of these criteria
                  that informs us how your website is performing to detect and
                  fix any problems. The report incorporates:
                </p>
                <p>
                  1-&nbsp; <strong>Website content:</strong> covers
                  keyword-targeted content, image Alt tags, meta titles, and
                  descriptions.
                </p>
                <p>
                  2-&nbsp; <strong>Website structure:</strong> covers website
                  speed, structured data, comparison of coding to best
                  practices, robots txt files, redirects, and canonical.
                </p>
                <p>
                  3-&nbsp; <strong>Backlink profile:</strong> covers google page
                  rank, quality of links to your website, and volume of links to
                  your website.
                </p>
                <p>
                  4-&nbsp; <strong>Social presence:</strong> covers the number
                  of likes and shares of your website pages and examines your
                  social media platforms like Facebook, Twitter, and Google+.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Book a meeting with Parasme for a complete SEO site
                      analysis report
                    </Link>
                  </strong>
                </p>
                <p>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “Parasme is all about creating exceptional experiences
                      that immortalize your brand”
                    </strong>
                  </span>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Parasme’s website services</h2>
                <p>
                  Over the years, Parasme helped several brands have a solid
                  online footing. We design practical sites that are
                  aesthetically pleasing, post captivating content, and cater to
                  all SEO requirements. Every website was once a concept born
                  out of conversation and brainstorming. Our team will sit with
                  you to fully grasp your brand’s story and goals and determine
                  how our services can enhance your online potential.
                </p>
                <p>
                  Parasme is ready to tackle any project. Are you looking for
                  expert web designers to build you a fresh, innovative website
                  that functions with every social media platform? Or do you
                  simply want a one-time SEO service to optimize your website
                  traffic? Our goal is to help all brands find their voice and
                  get discovered by millions online.
                </p>{" "}
                <h2>Backlink examination</h2>
                <p>
                  Our SEO site analysis service will examine your website's
                  backlink profile, which plays a big part in your SERP ranking
                  (search engine results pages). By definition, a backlink
                  profile consists of every site that connects to yours. Google
                  checks the websites linked to yours, examines their quality,
                  and establishes your ranking.
                </p>
                <p>
                  Our team of experts considers multiple factors when examining
                  your website backlinks, including the number and the quality
                  of the links that lead to your website. In addition, Parasme
                  analyses your backlink profile quality by looking at the
                  impact of different factors, like domain author, relevance,
                  credibility, anchor text, and link placement.
                </p>{" "}
              </div>
              <div className="container">
                <h2>Website content</h2>
                <p>
                  There are specific SEO requirements your website needs to meet
                  to rank at the top of Google search results. For example,
                  displaying meta titles and descriptions for people to see when
                  they look for you on search engines will reflect
                  professionalism; websites that feature targeted content and
                  image alt tags get more online engagement.&nbsp;
                </p>
                <p>
                  In the fast-paced world of technology, people stay away from
                  search results with lengthy titles and overwhelming meta
                  descriptions. Instead, a clever title with a simple outline
                  that explains the provided services or products attracts
                  potential customers. At Parasme, our creative copywriters will
                  produce eye-catchy meta titles and descriptions for your
                  website that embody your brand, showcase your competence, and
                  give insight into your products and services to your target
                  audience.&nbsp;
                </p>{" "}
              </div>
              <div className="container">
                <h2>Website structure</h2>
                <p>
                  In order to outshine your competitors, you need to design a
                  website with smart SEO tactics that will create hype for your
                  brand both online and offline. Our skilled professionals work
                  hard for your website to be visually striking, user-friendly,
                  and efficient.
                </p>
                <p>
                  At Parasme, we create responsive online domains that provide
                  the perfect user experience whether your clients are opening
                  your website from their phones, desktops, tablets, or any
                  smart device. Moreover, our web designers use the most
                  efficient coding protocols, the fastest speed, and the best
                  robots txt file to ensure that conversion rate and website
                  traffic keep growing so that Google retains your site in the
                  top-tier ranks.
                </p>
                <h2>Social presence</h2>
                <p>
                  Nowadays, social media has become fundamental to boosting SEO,
                  because it’s embedded in people’s lives. Everyone has no less
                  than one social media platform they constantly check. Parasme
                  helps you use the wide world of social media to your advantage
                  and boost your online presence. Our digital marketing
                  connoisseurs will open a Facebook, Twitter, Instagram, and
                  Google+ account for your business and manage them to guarantee
                  that your pages get a substantial amount of likes and shares
                  to spread your brand awareness.
                </p>
                <p>
                  Our Human to Human (H2H) approach examines the needs of
                  consumers and compares them to the services and products you
                  provide to hook you up with the ideal advertising campaigns,
                  expand your followers, and increase your return on investment
                  (ROI). We combine buyer psychology, neuromarketing, strategic
                  marketing campaigns, years of experience, and eloquent
                  copywriting with our SEO site Analysis services to keep your
                  brand trending.
                </p>
                <p>
                  <strong>
                    Are you disappointed with your online analytics?{" "}
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Get in touch with Parasme to find out about our brilliant
                      website design, website management, and SEO services.
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
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default SEOSiteAnalysis;
