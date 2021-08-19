import Footer from '@/common/components/Footer/Footer';
import PageLayout from '@/common/components/Layouts/PageLayout';
import Navbar from '@/common/components/Nav/NavBar';
import { Banner } from '@/modules/landing-page/components/Banner';
import CompanyInfo from '@/modules/landing-page/components/CompanyInfo';
import { ContactUs } from '@/modules/landing-page/components/ContactUs';
import { Investments } from '@/modules/landing-page/components/Investments';
import ServicesAndHub from '@/modules/landing-page/components/ServicesAndHub';
import { Team } from '@/modules/landing-page/components/Team';
import React, { ReactElement } from 'react';

const index = (): ReactElement => {
    return (
        <PageLayout
            title="Ulemiste Hub by VNTRS"
            description="Co-working space and startup hub">
            <Navbar />
            <main>
                {/* Banner */}
                <Banner />

                {/* Services */}
                <ServicesAndHub />

                {/* SWEAT deals/dev resource intro */}
                <Investments />

                {/* VNTRS details */}
                <CompanyInfo />

                {/* hosting teams */}
                <Team />

                {/* Get in touch */}
                <ContactUs />
            </main>
            <Footer />
        </PageLayout>
    );
};

export default index;
