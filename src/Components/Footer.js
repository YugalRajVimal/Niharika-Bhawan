import React, { useContext } from "react";
import { MyContext } from "../store/MyContext";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { phoneNo } = useContext(MyContext);
  return (
    <div
      className=" flex flex-col w-screen justify-around items-center"
      id="footer"
    >
      {/* Content */}
      <div className="max-w-6xl mx-2 md:mx-10 px-4 py-10 text-center">
        <h2 className="text-orange-600 text-center text-xl font-bold mb-2 ">
          CONTACT US
        </h2>
        <h1 className="text-center text-3xl font-semibold text-brown-800 mb-2 font-GeorgiaRef">
          Niharika Bhawan
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Managed by: Shri Mata Vaishno Devi Shrine Board (SMVDSB)
        </p>

        {/* Address and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[70px] items-start">
          {/* Left: Address Info */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-2xl font-semibold font-GeorgiaRef">Address</h2>
            <p className="text-gray-800 text-lg">
              XWVH+4XH Main Market, Prashar Gali, Katra, Jammu and Kashmir
              182320
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-lg">
              <FaPhoneAlt />
              <span className="font-semibold">Phone Number: {phoneNo}</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-lg">
              <FaWhatsapp className="text-xl" />
              <span className="font-semibold">WhatsApp Us : {phoneNo}</span>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="w-full h-[300px]">
            <iframe
              title="Niharika Bhawan Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26771.34143845405!2d74.929473!3d32.992762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e7994965b39f5%3A0x16f3e179d74d740c!2sNiharika%20Bhawan-SMVD%20Shrine%20Board%2C%20Katra!5e0!3m2!1sen!2sin!4v1748282761654!5m2!1sen!2sin"
              className="w-full h-full rounded shadow-md"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 mt-10 w-screen">
        <div className=" w-full flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            © Copyright Niharika Bhawan | All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#amenities" className="hover:underline">
              Facilities
            </a>
            <a href="#gallery" className="hover:underline">
              Gallery
            </a>
            <a href="#footer" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
