"use client";

import Image from "next/image";
import heroData from "@/app/data/hero.json";

export default function Hero() {
  return (
    <section className="w-full bg-[#FDFDFD] pb-20 overflow-hidden pt-[10px]">
      <div className="max-w-[1320px] mx-auto px-6">

        <div className="relative bg-white/60 rounded-[20px] overflow-hidden pt-[80px] md:pt-[120px] pb-[140px] md:pb-[180px]">
          <Image
            src="/hero-bg.png"
            alt="bg"
            fill
            priority
            className="object-cover opacity-90"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="max-w-[716px] text-[32px] leading-[42px] md:text-[54px] md:leading-[65px] font-medium text-[#2E2E2E]">
  Start Coding{" "}

  <span className="text-[#00B8C6] inline-flex items-baseline font-semibold">
    T

    <Image
      src="/od.png"   
      alt="od"
      width={60}      
      height={60}
      className="inline-block align-baseline -ml-[6px] mr-[2px] "
    />

    ay.
  </span>{" "}

  Build What Matters{" "}

  <span className="text-[#00B8C6] font-semibold">
    Tomorrow.
  </span>
</h1>

            <p className="mt-[18px] max-w-[540px] text-[14px] leading-[20px] md:text-[18px] md:leading-[22px] text-[#464646] font-medium">
              {heroData.subtitle}
            </p>

            <button className="mt-[30px] md:mt-[44px] bg-[#00B8C6] text-white px-6 md:px-10 h-[44px] md:h-[52px] rounded-full text-[14px] md:text-[16px] font-semibold hover:opacity-90 transition">
              {heroData.button}
            </button>
          </div>
        </div>

        <div className="relative -mt-[130px] flex justify-center">

          <div
            className="relative hidden md:block h-[320px]"
            style={{ width: "900px" }}
          >

            <div
  className="absolute z-10"
  style={{
    left: "0px",
    top: "40px",
    transform: "rotate(-12.7deg)",
    width: "239px",
    height: "270px",
    border: "5px solid white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    overflow: "hidden",
  }}
>
<div className="w-full h-full overflow-hidden group">
  <Image
    src="/img1.png"
    alt=""
    fill
    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
  />
</div>
</div>
           <div
  className="absolute z-30"
  style={{
    left: "210px",
    top: "20px",
    transform: "rotate(0deg)",
    width: "240px",
    height: "270px",
    border: "5px solid white",
    borderRadius: "12px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    overflow: "hidden",
  }}
>
 <div className="w-full h-full overflow-hidden group">
  <Image
    src="/img2.png"
    alt=""
    fill
    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
  />
</div>
</div>
          <div
  className="absolute z-20"
  style={{
    left: "428px",
    top: "30px",
    transform: "rotate(9.84deg)",
    width: "239px",
    height: "270px",
    border: "5px solid white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    overflow: "hidden",
  }}
>
 <div className="w-full h-full overflow-hidden group">
  <Image
    src="/img3.png"
    alt=""
    fill
    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
  />
</div>
</div>

          <div
  className="absolute z-10"
  style={{
    left: "640px",
    top: "45px",
    transform: "rotate(-5.06deg)",
    width: "239px",
    height: "270px",
    border: "5px solid white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    overflow: "hidden",
  }}
>
  <div className="w-full h-full overflow-hidden group">
  <Image
    src="/img4.png"
    alt=""
    fill
    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
  />
</div>
</div>

            <div
              className="absolute bottom-[-20px] left-[50px] right-[50px] h-[50px] blur-3xl opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #00C8D7 0%, transparent 70%)" }}
            />
          </div>

          <div className="md:hidden flex gap-4 overflow-x-auto px-4 scrollbar-hide pb-4">
            {[
              { src: "/img1.png", rotate: "-12.7deg" },
              { src: "/img2.png", rotate: "0deg" },
              { src: "/img3.png", rotate: "9.84deg" },
              { src: "/img4.png", rotate: "-5.06deg" },
            ].map((card, i) => (
              <div
                key={i}
                className="min-w-[190px] flex-shrink-0"
                style={{
                  transform: `rotate(${card.rotate})`,
                  border: "4px solid white",
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                }}
              >
                <Image src={card.src} alt={`Coder ${i + 1}`} width={190} height={230} className="block" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}