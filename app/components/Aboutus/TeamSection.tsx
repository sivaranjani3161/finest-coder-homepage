"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import data from "@/app/data/team.json";
import { FaLinkedinIn } from "react-icons/fa";

export default function TeamShowcase() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [started, setStarted] = useState(false);

  const sectionRef = useRef(null);

  // ✅ Start only when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Animation timer (only after visible)
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setActive((prev) => (prev + 1) % data.members.length);
        setVisible(true);
      }, 400);
    }, 4200);

    return () => clearInterval(interval);
  }, [started]);

  const member = data.members[active];
  const isBlue = active % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="py-[60px] md:py-[100px] bg-[#FDFDFD]"
    >
      <div className="max-w-[900px] mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-medium text-[#2E2E2E]">
          {data.title.normal}{" "}
          <span className="font-bold">{data.title.highlight}</span>
        </h2>

        {/* SUBTITLE */}
        <p className="mt-[10px] md:mt-[16px] text-[14px] md:text-[18px] text-[#555] max-w-[650px] mx-auto leading-[150%]">
          {data.subtitle}
        </p>

        {/* 🔥 3D CAPSULE */}
        <div className="relative mt-[50px] md:mt-[70px]">

          {/* 🔻 DEPTH LAYER */}
          <div
            className={`
              absolute inset-0 translate-y-[12px]
              rounded-[40px]
              ${
                isBlue
                  ? "bg-[#0097A7]"
                  : "bg-[#e0e0e0]"
              }
            `}
          />

          {/* 🔥 MAIN CARD */}
          <div
            className={`
              relative z-10
              flex flex-col md:flex-row items-center justify-center
              gap-[30px] md:gap-[60px]
              px-[30px] md:px-[50px]
              py-[35px] md:py-[45px]
              rounded-[40px]
              transition-all duration-700
              ${
                isBlue
                  ? "bg-[#00B8C6] text-white"
                  : "bg-white text-[#2E2E2E] border border-[#eee]"
              }
            `}
          >

            {/* IMAGE */}
            <div className="flex justify-center items-center">
              <div
                className={`
                  w-[120px] h-[120px]
                  md:w-[160px] md:h-[160px]
                  rounded-full border-[5px]
                  bg-white
                  flex items-center justify-center
                  transition-all duration-400 ease-in-out
                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[70px] opacity-0"
                  }
                `}
                style={{
                  borderColor: isBlue ? "#ffffff" : "#00B8C6",
                }}
              >
                <div className="w-[90%] h-[90%] rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div
              className={`
                flex flex-col items-center justify-center text-center
                transition-all duration-400 ease-in-out
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[20px]"
                }
              `}
            >

              {/* NAME */}
              <h3 className="text-[24px] md:text-[32px] font-bold mb-[10px]">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-[16px] md:text-[19px] opacity-90 mb-[16px]">
                {member.role}
              </p>

              {/* ✅ LINKEDIN FIX */}
              <a
                href={member.linkedin}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  const url = member.linkedin.startsWith("http")
                    ? member.linkedin
                    : `https://${member.linkedin}`;

                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                className="w-[36px] h-[36px] flex items-center justify-center bg-[#0077B5] text-white rounded-md hover:scale-110 transition"
              >
                <FaLinkedinIn className="w-[60%] h-[60%]" />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}