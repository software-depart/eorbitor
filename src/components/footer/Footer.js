import React from "react";
import { Link } from "react-router-dom";
import Bg from "../../images/shapes/bg_pattern_3.svg";
import icon1 from "../../images/icons/icon_mail.svg";
import icon2 from "../../images/icons/icon_calling.svg";
import icon3 from "../../images/icons/icon_map_mark.svg";
import icon4 from "../../images/icons/icon_mail_2.svg";
import Services from "../../api/service";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="site_footer footer_layout_1">
      <div className="content_box" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="container">
          <div className="diract_contact_links text-white">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon1} alt="Mail SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Write to us</h3>
                <p className="mb-0">Support@eorbitor.com</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon2} alt="Calling Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title"> Toll-Free:</h3>
                <p className="mb-0">1800 208 4646</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <img src={icon3} alt="Map Mark Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Our Office</h3>
                <p className="mb-0">
                  19, First Main Rd, Vadapalani, Chennai, 600026
                </p>
              </div>
            </div>
          </div>
          <div className="footer_main_content">
            <div className="row justify-content-lg-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget pe-md-3">
                  <h2 className="footer_info_title">Newsletter</h2>
                  <p>
                    Sign up to Techco weekly newsletter to get the latest
                    updates.
                  </p>
                  <form className="footer_newslatter" onSubmit={SubmitHandler}>
                    <label htmlFor="footer_mail_input">
                      <img src={icon4} alt="Mail SVG Icon" />
                    </label>
                    <input
                      id="footer_mail_input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                  <ul className="social_links_block unordered_list">
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        Linkdin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Services</h3>
                  <ul className="icon_list unordered_list_block">
                    {Services.slice(0, 6).map((service, srv) => (
                      <li key={srv}>
                        {service.title ? (
                          <Link
                            onClick={ClickHandler}
                            to={`/${service.slug}`}
                          >
                            <span className="icon_list_text">
                              {service.title}
                            </span>
                          </Link>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Solutions</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">Sccm-solutions</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">
                          Application-solutions
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">AI-ML-solutions</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">
                          Cyber-security-solutions
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">
                          Digital solutions
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">About</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">Our Vision</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">Our Team</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">Career</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">Awards</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">Terms of use</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <span className="icon_list_text">Privacy Policy</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
                .footer_bottom::before {
                    animation: none !important;
                    background: black !important;
                }

                `}
      </style>
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            © 2025 eOrbitor Technology Private Limited.
          </p>
          <p className="copyright_text m-0">
            Design by{" "}
            <Link onClick={ClickHandler} to="/">
              Leorus Technologies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
