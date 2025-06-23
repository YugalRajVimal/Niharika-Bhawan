import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {

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
    <section id="gallery" className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-orange-600 font-bold text-center text-xl uppercase mb-2 tracking-wide">
        Gallery
        </h3>
        <h2 className="text-3xl font-bold text-center text-brown-800 mb-10 font-GeorgiaRef">
        Explore the Best Kept Secrets of Our Hotel
        </h2>
      </div>
      <div className="w-full">
          <Slider {...imgSettings}>
            {roomImages.map((img, i) => (
              <div key={i} className="px-2">
                <img
                  src={img}
                  alt={`Room ${i + 1}`}
                  className="rounded-md w-full h-[200px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
    </section>
  );
};

export default Gallery;
