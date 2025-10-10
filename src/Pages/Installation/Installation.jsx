import React, { useEffect, useState } from 'react';
import InstalledApp from './InstalledApp';
import { removeStoredApp } from '../../Utility/AddToLocalDB';
import useApphook from '../../Hooks/useApphook';
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {

    const [installationApps, setInstallation]=useState([])
    const [sortOrder, setSortOrder]=useState('none' )
    const {loading}=useApphook()


    useEffect(()=>{
        const installedApps=JSON.parse(localStorage.getItem("installation"))
        if(installedApps){
            setInstallation(installedApps)
        }
    },[])
            if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <button className="btn btn-square loading"></button>
            </div>
        );
    } 

    const handalUninstall=(id)=>{
         removeStoredApp(id)
         setInstallation(prev=>prev.filter(app=>app.id !==id));
         toast.success(`Uninstalled This App From your Device`,{
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

    }

    const sortItem=(
        ()=>{
        if(sortOrder==='size-asc'){
            return [...installationApps].sort((a,b)=> a.size-b.size)
        }else if(sortOrder==='size-dsc'){
            return [...installationApps].sort((a,b)=> b.size-a.size)
        }else{
           return installationApps
        }
    })()
    return (
        <div className=' bg-gray-100'>
            <div className=' max-w-[1300px] mx-auto'>
                <div className='py-10'>
                    <h1 className='text-[2.3rem] font-semibold text-center'>Your Installed Apps</h1>
                     <p className='text-[#627382] text-[.9rem] font-normal text-center'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='flex justify-between items-center px-3'>
                    <h1 className='text-[1.2rem] font-semibold'>{sortItem.length} App Found</h1>
                   <label className='from-controlled'>
                      <select className='select select-bordered text-[1rem] font-medium' defaultValue={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
                         <option value="none">Sort By Size</option>
                         <option value="size-asc">Low-High</option>
                         <option value="size-dsc">High-Low</option>
                      </select>
                   </label>
                </div>

                <div className='py-2'>
                    {
                        sortItem.map(a=> <InstalledApp key={a.id} a={a} handalUninstall={handalUninstall}></InstalledApp>)
                    }
                </div>
              
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Installation;