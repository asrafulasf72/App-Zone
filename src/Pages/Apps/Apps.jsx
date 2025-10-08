import { Search } from 'lucide-react';
import React from 'react';
import Allapp from './Allapp';
import useApphook from '../../Hooks/useApphook';

const Apps = () => {

    const {appData}=useApphook();
    return (
        <div className=' bg-gray-100'>
            <div className=' max-w-[1300px] mx-auto'>
                <div className='py-10'>
                    <h1 className='text-[2.3rem] font-semibold text-center'>Our All Applications</h1>
                     <p className='text-[#627382] text-[.9rem] font-normal text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between items-center px-2'>
                    <h2 className='text-[1.5rem] font-semibold'>({appData.length}) Apps Founds</h2>
                    <label>
                        <input className='border-2 border-gray-300 px-3 py-1 rounded-[.4rem]' type="search" name="" placeholder='Search App'/>
                    </label>
                </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3'>
                    {
                        appData.map(allApp=> <Allapp key={allApp.id} allApp={allApp}></Allapp>)
                    }
                 </div>
            </div>
        </div>
    );
};

export default Apps;