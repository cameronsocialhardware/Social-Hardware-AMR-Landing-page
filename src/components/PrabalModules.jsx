"use client";

import SectionTitle from "@/ui/SectionTitle";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const moduleAreas = [
  {
    id: 1,
    name: "Vision System",
    image: "/Prabal/AMR.png",
    description: "Advanced visual processing and object recognition",
    position: "top-left",
    color: "blue"
  },
  {
    id: 2,
    name: "Robotic Arm",
    image: "/Prabal/cobotarm.png", 
    description: "Precision movement control and positioning",
    position: "top-right",
    color: "green"
  },
  {
    id: 3,
    name: "UGV Platform",
    image: "/Prabal/arm.png",
    description: "Mobile base unit with autonomous navigation",
    position: "bottom-left",
    color: "purple"
  },
  {
    id: 4,
    name: "AMR's",
    image: "/Prabal/AMR.png",
    description: "Autonomous mobile robots for various applications",
    position: "bottom-right",
    color: "orange"
  }
];

export default function PrabalModules() {
  const [hoveredModule, setHoveredModule] = useState(null);

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-24 py-8 sm:py-12 lg:py-16 w-full">
      <SectionTitle title="Prabal System" />
      
      <div className="relative max-w-4xl lg:max-w-5xl mx-auto mt-8 sm:mt-12">
        <Image
          src="/prabal_system_modules.png"
          alt="Prabal System Modules"
          width={1000}
          height={800}
          className="w-full h-auto object-contain"
        />
        
        {moduleAreas.map((module) => (
          <div
            key={module.id}
            className={`absolute cursor-pointer hover-area ${module.position}`}
            onMouseEnter={() => setHoveredModule(module)}
            onMouseLeave={() => setHoveredModule(null)}
          >
            <AnimatePresence>
              {hoveredModule?.id === module.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="tooltip"
                >
                  <div className="tooltip-content">
                    <div className="tooltip-image">
                      <Image
                        src={module.image}
                        alt={module.name}
                        width={160}
                        height={160}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                    
                    <div className="tooltip-text">
                      <h4 className="tooltip-title">{module.name}</h4>
                      <p className="tooltip-description">{module.description}</p>
                    </div>
                    
                    <div className="tooltip-arrow"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="mt-8 sm:mt-12 text-center px-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">System Components</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {moduleAreas.map((module) => (
            <div
              key={module.id}
              className="legend-item"
              onMouseEnter={() => setHoveredModule(module)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              <div className={`legend-dot bg-${module.color}-500`}></div>
              <span className="legend-text">{module.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-area {
          width: 25%;
          height: 20%;
        }
        
        .top-left {
          top: 15%;
          left: 20%;
        }
        
        .top-right {
          top: 25%;
          right: 15%;
          width: 30%;
          height: 25%;
        }
        
        .bottom-left {
          bottom: 20%;
          left: 25%;
        }
        
        .bottom-right {
          bottom: 15%;
          right: 20%;
        }
        
        .tooltip {
          position: absolute;
          z-index: 50;
          transform: translateX(-50%);
          margin-top: 8px;
          min-width: 180px;
          max-width: 250px;
          left: 50%;
        }
        
        .tooltip-content {
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          padding: 12px 16px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .tooltip-image {
          margin-bottom: 12px;
        }
        
        .tooltip-text {
          text-align: center;
        }
        
        .tooltip-title {
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
          font-size: 14px;
        }
        
        .tooltip-description {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.4;
        }
        
        .tooltip-arrow {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: white;
          border-left: 1px solid #e5e7eb;
          border-top: 1px solid #e5e7eb;
          transform: translateX(-50%) rotate(45deg);
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .legend-item:hover {
          background-color: #f9fafb;
        }
        
        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .legend-text {
          font-size: 12px;
          font-weight: 500;
          color: #374151;
        }
        
        @media (min-width: 640px) {
          .tooltip-content {
            padding: 16px;
          }
          
          .tooltip-title {
            font-size: 16px;
          }
          
          .tooltip-description {
            font-size: 14px;
          }
          
          .legend-item {
            gap: 12px;
            padding: 12px 16px;
          }
          
          .legend-dot {
            width: 16px;
            height: 16px;
          }
          
          .legend-text {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
