import Banner from '@/components/homepage/Banner';
import WorkoutLibrary from '@/components/homepage/WorkoutLibrary';
import Navbar from '@/components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <WorkoutLibrary></WorkoutLibrary>
    </div>
  );
};

export default HomePage;