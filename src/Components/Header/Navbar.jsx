import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import './nab.css'
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm md:px-14">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[1rem] font-medium">
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/apps'>Apps</NavLink>
        <NavLink to='/installation'>Installation</NavLink>
      </ul>
    </div>
    <Link className='flex gap-1 justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-[1.1rem] font-semibold' to='/'><img className='w-10' src={logo} alt="App Zone Logo" />App Zone</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[1rem] font-medium">
      <NavLink className='mr-4' to='/'>Home</NavLink>
      <NavLink className='mr-4' to='/apps'>Apps</NavLink>
      <NavLink className='' to='/installation'>Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
     <button className='text-[1rem] font-medium text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-[.5rem] px-3 py-1.5'><Link className='flex items-center' to='https://github.com/asrafulasf72'> <Github></Github>Contribute</Link></button>
  </div>
</div>
    );
};

export default Navbar;