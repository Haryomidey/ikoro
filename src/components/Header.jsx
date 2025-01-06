import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdMenu, IoMdClose, IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isDirectoryDropdownOpen, setIsDirectoryDropdownOpen] = useState(false);
    const navRef = useRef();

    const handleOutsideClick = (e) => {
        if (
            !e.target.closest(".about-dropdown") &&
            !e.target.closest(".directory-dropdown") &&
            !e.target.closest(".navbar")
        ) {
            setIsAboutDropdownOpen(false);
            setIsDirectoryDropdownOpen(false);
            setIsNavbarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const toggleDropdown = (dropdown) => {
        if (dropdown === 'about') {
            setIsAboutDropdownOpen(!isAboutDropdownOpen);
        }
        if (dropdown === 'directory') {
            setIsDirectoryDropdownOpen(!isDirectoryDropdownOpen);
        }

        if (dropdown === 'navbar') {
            setIsNavbarOpen(!isNavbarOpen);
        }
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <header className="fixed top-0 left-0 w-full h-[80px] px-5 sm:px-20 bg-white shadow-md z-[111]">
            <div className="w-full h-full flex items-center justify-between">
                <div className="text-xl font-bold text-primary">
                    <Link to="/">Ikoro-Ekiti</Link>
                </div>

                <nav className="hidden lg:flex gap-8 items-center">
                    <NavLink to="/" className="text-gray-600 hover:text-primary-hover">Home</NavLink>

                    <div className="relative about-dropdown">
                        <div
                            className="text-gray-600 hover:text-primary-hover flex items-center cursor-pointer about-icon"
                            onClick={(e) => { stopPropagation(e); toggleDropdown('about'); }}
                        >
                            About
                            <IoMdArrowDropdown className="ml-2" />
                        </div>
                        {isAboutDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white z-50 shadow-lg rounded-md opacity-100 w-48">
                                <NavLink 
                                    to="/history" 
                                    className="block text-gray-600 hover:text-primary-hover px-4 py-2 transition-colors duration-300" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    History
                                </NavLink>
                                <NavLink 
                                    to="/culture" 
                                    className="block text-gray-600 hover:text-primary-hover px-4 py-2 transition-colors duration-300" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Culture
                                </NavLink>
                                <NavLink 
                                    to="/dignitaries" 
                                    className="block text-gray-600 hover:text-primary-hover px-4 py-2 transition-colors duration-300" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Dignitaries
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/news" className="text-gray-600 hover:text-primary-hover">News</NavLink>

                    <div className="relative directory-dropdown">
                        <div
                            className="text-gray-600 hover:text-primary-hover flex items-center cursor-pointer directory-icon"
                            onClick={(e) => { stopPropagation(e); toggleDropdown('directory'); }}
                        >
                            Directory
                            <IoMdArrowDropdown className="ml-2" />
                        </div>
                        {isDirectoryDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md opacity-100 w-48">
                                <NavLink 
                                    to="/government" 
                                    className="block text-gray-600 hover:text-primary-hover px-4 py-2 transition-colors duration-300" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Government
                                </NavLink>
                                <NavLink 
                                    to="/business" 
                                    className="block text-gray-600 hover:text-primary-hover px-4 py-2 transition-colors duration-300" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Business
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/gallery" className="text-gray-600 hover:text-primary-hover">Gallery</NavLink>
                    <NavLink to="/contact" className="text-gray-600 hover:text-primary-hover">Contact</NavLink>
                </nav>

                <div className="lg:hidden">
                    {isNavbarOpen ? (
                        <IoMdClose
                            className="text-3xl text-gray-600 cursor-pointer"
                            onClick={() => setIsNavbarOpen(false)}
                        />
                    ) : (
                        <IoMdMenu
                            className="text-3xl text-gray-600 cursor-pointer"
                            onClick={(e) => {stopPropagation(e); toggleDropdown('navbar'); }}
                        />
                    )}
                </div>
            </div>

            <div
                ref={navRef}
                className={`fixed top-0 left-0 w-[65%] sm:w-[50%] h-full bg-white shadow-md transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className="flex flex-col gap-6 mt-20 p-5">
                    <li>
                        <NavLink to="/" className="text-gray-600 hover:text-primary-hover" onClick={() => setIsNavbarOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <div
                            className="text-gray-600 hover:text-primary-hover flex items-center cursor-pointer"
                            onClick={(e) => { stopPropagation(e); toggleDropdown('about'); }}
                        >
                            About
                            <IoMdArrowDropdown className="ml-2" />
                        </div>
                        {isAboutDropdownOpen && (
                            <div className="pl-4">
                                <NavLink 
                                    to="/history" 
                                    className="block text-gray-600 hover:text-primary-hover py-2 transition-colors duration-300 w-fit" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    History
                                </NavLink>
                                <NavLink
                                    to="/culture" 
                                    className="block text-gray-600 hover:text-primary-hover py-2 transition-colors duration-300 w-fit" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Culture
                                </NavLink>
                                <NavLink 
                                    to="/dignitaries" 
                                    className="block text-gray-600 hover:text-primary-hover py-2 transition-colors duration-300 w-fit" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Dignitaries
                                </NavLink>
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink to="/news" className="text-gray-600 hover:text-primary-hover" onClick={() => setIsNavbarOpen(false)}>
                            News
                        </NavLink>
                    </li>
                    <li>
                        <div
                            className="text-gray-600 hover:text-primary-hover flex items-center cursor-pointer"
                            onClick={(e) => { stopPropagation(e); toggleDropdown('directory'); }}
                        >
                            Directory
                            <IoMdArrowDropdown className="ml-2" />
                        </div>
                        {isDirectoryDropdownOpen && (
                            <div className="pl-4">
                                <NavLink 
                                    to="/government"
                                    className="block text-gray-600 hover:text-primary-hover py-2 transition-colors duration-300 w-fit" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Government
                                </NavLink>
                                <NavLink 
                                    to="/business" 
                                    className="block text-gray-600 hover:text-primary-hover py-2 transition-colors duration-300 w-fit" 
                                    onClick={(e) => { e.stopPropagation(); setIsNavbarOpen(false); }}
                                >
                                    Business
                                </NavLink>
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink to="/gallery" className="text-gray-600 hover:text-primary-hover" onClick={() => setIsNavbarOpen(false)}>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="text-gray-600 hover:text-primary-hover" onClick={() => setIsNavbarOpen(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
