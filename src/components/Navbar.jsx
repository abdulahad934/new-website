import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'

// Navbar component for the main navigation bar
const Navbar = () => {
    const [visable, setVisable] = useState(false);

    return (
        <div className="flex justify-between items-center py-5 font-medium">

            {/* Brand Logo */}

            <Link to='/'>
            <img src={assets.logo} className="w-35" alt="" />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden sm:flex items-center gap-5 text-sm text-gray-700">
                <NavLink to="/" className="flex flex-col gap-1 items-center">
                    <p>HOME</p>
                    <hr className="w-6/7 h-[1.5px] text-gray-700 hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col gap-1 items-center">
                    <p>COLLECTION</p>
                    <hr className="w-6/7 h-[1.5px] text-gray-700 hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col gap-1 items-center">
                    <p>ABOUT</p>
                    <hr className="w-6/7 h-[1.5px] text-gray-700 hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col gap-1 items-center">
                    <p>CONTACT</p>
                    <hr className="w-6/7 h-[1.5px] text-gray-700 hidden" />
                </NavLink>
            </ul>

            {/* Search Icon and Profile Dropdown */}
            <div className="flex items-center gap-5">
                <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
                <div className="relative group">
                    <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="" />

                    {/* Profile Dropdown Menu */}
                    <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-1">
                        <div className="flex flex-col items-center gap-4 w-35 py-3 px-4 bg-slate-100 text-gray-700">
                            <p className="hover:text-black cursor-pointer">My Profile</p>
                            <p className="hover:text-black cursor-pointer">Orders</p>
                            <p className="hover:text-black cursor-pointer">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-4px] bg-black w-4 text-center leading-4 rounded-lg text-white aspect-square text-[8px] '>10</p>
                </Link>
                <img onClick={() => setVisable(true)} src={assets.menu_icon} className='w-5 min-w-5 cursor-pointer sm:hidden' alt="" />
            </div>


            {/* sitebarmenu for small screen */}
            <div className={`absolute top-0  right-0 bottom-0 overflow-hidden bg-white transition-all ${visable ?  'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-700'>
                    <div onClick={() => setVisable(false)} className='flex items-center  gap-4 p-6 cursor-pointer  '>
                        <img  src={assets.dropdown_icon} className='h-4 ' alt="" />
                        <p >Back</p>
                    </div>
                    <NavLink onClick={() => setVisable(false)} className='pl-6 border py-3 border-gray-500 hover:text-black' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisable(false)} className='pl-6 border p-3 border-gray-500 hover:text-black' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisable(false)} className='pl-6 border p-3 border-gray-500 hover:text-black' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisable(false)} className='pl-6 border p-3 border-gray-500 hover:text-black' to='/contact'>CONTACT</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
