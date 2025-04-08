import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/read', label: 'Read' },
    { to: '/service', label: 'Service' },
];

const SearchIcon = () => (
    <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700" role="navigation">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-white font-bold text-4xl">Crud</h1>

                {/* Search (Desktop) */}
                <div className="hidden md:flex relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="block w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4">
                    {/* Mobile Search */}
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Mobile Links */}
                    <ul className="flex flex-col space-y-2">
                        {navLinks.map(({ to, label }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md font-medium ${isActive
                                            ? 'text-blue-700 dark:text-blue-500 bg-blue-100 dark:bg-gray-800'
                                            : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Desktop Links */}
            <div className="hidden md:flex items-center justify-center space-x-8 px-4 pb-4 md:pb-0">
                {navLinks.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `font-medium ${isActive ? 'text-blue-500' : 'text-white'}`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
