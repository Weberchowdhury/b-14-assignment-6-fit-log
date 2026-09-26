"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutContext";

const AddToTodayBtn = ({ work }) => {
  const { addWorkout, addToTodaysPlan } =
    useContext(WorkoutContext);

  const handleAddToTodaysPlan = () => {
    const added = addWorkout(work);

    if (added) {
      toast.success("Added to today's plan");
    } else if (addToTodaysPlan.length >= 5) {
      toast.warning("Today's plan can contain only 5 workouts");
    } else {
      toast.info("This workout is already in today's plan");
    }
  };

  return (
    <button
      onClick={handleAddToTodaysPlan}
      className="btn btn-primary"
      disabled={addToTodaysPlan.length >= 5}
    >
      ➕ Add to today's plan
    </button>
  );
};

export default AddToTodayBtn;

















// what i wrote myself

// 'use client'

// import { WorkoutContext } from '@/context/WorkoutContext';
// import React, { useContext } from 'react';
// import { toast } from 'react-toastify';

// const AddToTodayBtn = ({ work }) => {

//     const {addToTodaysPlan, setAddToTodaysPlan} = useContext(WorkoutContext)

//     const handleAddToTodaysPlan = ()=>{

//         setAddToTodaysPlan([...addToTodaysPlan, work]);
//         toast.success(`You should do this`)

//     }
//     return (
//         <button className="btn btn-primary" onClick={()=>handleAddToTodaysPlan()}>
//             ➕ Add to today's plan
//         </button>
//     );
// };

// export default AddToTodayBtn;