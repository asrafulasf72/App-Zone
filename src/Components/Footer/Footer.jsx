import React from 'react';
import { Link } from 'react-router';
import footerlogo from '../../assets/logo.png'
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
         <div className='bg-[#0D1164] '>
               <div className='max-w-[1300px] mx-auto py-4'>
                   <div className='flex flex-col md:flex-row justify-between items-center gap-2.5'>
                    <div>
                         <h1 className='flex items-center'><img className='w-15' src={footerlogo} alt="" /><Link className='text-[1.8rem] font-bold text-white' to='/'>App Zone</Link></h1>
                     </div>

                     <div>
                         <h1 className='text-[1.5rem] font-semibold text-white'>Quick Link</h1>
                          <ul className='text-[.8rem] font-normal text-white flex flex-col px-4 space-y-2'>
                              <Link to='/'>Home</Link>
                              <Link to='/apps'>Apps</Link>
                              <Link to='/installation'>Installation</Link>
                          </ul>
                     </div>

                     <div>
                          <h1 className='text-[1.5rem] font-semibold text-white'>Our Policy</h1>
                         <ul className='text-[.8rem] font-normal text-white flex flex-col px-4 space-y-2'>
                              <Link to='/privacy'>Privacy Policy</Link>
                              <Link to='/terms'>Terms & Condition</Link>
                              <Link to='/payment'>Payment Policy</Link>
                          </ul>
                     </div>
                     <div>
                         <h1 className='text-[1.5rem] font-semibold text-white'>Our Social</h1>
                         <ul className='text-[.8rem] font-normal text-white flex flex-col px-4 space-y-2'>
                              <li className='flex gap-1.5 items-center'><Facebook></Facebook>Facebook</li>
                              <li className='flex gap-1.5 items-center'><Linkedin></Linkedin> Linkedin</li>
                              <li className='flex gap-1.5 items-center'><Instagram></Instagram> Instagram</li>
                          </ul>
                     </div>
                   </div>
               </div>
                <div className="divider divider-end max-w-[1300px] mx-auto"></div>
                    <div className='flex justify-center items-center bg-[#16476A]'>
                         <p className='text-[.8rem] font-light p-3 text-black'>Copyright © 2025 - All right reserved</p>
                    </div>
         </div>
    );
};

export default Footer;