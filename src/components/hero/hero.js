import React from 'react';
import { Link } from 'react-router-dom'
import Bg1 from '../../images/shapes/it_solution_hero_bg_1.svg'
import Bg2 from '../../images/hero/it_solution_hero_image_2.webp'
import heroImg from '../../images/hero/it_solution_hero_image_1.webp'
import icon from '../../images/icons/icon_stars_trustpilot.svg'
import avatar1 from '../../images/avatar/avatar_1.webp'
import avatar2 from '../../images/avatar/avatar_2.webp'
import avatar3 from '../../images/avatar/avatar_3.webp'
import heroVideo from '../../videos/heroVideo.mp4'
import heroImage from '../../videos/heroImage.jpg'

const Hero = () => {

    return (
        <section className="it_solution_hero_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" style={{padding: '0px'}}>
                        <video width="100%" autoPlay muted loop poster={heroImage}>
                            <source src={heroVideo} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;