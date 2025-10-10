import React from 'react';
import dw from '../../assets/icon-downloads.png'
import rat from '../../assets/icon-ratings.png'

const InstalledApp = ({a,handalUninstall}) => {
    const {image,title,downloads,ratingAvg,size,id}=a
    return (
        <div>
             <div className='flex justify-between items-center px-3 my-2 bg-white rounded-[.5rem] shadow-ms'>
                 <div className='flex flex-col md:flex-row gap-4 px-2 py-1'>
                    <img className='w-25' src={image} alt="" />
                    <div className='flex flex-col items-start justify-center space-y-2'>
                        <h1 className='text-[1.2rem] font-medium'>{title}</h1>
                        <div className='flex gap-3'>
                            <p className='flex gap-1 justify-center items-center text-[#00d390] text-[1rem] font-normal'> <img className='w-5 h-4' src={dw} alt="png" />{downloads}</p>
                            <p className='flex gap-1 justify-center items-center text-[1rem] font-normal text-[#ff8811]'> <img className='w-5 h-4' src={rat} alt="" />{ratingAvg}</p>
                            <p className='text-[1rem] font-normal text-[#627382]'>{size}MB</p>
                        </div>
                    </div>
                 </div>
                 <button onClick={()=>handalUninstall(id)} className='cursor-pointer text-[1.2rem] font-semibold mt-5 px-3 py-1.5 rounded-[.5rem] bg-[#00d390] text-white'>Uninstall</button>
             </div>
        </div>
    );
};

export default InstalledApp;