import WorkCard from "@/components/homepage/shared/WorkCard";



const getWorks = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const WorkoutPage = async () => {
  const works = await getWorks();

  return (
   
    

         <main className="mx-auto max-w-7xl px-5 py-10">

      {/* Header */}
      <div className="mb-10 text-start">
        <h1 className="text-4xl font-bold">
         THE LIBRARY
        </h1>

        <p className="mt-3 text-base-content/60">
         Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
          />
        ))}
      </div>

    </main>

    


   
  );
};

export default WorkoutPage;