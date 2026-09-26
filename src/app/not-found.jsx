import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="text-6xl font-black">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        WORKOUT NOT FOUND
      </h2>

      <p className="mt-2 text-base-content/60">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/workouts"
        className="btn btn-primary mt-6"
      >
        Go to workouts
      </Link>
    </div>
  );
}