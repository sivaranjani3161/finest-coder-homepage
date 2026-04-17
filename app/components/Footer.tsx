"use client";

import Image from "next/image";

export default function Footer() {
  return (
<footer className="relative bg-[#F5F5F5] pt-[70px] pb-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-[60px]">

          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={360}   
              height={70}
              className="mb-[20px]"
            />

            <p className="text-[17px] leading-[1.7] text-[#2E2E2E] font-medium max-w-[420px]">
              Finest Coder provides practical, hands-on training led by industry professionals actively engaged in real client projects. This approach ensures you learn skills that are not only current but also highly applicable in the real world
            </p>

            <div className="mt-[24px]">
              <Image
                src="/social.png"
                alt="social"
                width={220}
                height={40}
              />
            </div>
          </div>

          <div className="mt-[20px] md:mt-[40px]">
            <h3 className="text-[18px] font-bold text-[#2E2E2E] mb-[16px]">
              Featured Courses
            </h3>

            <ul className="flex flex-col gap-[14px] text-[17px] text-[#2E2E2E]">
              <li>Full Stack Web Development</li>
              <li>Testing Automation - CI & CD</li>
              <li>Cloud Computing & DevOps Engineering</li>
            </ul>
          </div>

          <div className="mt-[20px] md:mt-[40px]">
            <h3 className="text-[18px] font-bold text-[#2E2E2E] mb-[16px] ">
              Contact
            </h3>

            <div className="flex flex-col gap-[18px] text-[17px] text-[#2E2E2E]">

          <div className="flex gap-[12px] items-start">
  <Image
    src="/loc1.png"
    alt=""
    width={18}
    height={18}
    className="mt-[4px]"   
  />

  <p className="leading-[1.7] max-w-[260px]">
    No.987, 1st Floor, Raj Chambers,
    Thadagam Main Road, R.S. Puram,
    Coimbatore. 641002
  </p>
</div>

              <div className="flex gap-[12px] items-center">
                <Image src="/phone2.png" alt="" width={18} height={18} />
                <p>+91 91500 48550</p>
              </div>

              <div className="flex gap-[12px] items-center">
                <Image src="/mail.png" alt="" width={18} height={18} />
                <p>support@finestcoder.com</p>
              </div>

            </div>
          </div>

        </div>

<div className="mt-[50px] pb-[30px]">
          <div className="
            w-full
            bg-[#5A5A5A]
            text-white
            rounded-full
            px-[28px]
            py-[12px]
            flex flex-col md:flex-row justify-between items-center gap-[12px]
            text-[14px]
          ">

            <p className="text-center md:text-left">
              Copyright © 2025 FinestCoder by Codingmart. All rights reserved.
            </p>

            <div className="flex items-center gap-[16px]">
              <span>Privacy Policy</span>
              <span>|</span>
              <span>Support</span>
              <span>|</span>
              <span>Terms & Conditions</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}