import React, { ReactElement } from 'react';
import {
    FaRocket as RocketIcon,
    FaMoneyBill as InvestmentIcon,
    FaHandshake as SweatEquityIcon,
    FaPaperPlane as VCIcon
} from 'react-icons/fa';

export const Investments = (): ReactElement => {
    return (
        <section className="relative py-20 bg-blueGray-100" id="funding-street">
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
                        className="text-blueGray-100 fill-current"
                        points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                                <RocketIcon />
                            </div>
                            <h3 className="text-3xl font-semibold">
                                Funding Street
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                The extension comes with three pre-built pages
                                to help you get started faster. You can change
                                the text and images and good to go.
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <SweatEquityIcon />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                SWEAT equity deals
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <InvestmentIcon />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                Funding street
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                                                <VCIcon />
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                VNTRS VC fund
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button
                                className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-none shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                                type="button"
                                onClick={() =>
                                    window.open('https://veq.vc', '_blank')
                                }>
                                Visit VEQ
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
