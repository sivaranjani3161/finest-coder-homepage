"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  desc: string;
  image: string;
  tags: string[];
}

export default function CourseCard({ title, desc, image, tags }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`
        w-[384px] shrink-0
        transition-all duration-300 ease-out
        ${hover ? "-translate-y-[8px]" : ""}
      `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* IMAGE */}
      <div className="relative w-full h-[282px] rounded-t-[12px] overflow-hidden">

        <Image
          src={image}
          alt=""
          fill
          sizes="384px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* TAGS */}
        <div className="absolute top-[16px] left-0 flex flex-col gap-[8px] z-10">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="
                w-fit
                bg-white text-[#2E2E2E]
                text-[13px] font-medium
                px-[16px] py-[6px]
                rounded-r-full
                border-b-[3px] border-[#00B8C6]
                shadow-sm
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BADGE */}
        <Image
          src="/badge.png"
          alt="badge"
          width={28}
          height={28}
          className="absolute top-[14px] right-[14px]"
        />
      </div>

      {/* CONTENT */}
      <div
        className={`
          w-full min-h-[260px]
          border border-[#E6E6E6] border-t-0
          rounded-b-[12px]
          px-[24px] py-[22px]
          flex flex-col justify-between
          transition-all duration-300

          ${hover ? "bg-[#00B8C6]" : "bg-white"}

          ${
            hover
              ? "shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
              : "shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
          }
        `}
      >

        {/* TEXT */}
        <div className="flex flex-col gap-[10px]">

          <h3
            className={`
              text-[24px]
              font-semibold
              leading-[1.2]
              transition-colors duration-300
              ${hover ? "text-white" : "text-[#2E2E2E]"}
            `}
          >
            {title}
          </h3>

          <p
            className={`
              text-[16px]
              font-medium
              leading-[1.5]
              transition-colors duration-300
              ${hover ? "text-white/90" : "text-[#464646]"}
            `}
          >
            {desc}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-between mt-[12px]">

          {/* BUTTON */}
          <button
            className={`
              w-[210px] h-[48px]
              flex items-center justify-between
              px-[24px]
              rounded-full
              transition-all duration-300

              ${
                hover
                  ? "bg-white text-black shadow-md"
                  : "bg-[#00B8C6] text-white"
              }
            `}
          >
            <span className="text-[16px] font-semibold">
              Enquire Now
            </span>

            <svg
              width="24"
              height="16"
              viewBox="0 0 28 18"
              fill="none"
              className={`transition ${
                hover ? "stroke-black" : "stroke-white"
              }`}
            >
              <path
                d="M2 9h18M16 5l6 4-6 4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* BOOKMARK */}
          <div
            className={`
              w-[38px] h-[38px]
              flex items-center justify-center
              rounded-full border transition-all duration-300
              ${hover ? "border-white bg-white/10" : "border-[#D9D9D9]"}
            `}
          >
            <svg
              width="14"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={`${hover ? "stroke-white" : "stroke-[#999]"}`}
            >
              <path
                d="M6 3h12v18l-6-4-6 4V3z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}