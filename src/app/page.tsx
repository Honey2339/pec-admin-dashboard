import Image from "next/image";
import NavBar from "./(components)/navbar";
import LandingPage from "./(components)/landingpage";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div className="absolute inset-0 h-[50rem] dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center pointer-events-none">
        <div
          className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white"
          style={{
            maskImage:
              "radial-gradient(ellipse at -100000px, transparent 0px, black)",
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <LandingPage />
      </div>
    </main>
  );
}
