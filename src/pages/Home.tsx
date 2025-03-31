import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/enum";
import ActionButton from "@/components/button/ActionButton";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <Swiper
      id="home"
      // install Swiper modules
      modules={[Autoplay, Pagination, A11y]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide
        className="relative min-h-screen gap-16
       bg-banner-one bg-cover  bg-center py-10 text-white/80 md:pb-0"
      >
        <div className=" absolute inset-0 bg-black/40"></div>
        {/* image and main header  */}
        <motion.div
          className="mx-auto w-5/6 items-center justify-center md:flex  md:h-screen"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* main header */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* heading */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3 className=" font-montserrat text-5xl md:text-7xl">
              Explore the World with Gjoe Global Tours
              </h3>

              <p className="mt-8 text-sm font-semibold">
                  At Gjoe Global Tours, we believe that travel is more than just visiting new places; it’s about discovering new cultures, immersing yourself in breathtaking landscapes, and creating lifelong memories.
              </p>

              <p className="mt-2 text-sm font-semibold">
              Whether you dream of experiencing the vast savannas of Kenya, the vibrant cities of Canada, the historic wonders of Europe, or the serene beaches of the Indian Ocean, we make your travel dreams come true.
              </p>
            </motion.div>
            {/* actions */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Start Here
              </ActionButton>
              <AnchorLink
                className="text-sm  font-bold text-primary-500 hover:underline"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
          {/* image */}
          <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end"></div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide
        className="relative min-h-screen gap-16
       bg-banner-two bg-cover  bg-center py-10 text-white/80 md:pb-0"
      >
        <div className=" absolute inset-0 bg-black/40"></div>
        {/* image and main header  */}
        <motion.div
          className="mx-auto h-5/6 w-5/6 items-center justify-center md:flex md:h-screen"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* main header */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* heading */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3 className=" font-montserrat text-4xl md:text-7xl">
                Unforgettable Travel Experiences
              </h3>

              <p className="mt-8 text-sm font-semibold">
              At Gjoe Global Tours, we are committed to providing you with journeys that are not just trips but truly transformative experiences. Your feedback shapes our services, helping us maintain our reputation for excellence and unmatched customer satisfaction.
              </p>
            </motion.div>
            {/* actions */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Start Here
              </ActionButton>
              <AnchorLink
                className="text-sm  font-bold text-primary-500 hover:underline"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
          {/* image */}
          <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end"></div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide
        className="relative min-h-screen gap-16
       bg-banner-three bg-cover  bg-center py-10 text-white/80 md:pb-0"
      >
        <div className=" absolute inset-0 bg-black/40"></div>
        {/* image and main header  */}
        <motion.div
          className="mx-auto h-5/6 w-5/6 items-center justify-center md:flex md:h-screen"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* main header */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* heading */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3 className=" font-montserrat text-4xl md:text-7xl">
                Affordable Travel Packages
              </h3>

              <p className="mt-8 text-sm font-semibold">
                We believe that everyone deserves to experience their dream
                vacation without breaking the bank. That's why we offer a price
                section on our website that features a range of affordable
                travel
              </p>
            </motion.div>
            {/* actions */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Start Here
              </ActionButton>
              <AnchorLink
                className="text-sm  font-bold text-primary-500 hover:underline"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
          {/* image */}
          <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end"></div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
