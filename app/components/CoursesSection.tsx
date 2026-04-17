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
      left: dir === "left" ? -el.offsetWidth * 0.8 : el.offsetWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#FDFDFD] py-[40px] md:py-[80px] px-4">

      {/* TITLE */}
      <div className="text-center mb-[30px] md:mb-[40px]">
        <h2 className="text-[24px] sm:text-[28px] md:text-[54px] text-[#2E2E2E]">
          Our Featured <span className="font-bold">Courses</span>
        </h2>

        <p className="mt-[10px] text-[13px] sm:text-[14px] md:text-[16px] text-[#464646]">
          Explore our most popular, career-boosting courses
        </p>
      </div>

      {/* SLIDER */}
      <div className="mt-[30px] md:mt-[50px] flex justify-center">
        <div className="relative w-full max-w-[1200px]">

          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-0 md:left-[-25px] top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#00B8C6] text-white rounded-full items-center justify-center"
          >
            <IoIosArrowBack size={20} />
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-0 md:right-[-25px] top-1/2 -translate-y-1/2 z-20 w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#00B8C6] text-white rounded-full items-center justify-center"
          >
            <IoIosArrowForward size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="
                flex gap-[12px] sm:gap-[16px] md:gap-[24px]
    overflow-x-auto overscroll-x-contain
                snap-x snap-mandatory
                scrollbar-hide

                pl-4 pr-4
                md:pl-[calc((1200px-384px)/2)]
                md:pr-[calc((1200px-384px)/2)]

                scroll-pl-4 scroll-pr-4
                md:scroll-pl-[calc((1200px-384px)/2)]
                md:scroll-pr-[calc((1200px-384px)/2)]
              "
            >
              {[...courses, ...courses].map((course, i) => (
                <div
                  key={i}
                  className={`
                    snap-center shrink-0
                    transition-all duration-300
                    ${i === active
                      ? "scale-100"
                      : "scale-[0.92] opacity-80"}
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