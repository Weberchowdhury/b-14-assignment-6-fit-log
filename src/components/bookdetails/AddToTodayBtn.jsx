'use client'

import { WorkoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddToTodayBtn = ({ work }) => {

    const {addToTodaysPlan, setAddToTodaysPlan} = useContext(WorkoutContext)

    const handleAddToTodaysPlan = ()=>{

        setAddToTodaysPlan([...addToTodaysPlan, work]);
        toast.success(`You should do this`)

    }
    return (
        <button className="btn btn-primary" onClick={()=>handleAddToTodaysPlan()}>
            ➕ Add to today's plan
        </button>
    );
};

export default AddToTodayBtn;