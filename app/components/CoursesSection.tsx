"use client";

import { useEffect, useRef, useState } from "react";
import courses from "@/app/data/courses.json";
import CourseCard from "./CourseCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function CoursesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = Array.from(el.children) as HTMLElement[];

    requestAnimationFrame(() => {
      if (cards.length > 1) {
        const target = cards[1];

        const offset =
          target.offsetLeft -
          (el.offsetWidth / 2 - target.offsetWidth / 2);

        el.scrollTo({ left: offset, behavior: "auto" });
      }
    });

    const handleScroll = () => {
      const center = el.scrollLeft + el.offsetWidth / 2;

      let closest = 0;
      let minDist = Infinity;

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(center - cardCenter);

        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setActive(closest);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#FDFDFD] py-[40px] md:py-[80px]">

      <div className="text-center mb-[40px]">
        <h2 className="text-[28px] md:text-[54px] text-[#2E2E2E] leading-[1.1]">
          Our Featured <span className="font-bold">Courses</span>
        </h2>

        <p className="mt-[12px] text-[16px] md:text-[16px] font-medium text-[#464646]">
          Explore our most popular, career-boosting courses <br />
          handpicked by industry experts.
        </p>
      </div>

      <div className="mt-[40px] md:mt-[50px] flex justify-center">

        <div className="relative w-full max-w-[1200px]">

          <button
            onClick={() => scroll("left")}
            className="
              absolute left-[-25px] top-1/2 -translate-y-1/2 z-20
              w-[50px] h-[50px]
              bg-[#00B8C6] text-white
              rounded-full
              flex items-center justify-center
              shadow-md
            "
          >
            <IoIosArrowBack size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              absolute right-[-25px] top-1/2 -translate-y-1/2 z-20
              w-[50px] h-[50px]
              bg-[#00B8C6] text-white
              rounded-full
              flex items-center justify-center
              shadow-md
            "
          >
            <IoIosArrowForward size={22} />
          </button>

          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="
                flex gap-[16px] md:gap-[24px]
                overflow-x-auto
                snap-x snap-mandatory
                scrollbar-hide
                px-4 md:px-[calc((1200px-384px)/2)]
              "
            >
              {[...courses, ...courses].map((course, i) => (
                <div
                  key={i}
                  className={`
                    snap-center shrink-0
                    transition-all duration-300 ease-out
                    ${i === active
                      ? "scale-100"
                      : "scale-[0.9] opacity-80"}
                  `}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}