import React, { useContext } from "react";
import { MyContext } from "../store/MyContext";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const FloatingIcons = () => {
  const { phoneNo } = useContext(MyContext);

  return (
    <div className="fixed flex  items-center  justify-between p-4 w-full bottom-[10px] sm:bottom-0 left-0 z-50">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.open(`tel:${phoneNo}`, "_blank"); // WhatsApp
          window.location.href = "/call"; //Whatapp
        }}
        className="flex justify-center items-center gap-2"
      >
        <FaPhoneAlt className="text-5xl text-white bg-black p-2   rounded-full" />

        <div className="relative w-fit h-fit px-4 py-1 rounded-xl bg-white shadow-xl">
          Call Us
          <div className="h-full aspect-[1/1] scale-[0.4] bg-white absolute left-[2px] top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
        </div>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.open(`https://wa.me/${phoneNo}`, "_blank"); // WhatsApp
          window.location.href = "/whatsapp"; //Whatapp
        }}
        className="flex justify-center items-center gap-2"
      >
        <div className="relative w-fit h-fit px-4 py-1 rounded-xl bg-white shadow-xl">
          Contact Us
          <div className="h-full aspect-[1/1] scale-[0.4] bg-white absolute right-[2px] top-1/2 translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
        </div>
        <IoLogoWhatsapp className="text-5xl text-[#08c241] " />
      </a>
    </div>
  );
};

export default FloatingIcons;
