
import { useParams } from 'react-router';
import useApphook from '../../Hooks/useApphook';
import dw from '../../assets/icon-downloads.png'
import rt from '../../assets/icon-ratings.png'
import re from '../../assets/icon-review.png'
import { addStoredApp, getStoredApps } from '../../Utility/AddToLocalDB';
import { useEffect, useState } from 'react';


const AppDetails = () => {
    const {id}=useParams();
    const appId=parseInt(id)
    const {appData,loading}=useApphook('');
    const [isInstalledApp, setIsInstalledApp]=useState(false);

           useEffect(()=>{
         const installedApps=getStoredApps();
         const itemExsist = installedApps.some(app=> app.id===appId)
         setIsInstalledApp(itemExsist)
       },[appId])
       if(loading) return <p>Loading...</p>

    const appDetails=appData.find(a=>a.id===appId)
        if (!appDetails) return <p>App not found.</p>;
       const {title,image,companyName,downloads,reviews,ratingAvg,size}=appDetails



       const handalinstallApp=(id,title,ratingAvg,downloads,size)=>{
            const success= addStoredApp(id,title,ratingAvg,downloads,size)
            if(success){
                setIsInstalledApp(true)
            }
       }

    return (
        <div className='bg-gray-100'>
            <div className='max-w-[1300px] mx-auto'>
               <div className='flex flex-col md:flex-row gap-8 py-15 px-3'>
                   <div className=' flex flex-1 justify-center'>
                      <img className='w-[70%]' src={image} alt="" />
                   </div>
                  <div className=' flex flex-col flex-2'>
                      <div>
                        <h1 className='text-[2rem] font-bold text-black'>{title}</h1>
                        <p className='text-[.9rem] font-normal text-[#627382]'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-[1rem] font-bold'>{companyName}</span></p>
                      </div>
                       <div className="divider divider-end"></div>
                      <div className='flex gap-3 md:gap-12'>
                           <div className='space-y-2'>
                                <img src={dw} alt="" />
                                <p className='text-[1rem] font-normal text-[#001931]'>Downloads</p>
                                <h1 className='text-[1.3rem] md:text-[1.8rem] font-bold'>{downloads}</h1>
                           </div>
                           <div className='space-y-2'>
                               <img src={rt} alt="" />
                               <p className='text-[1rem] font-normal text-[#001931]'>Average Ratings</p>
                               <h1 className='text-[1.3rem] md:text-[1.8rem] font-bold'>{ratingAvg}</h1>
                           </div>
                           <div className='space-y-2'>
                                <img src={re} alt="" />
                                <p className='text-[1rem] font-normal text-[#001931]'>Total Reviews</p>
                                <h1 className='text-[1.3rem] md:text-[1.8rem] font-bold'>{reviews}</h1>
                           </div>
                      </div>
                      <div>
                        <button onClick={()=>handalinstallApp(appId,title,ratingAvg,downloads,size)} disabled={isInstalledApp} className={`text-[1.2rem] font-semibold mt-5 px-3 py-1.5 rounded-[.5rem] ${isInstalledApp? 'bg-gray-300 cursor-not-allowed': 'bg-[#00d390] text-white'}`}>{isInstalledApp? 'Installed': `Install Now (${size} MB)`}</button>
                      </div>
                  </div>
               </div>


            </div>
        </div>
    );
};

export default AppDetails;