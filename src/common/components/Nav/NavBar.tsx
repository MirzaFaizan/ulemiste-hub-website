import React, { ReactElement } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import NavLink from '@/common/components/Nav/NavLink';
// components

const NavBar = (): ReactElement => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className=" bg-white top-0  z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg sticky">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
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
                                <span className=" lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                    <Link href="/blog">Blog/News</Link>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className=" lg:hover:text-blueGray-400 hover:cursor-pointer text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                    <NavLink path="hub" label="Hub" />
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className=" lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                    <NavLink
                                        path="funding-street"
                                        label="Funding Street"
                                    />
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className=" lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                    <NavLink path="about-us" label="About us" />
                                </span>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <NavLink
                                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                    path="connect"
                                    label="Connect"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
