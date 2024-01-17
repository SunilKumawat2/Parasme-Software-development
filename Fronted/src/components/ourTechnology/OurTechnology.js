import React from "react";
import reactIcon from "../../assets/images/react_icon.svg";
import vueIcon from "../../assets/images/vue_icon.svg";
import flutterIcon from "../../assets/images/flutter-icon.svg";
import ShopifyIcon from "../../assets/images/Shopify_icon.svg";
import angularIcon from "../../assets/images/angular-icon.svg";
import salesforceIcon from "../../assets/images/salesforce_icon.svg";
import magentoIcon from "../../assets/images/magento-icon.svg";
import nodeIcon from "../../assets/images/node-icon.svg";
import phpIcon from "../../assets/images/php-icon.svg";
import javaIcon from "../../assets/images/java_original.svg";
import AndroidIcon from "../../assets/images/Android_icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";
const OurTechnology = () => {
  return (
    <div>
      <div className="our_technology">
        <h3 className="text-white">
          Get Services Built with the Latest Robust Technologies
        </h3>
        <p className="subtitle text-secondary">
          Parasme Software & Technology Solutions uses cutting-edge technologies
          to develop unique solutions for your business. Our team’s deep
          expertise covers a vast range of technologies, making us stand above
          other companies.
        </p>
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button data-toggle="tooltip" data-placement="bottom" title="Ios">
                <img src={appleIcon} className="img-fluid" alt="appleIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Android"
              >
                <img src={AndroidIcon} className="img-fluid" alt="AndroidIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Java"
              >
                <img src={javaIcon} className="img-fluid" alt="javaIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button data-toggle="tooltip" data-placement="bottom" title="PHP">
                <img src={phpIcon} className="img-fluid" alt="phpIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Node Js"
              >
                <img src={nodeIcon} className="img-fluid" alt="nodeIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Magento"
              >
                <img src={magentoIcon} className="img-fluid" alt="magentoIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Salesforce"
              >
                <img src={salesforceIcon} className="img-fluid" alt="salesforceIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Angular"
              >
                <img src={angularIcon} className="img-fluid" alt="angularIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Shopify"
              >
                <img src={ShopifyIcon} className="img-fluid" alt="ShopifyIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Flutter"
              >
                <img src={flutterIcon} className="img-fluid" alt="flutterIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button data-toggle="tooltip" data-placement="bottom" title="Vue">
                <img src={vueIcon} className="img-fluid" alt="vueIcon" />
              </button>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="technology-box">
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="React Js"
              >
                <img src={reactIcon} className="img-fluid" alt="reactIcon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;
