import React, { ReactElement } from 'react';

export const Team = (): ReactElement => {
    return (
        <section className=" relative pt-20 pb-48">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 z-40"
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
                                src="/assets/akim.png"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Akim</h5>
                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Investor/ CEO
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src="/assets/tim.png"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Tim Vaino</h5>

                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Country Manager / Business Developer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src="/assets/morgan.png"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">
                                    Morgan Vernay
                                </h5>
                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Senior Software Engineer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src="/assets/faizan.png"
                                className="shadow-lg rounded-full mx-auto max-w-120-px"
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">
                                    Faizan Ejaz
                                </h5>
                                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
