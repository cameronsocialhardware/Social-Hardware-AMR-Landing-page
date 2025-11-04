"use client";

import * as React from "react";
import { GrTechnology, GrUserWorker } from "react-icons/gr";
import { FaUserClock, FaMoneyBillWave } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { FcSupport } from "react-icons/fc";
import { IoMdTrophy } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "@/ui/SectionTitle";

export default function Advantages() {
  const advantages = [
    {
      icon: <GrTechnology />,
      title: "Technological Self-Reliance",
      description:
        "By investing in indigenous robotics, industries contribute to India's vision of becoming self-reliant (Atmanirbhar Bharat), reducing dependency on foreign technology and fostering domestic innovation.",
    },
    {
      icon: <FaUserClock />,
      title: "Faster Support and Maintenance",
      description:
        "With local manufacturing and service teams, indigenous systems offer quicker troubleshooting, repairs, and part replacements, minimizing downtime and ensuring seamless operations.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Optimized Cost Structure",
      description:
        "Greater than 40% cost saving for faster ROI when comparing our cobots with Universal Robots UR3 and other similar imported systems.",
    },
    {
      icon: <IoMdTrophy />,
      title: "Compliance with Local Standards",
      description:
        "Indigenous systems are designed to align with Indian safety, operational, and regulatory standards, ensuring smoother integration and compliance.",
    },
    {
      icon: <FcSupport />,
      title: "Boost to the Local Economy",
      description:
        "Supporting indigenous systems creates jobs, encourages skill development, and strengthens India's manufacturing ecosystem, driving economic growth.",
    },
    {
      icon: <BsFileBarGraph />,
      title: "Scalability and Long-Term Reliability",
      description:
        "Locally produced robotic systems are easier to scale and upgrade, offering businesses a future-proof solution that evolves with their needs.",
    },
    {
      icon: <GrUserWorker />,
      title: "Designed for Local Needs",
      description:
        "Indigenous systems are built with a deep understanding of the unique challenges faced by Indian industries, including diverse operational environments, power conditions, and application-specific requirements.",
    },
  ];

  return (
    <section
      className="flex flex-col py-16 px-6 lg:px-26 bg-gradient-to-b from-gray-50 to-white lg:ml-2"
      id="advantages"
    >
      <SectionTitle title="Why Choose us?" /><br />
      <Carousel
        className="w-full mt-16"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {advantages.map((advantage, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4">
              <div className="h-95 group">
                <div className="relative border-gray-300 border shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-6 pl-6 pr-6 pb-6 items-center h-full bg-white">
                  <div className="absolute inset-0 rounded-md pointer-events-none">
                    <div className="rounded-md absolute bottom-0 right-0 w-0.5 h-1/2 bg-gray-300  group-hover:bg-[#ff6600] transition-colors duration-300"></div>
                    <div className="rounded-md absolute bottom-0 right-0 w-1/2 h-0.5 bg-gray-300 group-hover:bg-[#ff6600] transition-colors duration-300"></div>
                  </div>
                  <div className="relative w-full h-15 flex justify-center">
                    <span className="text-[#ff6600] pt-8 text-4xl">
                      {advantage.icon}
                    </span>
                  </div>
                  <h5 className="text-2xl text-black font-semibold text-center mt-2">
                    {advantage.title}
                  </h5>
                  <p className="text-sm text-[#383838] text-center leading-relaxed mt-2">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
