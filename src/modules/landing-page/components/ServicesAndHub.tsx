import Link from 'next/link';
import React, { ReactElement } from 'react';
import { FaAward, FaDesktop, FaMoneyBill } from 'react-icons/fa';
import { ImOffice } from 'react-icons/im';

const ServicesAndHub = (): ReactElement => {
    return (
        <section className="pb-20 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                    <FaAward />
                                </div>
                                <h6 className="text-xl font-semibold">
                                    Startup Hub
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    VNTRS is a Baltic Startup Studio and a VC
                                    Fund working with Pre-seed / Seed / Series A
                                    startups. VNTRS is operating using sweat
                                    equity model and is able to commit the
                                    follow-up cash investment for the later
                                    stages of the projects
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                    <FaDesktop />
                                </div>
                                <h6 className="text-xl font-semibold">
                                    Co-working space
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    In October 2021, VNTRS, in collaboration
                                    with Ülemiste City, have opened a cozy
                                    co-working space, where you can rent a hot
                                    or a fixed desk. Co-working space also hosts
                                    small office boxes, should your team wish to
                                    have some more privacy. The specialist team
                                    of VNTRS is always ready to help and assist
                                    you with the development of your ideas, get
                                    in TOUCH and let&apos;s find you the best
                                    solution for your office
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                    <FaMoneyBill />
                                </div>
                                <h6 className="text-xl font-semibold">
                                    Investments
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                    VNTRS has created a unique network of
                                    funding partners to help your next round. A
                                    lot of startups miss out on funding due to
                                    lack of fundraising knowledge. VNTRS is
                                    educating teams to get most of the
                                    fundraising. We have various funding
                                    partners working with us and are happy to
                                    connect startups to Revenue-based loan /
                                    Impact funds / foreign VC funds / Angels
                                    etc. to maximise the chance for success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Ulemiste Hub Section*/}

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <ImOffice />
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            Ülemiste Startup Hub
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                            Ülemiste Startup Hub, powered by VNTRS - Where great
                            ideas become successful. Located in &quot;Lurichi
                            Maja&quot;, hosting a co-working space, office boxes
                            for a bigger teams for a reasonable prices.
                        </p>
                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            Ülemiste Startup Hub is not limited only to
                            co-working space, VNTRS is working with the local
                            partners to create a strong community to deliver
                            additional value to its members. Food, Sport,
                            Leisure, Health, etc. - all of those services can be
                            found in the vicinity of our Startup Hub. Discounts,
                            special offers and unique opportunities are waiting
                            our members.
                        </p>
                        <Link href="/">
                            <button
                                className="bg-emerald-500 mb-4 md:mb-0 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                                onClick={() =>
                                    window.open(
                                        'https://31fpxusnlyk.typeform.com/to/hCRkMjvR',
                                        '_blank' // <- This is what makes the link open in a new window.
                                    )
                                }
                                type="button">
                                Book time to visit
                            </button>
                        </Link>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                            <img
                                alt="..."
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                className="w-full align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                                <svg
                                    preserveAspectRatio="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 583 95"
                                    className="absolute left-0 w-full block h-95-px -top-94-px">
                                    <polygon
                                        points="-30,95 583,95 583,65"
                                        className="text-emerald-500 fill-current"></polygon>
                                </svg>
                                <h4 className="text-xl font-bold text-white">
                                    Top notch work environment
                                </h4>
                                <p className="text-md font-light mt-2 text-white">
                                    Great WiFi, comfortable furniture, friendly
                                    co workers
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                style={{ transform: 'translateZ(0)' }}>
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0">
                    <polygon
                        className="text-blueGray-800 fill-current"
                        points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
    );
};

export default ServicesAndHub;
