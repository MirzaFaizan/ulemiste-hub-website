import React, { ReactElement } from 'react';

export const Banner = (): ReactElement => {
    return (
        <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
                }}>
                <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div>
                            <h1 className="text-white font-semibold text-5xl">
                                Ülemiste Startup Hub, powered by VNTRS
                            </h1>
                            <h1 className="text-white font-semibold text-2xl mt-1 ">
                                Where great ideas become successful
                            </h1>
                            <p className="mt-8 text-lg text-blueGray-200">
                                We create successful companies together with our
                                clients by providing the right type of
                                competence within tech, growth, design, and
                                business development at the right time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
                        className="text-blueGray-200 fill-current"
                        points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
    );
};
