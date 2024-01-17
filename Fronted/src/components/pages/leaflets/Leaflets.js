import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link } from "react-router-dom";
import Award from "../../awards/Award";
import Leaflets1 from "../../../assets/images/leaflets.png";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Leaflets = () => {
  const leaflets = {
    backgroundImage: `url(${Leaflets1})`,
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
      {/* This is Leaflets section here */}
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
                <h1>Leaflets</h1>
                <div className="service_description">
                  <p>
                    A leaflet is a small piece of paper containing a brief and
                    precise message that promotes your company’s products,
                    events, or services. This form of print advertising helps
                    your business reach a wider audience.
                  </p>
                </div>
              </div>
              <figure className="brand-title-img" style={leaflets}></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Leaflets:
                <br /> Paper marketing at its best
              </h2>
              <div className="container-left">
                <p>
                  Leaflets are a great marketing tool for businesses that offer
                  multiple services to their clients. You’ll be able to name the
                  services provided by your company explaining each one
                  thoroughly.&nbsp;
                </p>
                <p>
                  High-quality designed leaflets have many perks; they display
                  information in a compact and structured way, making them
                  simple to read. They’re also very practical to circulate in
                  big crowds or stations in various public settings.
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Why Parasme?</h2>
                <p>
                  Parasme delivers a myriad of leaflet selections to our
                  clients, each one specifically tailored to satisfy your
                  company’s advertising needs. From leaflets designed to promote
                  your services to those itemizing your quotation fees, our
                  experts will create the perfect leaflet or booklet that suits
                  your company’s objectives and stays true to your brand’s
                  identity.&nbsp;
                </p>
                <p>
                  Opting for our leaflet design service will also give you total
                  access to our wide range of other marketing and branding
                  services. Leaflets make an excellent advertising tool, but
                  they’re not entirely effective on their own. For your business
                  to thrive, you need to have a foolproof marketing strategy
                  that employs every marketing weapon in its arsenal.&nbsp;
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
                </p>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "28pt" }}>
                    <strong>
                      “Convey your brand’s message with Parasme’s eye-catching
                      designs”
                    </strong>
                  </span>
                </p>{" "}
                <h2>Other types of print advertising</h2>
                <h2>Flyers</h2>
                <p>
                  Flyers are a profitable advertising tool because they tend to
                  be produced and sold in large quantities at a reasonable
                  price. As a result, they’re a powerful promotion method that
                  guarantees a successful interaction with your business’s
                  target audience.&nbsp;
                </p>
                <p>
                  We can modify any flyer design to suit your company’s
                  requirements, needs, and objectives. Our unique flyers will
                  embody your brand’s essence and captivate a large number of
                  people and convert them to loyal customers. &nbsp;
                </p>
                <p>
                  Our skilled graphic designers will create bespoke flyers that
                  will catch the eye of your consumers and meet your business
                  expectations. Our designs follow a well-defined outline that
                  doesn’t overwhelm the reader by combining the perfect amount
                  of words used with the right amount of empty spaces. We aim to
                  give your company professional high-quality flyers that
                  represent your business at its best.
                </p>
                <h2>Posters</h2>
                <p>
                  If you’re looking for a quick and easy way to reach your
                  target audience, posters are the solution. They are an
                  excellent means to spread brand awareness because they make an
                  instant visual statement as soon as people lay eyes on
                  them.&nbsp;
                </p>
                <p>
                  They give your company a lot of coverage, especially if
                  distributed or displayed in crowded areas. Posters use vibrant
                  colors, striking images, and captivating fonts to stimulate
                  the masses and make them interested in the products or
                  services your brand offers.&nbsp;
                </p>
                <p>
                  At Parasme, we’re always open to any input or comment you
                  might have about the poster design process from the
                  conceptualization phase to the printing of the final draft.
                  &nbsp;Our elite graphic designers will use their artistic
                  flair to design singular posters for your company in any size
                  you want.&nbsp;
                </p>
                <h2>Signage</h2>
                <p>
                  If you’ve just opened a business or you’re in the midst of a
                  rebranding process, every up-and-coming corporation must have
                  its own sign.&nbsp;
                </p>
                <p>
                  When strategically and eloquently displayed, a sign acts like
                  a spokesperson that constantly keeps channeling your voice
                  spreading awareness for your brand on the streets.
                </p>
                <p>
                  Investing in high-quality signs is a win-win for your
                  business, as it will always appeal to new clients and increase
                  your sales. In addition, signage is a surefire marketing
                  instrument that introduces your company to many
                  consumers.&nbsp;
                </p>
                <p>
                  Our graphic design team will help you craft the signage that
                  perfectly symbolizes your brand’s identity, message, values,
                  and goals.&nbsp;
                </p>
                <p>
                  We work closely with you during the entire designing process.
                  Our team keeps up with the latest trends, studies the profile
                  of your target audience, and makes sure that every visual
                  element used adds perspective and consistency to the final
                  product.
                </p>
                <p>
                  Whether your sign goes front and center on top of your company
                  building or is displayed on various billboards across the
                  country, our creative team will collaborate with the best sign
                  manufacturers to make your signage is the talk of the
                  town.&nbsp;
                </p>
                <h2>Print design services</h2>
                <p>
                  While digital design has become increasingly popular with the
                  continuous evolution of the new media age, traditional print
                  design still holds many advantages when promoting your brand
                  and raising awareness.
                </p>
                <p>
                  Even though the marketing world is now heavily influenced by
                  technology, and almost every service can be provided
                  virtually, classNameical paper advertising like print design
                  is still very valuable for any brand that wants to go
                  viral.&nbsp;
                </p>
                <p>
                  Leaflets, flyers, signage, and posters are some of the
                  materials advertisers employ when centering their marketing
                  strategy on print design services.&nbsp;
                </p>
                <p>
                  A brand doesn’t build its identity overnight. If your company
                  wants to uphold and maintain a good reputation with a
                  consistent brand representation, you need to continuously work
                  the same theme and aesthetic into your marketing tools. This
                  way, every time individuals see certain colors, fonts, or
                  visuals, they’ll automatically think about your brand.
                </p>
                <p>
                  Once your designs are ready, Parasme gives you the option of
                  managing your prints for you, monitoring where and how they
                  are posted and distributed. Our experts will analyze your
                  business’s strengths and weaknesses and provide you with
                  custom-built services that increase your Return on Investment
                  (ROI). &nbsp;
                </p>
                <p>
                  Our mission is to elevate your brand and make it accessible to
                  the biggest number of people.&nbsp;
                </p>
                <h2>Graphic Design</h2>
                <p>
                  Companies set up clever marketing strategies in order to
                  maintain a solid brand image; Parasme offers one-of-a-kind
                  graphic design services -including digital and print design-
                  that will make your business rule over its competitors.&nbsp;
                </p>
                <p>
                  At Parasme, modern graphic design services like digital
                  design, leaflets, signage, branding, and print design will be
                  tailored entirely to your business via cutting-edge devices
                  and software.&nbsp;
                </p>
                <p>
                  Our professionals are skilled with exceptional attention to
                  detail and follow a thorough process with every graphic design
                  project. From start to finish, we’ll leave no stone unturned
                  to provide you with quality work that will exceed your
                  expectations and breathe life into your brand.
                </p>
                <h2>Branding</h2>
                <p>
                  With the competition getting more challenging by the second,
                  businesses need their branding to leave a remarkable
                  impression and stay relevant. Therefore, your services need to
                  align with your brand for your company to achieve
                  success.&nbsp;
                </p>
                <p>
                  Parasme’s experts will combine their artistic graphic design
                  skills with strategic marketing expertise to create leaflets
                  that impress readers. Our branding campaigns strive to impact
                  your audience and convert them into paying customers.&nbsp;
                </p>
                <p>
                  If you're facing issues with your branding and marketing
                  strategies, Parasme's experts will offer you adequate
                  solutions for your brand goals and budget.&nbsp;
                </p>
                <p>
                  <strong>
                    Contact us! We’d love to collaborate with you.
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      Get in touch
                    </Link>
                  </strong>
                </p>
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

export default Leaflets;
