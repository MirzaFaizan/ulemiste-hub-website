import React, { ReactElement } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
// components

const NavBar = (): ReactElement => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                                Ülemiste Startup Hub 🇪🇪
                            </a>
                        </Link>

                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <FaBars color="white" />
                        </button>
                    </div>
                    <div
                        className={
                            'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
                            (navbarOpen
                                ? ' block rounded shadow-lg'
                                : ' hidden')
                        }
                        id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center">
                                <span className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                    <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />
                                    <Link href="/blog">Blog/News</Link>
                                </span>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <a
                                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    href="mailto:tim.vaino@vntrs.com">
                                    Connect
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
