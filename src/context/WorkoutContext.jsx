"use client";

import React, { createContext, useState } from "react";

export const WorkoutContext = createContext();

const WorkoutProvider = ({ children }) => {
  const [addToTodaysPlan, setAddToTodaysPlan] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);

  // Add workout to today's plan
  const addWorkout = (work) => {
    if (addToTodaysPlan.length >= 5) {
      return false;
    }

    const alreadyAdded = addToTodaysPlan.some(
      (item) => item.id === work.id
    );

    if (alreadyAdded) {
      return false;
    }

    setAddToTodaysPlan((prev) => [...prev, work]);
    return true;
  };

  // Save workout
  const saveWorkout = (work) => {
    const alreadySaved = saveForLater.some(
      (item) => item.id === work.id
    );

    if (alreadySaved) {
      return false;
    }

    setSaveForLater((prev) => [...prev, work]);
    return true;
  };

  // Remove from today's plan
  const removeFromPlan = (id) => {
    setAddToTodaysPlan((prev) =>
      prev.filter((work) => work.id !== id)
    );
  };

  // Remove from saved
  const removeFromSaved = (id) => {
    setSaveForLater((prev) =>
      prev.filter((work) => work.id !== id)
    );
  };

  // Mark workout as done
  const markAsDone = (id) => {
    setAddToTodaysPlan((prev) =>
      prev.filter((work) => work.id !== id)
    );
  };

  const sharedData = {
   addToTodaysPlan,
  setAddToTodaysPlan,

  saveForLater,
  setSaveForLater,

    addWorkout,
    saveWorkout,

    removeFromPlan,
    removeFromSaved,

    markAsDone,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;

















// what i wrote myself



// 'use client'
// import React, { createContext, useState } from 'react';

// export const WorkoutContext = createContext({})

// const WorkoutProvider = ({children}) => {

//     const [addToTodaysPlan, setAddToTodaysPlan] = useState([]);
//     const [saveForLater, setSaveForLater]= useState([]);


//     const sharedData = {
//         addToTodaysPlan, setAddToTodaysPlan, saveForLater, setSaveForLater
//     }
//     return (
//         <div>
//             <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
//         </div>
//     );
// };

// export default WorkoutProvider;


