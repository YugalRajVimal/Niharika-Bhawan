import React, { useEffect, useRef, useContext } from "react";
import { MyContext } from "../store/MyContext";
import gsap from "gsap";
import Slider from "react-slick";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const HeroAshramSection = () => {
  const { phoneNo } = useContext(MyContext);

  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: -100,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(subHeadingRef.current, {
        y: -100,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.8,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const backgroundImages = ["/homeImg1.webp", "/homeImg2.webp"];

  const roomImages = [
    "/room11.webp",
    "/room22.webp",
    "/room33.webp",
    "/room44.webp",
    "/room55.webp",
    "/room66.webp",
  ];

  const bgSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  const imgSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[80vh]  mt-[100px] mb-[200px] flex flex-col justify-end items-center px-4 text-center text-white"
    >
      {/* Background Carousel */}
      <div className="absolute z-0 h-full w-full overflow-hidden">
        <Slider
          {...bgSettings}
          className="h-full [&>div]:h-full [&>div>div]:h-full"
        >
          {backgroundImages.map((src, i) => (
            <div key={i} className="h-full">
              <img
                src={src}
                className="h-[80vh] w-screen object-cover"
                alt={`Background ${i + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Overlay */}
      <div className="absolute z-10 h-full w-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="z-20 flex flex-col justify-center -mb-20 items-center gap-4  max-w-4xl text-center">
        <div className="h-20"></div>
        <h2
          ref={subHeadingRef}
          className="text-md md:text-lg font-semibold text-white"
        >
          Welcome to
        </h2>
        <h1
          ref={headingRef}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg font-GeorgiaRef"
        >
          Niharika Bhawan-SMVD Shrine Board, Katra
        </h1>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.open(`tel:${phoneNo}`, "_blank"); // WhatsApp
            window.location.href = "/call"; //Whatapp
          }}
          className=""
        >
          <button className="border-white flex justify-center items-center gap-1 border-[2px] w-[150px] py-2 rounded-md bg-green">
            <FaPhoneAlt /> Call Now
          </button>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/${phoneNo}`, "_blank"); // WhatsApp
            window.location.href = "/whatsapp"; //Whatapp
          }}
        >
          <button className=" w-[150px]  flex justify-center items-center gap-1 py-2 rounded-md bg-[#038913]">
            <FaWhatsapp /> Whatsapp
          </button>
        </a>
      </div>

      {/* Booking Box */}
      <div
        ref={buttonsRef}
        className="z-30 bg-white translate-y-2/3 shadow-lg p-4 md:p-6 rounded-xl flex flex-col items-center gap-4 max-w-5xl w-full mb-10"
      >
        {/* Images Carousel */}
        <div className="w-full">
          <Slider {...imgSettings}>
            {roomImages.map((img, i) => (
              <div key={i} className="px-2">
                <img
                  src={img}
                  alt={`Room ${i + 1}`}
                  className="rounded-md w-full h-40 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex md:flex-row flex-col items-center gap-4 w-full">
          {/* Text */}
          <div className="text-center w-full md:w-1/2 ">
            <h3 className="text-lg font-semibold text-black">
              Book Your Stay At Niharika Bhawan-SMVD Shrine Board, Katra
            </h3>
            <p className="text-sm text-gray-700">Book For Reservation</p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* CTA */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(`tel:${phoneNo}`, "_blank"); // WhatsApp
                window.location.href = "/call"; //Whatapp
              }}
              className="bg-[#5d2c0d] hover:bg-[#44210a] text-white font-medium px-6 py-2 rounded-lg transition-all w-full max-w-xs text-center"
            >
              📞 Booking Here <br />
              <span className="text-xs">Call Us For Advance Room Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp and Call Floating Buttons
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/9211707892"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg"
        >
          <IoLogoWhatsapp size={22} color="#fff" />
        </a>
        <a
          href="tel:9211707892"
          className="bg-blue-500 p-3 rounded-full shadow-lg"
        >
          <BsTelephoneFill size={18} color="#fff" />
        </a>
      </div> */}
    </section>
  );
};

export default HeroAshramSection;
