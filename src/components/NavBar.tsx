import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface TProps {
    name: string,
    age?: number
}

const NavBar: React.FC<TProps> = ({name}: TProps) => {
    const [show, setShow] = useState<Boolean>(false);

    return (
        <nav className="dark:bg-green-400 bg-gray-900 shadow-md" role="navigation">
            <div className="mx-auto px-6 py-3 md:py-0 flex flex-wrap items-center md:flex-no-wrap">
                <div className="mr-4 md:mr-8">
                    <svg className="w-10 h-10 text-purple-600" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                        <title>TailwindCSS</title>
                        <path fill="currentColor" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
                    </svg>
                </div>

                <div className="ml-auto md:hidden" onClick={() => setShow(!show)}>
                    <button className={`${show ? 'hidden':''} flex items-center px-3 py-2`} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <button className={`${show ? '':'hidden'} flex items-center px-3 py-2`} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className={`${!show ? 'hidden' : ''} w-full md:justify-between md:w-auto md:flex-grow md:flex items-center`}>
                    
                    <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t border-gray-700 text-gray-200 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
                        <li>
                            <NavLink to="/home" activeClassName="bg-gray-800 text-gray-100" className="block hover:bg-gray-800 text-gray-100 px-4 py-3 md:p-5 lg:px-4">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="bg-gray-800 text-gray-100" className="block hover:bg-gray-800 text-gray-100 px-4 py-3 md:p-5 lg:px-4">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="bg-green-800 text-gray-100" className="block hover:bg-gray-800 text-gray-100 px-4 py-3 md:p-5 lg:px-4">Contact</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;