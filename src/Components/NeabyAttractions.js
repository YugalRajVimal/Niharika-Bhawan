import React from "react";

const NearbyAttractions = () => {
  const attractions = [
    {
      title: "Mata Vaishno Devi Bhawan",
      desc:
        "One of the holiest Hindu temples dedicated to Goddess Vaishno Devi, located about 13 km from Katra.",
    },
    {
      title: "Banganga",
      desc: "It’s a serene spot, just a short walk from Katra town.",
    },
    {
      title: "Ardhkuwari Cave",
      desc: "Located halfway on the trek to the shrine.",
    },
    {
      title: "Baba Dhansar",
      desc: "Approximately 15 km from Katra.",
    },
    {
      title: "Patnitop",
      desc: "A scenic hill station just a couple of hours’ drive from Katra.",
    },
    {
      title: "Nau Devi Cave Temple",
      desc:
        "A hidden gem near Katra where devotees can experience spiritual peace.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 text-white"
      style={{ backgroundImage: "url('/homeImg1.webp')" }} // Replace with actual image path
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-GeorgiaRef">
          Explore Katra (Jammu And Kashmir) And Nearby Attractions
        </h2>
        <p className="mb-6 text-lg">
          Our convenient location allows guests to visit popular tourist spots
          such as:
        </p>

        <ul className="space-y-3 mb-6 text-base md:text-lg">
          {attractions.map((spot, idx) => (
            <li key={idx}>
              <span className="text-white">
                • <strong>{spot.title} :</strong> {spot.desc}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-sm md:text-base text-green-300 font-medium">
          Whether you’re here for a pilgrimage, leisure, or business, Niharika
          Bhawan provides a welcoming retreat with all the necessary amenities
          for a memorable stay.
        </p>
      </div>
    </section>
  );
};

export default NearbyAttractions;
