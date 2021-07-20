import Footer from '@/common/components/Footer/Footer';
// components
import Navbar from '@/common/components/Nav/AuthNavbar';
import { Banner } from '@/modules/landing-page/components/Banner';
import CompanyInfo from '@/modules/landing-page/components/CompanyInfo';
import { ContactUs } from '@/modules/landing-page/components/ContactUs';
import { Investments } from '@/modules/landing-page/components/Investments';
import ServicesAndHub from '@/modules/landing-page/components/ServicesAndHub';
import { Team } from '@/modules/landing-page/components/Team';
import React, { ReactElement } from 'react';

const index = (): ReactElement => {
    return (
        <>
            <Navbar />
            <main>
                {/* Banner */}
                <Banner />

                {/* Services */}
                <ServicesAndHub />

                {/* VNTRS details */}
                <CompanyInfo />

                {/* SWEAT deals/dev resource intro */}
                <Investments />

                {/* hosting teams */}
                <Team />

                {/* Get in touch */}
                <ContactUs />
            </main>
            <Footer />
        </>
    );
};

export default index;
