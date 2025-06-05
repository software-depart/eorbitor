import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import about1 from '../../images/about/about_image_9.webp'
import about2 from '../../images/about/about_image_11.webp'
import about3 from '../../images/about/about_image_10.webp'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const About = (props) => {

    const [isOpen, setOpen] = useState(false)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about_section section_space">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="about_image_1">
                            <img src={about1} alt="eorbitor - About" />
                            <img src={about2} data-parallax='{"y" : 80, "smoothness": 6}' alt="eorbitor - About" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about_content">
                            <div className="heading_block">
                                <div className="heading_focus_text">
                                    We are
                                    <span className="badge bg-secondary text-white">eorbitor</span>
                                </div>
                                <h2 className="heading_text">
                                    Our Digital Solutions
                                </h2>
                                <p className="heading_description mb-0">
                                    At eorbitor, we specialize in delivering intelligent system integration and cutting-edge technology solutions that simplify operations, enhance efficiency, and accelerate digital transformation.
                                </p>
                                <p>With a deep commitment to innovation and a strong customer-first philosophy, we partner with organizations across industries to reimagine their digital capabilities. Our multidisciplinary expertise allows us to seamlessly blend infrastructure, software, and services—creating smart, scalable solutions tailored to modern business challenges.</p>
                                <p>Whether you're modernizing legacy systems, optimizing workflows, or building next-gen digital ecosystems, eorbitor is your trusted ally in navigating the ever-evolving digital landscape.</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </section>
    )
}

export default About;