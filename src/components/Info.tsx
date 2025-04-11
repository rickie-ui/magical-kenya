import { Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-primary-500 rounded-2xl mt-20 p-4">
    <div className="space-y-6">
      <h3 className="text-xl font-semibold font-montserrat">
        Let us help you plan your next adventure
      </h3>
      <p className="text-3xl sm:text-4xl font-bold">
        Perfect Vacation come true
      </p>
    </div>

    {/* Swiper slides inside highlight section */}
    <Swiper
      className="w-full"
      modules={[Autoplay, Pagination, A11y]}
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="relative bg-white p-6 rounded-xl">
        <div className="absolute h-72 w-full -rotate-[20deg] bg-primary-100 rounded-md top-6 left-4 -z-10"></div>
        <h3 className="text-2xl font-bold font-montserrat mb-4">
          Why Kenya? The Jewel of African Tourism 🇰🇪
        </h3>
        <p>
          Kenya is one of the most breathtaking destinations in the world...
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>The Great Migration (Masai Mara)</li>
          <li>Nairobi National Park in a capital city</li>
          <li>Visa-free entry for many travelers</li>
          <li>White sandy beaches & coral reefs e.g Watamu and Diani beaches</li>
          <li>World-class athletes & training camps(Iten)</li>
        </ul>
      </SwiperSlide>

      <SwiperSlide className="relative bg-white p-6 rounded-xl">
        <div className="absolute h-72 w-full -rotate-[20deg] bg-primary-100 rounded-md top-6 left-4 -z-10"></div>
        <h3 className="text-2xl font-bold font-montserrat mb-4">
          Our Story: From Africa to the World
        </h3>
        <p className="mb-2">
          Gjoe Global Tours started with a passion to connect people with unforgettable
          destinations.
        </p>
        <p>
          Today we craft journeys to Asia, Europe, the Americas and Africa—designed around
          culture, adventure, and personal discovery.
        </p>
      </SwiperSlide>
    </Swiper>
  </div>


  )
}

export default Info