"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";
import axios from "axios";
import { useToast } from "./Toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+91",
  });
  const [loading, setLoading] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://www.socialhardware.in/api/contact",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          countryCode: "+91",
        });
        showSuccess("Message sent successfully! We'll get back to you soon.");
      }
    } catch (error) {
      showError("Failed to send message. Please try again later.");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex bg-white gap-6 md:gap-0 flex-col mt-12 ml-2 px-6 lg:px-24 "
      id="contact"
    >
      <SectionTitle title="Contact us" /><br /><br /><br />
      <div className="w-full mt-4 bg-white rounded-2xl border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left half: imagery */}
          <div className="relative flex items-center justify-center bg-gray-50 py-14 lg:py-16">
            <Image
              src="/Contact/Icon.png"
              alt=""
              width={480}
              height={480}
              className="object-contain absolute z-0 w-4/5 lg:w-3/4 opacity-30"
            />
            <Image
              src="/Contact/robot.png"
              alt="A cobot in action"
              width={520}
              height={520}
              className="object-contain z-10 relative w-11/12 md:w-[92%]"
            />
          </div>

          {/* Right half: form */}
          <div className="relative flex flex-col z-10 p-10 lg:p-12">
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className=" text-sm font-medium text-[#ff6600] flex gap-2 items-center"
                >
                  <FaUser className="text-[#ff6600]" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className=" text-sm font-medium text-[#ff6600] flex gap-2 items-center"
                >
                  <FaEnvelope className="text-[#ff6600]" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className=" text-sm font-medium text-[#ff6600] flex gap-2 items-center"
                >
                  <FaPhone className="text-[#ff6600]" />
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Optional"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className=" text-sm font-medium text-[#ff6600] flex gap-2 items-center"
                >
                  <FaCommentAlt className="text-[#ff6600]" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff6600] text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors cursor-pointer font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
