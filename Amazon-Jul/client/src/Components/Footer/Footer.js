import React, { useState } from "react";
import "./Footer.css";

function Footer() {

  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="footer">
      <div className={`footer__link ${activeSection === 0 ? "active" : ""}`}>
        <div className="footer__h3" onClick={() => handleSectionToggle(0)}>
          <h3>Get to Know Us</h3>
        </div>

        <div className="footer__1">
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Amazon Newsletter</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Press Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`footer__link ${
          activeSection === 1 ? "active" : ""
        }`}>
      <div className="footer__h3"
          onClick={() => handleSectionToggle(1)} >
        <h3>Make Money with Us</h3>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Supply to Amazon</a>
            </li>
            <li>
              <a href="#">Protect & Build Your Brand</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Become a Delivery Driver</a>
            </li>
            <li>
              <a href="#">Start a Package Delivery Business</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              ›<a href="#">See More Ways to Make Money</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__link">
        <h3>Amazon Payment Products</h3>
        <div>
          <li>
            <a href="#">Amazon Visa</a>
          </li>
          <li>
            <a href="#">Amazon Store Card</a>
          </li>
          <li>
            <a href="#">Amazon Secured Card</a>
          </li>
          <li>
            <a href="#">Amazon Business Card</a>
          </li>
          <li>
            <a href="#">Shop with Points</a>
          </li>
          <li>
            <a href="#">Credit Card Marketplace</a>
          </li>
          <li>
            <a href="#">Reload Your Balance</a>
          </li>
          <li>
            <a href="#">Amazon Currency Converter</a>
          </li>
        </div>
      </div>

      <div className="footer__link">
        <h3>Let Us Help You</h3>
        <div>
          <li>
            <a href="#">Amazon and COVID-19</a>
          </li>
          <li>
            <a href="#">Your Account</a>
          </li>
          <li>
            <a href="#">Your Orders</a>
          </li>
          <li>
            <a href="#">Shipping Rates & Policies</a>
          </li>
          <li>
            <a href="#">Amazon Prime</a>
          </li>
          <li>
            <a href="#">Returns & Replacements</a>
          </li>
          <li>
            <a href="#">Manage Your Content and Devices</a>
          </li>
          <li>
            <a href="#">Your Recalls and Product Safety Alerts</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
