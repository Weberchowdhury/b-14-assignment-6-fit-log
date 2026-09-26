
import AddToTodayBtn from '@/components/bookdetails/AddToTodayBtn';
import SaveForLaterBtn from '@/components/bookdetails/SaveForLaterBtn';
import Image from 'next/image';
import React from 'react';


const getWorks = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return res.json();
};

const WorkoutDetailsPage = async ({ params }) => {
    const { workId } = await params;

    const works = await getWorks();

    const work = works.find(
        (work) => work.id === Number(workId)
    );

    if (!work) {
        return <div>Workout not found</div>;
    }

    return (
        <div className="mx-auto max-w-6xl p-6">
            <div className="grid overflow-hidden rounded-3xl bg-base-100 shadow-xl lg:grid-cols-2">

                {/* LEFT - IMAGE */}
                <div className="p-4">
                    <div className="h-full min-h-[500px] overflow-hidden rounded-2xl">
                        <Image
                            src={work.image}
                            alt={work.name}
                            width={600}
                            height={700}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT - DETAILS */}
                <div className="p-6 lg:p-8">

                    {/* Name */}
                    <h1 className="text-4xl font-bold uppercase">
                        {work.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 leading-7 text-gray-500">
                        {work.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-5">
                      
                        <div className="mt-2 flex flex-wrap gap-2">
                            {work.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-lime-300 px-3 py-1 text-sm font-semibold text-gray-900"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Workout Information */}
                    <div className="mt-6">

                        <div className="flex justify-between border-b border-gray-700 py-3">
                            <span className="font-semibold">EQUIPMENT</span>
                            <span>{work.equipment}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-3">
                            <span className="font-semibold"> DIFFICULTY</span>
                            <span>{work.difficulty}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-3">
                            <span className="font-semibold"> SETS</span>
                            <span>{work.sets}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-3">
                            <span className="font-semibold">REPS</span>
                            <span>{work.reps}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-3">
                            <span className="font-semibold"> DURATION</span>
                            <span>{work.duration} min</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-3">
                            <span className="font-semibold">CALORIES</span>
                            <span>{work.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-700 py-3">
                            <span className="font-semibold">RATING</span>
                            <span>⭐ {work.rating}</span>
                        </div>

                    </div>

                    {/* Instructions */}
                    <div className="mt-7">
                        <h2 className="text-2xl font-bold">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-4 space-y-3">
                            {work.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="leading-6"
                                >
                                    {index + 1}. {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 grid grid-cols-2 gap-3">

                       <AddToTodayBtn work={work}></AddToTodayBtn>

                        <SaveForLaterBtn work={work}></SaveForLaterBtn>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;