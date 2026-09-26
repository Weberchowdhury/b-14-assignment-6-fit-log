import Image from "next/image";
import Link from "next/link";

const MyPlanCard = ({ work, onDone, onRemove }) => {
  return (
    <div className="border-b border-base-300 py-5 last:border-b-0">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* Left Side */}
        <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center">

          {/* Image */}
          <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-40">
            <Image
              src={work.image}
              alt={work.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Information */}
          <div className="min-w-0">
            <h2 className="text-xl font-bold uppercase text-base-content">
              {work.name}
            </h2>

            <p className="mt-1 text-sm text-base-content/60">
              {work.equipment}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <span>
                ⏱ <strong>{work.duration}</strong> min
              </span>

              <span>
                🔥 <strong>{work.caloriesBurned}</strong> kcal
              </span>

              <span>
                ⭐ <strong>{work.rating}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex w-full shrink-0 items-center gap-2 md:w-auto">

          {/* View Details */}
          <Link
            href={`/workouts/${work.id}`}
            className="flex-1 rounded-lg border border-base-content/30 px-4 py-2.5 text-center text-sm font-semibold transition hover:bg-base-200 md:flex-none"
          >
            View Details
          </Link>

          {/* Mark as Done */}
          <button
            onClick={() => onDone?.(work)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-lime-400 px-4 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-lime-500 md:flex-none"
          >
            <span>✓</span>
            Mark as Done
          </button>

          {/* Remove */}
          <button
            onClick={() => onRemove?.(work)}
            aria-label="Remove workout"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl text-base-content/50 transition hover:bg-base-200 hover:text-red-500"
          >
            ×
          </button>

        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;