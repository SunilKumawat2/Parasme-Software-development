import React, { useEffect, useState } from "react";
import Award from "../../awards/Award";
import Footer from "../../footer/Footer";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link, useParams } from "react-router-dom";
import NewHeader from "../../newHeader/NewHeader";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import axios from "axios";
import { API_BASE_URL, IMG_BASE_URL } from "../../../config/ApiConfig";
const Blog = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [BlogList, setBlogList] = useState([]);
  const [BlogDetails, setBlogDetails] = useState({});
  const { _id } = useParams();

  const GetBlogList = async () => {
    await axios.get(`${API_BASE_URL}/Blog/get`).then((response) => {
      setBlogList(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  
  const GetBlogDetails = async (_id) => {
    await axios.get(`${API_BASE_URL}/Blog/getBlogDetails/${_id}`).then((response) => {
      setBlogDetails(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    GetBlogList();
    GetBlogDetails(_id);
  }, [_id])

  const handleFilterClick = (_id) => {
    setActiveFilter(_id);
  };

  return (
    <div>
      {/* This is Header Section here */}
      <NewHeader />
      {/* This is Bloging Section here */}
      <div className="case-studies-page">
        <div className="mobile-menu-container fixed mobile transparent">
          <Link to="#" className="open-mobile-menu">
            <span></span>
          </Link>
        </div>

        <section className="page-header header-style-2 collapse-circles">
          <div className="title">
            <h2>Parasme Blog</h2>
            <h1>Our views on marketing, design and technology.</h1>
          </div>
          {/* This is Social Media Section here */}
          <SocialMediaLogo />
          <Link to="#" className="scroll-down">
            <p className="" style={{ transition: "all 1s ease 0s" }}>
              See how we’ve helped our clients!
            </p>
          </Link>
        </section>

        <section className="articles empty_carousel articles-section">
          <ul className="filters">
          {BlogList.map((BlogListResult, index) => (
        <li
          key={BlogListResult?._id}
          onClick={() => {
            handleFilterClick(BlogListResult?._id);
            GetBlogDetails(BlogListResult?._id);
          }}
          className={`filter_items ${index === 0 && !activeFilter ? 'active' : activeFilter === BlogListResult?._id ? 'active' : ''}`}
        >
          <Link
            to="#"
            data-filter="2"
          >
            {BlogListResult?.title}
          </Link>
        </li>
      ))}

          </ul>

        
          
          <div className="articles-list">
            <article
              className="add-fade-from-bottom filtered_items cat_1 fade-from-bottom"
              data-filter="1"
            >
              <Link to="#">
                <div>
                  <figure className="clutch-clients">
                    <img src={`${IMG_BASE_URL}${BlogDetails?.images}`} style={{width:"100%"}} alt="clutch" />
                  </figure>
                  <div className="agency-life">
                    <span>{BlogDetails?.title}</span>
                    <h4>
                     {BlogDetails?.content}
                    </h4>
                    <p></p>
                  </div>
                </div>

              </Link>
            </article>
          </div>

        </section>
        <section className="call-to-action main-section style-2">
          <div className="container-right">
            <p>Want to be part of this experience?</p>
            <h2 className="add-fade-from-bottom">Let's work together</h2>
            <Link to="icontacu-us.html" className="btn yellow large">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* This is Award Section here */}
        <Award />
      </div>
      {/* This is Footer Section here */}
      <Footer />

      {/* This is Whatsapp Chat Section here */}
      <Whatsappchat />
    </div>
  );
};

export default Blog;
