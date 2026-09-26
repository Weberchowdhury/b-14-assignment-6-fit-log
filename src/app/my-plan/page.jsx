'use client'
import WorkCard from '@/components/homepage/shared/WorkCard';
import MyPlanCard from '@/components/MyPlanCard';
import { WorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const MyPlanPage = () => {

    

    const { addToTodaysPlan, saveForLater } = useContext(WorkoutContext)

    console.log("Today's Plan:", addToTodaysPlan);
  console.log("Saved:", saveForLater);
    return (

        <div className="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Today's Plan" />
            <div className="tab-content bg-base-100 border-base-300 p-6">
             {
              addToTodaysPlan.length > 0? ( addToTodaysPlan.map(work => <MyPlanCard key={work.id} work={work}></MyPlanCard>) ) : <>
              <div className='text-center justify-center w-auto h-auto p-30'><h2 className='font-bold text-3xl text-center justify-center'>NOTHING HERE YET</h2>
                <p className='p-3'>Browse the library and add a lift to get today moving</p>
                <Link href='/workouts' className="btn btn-active btn-primary">Go to workouts</Link>
                
                </div>
                
                
                </>
             }    
                              
            </div>

            <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">
 
                {
                  saveForLater.length > 0? (  saveForLater.map(work => <MyPlanCard key={work.id} work={work}></MyPlanCard>) ) : <>
                  <div className='text-center justify-center w-auto h-auto p-30'><h2 className='font-bold text-3xl text-center justify-center'>NOTHING HERE YET</h2>
                <p className='p-3'>Browse the library and add a lift to get today moving</p>
                <Link href='/workouts' className="btn btn-active btn-primary">Go to workouts</Link>
                
                </div>
                  </>
                }
            </div>


        </div>

       

    );
};

export default MyPlanPage;