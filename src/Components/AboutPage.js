"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftDivRef.current, {
        x: "30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(rightDivRef.current, {
        x: "-30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="about"
        className="w-full py-12 px-4 bg-cover bg-center"
        // style={{ backgroundImage: "url('/aboutUsBackground.jpg')" }}
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 rounded-md p-4 md:p-8">
          <div ref={leftDivRef} className="w-full md:w-[40%]">
            <img
              src="/aboutUsImg.png" // update this image path accordingly
              alt="Niharika Bhawan Katra"
              className="w-full object-contain rounded-md"
            />
          </div>

          <div ref={rightDivRef} className="flex flex-col w-full md:w-[60%]">
            <h2 className="text-gray-900 font-bold uppercase text-sm">
              Welcome to Niharika Bhawan - Katra
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#5B2C1F] mt-2 mb-4 leading-tight font-GeorgiaRef">
              Experience Luxury And Comfort At Niharika Bhawan, SMVDSB, Katra
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              Discover a serene stay at Niharika Bhawan, an accommodation
              facility managed by the Shri Mata Vaishno Devi Shrine Board
              (SMVDSB). Designed for pilgrims visiting the sacred Mata Vaishno
              Devi shrine, it combines comfort, convenience, and spiritual
              ambiance.
              <br />
              <br />
              <strong className="text-black font-GeorgiaRef text-xl">
                Prime Location For Pilgrims
              </strong>
              <br />
              Strategically situated near Katra Bus Stand and Railway Station,
              Niharika Bhawan ensures easy access to the Yatra Registration
              Office, making your pilgrimage journey seamless from the moment
              you arrive.
              <br />
              <br />
              <strong className="text-black font-GeorgiaRef text-xl">
                Tailored Amenities For A Restful Stay
              </strong>
              <br />
              Equipped with essential amenities, Niharika Bhawan caters to the
              unique needs of pilgrims, offering a clean and comfortable
              environment.
            </p>
            {/* <button className="mt-6 bg-[#5B2C1F] text-white px-6 py-3 rounded-md font-semibold w-fit hover:bg-[#4A1F18] transition-all">
            Book Your Stay Now
          </button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
