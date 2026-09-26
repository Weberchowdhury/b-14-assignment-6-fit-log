
"use client";

import React, { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutContext";

const SaveForLaterBtn = ({ work }) => {
  const { saveForLater, setSaveForLater } = useContext(WorkoutContext);

  const handleSaveForLater = () => {
    const alreadySaved = saveForLater.some((item) => item.id === work.id);

    if (alreadySaved) {
      toast.info("This workout is already saved");
      return;
    }

    setSaveForLater([...saveForLater, work]);

    toast.success("Workout saved for later");
  };

  return (
    <button
      className="btn btn-outline"
      onClick={handleSaveForLater}
    >
      🔖 Save for later
    </button>
  );
};

export default SaveForLaterBtn;
























// what i wrote myself


// 'use client'

// import { WorkoutContext } from '@/context/WorkoutContext';
// import React, { useContext } from 'react';
// import { toast } from 'react-toastify';

// const SaveForLaterBtn = ({ work }) => {

//     const {saveForLater, setSaveForLater} = useContext(WorkoutContext)

//     const handleSaveForLater = ()=>{

//         setSaveForLater([...saveForLater, work]);
//         toast.success(`You should do this`)

//     }
//     return (
//         <button className="btn btn-outline" onClick={()=> handleSaveForLater()}>
//             🔖 Save for later
//         </button>

//     );
// };

// export default SaveForLaterBtn;