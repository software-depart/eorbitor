import React from 'react';
import tImg1 from '../../images/avatar/avatar_4.webp'
import tImg2 from '../../images/avatar/avatar_6.webp'
import tImg3 from '../../images/avatar/avatar_5.webp'
import tImg4 from '../../images/avatar/avatar_7.webp'
import Bg from '../../images/shapes/bg_pattern_2.svg'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"



const testimonial = [
    {
        id: '01',
        tImg:tImg1,
        Title:'Fujitsu',
        Des: "Most trusted technological Partner Who Manages our Data Centre End to End.",
        Name: 'M. Subramaniyan',
        sub:'Fujistu',
    },
    {
        id: '02',
        tImg:tImg2,
        Title:'L&T',
        Des: "We have had the pleasure of working with eOrbitor technologies, who are promising technology partner on all our IT Needs.",
        Name: 'Rupesh Agarwal',
        sub:'LnT IDPL',
    },
    {
        id: '03',
        tImg:tImg3,
        Title:'SDF',
        Des: "eOrbitor has a Strong and Technically Trained resources for all our L3 Level support. Their PAN INDIA Presences is bigger Strength.",
        Name: 'S. Thirukumaran',
        sub:'SDF',
    },
    {
        id: '04',
        tImg:tImg4,
        Title:'L&T',
        Des: "We have had the pleasure of working with eOrbitor technologies, who are promising technology partner on all our IT Needs.",
        Name: 'Rupesh Agarwal',
        sub:'LnT IDPL',
    }
]

const Testimonial = () => {

    return (

        <section className="review_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">Client</span>
                        Testimonial
                    </div>
                    <h2 className="heading_text mb-0">
                        What clients say
                    </h2>
                </div>

                <div className="row">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 991: 2 }}>
                        <Masonry columnsCount={4} gutter="30px">
                            {testimonial.map((testimonial, tsm) => (
                                <div className="review_block pb-0" key={tsm}>
                                    <h3 className="review_title">“{testimonial.Title}”</h3>
                                    <p className="review_commtent">
                                        {testimonial.Des}
                                    </p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            <img src={testimonial.tImg} alt="Roman Dymtro" />
                                        </div>
                                        <div className="review_admin_info">
                                            <h4 className="review_admin_name">{testimonial.Name}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;