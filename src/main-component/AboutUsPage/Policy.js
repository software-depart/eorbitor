import React from 'react';
import sIcon1 from '../../images/icons/icon_clock.svg'
import sIcon2 from '../../images/icons/icon_dart_board_2.svg'
import sIcon3 from '../../images/icons/icon_target.svg'

const Policy = [
    {
        title: 'Who We Are',
        subTitle: 'eOrbitor Holding is a leading technology solutions and services provider, specializing in security, systems integration, and end-to-end project execution. We deliver exceptional service and innovative solutions to clients across the UAE, India, and the wider region.',
        icon: sIcon1,
    },
    {
        title: 'Our Mission',
        subTitle: 'At eOrbitor Technologies, our mission is to deliver high-impact, enterprise-grade technology solutions that drive operational excellence, digital transformation, and sustained value creation for our clients. We are committed to leveraging innovation, industry best practices, and strategic insight to empower organizations to navigate complexity, accelerate growth, and achieve long-term success. Through a culture of integrity, performance, and continuous improvement, we aim to be a trusted partner in shaping the future of business through technology.',
        icon: sIcon2,
    },
    {
        title: 'Our Vision',
        subTitle: 'To be a globally recognized leader in enterprise technology solutions, known for our commitment to innovation, reliability, and delivering measurable business outcomes. We envision a future where technology and strategy converge to enable intelligent, agile, and resilient organizations.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;