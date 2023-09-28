import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="bagian">
          <h1>ARSHA</h1>
          <ul className="address">
            <li>A108 Adam Street</li>
            <li>New York, NY 535022</li>
            <li>United States</li>
            <li>
              <strong>Phone:</strong> +1 5589 55488 55
            </li>
            <li>
              <strong>Email:</strong> info@example.com
            </li>
          </ul>
        </div>
        <div>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Terms of service</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="services">
          <h4>Our Social Networks</h4>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="social">
            <div className="circle"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="circle5"></div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          © Copyright&nbsp;<strong>Arsha.</strong>&nbsp;All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
