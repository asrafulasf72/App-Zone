import { Search } from 'lucide-react';
import React, { useState } from 'react';
import Allapp from './Allapp';
import useApphook from '../../Hooks/useApphook';
import AppnotFound from '../../Components/ErrorPage/AppnotFound';

const Apps = () => {
    const {appData,loading}=useApphook();
    const [search, setSearch]=useState('');
    const [searchLoading, setSearchLoading]=useState(false)
        if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <button className="btn btn-square loading"></button>
            </div>
        );
    }
    const term = search.trim().toLowerCase();
    const searchItem= term ? appData.filter(items=> items.title.toLowerCase().includes(term)): appData;
    
    return (
        <div className=' bg-gray-100'>
            <div className=' max-w-[1300px] mx-auto'>
                <div className='py-10'>
                    <h1 className='text-[2.3rem] font-semibold text-center'>Our All Applications</h1>
                     <p className='text-[#627382] text-[.9rem] font-normal text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between items-center px-2'>
                    <h2 className='text-[1.5rem] font-semibold'>({searchItem.length}) Apps Founds</h2>
                    <label>
                        <input defaultValue={search} onChange={(e)=> {
                            setSearchLoading(true);
                            setSearch(e.target.value);

                            setTimeout(()=>{
                                setSearchLoading(false)
                            },300);
                        }} className='border-2 border-gray-300 px-3 py-1 rounded-[.4rem]' type="search" name="" placeholder='Search App'/>
                    </label>
                </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3'>
                    {
                        searchLoading?(
                               <div className="flex justify-center items-center col-span-4 h-32">
                                    <button className="btn btn-square loading"></button>
                                </div>
                        ): searchItem.length=== 0?(
                              <div className='col-span-4'>
                                    <AppnotFound></AppnotFound>
                               </div>
                        ):(searchItem.map(allApp=> <Allapp key={allApp.id} allApp={allApp}></Allapp>))
                    }
                 </div>
            </div>
        </div>
    );
};

export default Apps;