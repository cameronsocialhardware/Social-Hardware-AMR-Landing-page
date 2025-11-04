"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GiMedal } from "react-icons/gi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Customise", href: "#customise" },
  { name: "Company Profile", href: "#company-profile" },
  { name: "Gallery", href: "#gallery" },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white w-full text-black py-4 border-t border-gray-200 font-montserrat">
      <div className="px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
          {/* Logo */}
          <div className="flex flex-col gap-4 lg:gap-5">
            <Image
              src="/Horizontal Logo with black text.png"
              alt="Company Logo"
              width={160}
              height={48}
              className="object-contain"
            />
            <div className="text-sm lg:text-[16px] font-semibold text-[#333333]">
              <p>Engineered in India,</p>
              <p>Trusted Worldwide.</p>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://www.linkedin.com/company/social-hardware/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-[#333333] hover:text-[#ff6600] transition-colors" size={22} />
              </a>
              <a
                href="https://x.com/social_hardware"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-[#333333] hover:text-[#ff6600] transition-colors" size={22} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <h3 className="font-semibold text-[#333333] mb-4 text-lg lg:text-[20px]">Contact</h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-[#000000] text-sm lg:text-[16px]">Corporate Office:</p>
                <p className="font-medium text-[#333333] text-xs lg:text-[12px]">
                  8, 34/4, 3rd Cross Rd, Pragathi Layout, Veerannapalya,
                  Sadhyagappa Layout, Bengaluru, Karnataka 560045, India
                </p>
              </div>

              <div>
                <p className="font-medium text-[#000000] text-sm lg:text-[16px]">R&D Lab:</p>
                <p className="font-medium text-[#333333] text-xs lg:text-[12px]">
                  679, 9th A Cross Rd, West of Chord Road 2nd Stage, West of
                  Chord Road, Stage 2, Basaveshwar Nagar, Bengaluru, Karnataka
                  560086, India
                </p>
              </div>

              <div className="flex items-start gap-2">
                <FaPhone className="text-[#ff6600] shrink-0 w-3 h-3 lg:w-4 lg:h-4"/>
                <p className="text-[#000000] text-xs lg:text-[12px] font-semibold">+91 7337743354</p>
              </div>
              <div className="flex items-start gap-2">
                <FaEnvelope className="text-[#ff6600] shrink-0 w-3 h-3 lg:w-4 lg:h-4" />
                <p className="text-[#000000] text-xs lg:text-[12px] font-semibold">info@socialhardware.in</p>
              </div>
            </div>
          </div>

          {/* ISO Certifications */}
          <div className="text-sm">
            <h3 className="font-semibold text-[#333333] mb-4 text-lg lg:text-[20px]">ISO Certifications</h3>
            <ul className="space-y-2 list-disc list-inside text-[#333333] text-xs lg:text-[14px] font-medium">
              <li>ISO 9001:2015</li>
              <li>ISO 31000:2018</li>
              <li>ISO/EC 27001</li>
              <li>ISO 13850:2015</li>
              <li>ISO 10218-1:2011</li>
              <li>ISOMEC 17025</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-sm">
            <h3 className="font-semibold text-[#333333] mb-4 text-lg lg:text-[20px]">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-[#333333] text-xs lg:text-[14px] font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="transition-colors duration-200 hover:text-[#ff6600]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-4 border-t text-center text-sm lg:text-[16px] text-[#0000000] font-medium">
        © 2025 Social Hardware International Pvt. Ltd. All rights reserved
      </div>
    </footer>
  );
}