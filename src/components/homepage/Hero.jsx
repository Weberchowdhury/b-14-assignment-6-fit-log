import Image from "next/image";
import Link from "next/link";
import bannerImg from '@/app/assets/banner.png'

const Hero = () => {
  return (
    <section className="border-b border-base-300 bg-base-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        
        {/* Left Side */}
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-base-content/60 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          <a
            href="#library"
            className="btn mt-8 bg-lime-400 px-6 text-sm font-black uppercase text-gray-900 hover:bg-lime-300"
          >
            BROWSE WORKOUTS
            <span>↓</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image
           src={bannerImg}
          alt='Workout Banner'
            width={800}
            height={900}
            className="h-[450px] w-full object-cover sm:h-[550px] lg:h-[620px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;