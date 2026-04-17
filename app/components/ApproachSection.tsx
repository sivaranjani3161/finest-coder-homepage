"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Train",
    desc: "Hands-on, project-based learning that builds industry-ready skills.",
  },
  {
    title: "Hire",
    desc: "Careful selection to match the right talent with CodingMart.",
  },
  {
    title: "Deploy",
    desc: "Effortless onboarding to ensure immediate productivity.",
  },
];

const circles = [
  "Train Hire Deploy",
  "On-Campus Workshop",
  "Paid Training / Internships",
];

export default function ApproachSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#FDFDFD] py-[60px] md:py-[80px] text-center overflow-hidden">

      <h2 className="text-[32px] md:text-[54px] font-medium text-[#2E2E2E]">
        Our <span className="font-semibold">Approach</span>
      </h2>

      <p className="text-[14px] md:text-[18px] text-[#464646] mt-[10px] md:mt-[12px] max-w-[700px] mx-auto px-4">
        Our approach focuses on practical, hands-on learning designed to build confidence and real-world skills.
      </p>

      <div className="relative mt-[50px] md:mt-[80px] flex justify-center">

        <div className="hidden md:block absolute top-[72px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] border-t border-[#BABABA]" />

        <div className="relative flex gap-[40px] md:gap-[140px] flex-wrap md:flex-nowrap justify-center">

          {circles.map((text, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => setActive(i)}
            >
              <div
                className={`
                  w-[110px] h-[110px] md:w-[144px] md:h-[144px]
                  rounded-full flex items-center justify-center
                  text-[14px] md:text-[16px] text-center px-10
                  transition-all
                  ${
                    active === i
                      ? "bg-[#00B8C6] text-white"
                      : "bg-[#FDFDFD] border border-[#000000] text-[#2E2E2E]"
                  }
                `}
              >
                {text}
              </div>

              {active === i && (
                <div className="absolute top-[110px] md:top-[144px] w-[1px] h-[40px] md:h-[54px] bg-[#2E2E2E]" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[40px] md:mt-[55px] flex justify-center px-4">
        <div className="w-full max-w-[1200px] border border-[#BABABA] rounded-[16px] bg-[#FDFDFD] flex flex-col md:flex-row items-center md:items-stretch md:px-[60px] py-[30px] md:py-[40px] gap-[30px] md:gap-0">

          {steps.map((item, i) => (
            <div key={i} className="flex-1 text-center md:text-left relative px-4">

              {i !== 0 && (
                <div className="hidden md:block absolute left-[-30px] top-1/2 -translate-y-1/2 w-[1px] h-[100px] bg-[#BABABA]" />
              )}

              {i !== 0 && (
             <div className="hidden md:block absolute left-[-30px] top-1/2 -translate-y-1/2">
  <Image
    src="/arrow-step.png"
    alt="arrow"
    width={20}
    height={42}
    className="object-contain"
  />
</div>
              )}

              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#2E2E2E]">
                {item.title}
              </h3>

              <p className="mt-[10px] md:mt-[12px] text-[14px] md:text-[18px] text-[#464646] max-w-[260px] mx-auto md:mx-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[20px] md:mt-[24px] flex justify-center items-center gap-[20px]">


      

      </div>
    </section>
  );
}