import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Hero4 from '../../components/hero4/hero4';
import FeaturesSection2 from '../../components/FeaturesSection2/FeaturesSection2';
import About from '../../components/about/about';
import PolicySection from '../../components/PolicySection/PolicySection';
import ServiceSection from '../../components/software-company-components/about/about';
import ProjectSection from '../../components/software-company-components/ServiceSection/ServiceSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage4 = () => {

    return (
        <Fragment>
            <div>
                <Header />
                <main className="page_content">
                    <Hero4 />
                    <About />
                    <PolicySection />
                    <FeaturesSection2 />
                    <ServiceSection />
                    <ProjectSection />
                    <Testimonial />
                    <TeamSection />
                    <CtaSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage4;