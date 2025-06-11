import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../images/icons/icon_wifi.svg'
import icon2 from '../../images/icons/icon_dollar_2.svg'
import icon3 from '../../images/icons/icon_chart.svg'
import icon4 from '../../images/icons/icon_tag_2.svg'
import icon5 from '../../images/icons/icon_user_2.svg'
import icon6 from '../../images/icons/icon_users.svg'
import icon7 from '../../images/icons/icon_pen.svg'
import icon8 from '../../images/clients/client_logo_9.webp'
import icon9 from '../../images/clients/client_logo_10.webp'
import icon10 from '../../images/avatar/avatar_7.webp'
import icon11 from '../../images/icons/icon_quote.svg'
import logo from '../../images/site_logo/logo.jpeg'
import cases from '../../images/case/case_image_4.webp'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header className="site_header site_header_1">
            {/* <div className="header_top text-center">
                <div className="container">
                    <p className="m-0">Subscribe us and receive <b>20% bonus</b> discount on checkout. <Link onClick={ClickHandler} to="/pricing"><u>Learn more</u> <i className="fa-solid fa-angle-right"></i></Link></p>
                </div>
            </div> */}
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" to="/">
                                    <img src={logo} alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                </Link>
                                {/* <div className="badge bg-danger-subtle text-danger">We’re Hiring</div> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">
                                        <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" to="/" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                About
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper" aria-labelledby="company_submenu">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-9">
                                                            <div className="megamenu_pages_wrapper mb-5">
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/about">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon1} alt="Wifi SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">About Us</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                 Who we are
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon2} alt="Dollar SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Our Vision</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Future we envision
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon3} alt="Chart SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Our Team</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Meet our experts
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon4} alt="Event Tag SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Career</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Join our team
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon5} alt="User Check SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Awards</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                               Recognized for excellence
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon6} alt="Users SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Partners</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Strategic tech alliances
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/service">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon7} alt="Pen SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Clientele</small>
                                                                            </span>
                                                                            <small className="description mb-0">
                                                                                 Trusted by clients
                                                                            </small>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon7} alt="Pen SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Industries</small>
                                                                            </span>
                                                                            <small className="description mb-0">
                                                                                Sectors we serve
                                                                            </small>
                                                                        </Link>
                                                                    </div>
                                                                     <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" to="/">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <img src={icon7} alt="Pen SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Success Stories</small>
                                                                            </span>
                                                                            <small className="description mb-0">
                                                                                Proven client success
                                                                            </small>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <ul className="btns_group p-0 unordered_list justify-content-start">
                                                                <li>
                                                                    <Link onClick={ClickHandler} className="btn btn-primary" to="/contact">
                                                                        <span className="btn_label" data-text="Free Consultation">Free Consultation</span>
                                                                        <span className="btn_icon">
                                                                            <i className="fa-solid fa-arrow-up-right"></i>
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <div className="review_short_info_2">
                                                                        <div className="review_admin_logo">
                                                                            <img src={icon8} alt="Client Logo" />
                                                                        </div>
                                                                        <div className="review_info_content">
                                                                            <ul className="rating_block unordered_list">
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                            </ul>
                                                                            <div className="review_counter">From <b>200+</b> reviews</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="review_short_info_2">
                                                                        <div className="review_admin_logo">
                                                                            <img src={icon9} alt="Client Logo" />
                                                                        </div>
                                                                        <div className="review_info_content">
                                                                            <ul className="rating_block unordered_list">
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                            </ul>
                                                                            <div className="review_counter">From <b>200+</b> reviews</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul> */}
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="site_author bg-primary">
                                                                <div className="author_box">
                                                                    <div className="author_image bg-light">
                                                                        <img src={icon10} alt="Site Author" />
                                                                    </div>
                                                                    <div className="author_box_content">
                                                                        <h3 className="author_name text-white">Lokeswaran Kannan</h3>
                                                                        <span className="author_designation text-white">CEO At eOrbitor</span>
                                                                    </div>
                                                                    <div className="quote_icon">
                                                                        <img src={icon11} alt="Quote Icon" />
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 text-white">
                                                                    Lokeswaran Kannan is the CEO of Eorbitor, a dynamic platform focused on technology, innovation, and digital solutions. As a leader, he drives the company's vision, fostering growth and leveraging cutting-edge advancements to deliver value to users. 
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" to="/" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Solutions
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="portfolio_submenu">
                                                <li><Link onClick={ClickHandler} to="/">Sccm-solutions</Link></li>
                                                <li><Link onClick={ClickHandler} to="/">Application-solutions</Link></li>
                                                <li><Link onClick={ClickHandler} to="/">AI-ML-solutions</Link></li>
                                                <li><Link onClick={ClickHandler} to="/">Cyber-security-solutions</Link></li>
                                                <li><Link onClick={ClickHandler} to="/">Digital-solutions</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" to="/" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="portfolio_submenu">
                                                <li><Link onClick={ClickHandler} to="/">Cloud-solutions</Link></li>
                                                <li><Link onClick={ClickHandler} to="/">Data-center-solutions</Link></li>
                                                <li><Link onClick={ClickHandler} to="/">Networking-services</Link></li>
                                                <li><Link onClick={ClickHandler} to="/">It-infrastructure-services</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/">Dubai</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)} type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="btn btn-outline-light" to="/pricing">
                                        <span className="btn_label" data-text="Toll-Free: 1800 208 4646">Toll-Free: 1800 208 4646</span>
                                      
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>

    )
}

export default Header;