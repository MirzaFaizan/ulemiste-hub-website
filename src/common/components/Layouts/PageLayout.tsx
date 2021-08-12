import React, { ReactElement } from 'react';
import { FC } from 'react';
import Navbar from '@/common/components/Nav/AuthNavbar';
interface IProps {
    title: string;
    description?: string;
}
const PageLayout: FC<IProps> = ({
    title,
    description,
    children
}): ReactElement => {
    return (
        <div>
            <Navbar />
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-45">
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
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    {title}
                                </h1>
                                {description && (
                                    <p className="mt-4 text-lg text-blueGray-200">
                                        {description}
                                    </p>
                                )}
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
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <section className="bg-blueGray-100 min-h-screen ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">{children}</div>
                </div>
            </section>
        </div>
    );
};

export default PageLayout;
