import React from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../../assets/css/responsive.css';
import '../../assets/css/main.css';
import '../../assets/css/responsive.css';
import '../../assets/css/slick.css';
import '../../assets/css/slick-theme.css';
import '../../assets/css/bootstrap.min.css';

const ClientReview = () => {
      // This is For the Silder 
   const slickSettings = {
      slidesToShow: 3, // Display 3 slides at a time
      slidesToScroll: 2, // Move 2 slides at a time
      swipeToSlide: true,
      touchThreshold: 10,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1500,
      centerMode: false, // Set centerMode to false
      centerPadding: 0, // Set centerPadding to 0
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
 }
 // this Function for the Slider Next and Prev 
 const sliderRef = React.createRef();
 const goToNext = () => {
    sliderRef.current.slickNext();
 }
 const goToPrev = () => {
    sliderRef.current.slickPrev();
 };

  return (
    <div>
       <section className="work main-section bg-black-box position-relative mt-1">
               <h2 className="text-white">What our clients say</h2>
               <p className="subtitle text-secondary">We have satisfied clients
                  and their reviews are positive that motivates our
                  team members to
                  <br />increase the concern towards customer delight.
               </p>
               <ul className="custom-navigation carousel custome-carousel projects-carousel
                add-fade-from-bottom fade-from-bottom">
                  <Slider ref={sliderRef} {...slickSettings}>
                     <li>
                        <div className="testimonial-slider__one">
                           <div className="testimonial-slider--info">
                              <div className="testimonial-slider__author">
                                 <div className="testimonial-rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                 </div>
                                 <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">WEB DESIGNER</span>
                                 </div>
                              </div>
                           </div>
                           <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200
                              projects of our company, but @Mitech is one of the most impressive to me.</div>
                        </div>
                     </li>
                     <li>
                        <div className="testimonial-slider__one">
                           <div className="testimonial-slider--info">
                              <div className="testimonial-slider__author">
                                 <div className="testimonial-rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                 </div>
                                 <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">WEB DESIGNER</span>
                                 </div>
                              </div>
                           </div>
                           <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200
                              projects of our company, but @Mitech is one of the most impressive to me.</div>
                        </div>
                     </li>
                     <li>
                        <div className="testimonial-slider__one">
                           <div className="testimonial-slider--info">
                              <div className="testimonial-slider__author">
                                 <div className="testimonial-rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                 </div>
                                 <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">WEB DESIGNER</span>
                                 </div>
                              </div>
                           </div>
                           <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200
                              projects of our company, but @Mitech is one of the most impressive to me.</div>
                        </div>
                     </li>
                     <li>
                        <div className="testimonial-slider__one">
                           <div className="testimonial-slider--info">
                              <div className="testimonial-slider__author">
                                 <div className="testimonial-rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                 </div>
                                 <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">WEB DESIGNER</span>
                                 </div>
                              </div>
                           </div>
                           <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200
                              projects of our company, but @Mitech is one of the most impressive to me.</div>
                        </div>
                     </li>
                     <li>
                        <div className="testimonial-slider__one">
                           <div className="testimonial-slider--info">
                              <div className="testimonial-slider__author">
                                 <div className="testimonial-rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                 </div>
                                 <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">WEB DESIGNER</span>
                                 </div>
                              </div>
                           </div>
                           <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200
                              projects of our company, but @Mitech is one of the most impressive to me.</div>
                        </div>
                     </li>
                     <li>
                        <div className="testimonial-slider__one">
                           <div className="testimonial-slider--info">
                              <div className="testimonial-slider__author">
                                 <div className="testimonial-rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                 </div>
                                 <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">WEB DESIGNER</span>
                                 </div>
                              </div>
                           </div>
                           <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200
                              projects of our company, but @Mitech is one of the most impressive to me.</div>
                        </div>
                     </li>
                  </Slider>
               </ul>
               <div className="carousel-navigation carouseltopnav">
                  <div>
                     <Link onClick={goToPrev} to="" className="navigate prev" data-direction="prev"></Link>
                     <Link onClick={goToNext} to="" className="navigate next" data-direction="next"></Link>
                  </div>
               </div>
            </section>
    </div>
  )
}

export default ClientReview
