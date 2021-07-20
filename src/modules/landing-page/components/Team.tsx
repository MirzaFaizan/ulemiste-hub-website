import React, { ReactElement } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Team = (): ReactElement => {
    return (
        <section className="pt-20 pb-48">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold">
                            Your future co-workers
                        </h2>
                        <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                            Meet your future co workers and energetic hosts
                            joining from different parts of the world
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src="/assets/akim.jpeg"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Akim</h5>
                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Investor/ CEO
                                </p>
                                <div className="mt-6">
                                    <button
                                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button
                                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button
                                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-dribbble"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src="/assets/akim.jpeg"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Tim Vaino</h5>

                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Country Manager / Business Developer
                                </p>
                                <div className="mt-6">
                                    <button
                                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-google"></i>
                                    </button>
                                    <button
                                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src="/assets/morgan.jpeg"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">
                                    Morgan Vernay
                                </h5>
                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Senior Software Engineer
                                </p>
                                <div className="mt-6">
                                    <button
                                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-google"></i>
                                    </button>
                                    <button
                                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button
                                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src="/assets/faizan.jpeg"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">
                                    Faizan Ejaz
                                </h5>
                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Experienced Software Engineer
                                </p>
                                <div className="mt-6">
                                    <button
                                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <FaLinkedin className="m-auto" />
                                    </button>
                                    <button className="bg-lightBlue-400 text-white text-center w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1">
                                        <FaTwitter />
                                    </button>
                                    <button
                                        className=" bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                        type="button">
                                        <FaGithub />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
