import Banner from '@/components/homepage/Banner';
import Footar from '@/components/homepage/Footar';
import WorkoutLibrary from '@/components/homepage/WorkoutLibrary';
import Navbar from '@/components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      
      <Banner></Banner>
      <WorkoutLibrary></WorkoutLibrary>
      
    </div>
  );
};

export default HomePage;