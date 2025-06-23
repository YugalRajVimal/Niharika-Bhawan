"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const NiharikaRetreat = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: "-20%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current, {
        x: "20%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div ref={imageRef} className="w-full md:w-1/2 shadow-xl rounded-md overflow-hidden">
          <img
            src="/aboutUsImg2.webp" // Replace with actual image path
            alt="Niharika Bhawan Room"
            className="w-full object-cover"
          />
        </div>

        <div ref={contentRef} className="w-full md:w-1/2">
          <h4 className="text-gray-800 font-bold text-md uppercase mb-2">
            Book for Reservation
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5B2C1F] leading-snug mb-4  font-GeorgiaRef">
            Niharika Bhawan: <br className="hidden md:block" />
            Your Ideal Pilgrim Retreat
          </h2>
          <p className="text-gray-700 text-base mb-6">
            Managed by the Shri Mata Vaishno Devi Shrine Board (SMVDSB),
            Niharika Bhawan in Katra is a premier accommodation facility designed for pilgrims visiting the sacred Mata Vaishno Devi shrine, offering comfort and convenience tailored to your spiritual journey.
          </p>
          <h5 className="text-gray-900 font-bold text-lg mb-1  font-GeorgiaRef">
            Why Choose Niharika Bhawan?
          </h5>
          <p className="text-gray-700 text-base">
            With its pilgrim-focused facilities and strategic location, Niharika Bhawan ensures a seamless and comfortable stay, making it the perfect base for your Mata Vaishno Devi pilgrimage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NiharikaRetreat;
