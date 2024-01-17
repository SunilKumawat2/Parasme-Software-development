import React from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import PrintdesignImg from "../../../assets/images/printer-office.jpg";
import { Link } from "react-router-dom";
import Award from "../../awards/Award";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
const Printdesign = () => {
  const PrintdesignImgFunction = {
    backgroundImage: `url(${PrintdesignImg})`,
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
      {/* This is Print Design section here */}
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
                <h1>Print Design</h1>
                <div className="service_description">
                  <p>
                    In a world ruled by digital marketing, a classNameic visual
                    communication tool like print design is highly valuable.
                    Print designs offer many benefits whe n advertising and
                    raising awareness of your company, products, or services.
                  </p>
                </div>
              </div>
              <figure
                className="brand-title-img"
                style={PrintdesignImgFunction}
              ></figure>
              <Link to="#" className="scroll-down desktop"></Link>
            </div>
          </section>
          <article className="service scroll-to">
            <div className="intro">
              <h2>
                Print Design:
                <br /> Print designs constitute an asset for your business
              </h2>
              <div className="container-left">
                <p>
                  At Parasme, we offer print design services that elevate your
                  marketing and branding campaigns. Even if your business
                  focuses on digital advertising, employing print design adds
                  strength to your marketing strategy. Because your goal is to
                  influence the highest number of people, combining print design
                  with digital advertising is the way to go.&nbsp;
                </p>
                <p>
                  Print design is all about creating and building a brand
                  identity; every business cooks up its unique brand by using
                  specific ingredients like color palettes, typographies, and
                  artistic visuals. Continuously following a particular design
                  theme permits you to establish your brand's identity by making
                  your consumers subconsciously match the elements you use with
                  your brand.&nbsp;
                </p>
                <p>
                  Parasme offers a wide range of print designs, such as business
                  cards representing your brand. Our team carefully crafts the
                  ideal print designs to fit your budget and successfully boost
                  your brand awareness.&nbsp;
                </p>
                <p>
                  What contrasts print to digital design is that the former
                  allows a tangible product for people to discover; something in
                  their possession that they can touch will pique their interest
                  and encourage them to go through it.&nbsp;
                </p>
                <p>
                  <Link style={{ textDecoration: "underline" }} to="/ContactUs">
                    Book a meeting with Parasme and find out more about our
                    print design services
                  </Link>
                </p>
              </div>
              <div className="container-right"></div>
            </div>
            <div className="text">
              <div className="container">
                <h2>Our design process</h2>
                <p>
                  Our expert graphic designers follow an effective protocol to
                  help expand your brand to a larger audience; we begin by
                  setting a meeting with you to make sure that we fully
                  understand your brand’s goals and artistic view. Next, we tend
                  to carefully study your competitors to find out what we’re up
                  against before creating print layouts that will outstandingly
                  distinguish your company.&nbsp;
                </p>
                <p>
                  Parasme’s high-tech software aligns with any prints you seek,
                  from web content to digital and B1, B2 printing. Our services
                  are highly versatile; all our services are explicitly bespoke
                  to match your business requirements and raise your client’s
                  interest, convincing them to buy your products or services.
                </p>
                <p>
                  Being one of the best advertising and branding companies in
                  the Middle East speaks volumes of our experience in digital
                  and print marketing. Our ethos is quality over quantity. We
                  have teams gifted with an extraordinary eye for detail and
                  unparalleled commitment to every project they tackle. No
                  matter the field of business, we will go above and beyond to
                  help you flourish your brand’s legacy.
                </p>{" "}
                <h2>Parasme’s print services</h2>
                <p>
                  At Parasme, we strive to deliver the best results no matter
                  the challenge. With our cutting-edge print design services, we
                  aim to solidify your advertising strategies and embody your
                  brand’s essence.&nbsp;
                </p>
                <p>
                  From press advertising, corporate literature, promotional
                  print, corporate stationery, event materials, print
                  management, and more, we offer a variety of print design
                  marketing resources that will keep your business on the map.
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "28pt" }}>
                      “With Parasme’s print designs, you will never lose your
                      touch”
                    </span>
                  </strong>
                </p>{" "}
              </div>
              <div className="container">
                <h2>All your printing needs under the same roof</h2>
                <p>
                  Opting for Parasme’s expertise gives you complete in-house
                  access to every marketing or branding service your company
                  requires. In our eight years run, we have built a trusted
                  circle of elite print suppliers that have always delivered the
                  best quality.&nbsp;
                </p>
                <p>
                  Our team will assist you every step of the way, guide you
                  through any inconvenience, listen to your notes, apply any
                  tweaks you want, and then add a final touch that highlights
                  your brand through bespoke print designs.&nbsp;
                </p>
                <p>
                  Parasme is ready to tackle any project our customers hand us;
                  whether you require to die cuts or blind embossing, or you’re
                  looking for an agency to oversee mailing, distribution, and
                  warehousing, we’re one call away.
                </p>
                <p>
                  Alongside impeccable printing services, our professionals can
                  save you time and effort, take charge of managing your print
                  and make sure that no complications whatsoever ensue. We will
                  recommend and procure you with the best print material and
                  monitor the expenses and deadlines of the production process.
                </p>{" "}
              </div>
              <div className="container">
                <h2>The advantages of print design</h2>
                <p>
                  Despite living in a digital era, print design has proved that
                  it’s here to stay. Print's main perk is being tactual. People
                  can hold it with their hands and look at it closely. Clients
                  are more likely to be interested in a print design because
                  it's physical to the touch, unlike emails or links that are
                  alarming and risk containing a virus or spam.&nbsp;
                </p>
                <p>
                  People tend to interact more with brochures and leaflets than
                  websites, taking their time reading and observing them.
                  Optimize your engagement with customers by distributing
                  seasonal brochures that create solid communication by keeping
                  your consumers interested in your brand, looking forward to
                  receiving future brochures and updates. Companies that
                  strategically mix print and digital advertising are more
                  likely to thrive and successfully keep up with the times.
                </p>
                <p>
                  Print designs leave more room for imagination and creativity.
                  Emails and other types of digital marketing don’t offer the
                  intimate connection printed materials do. Custom-made
                  advertising prints allow you to connect with your customers on
                  a deeper level. On the plus side, they can also be assimilated
                  and turned into virtual elements like pictures that you can
                  post on social media platforms.
                </p>
                <p>
                  Choosing print design as one of your advertising methods adds
                  a breath of fresh air to your marketing campaign and helps you
                  achieve your goals online and offline. Print allows you to
                  target all sorts of customers, from old ones that were
                  unreachable to existing and prospective ones, in captivating
                  and artistic manners. Parasme works hard to provide you with
                  printed materials that combine out-of-the-box design and smart
                  engagement strategies, rendering your rival brands a no match
                  for yours.
                </p>
                <p>
                  Last but not least, the beauty of the print design is that its
                  eco0friendly and can be easily recycled. When you opt for
                  print design, you opt for a renewable resource as the number
                  of trees yearly planted is higher than the number of trees
                  taken down. If your company is a genuine environmental
                  advocate, you can add reminders for your customers to recycle,
                  reuse, and compost your papers.
                </p>
                <h2>Why Parasme?</h2>
                <p>
                  Our goal at Parasme is to help you conceptualize your brand
                  identity and adapt it into a distinctive design that
                  represents your core values, reflects what you stand for, and
                  accentuates your uniqueness.&nbsp;
                </p>
                <p>
                  Our experts are dedicated professionals that can handle any
                  project and give your brand the exposure and representation it
                  deserves. They will meet all your print requirements; from
                  brochures, leaflets, posters, business cards, and more, every
                  printed material will be meticulously designed for your
                  business to triumph over its competitors.
                </p>
                <p>
                  At Parasme, we collaborate with the most reliable print
                  companies and strive to provide you with excellent prints at
                  the best costs. Furthermore, aside from our print design
                  services, you will have access to various other services we
                  cater to, such as website design, copywriting, SEO, and PPC.
                </p>
                <p>
                  With Parasme’s groundbreaking approach to marketing and
                  creative problem solving, your brand will be nurtured,
                  developed, and kept out of harm’s way for your business to
                  prosper and your profit to grow.&nbsp;
                </p>
                <p>
                  <strong>
                    Are you looking for print design services that will optimize
                    your marketing strategy?&nbsp;
                  </strong>
                </p>
                <p>
                  <strong>
                    <Link
                      style={{ textDecoration: "underline" }}
                      to="/ContactUs"
                    >
                      Contact us today. We would love to help!
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
        {/* This is award Section here */}
        <Award />
      </div>
      {/* This is Footer section here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default Printdesign;
