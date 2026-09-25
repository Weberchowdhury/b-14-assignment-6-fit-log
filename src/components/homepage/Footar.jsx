import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Footar = () => {
  return (
    <footer className="bg-base-300">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FITLOG logo"
            width={40}
            height={40}
          />

          <h2 className="text-xl font-bold">
            FITLOG
          </h2>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-base-content/70 sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library.
          <br className="sm:hidden" />
          Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footar;