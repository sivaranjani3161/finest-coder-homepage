"use client";

import Image from "next/image";
import featuresData from "@/app/data/features.json";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const features: Feature[] = featuresData.features;

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FDFDFD] py-[80px] px-4">

      <h2 className="text-center text-[32px] md:text-[54px] text-[#2E2E2E]">
        Why <span className="font-bold">Choose Us</span>
      </h2>

      <div className="mt-[40px] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[40px]">

        <div className="relative w-full md:w-[480px] aspect-[498/528] shrink-0">
          <Image
            src="/why-img.png"
            alt="why"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover rounded-[12px]"
          />
        </div>

        <div className="flex flex-col gap-[16px] w-full">

          {features.map((item, i) => (
            <div
              key={i}
              className="
  flex items-center gap-[16px]
  px-[16px] py-[16px]
  rounded-[12px]
  border transition-all duration-300
  bg-white shadow-md border-[#E5E5E5]
"
            >

              <div className="w-[72px] h-[72px] md:w-[84px] md:h-[84px] bg-[#00B8C6] rounded-[10px] flex items-center justify-center shrink-0">
                <Image src={item.icon} alt="" width={34} height={34} />
              </div>

              <div className="flex flex-col">

                <h3 className="text-[16px] md:text-[20px] font-semibold text-[#2E2E2E]">
                  {item.title}
                </h3>

                <p className="mt-[6px] text-[14px] md:text-[15px] text-[#5A5A5A] leading-[1.6] max-w-[520px]">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}