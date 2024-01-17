import React from "react";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <div>
      <section className="call-to-action main-section style-1">
        <div className="container-left">
          <div className="img-block reveal">
            <figure className="desktop"></figure>
          </div>
        </div>
        <div className="container-right">
          <p>Want to work with us?</p>
          <h2 className="add-fade-from-bottom">We’d love to be your partner</h2>
          <Link to="/Contactus" className="btn yellow large">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partner;
