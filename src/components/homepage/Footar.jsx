import Image from 'next/image';
import React from 'react';
import logo from '@/app/assets/logo.png'

const Footar = () => {
    return (


         <div className="card bg-base-300 rounded-box grid h-20 place-items-center"> 
         
          <div className='flex justify-between container mx-auto p-5 py-3 px-3'>
            <div className='flex gap-4'>
                <Image src={logo} alt='logo image'></Image>
                <h2 className='text-xl font-bold'>FITLOG</h2>
            </div>
            <div>

                
                <p> 2026 FitLog — Workout Library. Train hard, log honest</p>
            </div>
        </div>
         
         </div>


       

       
    );
};

export default Footar;