'use client'
import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext({})

const WorkoutProvider = ({children}) => {

    const [addToTodaysPlan, setAddToTodaysPlan] = useState([]);
    const [saveForLater, setSaveForLater]= useState([]);


    const sharedData = {
        addToTodaysPlan, setAddToTodaysPlan, saveForLater, setSaveForLater
    }
    return (
        <div>
            <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
        </div>
    );
};

export default WorkoutProvider;


// 'use client'
 
// import { createContext } from 'react'
 
// export const ThemeContext = createContext({})
 
// export default function ThemeProvider({ children }) {
//   return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
// }