import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/Solutions/sccm-solutions';


const sccmSolutions = (props) => {

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-page">
                <PageTitle pageTitle={'SCCM Solutions'} pagesub={'Solutions'} pageTop={'Our'}/>
                <BlogList/>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default sccmSolutions;
