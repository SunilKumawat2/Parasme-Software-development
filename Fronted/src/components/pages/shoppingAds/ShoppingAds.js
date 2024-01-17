import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Award from "../../awards/Award";
import shoppingaddImg from "../../../assets/images/shopping-add.png";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const ShoppingAds = () => {
  const shoppingaddImgFunction = {
    backgroundImage: `url(${shoppingaddImg})`,
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
                <h1>Shopping Ads</h1>
                <div className="service_description">
                  <p>
                    Shopping campaigns help business owners promote their brand,
                    products, and services anywhere they want. Whether your
                    company aims for internet advertising, sponsored content, or
                    both, shopping ads will optimize the virtual and in-store
                    engagement you have with your clientele.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={shoppingaddImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Shopping Ads:
                <br /> Finding the right audience is vital
              </h2>
              <div className="container-left">
                <p>
                  Your target audience usually includes the people that look for
                  your products online, no matter their location. The advantage
                  of cleverly placing shopping ads on the web is that you only
                  pay when a user clicks on it, gets redirected to your site,
                  and browses through your stock.&nbsp;
                </p>
                <p>
                  <strong>
                    Shopping ads are not your basic text ads. They also include:
                  </strong>
                </p>
                <p>●&nbsp; Name of your shop</p>
                <p>●&nbsp; Title</p>
                <p>●&nbsp; Images of the product you’re selling</p>
                <p>●&nbsp; Prices</p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Types of Google Shopping Ads</h2>
                <p>
                  The three categories of Shopping Ads that you can integrate
                  into your Google Shopping strategies are:
                </p>
                <p>
                  1-&nbsp; <strong>Product Shopping Ad:</strong> Designed ads
                  that match the information you filled in about your products
                  on your Google Merchant Center profile.
                </p>
                <p>
                  2-&nbsp; <strong>Showcase Shopping Ad:</strong> Designed to
                  raise brand awareness by making people come across your
                  inventory. When you assemble similar items, users can compare
                  the products you offer to find the one that suits them most.
                </p>
                <p>
                  3-&nbsp; <strong>Local Inventory Shopping Ad:</strong>{" "}
                  Designed to feature product information about your local
                  inventory, it displays details about your products and
                  physical shop to appear in Google search results for nearby
                  customers.
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
                </p>{" "}
                <h2>How Shopping ads work</h2>
                <p>
                  Shopping Ads are displayed on YouTube, Images, or when people
                  type in keywords related to your product on Bing and Google
                  Search engines. &nbsp;
                </p>
                <p>
                  Setting up a Google Merchant Center account allows you to
                  register important information about your products. Google
                  determines in what ways and places to display your shopping
                  ads online. People will see ads about your products when they
                  search for merchandise that’s similar to what you sell.
                </p>
                <p>
                  For a more efficient shopping ad strategy, Parasme provides
                  you with TrueView format. It renders your ad interactive,
                  sends users to your products page, and gives them the right
                  details that persuade them to buy your products.
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "26pt" }}>
                      “Shopping ads are the big selling point to your products”
                    </span>
                  </strong>
                </p>{" "}
              </div>
              <div className="container">
                <h2>Google Shopping ads benefits</h2>
                <p>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>
                      Your products will standout
                    </span>
                  </strong>
                </p>
                <p>
                  Google Shopping ads increase the visibility of your products
                  by inserting them at the top of Google search results. Your
                  company’s product will be displayed over the organic results
                  whenever people search for key terms related to your
                  products.&nbsp;
                </p>
                <p>
                  In addition, because shopping ads include photos and essential
                  information about your product, they become more alluring for
                  customers who will be enticed to click and visit your website.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>Bigger ROI</span>
                  </strong>
                </p>
                <p>
                  It’s always wise to invest in Google Shopping ads since
                  they’re superior through a variety of metrics such as:
                </p>
                <p>
                  ●&nbsp; Cost-per-click (CPC): According to WordLead, 65% of
                  users click on CPC ads which means that shopping campaigns
                  boost engagement with your shop.
                </p>
                <p>
                  ●&nbsp; Click-through rate (CTR): Advertising performance
                  agency Merkle discovered that users are 63% more likely to
                  click on the Shopping Ads displayed on Google, a number nearly
                  twice as high as the number of clicks obtained by text ads.
                  &nbsp;
                </p>
                <p>
                  ●&nbsp; Conversion Rate: The same study by Merkle suggests
                  that shopping ads deliver a greater conversion rate than text
                  ads - 30% higher on desktops and 21% higher on mobile.
                </p>
                <p>
                  All these metrics create traffic for your shop, increase your
                  sales, and expand your Return on Investment (ROI).
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>Wider reach</span>
                  </strong>
                </p>
                <p>
                  Shopping ads can now appear beyond Google’s standard search
                  results. Since they are valuable for both consumers and
                  promoters, Google has granted them more prominent access that
                  includes Google Images, Google Display Network such as Gmail
                  and Youtube, Google Search Partner Websites, and the shopping
                  tab on Google Search.
                </p>
                <p>
                  Unlike paid search ads, which are limited to only appearing on
                  a user's search page, Google Shopping ads allow you to display
                  them in any location you want, including but not limited to
                  search result pages.&nbsp;
                </p>
                <p>
                  Therefore, your Shopping Ads can reach a wider audience of
                  buyers.&nbsp;
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>
                      High-quality online traffic
                    </span>
                  </strong>
                </p>
                <p>
                  Because Google targets the right people, it displays your
                  shopping ads to the consumers that are genuinely searching for
                  products similar to the ones you provide.&nbsp;
                </p>
                <p>
                  Users that look for a product online tend to be serious about
                  purchasing it. So when Google decides that your product
                  matches the search, they display a shopping ad that redirects
                  the client to your website.
                </p>
                <p>
                  The information included in Google Shopping ads enhances the
                  quality of your traffic by allowing people to compare prices,
                  reviews, features, and other crucial aspects before making any
                  buying decisions.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>
                      Simple to establish and monitor
                    </span>
                  </strong>
                </p>
                <p>
                  Starting a Shopping campaign doesn’t require texts or
                  keywords; you just need to access your Google Merchant Center
                  account, where the product feed will do the work.&nbsp;
                </p>
                <p>
                  Furthermore, it will save you the effort of always including
                  information about your products manually because Google
                  Merchant Center has tools that take out the data from your
                  shop and upload it to your feed.
                </p>
                <p>
                  Google Merchant Center also ranks your campaigns whenever a
                  Google search highlights various items from your feed. For
                  example, if a client searches for swimwear, Google will
                  display selected products such as the lowest-cost products.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>Helpful analytics</span>
                  </strong>
                </p>
                <p>
                  Google Shopping ads have reporting tools to develop your ad
                  campaign. Since it is difficult to see how your Shopping ads
                  are doing, evaluating their data is extremely useful because
                  it makes you aware of how your campaign is performing compared
                  to your rivals.
                </p>
                <p>
                  Google Shopping ads convey a detailed overview of your
                  product's online performance. You will observe your product
                  performance during any process and use filters to understand
                  how they perform on the brand and product group scales. Plus,
                  you will examine data about clicks, average cost-per-click,
                  conversion metrics, impressions, and others.
                </p>
                <p>
                  <strong>
                    <span style={{ fontSize: "18pt" }}>Mobile-friendly</span>
                  </strong>
                </p>
                <p>
                  Nowadays, online shopping is gaining massive engagement via
                  smartphones, and Google shopping ads are known to achieve high
                  performance on mobiles. &nbsp;
                </p>
                <p>
                  When users search for something on their phone, they view 15
                  shopping ads above organic search results. Therefore,
                  employing unique and noticeable shopping ads increases the
                  probability of your brand being discovered, unlike text ads
                  that Google restricts to only two displays for every mobile
                  search result.
                </p>{" "}
              </div>
              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  At Parasme, we provide Google Shopping services by creating
                  bespoke shopping campaigns that match your brand aesthetic. We
                  aim to produce massive web traffic and increase the
                  click-through rate on your shopping ads. &nbsp;
                </p>
                <p>
                  Our experts will monitor the keywords people use to search for
                  your products and design shopping ads that boost your online
                  presence. We will take care of your Google Merchant Center and
                  then get an estimate on how much money you want to spend days
                  on pay-per-click ads.&nbsp;
                </p>
                <p>
                  Our team will strategically place your ads on Google to
                  enhance your conversion rate. Whether you’re a local shop or a
                  global seller, we strive to target the right searches,
                  keywords, and websites to increase your brand exposure.&nbsp;
                </p>
                <p>
                  Parasme’s advertising experts will analyze and study the
                  analytics of your shopping ads and evaluate their performance.
                  With our collected data, we will know if our marketing
                  strategy needs any modifications, to fully optimize your ads
                  and grow your ROI.
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Need any assistance with your Google Merchant Center and
                      shopping ads?&nbsp;
                    </Link>
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/Contactus"
                    >
                      Contact us now and schedule a consultation
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
        {/* This is Awards section here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default ShoppingAds;
