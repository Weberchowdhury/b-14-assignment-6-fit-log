'use client'

import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveForLaterBtn = ({ work }) => {

    const {saveForLater, setSaveForLater} = useContext(WorkoutContext)

    const handleSaveForLater = ()=>{

        setSaveForLater([...saveForLater, work]);
        toast.success(`You should do this`)

    }
    return (
        <button className="btn btn-outline" onClick={()=> handleSaveForLater()}>
            🔖 Save for later
        </button>

    );
};

export default SaveForLaterBtn;