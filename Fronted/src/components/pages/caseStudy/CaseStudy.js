import React, { useEffect, useState } from "react";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/main.css";
import "../../../assets/css/slick-theme.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/responsive.css";
import Award from "../../awards/Award";
import Footer from "../../footer/Footer";
import playstore from "../../../assets/images/play-store.png";
import appstore from "../../../assets/images/app-store.png";
import Whatsappchat from "../../whatappchat/Whatsappchat";
import { Link, useParams } from "react-router-dom";
import SocialMediaLogo from "../../socialMedialogo/SocialMediaLogo";
import NewHeader from "../../newHeader/NewHeader";
import axios from "axios";
import { API_BASE_URL, IMG_BASE_URL } from "../../../config/ApiConfig";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CaseStudy = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [CaseStudy, setCaseStudy] = useState([]);
  const [CaseStudyDetails, setCaseStudyDetails] = useState([]);
  const { _id } = useParams();
  const GetCaseStudy = async () => {
    await axios.get(`${API_BASE_URL}/CaseStudy/get`).then((response) => {
      setCaseStudy(response.data.data);
    }).catch((error) => {
      console.log(error)
    })
  }
  const GetCaseStudyById = async (_id) => {
    await axios.get(`${API_BASE_URL}/CaseStudy/getById/${_id}`).then((response) => {
      setCaseStudyDetails(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    GetCaseStudy();
    GetCaseStudyById();
  }, [_id])
  return (
    <div>
      {/* This is a Header Section Here */}
      <NewHeader />

      {/* This is Page Header Section Here */}
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
        <Link to="" className="scroll-down">
          <p className="" style={{ transition: "all 1s ease 0s" }}>
            See how we’ve helped our clients!
          </p>
        </Link>
      </section>

      {/* This is Case Syudy Popup Modals */}
      <div className="Case_Study_Popup_Modals">
        <Modal size="xl"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          style={{ marginTop: '60px' }}
        >
          <Modal.Header closeButton className="Case_Study_Popup_Modals_header">
            <Modal.Title>Case Study Details</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ margin: '10px' }}>
            <div className="row">
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">{CaseStudyDetails?.app_title}</h2>
                  <h5 className="headingsubtitle20">{CaseStudyDetails?.app_type}</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to={CaseStudyDetails?.android_link}>
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to={CaseStudyDetails?.ios_link}>
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                  {CaseStudyDetails?.about_app}
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 p-0 d-flex">
                <div className="case_studiens_box">
                  <img
                    src={`${IMG_BASE_URL}${CaseStudyDetails?.images}`}
                    className="img-fluid w-100 h-100"
                    alt="PsychicHeroes"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>

      {/* This is a Case Study Section Here */}
      <div className="case-studies-page">
        <div className="mobile-menu-container fixed mobile transparent">
          <Link to="" className="open-mobile-menu">
            <span></span>
          </Link>
        </div>
        <section className="case-studies scroll-to">
          <div className="container">
            {
              CaseStudy?.map((CaseStudyResult) => {
                return (
                  <>
                    <div className="row CaseStudyRow">
                      <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                        <div className="case_studiens_box text-center my-auto">
                          <h2 className="headingtitle30"></h2>
                          <strong> <h5 className="headingsubtitle20">{CaseStudyResult?.app_title}</h5></strong>
                          <h5 className="headingsubtitle20">{CaseStudyResult?.app_type}</h5>

                          <ul className="nav gap-2 justify-content-center">
                            <li className="bg-dark text-white rounded p-2 py-1">
                              BACKEND
                            </li>
                            <li className="bg-dark text-white rounded p-2 py-1">
                              DATABASE
                            </li>
                            <li className="bg-dark text-white rounded p-2 py-1">
                              UX/UI
                            </li>
                            <li className="bg-dark text-white rounded p-2 py-1">
                              TESTING
                            </li>
                            <li className="bg-dark text-white rounded p-2 py-1">
                              STRATEGY
                            </li>
                          </ul>
                          <div className="app_store d-flex justify-content-center gap-3 mt-3">
                            <Link to={CaseStudyResult?.android_link}>
                              <img
                                src={playstore}
                                className="img-fluid"
                                alt="playstore"
                              />
                            </Link>
                            <Link to={CaseStudyResult?.ios_link}>
                              <img
                                src={appstore}
                                className="img-fluid"
                                alt="appstore"
                              />
                            </Link>
                          </div>
                          <p>
                            {CaseStudyResult?.about_app}
                          </p>
                          <div onClick={() => GetCaseStudyById(CaseStudyResult?._id)}>
                            <Button
                              className="btn bg-dark text-white mx-auto" onClick={handleShow}>
                              View Casestudy
                            </Button>
                          </div>
                          {/* <Link to="" className="btn bg-dark text-white mx-auto">
                            View Casestudy
                          </Link> */}
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 p-0 d-flex">
                        <div className="case_studiens_box">
                          <img
                            src={`${IMG_BASE_URL}${CaseStudyResult?.images}`}
                            className="img-fluid w-100 h-100"
                            alt="drsoncall"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }

            {/* <div className="row">
              <div className="col-md-6 col-lg-6 p-0 d-flex">
                <div className="case_studiens_box">
                  <img
                    src={MarloDoctors}
                    className="img-fluid w-100 h-100"
                    alt="MarloDoctors"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 p-0 d-flex">
                <div className="case_studiens_box">
                  <img
                    src={PsychicHeroes}
                    className="img-fluid w-100 h-100"
                    alt="PsychicHeroes"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 p-0 d-flex">
                <div className="case_studiens_box">
                  <img
                    src={TooGoodFoodWaste}
                    className="img-fluid w-100 h-100"
                    alt="TooGoodFoodWaste"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 p-0 d-flex">
                <div className="case_studiens_box">
                  <img
                    src={TooGoodFoodWaste}
                    className="img-fluid w-100 h-100"
                    alt="TooGoodFoodWaste"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 p-0 d-flex">
                <div className="case_studiens_box">
                  <img
                    src={RoyalRunway}
                    className="img-fluid w-100 h-100"
                    alt="RoyalRunway"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 p-0 d-flex">
                <div className="case_studiens_box">
                  <img
                    src={RoyalRunway}
                    className="img-fluid w-100 h-100"
                    alt="RoyalRunway"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 p-0">
                <div className="case_studiens_box">
                  <img
                    src={swopinfoapp}
                    className="img-fluid w-100 h-100"
                    alt="swopinfoapp"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 p-0">
                <div className="case_studiens_box">
                  <img src={V2V} className="img-fluid w-100 h-100" alt="V2V" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 p-0">
                <div className="case_studiens_box">
                  <img
                    src={FindApp}
                    className="img-fluid w-100 h-100"
                    alt="FindApp"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 case_studiens_bg d-flex p-4">
                <div className="case_studiens_box text-center my-auto">
                  <h2 className="headingtitle30">Eternal - Love Letters</h2>
                  <h5 className="headingsubtitle20">DATING APP</h5>
                  <ul className="nav gap-2 justify-content-center">
                    <li className="bg-dark text-white rounded p-2 py-1">
                      BACKEND
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      DATABASE
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      UX/UI
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      TESTING
                    </li>
                    <li className="bg-dark text-white rounded p-2 py-1">
                      STRATEGY
                    </li>
                  </ul>
                  <div className="app_store d-flex justify-content-center gap-3 mt-3">
                    <Link to="">
                      <img
                        src={playstore}
                        className="img-fluid"
                        alt="playstore"
                      />
                    </Link>
                    <Link to="">
                      <img
                        src={appstore}
                        className="img-fluid"
                        alt="appstore"
                      />
                    </Link>
                  </div>
                  <p>
                    A virtual keep space to nurture meaningful relationships
                    with loved ones through written, photographic messages.
                  </p>
                  <Link to="" className="btn bg-dark text-white mx-auto">
                    View Casestudy
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 p-0">
                <div className="case_studiens_box">
                  <img
                    src={kleenweb}
                    className="img-fluid w-100 h-100"
                    alt="kleenweb"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      {/* This is Award Section Here */}
      <Award />
      {/* This is a Footer Section Here */}
      <Footer />
      {/* This is whatsapp section here */}
      <Whatsappchat />
    </div>
  );
};

export default CaseStudy;
