import React, { useState, useEffect } from "react";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/main.css";
import "../../../assets/css/responsive.css";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link } from "react-router-dom";
import Award from "../../awards/Award";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import Map from "../../../assets/images/parasme-map.png";
import NewHeader from "../../newHeader/NewHeader";
import Form from "react-bootstrap/Form";
import { countries } from 'countries-list';
import axios from "axios";
import { API_BASE_URL } from "../../../config/ApiConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [message, setMessage] = useState("");
  const [Websitedesign, setWebsitedesign] = useState("");
  const [OnlineAdvertising, setOnlineAdvertising] = useState("");
  const [MobileApp, setMobileApp] = useState("");
  const [isLoading, setLoading] = useState(false);

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${API_BASE_URL}/HelpingForm/post`, {
      name,
      email,
      phone,
      company,
      country,
      countryList,
      message,
      Websitedesign,
      OnlineAdvertising,
      MobileApp
    }).then((response) => {
      toast.success("Successfully Send The Message", {
        position: toast.POSITION.TOP_RIGHT, // You can customize the position
      });
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setCountry("");
      setCountryList("");
      setWebsitedesign("");
      setOnlineAdvertising("");
      setMobileApp("");
      setMessage("");
      console.log(response);
    })
      .catch((error) => {
        toast.error("Error Sending the message", {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Move the finally block here
        setLoading(false);

        console.log(error);
      })
      .finally(() => {
        // Always set isLoading to false after the request is complete
        setLoading(false);
      });
    console.log("Contact helping Form", {
      name,
      email,
      phone,
      company,
      country,
      message,
      Websitedesign,
      OnlineAdvertising,
      MobileApp
    })
    console.log("sucess")
    setName("")
    setEmail("")
    setPhone("")
    setCompany("")
    setCountry("")
    setMessage("")
    setWebsitedesign("")
    setOnlineAdvertising("")
    setMobileApp("")
  }
  useEffect(() => {
    // Fetch the list of countries dynamically
    const countryNames = Object.keys(countries).map((code) => countries[code].name);
    const sortedCountryNames = countryNames.sort(); // Sort the country names alphabetically
    setCountryList(sortedCountryNames);
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  return (
    <div>
      {/* This is Header Section Here */}
      <NewHeader />
      {/* This is Side Nav Section Here */}

      <section className="page-header header-style-2">
        <div className="title">
          <h2 className="fade-in">Case Studies</h2>
          <h1 className="fade-in">
            <span>The Brands we’ve worked with aren’t trophies, </span>they’re
            Friends we met on our journey.
          </h1>
        </div>
        {/* This is Social Media Link section here */}
        <SocialMediaLogo />
        <Link to="#" className="scroll-down">
          <p className="" style={{ transition: "all 1s ease 0s" }}>
            See how we’ve helped our clients!
          </p>
        </Link>
      </section>
      {/* This is Contact Us Page Here */}
      <div className="contact-page">
        <div className="mobile-menu-container fixed mobile transparent">
          <Link to="#" className="open-mobile-menu">
            <span></span>
          </Link>
        </div>
        <section className="locations scroll-to">
          <div className="container">
            <div className="details">
              <div className="animation-sequence-1">
                <h2 className="fade-in">Our Locations</h2>
              </div>
              <ul className="animation-sequence-2">
                <li className="push-title-up">
                  <div>
                    <h3 data-country="sa">India (Jaipur)</h3>
                  </div>
                  <div>
                    <h4>
                      <Link to="tel:+91-85628 10272">
                        India: +91-85628 10272
                      </Link>
                    </h4>
                    <span>
                      SN. 21, Near HDFC Bank Niwaru Road Jhotwara, Jaipur.
                    </span>
                  </div>
                </li>
                <li className="push-title-up">
                  <div>
                    <h3 data-country="lb">South Africa</h3>
                  </div>
                  <div>
                    <h4>
                      <Link to="tel:+27 71 101 0937">
                        South: +27 71 101 0937
                      </Link>
                    </h4>
                    <span>Port Elizabeth, Eastern Cape, South Africa.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="map">
              {/* <iframe 
              src="http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html"
               style={{width:"100%",height:"600px",border:"1px solid black"}} allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <img src={Map} className="rounded" alt="Map" />
            </div>
            <Link to="#" className="scroll-to-contact">
              Have an Idea? <span>Write to us</span>
              <i></i>
            </Link>
          </div>
        </section>
        <section className="contact">
          <div className="animation-sequence-1">
            <h3 className="fade-in">Lets Start</h3>
            <h2 className="fade-in">How can we help you?</h2>
          </div>
          <form action="" method="post" className="animation-sequence-2" onSubmit={HandleSubmitForm}>
            <input
              type="hidden"
              name="validate_user"
              value="1"
              className="push-title-up"
            />
            <div className="full push-title-up">
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="full countries_parent_container push-title-up mt-5">
              <input type="hidden" name="code" />
              <div className="FormSelectPhoneCompany">
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
                <div className="FormSelect">
                  <Form.Select
                    aria-label="Default select example"
                    className="borderless-select"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    style={{ textAlign: 'justify' }}
                  >
                    <option>Select Your Country</option>
                    {countryList.map((countryName, index) => (
                      <option key={index} value={countryName}>
                        {countryName}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="full push-title-up">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you ?"
              ></textarea>
            </div>
            <div className="contact-services push-title-up"> {/* */}
              <h4>What is the service you are looking for?</h4>
              <ul>
                <li style={{ margin: "12px auto" }}>

                  <label>  <input type="checkbox" id="vehicle1" name="Websitedesign"
                    onChange={(e) => setWebsitedesign(e.target.checked)} checked={Websitedesign} value='Websitedesign' /> Website design and Development</label>
                </li>
                <li style={{ margin: "22px auto" }}>

                  <label>  <input type="checkbox" id="vehicle2" name="OnlineAdvertising"
                    onChange={(e) => setOnlineAdvertising(e.target.checked)} checked={OnlineAdvertising} value='OnlineAdvertising' /> Online Advertising &amp; Google Ads</label>
                </li>
                <li style={{ margin: "12px auto" }}>

                  <label for="vehicle3"> <input type="checkbox" id="vehicle3" name="MobileApp"
                    onChange={(e) => setMobileApp(e.target.checked)} checked={MobileApp} value='MobileApp' /> Mobile App design and Development</label>
                </li>
              </ul>
            </div>
            <div className="FormSubmitButton">
              <button className="btn yellow submit_form g-recaptcha push-title-up" type="submit">
                Send Message
              </button>
              <ToastContainer />
            </div>

            <p className="push-title-up mt-5">
              By submitting you are agreeing to our{" "}
              <Link to="#">Privacy Policy</Link>
            </p>
          </form>
        </section>
      </div>
      {/* This is a Award Section Page here */}
      <Award />
      {/* This is a Footer Section Page Here */}
      <Footer />
      {/* This is whatsapp chat section here */}
      <Whatsappchat />
    </div>
  );
};

export default ContactUs;
