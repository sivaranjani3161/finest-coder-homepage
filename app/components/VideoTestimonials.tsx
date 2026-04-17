"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/vid1.png",
  "/vid2.png",
  "/vid3.png",
  "/vid1.png",
  "/vid2.png",
];

export default function VideoTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = Array.from(el.children) as HTMLElement[];
    const target = cards[1];

    if (target) {
      const scrollTo =
        target.offsetLeft -
        el.offsetWidth / 2 +
        target.offsetWidth / 2;

      el.scrollLeft = scrollTo;
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
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
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-[50px] md:py-[80px] bg-[#FDFDFD] px-4">

      <div className="text-center">
        <h2 className="text-[24px] sm:text-[32px] md:text-[54px] text-[#2E2E2E]">
          Checkout our <span className="font-semibold">latest testimonials</span>
        </h2>

        <p className="mt-[10px] md:mt-[12px] text-[13px] sm:text-[14px] md:text-[16px] text-[#777]">
          Explore stories, tips, and guides from our tech community.
        </p>
      </div>

      <div className="mt-[30px] md:mt-[40px] flex justify-center overflow-hidden">

        <div className="w-full max-w-[1200px] overflow-hidden">

          <div
            ref={containerRef}
            className="
              flex gap-[12px] sm:gap-[16px] md:gap-[20px]
              overflow-x-auto
              snap-x snap-mandatory
              scroll-smooth
              scrollbar-hide
              px-2 sm:px-4 md:px-[calc((1200px-460px)/2)]
            "
          >
            {videos.map((video, i) => (
              <div
                key={i}
                className={`
                  snap-center shrink-0 transition-all duration-300 ease-out
                  ${
                    i === active
                      ? "w-[280px] h-[170px] sm:w-[340px] sm:h-[200px] md:w-[460px] md:h-[260px] scale-100 z-20"
                      : "w-[240px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-[360px] md:h-[210px] scale-[0.94] opacity-70"
                  }
                `}
              >
                <div className="relative w-full h-full rounded-[12px] overflow-hidden group">

                  <img
                    src={video}
                    className="w-full h-full object-cover"
                  />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="
                      w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]
                      bg-white/90
                      backdrop-blur-sm
                      rounded-full
                      flex items-center justify-center
                      shadow-md
                      transition group-hover:scale-110
                    ">
                      <div className="w-0 h-0 border-l-[10px] sm:border-l-[12px] border-l-[#00B8C6] border-y-[6px] sm:border-y-[8px] border-y-transparent ml-[2px]" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* DOTS */}
      <div className="mt-[16px] md:mt-[20px] flex justify-center gap-[8px]">
        {videos.map((_, i) => (
          <div
            key={i}
            className={`
              h-[6px] rounded-full transition-all
              ${
                i === active
                  ? "w-[24px] md:w-[28px] bg-[#00B8C6]"
                  : "w-[6px] bg-gray-300"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}