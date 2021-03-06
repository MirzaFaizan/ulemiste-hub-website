import Link from 'next/link';
import React, { ReactElement } from 'react';
import {
    FaLinkedin as LinkedInIcon,
    FaInstagram as InstagramIcon,
    FaFacebookSquare as FacebookIcon
} from 'react-icons/fa';

interface IProps {
    notWhite?: boolean;
}
const Footer = ({ notWhite }: IProps): ReactElement => {
    return (
        <>
            <footer
                className={
                    notWhite
                        ? 'relative bg-blueGray-100 pt-8 pb-6'
                        : 'relative bg-white pt-8 pb-6'
                }>
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
                            className={`${
                                notWhite ? 'text-blueGray-100' : 'text-white'
                            } fill-current`}
                            points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">
                                Lets get in touch!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                We are located in ulemiste city
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button
                                    className=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() =>
                                        window.open(
                                            'https://www.linkedin.com/company/vntrs',
                                            '_blank' // <- This is what makes the link open in a new window.
                                        )
                                    }>
                                    <LinkedInIcon size="md" />
                                </button>
                                <button
                                    className=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() =>
                                        window.open(
                                            'https://www.instagram.com/lifeatvntrs/',
                                            '_blank' // <- This is what makes the link open in a new window.
                                        )
                                    }>
                                    <InstagramIcon size="md" />
                                </button>
                                <button
                                    className=" text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2"
                                    type="button"
                                    onClick={() =>
                                        window.open(
                                            'https://facebook.com/vntrsconsulting',
                                            '_blank' // <- This is what makes the link open in a new window.
                                        )
                                    }>
                                    <FacebookIcon size="md" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://vntrs.com/"
                                                target="_blank"
                                                rel="noreferrer">
                                                About Us
                                            </a>
                                        </li>
                                        <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://career.vntrs.se/"
                                                target="_blank"
                                                rel="noreferrer">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://veq.vc/">
                                                Investments
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://veq.com">
                                                VEQ
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://31fpxusnlyk.typeform.com/to/wc160ehF"
                                                target="_blank"
                                                rel="noreferrer">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright ?? {new Date().getFullYear()} Ulemiste
                                startup hub by{' '}
                                <a
                                    href="https://vntrs.com"
                                    className="text-blueGray-500 hover:text-blueGray-800">
                                    VNTRS
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
