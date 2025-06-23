import React from "react";
import {
  MdRoomService,
  MdLocalLaundryService,
  MdOutlineLiveTv,
  MdOutlineWaterDrop
} from "react-icons/md";
import { FaWifi, FaFan } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";

const Amenities = () => {
  const amenities = [
    { icon: <MdRoomService size={24} />, label: "Room Service" },
    { icon: <MdLocalLaundryService size={24} />, label: "Laundry Service" },
    { icon: <MdOutlineLiveTv size={24} />, label: "Cable Television" },
    { icon: <TbAirConditioning size={24} />, label: "Air-Conditioning" },
    { icon: <FaFan size={24} />, label: "Ceiling Fan" },
    { icon: <FaWifi size={24} />, label: "Wireless Internet (WiFi)" },
    { icon: <MdOutlineWaterDrop size={24} />, label: "Complimentary Packaged Drinking Water" },
  ];

  return (
    <section id="amenities" className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-orange-600 font-bold text-center text-xl uppercase mb-2 tracking-wide">
          Facilities
        </h3>
        <h2 className="text-3xl font-bold text-center text-brown-800 mb-10 font-GeorgiaRef">
          You'll Never Want To Leave
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Image */}
          <div className="w-full shadow-lg rounded-md overflow-hidden">
            <img
              src="/room3.jpeg" // Replace with actual image path
              alt="Room"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Text + Amenities */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-[#5C2E12] font-GeorgiaRef">
              Our Facilities at Niharika Bhawan, Katra
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Niharika Bhawan, we are committed to providing you with a
              comfortable and memorable stay. Our facilities are designed to
              cater to your every need, ensuring that you have everything you
              require to relax and enjoy your time in Katra. From modern
              amenities to thoughtful services, we strive to make your stay as
              convenient and enjoyable as possible.
            </p>

            <ul className="space-y-4">
              {amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-800">
                  <span className="text-orange-600">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
