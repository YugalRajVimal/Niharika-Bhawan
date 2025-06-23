import React, { useEffect, useRef, useContext } from "react";
import { MyContext } from "../store/MyContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    image: "/room1.jpeg",
    title: "AC ROOM with 2 BED",
    price: "Rs.1650",
  },
  {
    image: "/room2.jpeg",
    title: "NON AC Room with 2 BED",
    price: "Rs.1250",
  },
  {
    image: "/room3.jpeg",
    title: "AC ROOM with 3 BED",
    price: "Rs.2050",
  },
  {
    image: "/room4.jpeg",
    title: "NON AC ROOM with 3 BED",
    price: "Rs.1750",
  },
  {
    image: "/room5.jpeg",
    title: "AC ROOM with 4 BED",
    price: "Rs.2550",
  },
  {
    image: "/room6.jpeg",
    title: "NON AC ROOM with 4 BED",
    price: "Rs.2250",
  },
];

const Rooms = () => {
  const { phoneNo } = useContext(MyContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".room-card img", {
        scale: 0.9,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".room-card a", {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".room-card h3", {
        scale: 0.9,
        opacity: 0,
        duration: 2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rooms" className="w-full py-16 px-4 bg-white">
      <h2 className="text-center text-orange-600 text-xl font-bold tracking-wide mb-2">
        ROOMS
      </h2>
      <h3 className="text-center text-3xl font-bold text-[#4b2e14] mb-2  font-GeorgiaRef">
        Reserve Your Room at Niharika Bhawan
      </h3>
      <p className="text-center text-xl font-semibold text-[#4b2e14] mb-10  font-GeorgiaRef">
        Best Accommodation in Katra , Jammu and Kashmir
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="room-card bg-black text-white w-[360px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 text-center  ">
              <h3 className="text-lg font-semibold mb-2  font-GeorgiaRef">
                {room.title}
              </h3>
              <p className="text-sm font-semibold mb-2">
                BREAKFAST LUNCH DINNER GST INCLUDED
              </p>
              <p className="text-lg font-semibold mb-2"> {room.price} / day</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`https://wa.me/${phoneNo}`, "_blank"); // WhatsApp
                  window.location.href = "/whatsapp"; //Whatapp
                }}
                className="text-white  text-base font-GeorgiaRef"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
