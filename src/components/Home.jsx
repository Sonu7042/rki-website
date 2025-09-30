import React, { useEffect, useState } from "react";
import home_elan_1 from '../assets/Home_pics/home_elan_1.webp';
import home_elan_2 from '../assets/Home_pics/home_elan_2.webp';
import home_elan_3 from '../assets/Home_pics/home_elan_3.jpg';
import home_elan_4 from '../assets/Home_pics/home_elan_4.jpg';
import home_elan_5 from '../assets/Home_pics/home_elan_5.webp';

function Home() {
  const images = [home_elan_1, home_elan_2, home_elan_3, home_elan_4, home_elan_5];
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const delay = 2000; // 2 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, delay);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <>
     <section className="relative w-full min-h-[600px] md:min-h-[500px] overflow-hidden z-0 py-10 px-6 md:px-20 flex items-center justify-start">
  {/* Background Image */}
  <img
    src={images[current]}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  {/* Gradient overlay */}
  <div
    className={[
      "absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none z-10",
      "transition-opacity duration-500 ease-out",
      mounted ? "opacity-100" : "opacity-0",
      "motion-reduce:transition-none motion-reduce:opacity-100",
    ].join(" ")}
    aria-hidden="true"
  />

  {/* Left content aligned left and animated */}
  <div
    className={[
      "relative z-20 max-w-xl w-full",
      "motion-safe:transition-transform motion-safe:transition-opacity motion-safe:duration-600 motion-safe:ease-out",
      mounted
        ? "motion-safe:opacity-100 motion-safe:translate-x-0"
        : "motion-safe:opacity-0 motion-safe:-translate-x-8",
      "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0",
    ].join(" ")}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight sm:leading-snug text-white">
      Luxury Homes, <br /> Crafted for You
    </h1>
    <p className="border-l-2 border-white/30 pl-4 text-white/90 text-base sm:text-lg max-w-md">
      Elan Sector 49 Gurgaon is a leading residential development within the Sohna Road area.
    </p>
  </div>
</section>

    </>
  );
}

export default Home;
