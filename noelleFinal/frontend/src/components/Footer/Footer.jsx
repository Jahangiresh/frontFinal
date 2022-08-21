import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__container__row row">
          <div className="footer__container__row__col col-lg-3 col-12">
            <h3>About Us</h3>
            <ul>
              <li>
                <Link to="/about" className="footerlinks">
                  about us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footerlinks">
                  blog
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footerlinks">
                  shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__container__row__col col-lg-3 col-12">
            <h3>Support</h3>
            <ul>
              <li>
                <Link to="/about" className="footerlinks">
                  licensing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footerlinks">
                  privacy
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footerlinks">
                  terms & conditions
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footerlinks">
                  contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__container__row__col col-lg-3 col-12">
            <h3>Social</h3>
            <ul>
              <li>
                <Link to="/about" className="footerlinks">
                  facebook
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footerlinks">
                  instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__container__row__col col-lg-3 col-12">
            <h3>Sign up now</h3>
            <p>
              Add more beauty to your messages! Join us to be the first to know
              about exclusive offers and exciting news.
            </p>
            <input
              className="footeremail"
              type="email"
              placeholder="enter your email"
            />{" "}
            <br />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
