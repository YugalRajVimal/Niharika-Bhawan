import React, { useContext } from "react";
import { MyContext } from "../store/MyContext";
import { Phone } from "lucide-react";

const BookingCTA = () => {
  const { phoneNo } = useContext(MyContext);

  return (
    <section className="w-full bg-black text-white py-10 px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side - Heading */}
      <div className="text-center md:text-left mb-6 md:mb-0 text-center  md:w-[60%]">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug text-center font-GeorgiaRef">
          Discover Serenity at Niharika Bhawan, Katra
        </h2>
        <p className="text-xl font-semibold mt-2 text-center font-GeorgiaRef">
          Reserve Your Room Today
        </p>
      </div>

      {/* Right Side - CTA */}
      <div className="bg-[#5b2715] rounded-md px-6 py-4 text-center md:w-[40%]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.open(`https://wa.me/${phoneNo}`, "_blank"); // WhatsApp
            window.location.href = "/whatsapp"; //Whatapp
          }}
          className="inline-flex items-center gap-2 border-2 border-orange-500 text-white font-bold px-5 py-2 rounded-full mb-2 hover:bg-orange-500 transition duration-300"
        >
          <Phone className="w-4 h-4" />
          Booking Here
        </a>
        <p className="text-sm">Call Us For Advance Room Booking</p>
      </div>
    </section>
  );
};

export default BookingCTA;
