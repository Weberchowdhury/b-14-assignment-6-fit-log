"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import React from "react";

import logo from "@/app/assets/logo.png";
import { WorkoutContext } from "@/context/WorkoutContext";

const Navbar = () => {
  const pathname = usePathname();

  const { addToTodaysPlan, saveForLater } =
    useContext(WorkoutContext);

  const isWorkoutPage = pathname.startsWith("/workouts");
  const isMyPlanPage = pathname === "/my-plan";

  return (
    <div className="navbar border-b border-base-200 bg-base-100 px-4 shadow-sm sm:px-6 lg:px-10">

      {/* Logo */}
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-extrabold">
            FITLOG
          </span>
        </Link>
      </div>

      {/* Center Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">

          <li>
            <Link
              href="/#library"
              className={`rounded-lg px-4 py-2 font-semibold ${
                isWorkoutPage
                  ? "bg-[#ccff00] text-gray-900"
                  : "hover:bg-base-200"
              }`}
            >
              Workout
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className={`rounded-lg px-4 py-2 font-semibold ${
                isMyPlanPage
                  ? "bg-[#ccff00] text-gray-900"
                  : "hover:bg-base-200"
              }`}
            >
              My Plan
            </Link>
          </li>

        </ul>
      </div>

      {/* Counters */}
      <div className="navbar-end gap-2">

        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-2 text-sm font-bold text-gray-900 transition hover:bg-lime-300 sm:px-4"
        >
          <span>Plan</span>
          <span>{addToTodaysPlan.length}</span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-full border border-gray-400 px-3 py-2 text-sm font-semibold transition hover:bg-base-200 sm:px-4"
        >
          <span>Saved</span>
          <span>{saveForLater.length}</span>
        </Link>

      </div>

    </div>
  );
};

export default Navbar;






// What I wrote myself


// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import logo from '@/app/assets/logo.png'

// const Navbar = () => {

//     const links = <>
//         <li><Link href='/workouts'>Workouts</Link></li>

//         <li><Link href='/myplan'>My Plan</Link></li></>
//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex={-1}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                        {links}
//                     </ul>
//                 </div>

                
//                 <Image src={logo} alt='logo image'></Image>
//                 <a className="btn btn-ghost text-xl">FITLOG</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                    {links}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <button className="btn">Plan</button>
//                 <button className="btn">Saved</button>
//             </div>
//         </div>
//     );
// };

// export default Navbar;