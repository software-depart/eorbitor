import React from 'react';
import { Link } from 'react-router-dom'
import Project from '../../../api/project'
import Bg from '../../../images/backgrounds/bg_image_2.webp'
import Bg2 from '../../../images/shapes/shape_bg_1.webp'
import Bg3 from '../../../images/shapes/shape_title_under_line.svg'
import about1 from '../../../images/about/about_image_6.webp'
import aIcon1 from '../../../images/avatar/avatar_1.webp'
import aIcon2 from '../../../images/avatar/avatar_2.webp'
import aIcon3 from '../../../images/avatar/avatar_3.webp'
import aIcon4 from '../../../images/icons/icon_global.svg'
import aIcon5 from '../../../images/shapes/shape_line.webp'
import shape1 from '../../../images/shapes/shape_space_2.svg'


const About = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
   <section className="about_and_case_section section_space section_decoration bg-dark" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div>
                <img src={about1} alt="eorbitor - About" />
              </div>
              
              
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
                  About Us
                </div>
                 <h2 className="heading_text">
                Powering Digital Transformation in the Middle East
                </h2>
                <p className="heading_description mb-0">
                 We're excited to announce the launch of Eorbitor in Dubai – the global hub of innovation and technology.
Eorbitor empowers businesses with cutting-edge digital transformation, automation, and ERP solutions.
With our presence in Dubai, we bring world-class expertise closer to enterprises in the Middle East.
Unlock the future of business with Eorbitor – where intelligence meets innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg3})` }}>
              Services
            </div>
            <h2 className="heading_text mb-0">
              Our latest <mark>Services</mark> 
            </h2>
          </div>

          <div className="case_studies_wrapper">
            {Project.slice(6, 9).map((project, prj) => (
              <div className="case_study_block" key={prj}>
                <div className="case_study_image">
                  <img src={project.pImg} alt="eorbitor - Cases" />
                </div>
                <div className="case_study_content">
                  <ul className="category_list unordered_list text-uppercase">
                    <li><a href="portfolio.html">{project.sub}</a></li>
                  </ul>
                  <h3 className="case_title">
                    <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p>
                    {project.description}
                  </p>
                  
                
                  <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`} className="btn btn-primary">
                    <span className="btn_label" data-text="Read More">Read More </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="btns_group pb-0">
            <Link onClick={ClickHandler} to="/portfolio" className="btn btn-primary">
              <span className="btn_label" data-text="View More Services">View More Services</span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src={shape1} alt="eorbitor Shape" />
      </div>
    </section>
  )
}

export default About;