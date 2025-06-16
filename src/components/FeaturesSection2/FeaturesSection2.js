import React from 'react';
import PartnerSection from '../PartnerSection';
import CountUp from 'react-countup';
import sIcon1 from '../../images/icons/icon_head.svg'
import sIcon2 from '../../images/icons/icon_check.svg'
import sIcon3 from '../../images/icons/icon_like.svg'
import sIcon4 from '../../images/icons/icon_dart_board.svg'
import Bg from '../../images/shapes/bg_pattern_1.svg'
import fimg from '../../images/about/about_image_1.webp'

const FunFact = [
    {
        title: '5',
        subTitle: 'Centers Globally',
        symbol: '',
        icon: sIcon1,
    },
    {
        title: '70',
        subTitle: 'Headcount',
        symbol: '+',
        icon: sIcon2,
    },
    {
        title: '500',
        subTitle: 'Clients',
        symbol: '+',
        icon: sIcon3,
    },
    {
        title: '47',
        subTitle: 'Global Business (FY 23-24)',
        symbol: 'CR+',
        icon: sIcon4,
    },


]


const FeaturesSection2 = (props) => {

    return (
        <section className="client_logo_section section_space" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="section_space p-0">
                    <div className="heading_block text-center">
                        <div className="heading_focus_text mb-0">
                            <span className="badge bg-secondary text-white">Brand We</span>
                            Work With
                        </div>
                    </div>
                    <PartnerSection />
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection2;