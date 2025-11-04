"use client";
import SectionTitle from "@/ui/SectionTitle";
import React, { useState, useEffect } from "react";

const advantages = [
  {
    title: "Technological Self-Reliance",
    description:
      "By investing in indigenous robotics, industries contribute to India's vision of becoming self-reliant (Atmanirbhar Bharat), reducing dependency on foreign technology and fostering domestic innovation.",
  },
  {
    title: "Faster Support and Maintenance",
    description:
      "With local manufacturing and service teams, indigenous systems offer quicker troubleshooting, repairs, and part replacements, minimizing downtime and ensuring seamless operations.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Greater than 40% cost saving for faster ROI when comparing our cobots with Universal Robots UR3 and other similar imported systems.",
  },
  {
    title: "Compliance with Local Standards",
    description:
      "Indigenous systems are designed to align with Indian safety, operational, and regulatory standards, ensuring smoother integration and compliance.",
  },
  {
    title: "Boost to the Local Economy",
    description:
      "Supporting indigenous systems creates jobs, encourages skill development, and strengthens India's manufacturing ecosystem, driving economic growth.",
  },
  {
    title: "Scalability and Long-Term Reliability",
    description:
      "Locally produced robotic systems are easier to scale and upgrade, offering businesses a future-proof solution that evolves with their needs.",
  },
  {
    title: "Designed for Local Needs",
    description:
      "Indigenous systems are built with a deep understanding of the unique challenges faced by Indian industries, including diverse operational environments, power conditions, and application-specific requirements.",
  },
];

export default function AdvantagesV1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % advantages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + advantages.length) % advantages.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getSafeIndex = (index) => {
    if (index < 0) return advantages.length - 1;
    if (index >= advantages.length) return 0;
    return index;
  };

  const prevIndex = getSafeIndex(currentIndex - 1);
  const nextIndex = getSafeIndex(currentIndex + 1);

  return (
    <section className="relative w-full flex flex-col mt-12 ml-2" id="whyus">
      <SectionTitle title="Why choose us?" />
      <div className="w-full flex items-center gap-6 relative block min-h-[450px] mt-8 overflow-hidden">
        {/* Left card */}
        {/* Left card has self-end */}
        <div className="hidden md:flex w-1/2 absolute -left-1/3 bottom-0 flex-col gap-4 transition-all duration-700">
          <div
            className="relative w-[600px] h-[275px] self-end box-content pt-[15px] bg-[#ff6600] text-white text-[11px] tracking-[0.2em] text-center
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0
  after:border-b-[65px]
  after:border-l-[300px] after:border-l-transparent
  after:border-r-[300px] after:border-r-transparent"
          >
            <h4 className="text-4xl font-bold text-left w-3/4 justify-self-center mt-4">
              {advantages[prevIndex].title}
            </h4>
            <p className="text-sm text-white mt-2 text-left w-3/4 justify-self-center">
              {advantages[prevIndex].description}
            </p>
          </div>
        </div>

        {/* Center card */}
        <div className="w-1/2 flex flex-col gap-4 absolute top-0 tranform translate-x-1/2 transition-all duration-700 opacity-100 scale-100">
          <div
            className="relative w-[300px] md:w-[600px] h-[350px] md:h-[275px] self-center box-content pt-[15px] bg-[#ff6600] text-white text-center text-[11px] tracking-[0.2em] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0
  after:border-b-[65px] after:border-l-[150px] after:border-r-[150px]
  md:after:border-l-[300px] after:border-l-transparent
  md:after:border-r-[300px] after:border-r-transparent"
          >
            <h4 className="text-2xl md:text-4xl font-bold px-4 text-left w-full md:w-3/4 justify-self-center mt-4">
              {advantages[currentIndex].title}
            </h4>
            <p className="text-sm text-white mt-2 text-left px-4 w-full md:w-3/4 justify-self-center">
              {advantages[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Right card */}
        {/* Right card has self-start */}
        <div className="hidden md:flex w-1/2 absolute -right-1/3 bottom-0 flex-col gap-4 transition-all duration-700">
          <div
            className="relative w-[600px] h-[275px] self-start box-content pt-[15px] bg-[#ff6600] text-white text-[11px] tracking-[0.2em] text-center
  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0
  after:border-b-[65px]
  after:border-l-[300px] after:border-l-transparent
  after:border-r-[300px] after:border-r-transparent"
          >
            <h4 className="text-4xl font-bold text-left w-3/4 justify-self-center mt-4">
              {advantages[nextIndex].title}
            </h4>
            <p className="text-sm text-white mt-2 text-left w-3/4 justify-self-center">
              {advantages[nextIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-6 absolute transform -translate-x-1/2 left-1/2 bottom-10">
        <button
          onClick={prevSlide}
          className="text-[#ff6600] text-4xl transition cursor-pointer hover:text-orange-600"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="text-[#ff6600] text-4xl transition cursor-pointer hover:text-orange-600"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
