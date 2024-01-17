import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import Award from "../../awards/Award";
import restaurantmenu4Img from "../../../assets/images/restaurant-menu4.webp";
import LatestBrndingProjects from "../../BrandingProjects/LatestBrandingProjects";
import { Link } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Menudesign = () => {
  const restaurantmenu4ImgFun = {
    backgroundImage: `url(${restaurantmenu4Img})`,
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
      {/* This is Mwnu design section here */}
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
                <h1>Menu Design</h1>
                <div className="service_description">
                  <p>
                    A menu is much more than just an aesthetically pleasing
                    design. It’s a tool that helps you provide your customers
                    with an incredible dining experience and assist them in
                    choosing the items they most desire. It also aids in
                    stimulating their appetite. If your menu is poorly designed
                    and the information is not adequately placed, you’ll end up
                    with an irritated and dissatisfied guest.{" "}
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={restaurantmenu4ImgFun}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Menu Design:
                <br /> “A well-designed menu carves a path to your customers’
                hearts (and stomachs)”{" "}
              </h2>
              <div className="container-left">
                <p>
                  To be a successful restaurateur, you need to ensure that every
                  aspect of your restaurant is perfect. Some visitors will judge
                  the whole vibe of your restaurant based on the menu
                  presentation, and if they’re impressed, you have gained
                  yourself a recurrent customer who is going to recommend your
                  place to friends and family. A menu designed with
                  professionalism and attention to detail can make all the
                  difference when pleasing patrons as well as drawing in new
                  visitors.&nbsp;
                </p>
                <p>
                  Parasme creates menus that are tailored to your restaurant and
                  your brand identity. We will design a custom layout, using
                  creative graphics and appealing architecture that encourages
                  your customers to pick what they want to eat smoothly and
                  without disruptions, allowing them to have an enjoyable
                  experience and leave a lasting impression.&nbsp;
                </p>
                <p>
                  <strong>
                    Do you have any questions regarding the design and print of
                    your menu?
                  </strong>
                </p>
                <p>
                  <strong>
                    We're always happy to answer any questions -
                    <span style={{ textDecoration: "underline" }}>
                      give us a call
                    </span>
                    !&nbsp;
                  </strong>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            {/* This is Latest Branding Projects Section Here */}
            <LatestBrndingProjects />
            <div classNameName="text">
              <div classNameName="container">
                <div className="container">
                  <h2>The Creative Process</h2>
                  <p>
                    No matter what type of cuisine you serve, a well-crafted
                    menu can ensure that customers have an enjoyable experience.
                    With our team of experts, you can be confident that your
                    menu will look professional, visually appealing, and
                    user-friendly.
                  </p>
                  <p>
                    During the design process, you’ll regularly meet with our
                    team of creatives to discuss every aspect of the design to
                    ensure accuracy in all the information presented, from
                    pictures to prices, and everything in between. It’s a
                    two-way relationship; from discussion to proofing through
                    final approval before printing/binding, we’ll be connecting
                    every step of the way.&nbsp;
                  </p>
                  <p>
                    Parasme takes the design process seriously. We pride
                    ourselves on our high standards and care about every single
                    detail displayed on your menu.&nbsp;
                  </p>
                  <p>
                    Every menu is customized to match the color scheme and décor
                    of your restaurant. In the end, you can’t have a laminated
                    menu at your high-end luxurious restaurant. Nevertheless, a
                    sleek and elegant menu will look awkward in a fast-food
                    restaurant or at a coffee shop.&nbsp;
                  </p>
                  <p>
                    After setting up the color and style of the menu, we move on
                    to pick the most appropriate font for your design. Choosing
                    a professional and easy-to-read font is a crucial element of
                    the design. Our team will carefully select the best typeface
                    that complements the look and feel of the menu. In addition
                    to dishes and drinks, we can also include other information
                    such as history about the restaurant, contact info, or
                    social media links if desired!
                  </p>
                  <p>
                    Once every detail is looked over and every element is in
                    place, we’ll share with you the final version of the menu
                    for your approval before sending it to our printing partners
                    to create the highest quality menus (or you can hire your
                    own printing agency and we’ll advise on the best quality for
                    your restaurant).&nbsp;
                  </p>
                  <p>
                    <strong>
                      <span style={{ textDecoration: "underline" }}>
                        Contact us
                      </span>{" "}
                      today about your menu design and we’ll make sure
                      everything looks perfect before launch day arrives.
                    </strong>
                  </p>
                  <h2>The benefits of a well-designed menu system</h2>
                  <p>A well-designed menu system is&nbsp;</p>
                  <p style={{ textAlign: "center" }}>
                    <strong>
                      "One that creates a smooth, efficient user experience as
                      people move from one item on the menu to another."
                    </strong>
                  </p>
                  <p>
                    In other words, a menu should lower cognitive load and not
                    diminish the quality or speed of the person's interactions.
                    It shouldn't be visually distracting either. Menu designers
                    also need to consider cultural differences regarding color
                    schema and imagery preference.&nbsp;
                  </p>
                  <p>
                    A concise and clear menu is an effective tool for upselling.
                    All you have to do is highlight the most important items
                    creatively to help your waiters point out your best-selling
                    dishes, while the less popular items can be added in the
                    middle or at the end of the menu.&nbsp;
                  </p>
                  <p>
                    Another important aspect of any restaurant menu is the
                    language. The copy should be well written, the dishes
                    described adequately, without any typos - our in-house
                    copywriters will m ake sure that the copy on your menu is
                    proofread, correct, and ready for print. &nbsp;In addition ,
                    if you choose to include images, it can provide an
                    opportunity for people who are interested in trying
                    different dishes before they choose what food items should
                    be ordered from the regular m enu.&nbsp;
                  </p>{" "}
                </div>
                <div className="container">
                  <h2>
                    Today's landscape requires flexibility to adapt quickly
                  </h2>
                  <p>
                    Restaurant menus have been present for decades, but have
                    evolved into valuable marketing tools for restaurants of all
                    kinds.&nbsp;
                  </p>
                  <p>
                    Whether you are looking for a Table Talker, a large-sized
                    menu, or an online menu with a barcode, we’ll create an
                    unforgettable dining experience for your customers. During
                    the pandemic of 2020, we were able to quickly adapt and help
                    our clients create online menus for dine-in and delivery.
                    The elements of design can differ between printable and
                    online menus; our team of creatives can quickly adapt your
                    menu accordingly.&nbsp;
                  </p>
                  <p>
                    <strong>
                      <span style={{ fontSize: "14pt" }}>
                        Why Your Restaurant Needs A Creatively Designed Menu
                      </span>
                    </strong>
                  </p>
                  <p>
                    A professionally designed menu is a great way for a
                    restaurant to make a first impression on potential customers
                    as well as provide valuable information such as the items
                    offered, prices, and hours of operation.
                  </p>
                  <p>
                    A restaurant menu can also include already established brand
                    logos and slogans much like a company brochure or printed
                    advertisement. The standard format used by many restaurants
                    allows companies to use their menus as an opportunity to
                    reinforce their brand's identity with existing
                    customers.&nbsp;
                  </p>
                  <p>
                    An eye-catching menu will not only entice customers to visit
                    your establishme nt but remember it as well! It allows them
                    to enjoy their experience all the while instillin g
                    confidence in your brand as a whole.
                  </p>{" "}
                </div>
                <div classNameName="container">
                  <h2>Why Parasme</h2>
                  <p>
                    Parasme has always been focused on providing high-quality
                    services to all its partners. After years of success and
                    growth, we’ve adapted to meet the demands for everything
                    from simple menu design and development to VR solutions for
                    more high-end menus.
                  </p>
                  <p>
                    Parasme has always put its clients first by providing
                    creative solutions that achieve our clients’ objectives. Our
                    highly experienced creative team will handle all aspects of
                    your menu from start to finish.
                  </p>
                  <p>
                    If you’re a newly opened restaurant, we can effectively
                    launch your restaurant with a creative and strategic
                    marketing campaign and advertise your new establishment on
                    Google Ads or social media. It’s all about making your
                    restaurant a success!&nbsp;
                  </p>
                  <p>
                    <strong>
                      Let’s discuss what’s best for your restaurant.
                    </strong>
                  </p>
                  <p>
                    <strong>
                      <Link
                        style={{ textDecoration: "underline" }}
                        to="/Contactus"
                      >
                        Contact us
                      </Link>{" "}
                      to get an obligation-free quote.&nbsp;
                    </strong>
                  </p>{" "}
                </div>
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

export default Menudesign;
