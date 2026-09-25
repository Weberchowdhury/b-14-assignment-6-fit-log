


import Image from "next/image";
import Link from "next/link";

const WorkCard = ({ work }) => {
  return (
    <Link
      href={`/workouts/${work.id}`}
      className="group block overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
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
              className="rounded-full bg-lime-300 px-4 py-2 text-xs font-bold text-gray-900 uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="mt-4 text-2xl font-bold text-base-content uppercase">
          {work.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xl font-semibold text-gray-500">
          {work.equipment}
        </p>

        {/* Information */}
        <div className="mt-5 flex items-start gap-5 text-sm">

          {/* Duration */}
          <div>
            <span className="text-base-content/60">⏱ </span>
            <span className="font-semibold">
              {work.duration} min
            </span>
          </div>

          {/* Calories */}
          <div>
            <span className="text-base-content/60">🔥 </span>
            <span className="font-semibold">
              {work.caloriesBurned} kcal
            </span>
          </div>

          {/* Rating */}
          <div>
            <span className="text-base-content/60">⭐ </span>
            <span className="font-semibold">
              {work.rating}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkCard;