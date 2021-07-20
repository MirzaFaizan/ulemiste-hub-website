import React, { ReactElement } from 'react';
import { MdOpenInNew } from 'react-icons/md';

export const ContactUs = (): ReactElement => {
    return (
        <section className="pb-20 relative block bg-blueGray-800">
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

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold text-white">
                            Let&apos;s VNTR together
                        </h2>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                            We are challenge-hungry team, with a flexible,
                            widespread business and dev skillset.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <i className="fas fa-medal text-xl"></i>
                        </div>
                        <h6 className="text-xl mt-5 font-semibold text-white">
                            Scale your Tech
                        </h6>
                        <p className="mt-2 mb-4 text-blueGray-400">
                            VNTRS is operating using sweat equity model and is
                            able to commit the follow-up cash investment for the
                            later stages of the projects
                        </p>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                            type="button">
                            Contact Us{' '}
                            <MdOpenInNew className="inline-block text-lg" />
                        </button>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <i className="fas fa-poll text-xl"></i>
                        </div>
                        <h5 className="text-xl mt-5 font-semibold text-white">
                            Apply for funding
                        </h5>
                        <p className="mt-2 mb-4 text-blueGray-400">
                            e have various funding partners working with us and
                            are happy to connect startups to Revenue-based loan
                            / Impact funds / foreign VC funds / Angels etc. to
                            maximise the chance for success.
                        </p>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                            type="button">
                            Apply{' '}
                            <MdOpenInNew className="inline-block text-lg" />
                        </button>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <i className="fas fa-lightbulb text-xl"></i>
                        </div>
                        <h5 className="text-xl mt-5 font-semibold text-white">
                            SWEAT equity deal
                        </h5>
                        <p className="mt-2 mb-4 text-blueGray-400">
                            Get your product up to speed with your client needs,
                            both business wise and tech wise. Lets split the
                            burden together.
                        </p>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                            type="button">
                            Get Deal{' '}
                            <MdOpenInNew className="inline-block text-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
