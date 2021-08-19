import React, { ReactElement } from 'react';
import { FaAward } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import { FaDotCircle } from 'react-icons/fa';

const CompanyInfo = (): ReactElement => {
    return (
        <section className="relative py-20 bg-white" id="about-us">
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
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img
                            alt="..."
                            className="max-w-full rounded-lg shadow-lg"
                            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 my-6  shadow-lg rounded-full bg-blueGray-200">
                                <FaAward />
                            </div>
                            <h3 className="text-3xl font-semibold">VNTRS</h3>
                            <h3 className="text-2xl font-semibold">
                                where good ventures become successful
                            </h3>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                We create successful companies together with our
                                clients by providing the right type of
                                competence within tech, growth, design, and
                                business development at the right time. Here are
                                some of our use cases:
                            </p>
                            <ul className="list-none mt-6">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                <a href="https://vntrs.com/project-svea/">
                                                    <FaDotCircle className="inline-block" />
                                                    {'  '}
                                                    SVEA EKONOMI
                                                    {'  '}
                                                    <MdOpenInNew className="inline-block mb-1" />
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                <a href="https://vntrs.com/project-ignite-sweden/">
                                                    <FaDotCircle className="inline-block" />
                                                    {'  '}
                                                    IGNITE SWEDEN{'  '}
                                                    <MdOpenInNew className="inline-block mb-1" />
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div>
                                            <h4 className="text-blueGray-500">
                                                <a href="https://vntrs.com/project-digital-diabetes-analytics/">
                                                    <FaDotCircle className="inline-block" />
                                                    {'  '}
                                                    DIGITAL DIABETES ANALYTICS
                                                    {'  '}
                                                    <MdOpenInNew className="inline-block mb-1" />
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <button
                            className="bg-primary text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded-none shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                            type="button"
                            onClick={() =>
                                window.open('https://vntrs.com', '_blank')
                            }>
                            Interested? See More!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
