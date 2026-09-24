// import Image from 'next/image'



// import React from 'react';

// const WorkCard = ({work}) => {

//   const {id, image, name, } = work

//     return (
//        <div className="card bg-base-100  shadow-sm">
//   <figure>
//     <Image
//       src={work.image}
//       alt="work img"
//       width={400}
//       height={300} className='border border-b-gray-950 rounded-2xl' />
//   </figure>
//   <div className="card-body">

//      <div className="card-actions justify-start">
//       <button className='btn btn-succes bg-lime-200 text-black rounded-4xl font-bold'>{work.muscleGroups}</button>
//        <button className='btn btn-succes bg-lime-200 text-black rounded-4xl font-bold'></button>
//     </div>
//     <h2 className="card-title">
     
//       <div >{work.name}</div>
//     </h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
   
//   </div>
// </div>
//     );
// };

// export default WorkCard;


import Image from "next/image";

const WorkCard = ({ work }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={work.image}
          alt={work.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

     
       
      </div>

      {/* Content */}
      <div className="p-5">
      
      {/* Muscle Groups */}
        <div className="mt-3 flex flex-wrap gap-2">
          {work.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-300 text-gray-900 px-4 py-2 text-xs font-bold"
            >
              {muscle}
            </span>
          ))}
        </div>

         {/* Name */}
        <h2 className="text-2xl font-bold text-base-content">
          {work.name}
        </h2>

          {/* Equipment */}
        <div className="">
         

          <p className="mt-1 text-xl font-semibold text-gray-500">
            {work.equipment}
          </p>
        </div>


       <div className="mt-5 flex items-start gap-5 text-sm">

  {/* Duration */}
  <div >
    <span className="text-base-content/60">⏱</span>
    <span className="font-semibold">
      {work.duration} min
    </span>
  </div>

  {/* Calories */}
  <div >
    <span className="text-base-content/60">🔥</span>
    <span className="font-semibold">
      {work.caloriesBurned} kcal
    </span>
  </div>

  {/* Rating */}
  <div >
    <span className="text-base-content/60">⭐</span>
    <span className="font-semibold">
      {work.rating}
    </span>
  </div>

</div>

      

      </div>
    </div>
  );
};

export default WorkCard;