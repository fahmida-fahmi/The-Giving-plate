import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div className="navbar bg-base-100 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a href="">Our Vision</a></li>
                        <li><a>Providers</a></li>
                        <li><a>Consumers</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Testimonials</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">The Giving Plate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/' id='#' href="">Our Vision</Link></li>
                    <li><Link to='/'>Providers</Link></li>
                    <li><Link to='/'>Consumers</Link></li>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/'>Gallery</Link></li>
                    <li><Link to='/'>Testimonials</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="text-white uppercase text-xl btn teal-bg">Login</a>
            </div>
        </div>
    );
};

export default Nav;