import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import WorkoutProvider from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/homepage/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog | Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WorkoutProvider>
          <Navbar></Navbar>

          <div>{children}</div>

          <Footer></Footer>

          <ToastContainer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
