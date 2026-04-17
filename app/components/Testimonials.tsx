"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import testimonialsData from "@/app/data/testimonials.json";

export default function Testimonials() {
  const items = testimonialsData.testimonials;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false); // ✅ NEW

  useEffect(() => {
    if (paused) return; // ✅ stop when paused

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length, paused]); // ✅ include paused

  const getPosition = (index: number) => {
    const diff = (index - active + items.length) % items.length;

    if (diff === 0) return "center";
    if (diff === 1) return "bottom";
    if (diff === items.length - 1) return "top";
    return "hidden";
  };

  return (
    <section className="w-full bg-[#0FA4AF] py-[80px] relative overflow-hidden">

      <div className="absolute left-[-120px] top-[220px] w-[520px] h-[450px] bg-white/10 rounded-full" />
      <div className="absolute left-[80px] bottom-[-200px] w-[450px] h-[450px] bg-white/10 rounded-full" />

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[40px]">

        <div className="md:w-[380px] text-white text-center md:text-left">
          <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-medium">
            What Our <br />
            <span className="font-bold">Learners Say</span>
          </h2>

          <p className="mt-[12px] text-[14px] md:text-[16px] opacity-90">
            Hear directly from learners who achieved their goals and unlocked new opportunities with us.
          </p>
        </div>

        {/* ✅ ADD hover handlers HERE */}
        <div
          className="relative w-full max-w-[700px] h-[560px] flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {items.map((item, i) => {
            const pos = getPosition(i);

            return (
              <div
                key={i}
                className={`
                  absolute w-[600px]
                  transition-all duration-700 ease-in-out

                  ${pos === "center" && "translate-y-0 scale-100 opacity-100 z-20"}
                  ${pos === "top" && "-translate-y-[270px] scale-[0.88] opacity-50 z-10"}
                  ${pos === "bottom" && "translate-y-[270px] scale-[0.88] opacity-50 z-10"}
                  ${pos === "hidden" && "scale-[0.7] opacity-0 z-0"}
                `}
              >
                <div
                  className={`
                    w-full h-[210px]
                    bg-[#F3F3F3]
                    rounded-[12px]
                    px-[24px] py-[18px]
                    flex items-center justify-between
                    ${pos === "center" ? "shadow-xl" : "shadow-md"}
                  `}
                >

                  <div className="flex flex-col max-w-[440px]">
                    <Image
                      src="/quote.png"
                      alt="quote"
                      width={22}
                      height={22}
                      className="mb-[6px]"
                    />

                    <p className="text-[#3A3A3A] text-[14px] leading-[22px]">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-[6px] min-w-[100px]">
                    <Image
                      src={item.avatar}
                      alt=""
                      width={44}
                      height={44}
                      className="rounded-full object-cover"
                    />

                    <p className="text-[12px] font-semibold text-[#2E2E2E] text-center">
                      {item.name}
                    </p>

                    <p className="text-[11px] text-[#666] text-center">
                      {item.role}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}