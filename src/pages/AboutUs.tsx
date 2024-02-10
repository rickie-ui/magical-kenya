import { SelectedPage } from "@/shared/enum";
import { motion } from "framer-motion";
import HText from "@/components/header/HText";
import image1 from "@/assets/Anime1.jpg";
import image2 from "@/assets/Anime2.jpg";
import image3 from "@/assets/Anime3.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="w-full bg-primary-100 py-10">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mt-14 p-4 md:w-11/12 ">
            <HText>About Us</HText>
            <p className=" text-xs opacity-60">
              Explore the world with us, one adventure at a time.
            </p>

            <section className="my-8 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                Welcome to Kenya The Magical Pride of Africa Tours, your gateway
                to the breathtaking beauty and rich culture of Kenya. Founded
                with a passion for showcasing the magical landscapes, diverse
                wildlife, and vibrant traditions of Kenya, our company is
                dedicated to providing unforgettable travel experiences. Whether
                you're seeking thrilling safaris, immersive cultural journeys,
                adventurous escapades, or tranquil beach getaways, our carefully
                crafted tours capture the essence of Kenya's pride and magic.
                Embark on a journey with us and discover the wonders that make
                Kenya a truly exceptional destination. We invite you to explore,
                experience, and create lasting memories with Kenya The Magical
                Pride of Africa Tours.
                <p className="my-4">
                  Kenya is iconic as a home of great athletic experience .it's
                  the only country with a national park in the capital city.
                  Include as well the magical wild beasts migration at massai
                  Mara.Also include that the kenyan government has made the
                  country visa free to ease the tourists on time wastage during
                  visa applications
                </p>
              </div>

              <img
                src={image2}
                alt=""
                className="hidden rounded-lg object-cover object-center md:block"
              />
            </section>
          </div>

          <div className=" md:w-3/5">
            <HText>Testimonials</HText>
            <p className="py-2">What Our Customers Are Saying?</p>
          </div>

          <Swiper
            className="-ml-6 flex w-[350px] items-center justify-center  py-10 md:-ml-0  md:w-[1040px]"
            // install Swiper modules
            modules={[Autoplay, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="h-auto min-w-[350px] rounded-2xl  bg-white px-6 py-4 md:h-72 md:basis-[500px]">
              <div className="flex  items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={image1}
                    alt=""
                    className="h-24 w-24 rounded-full border-4 border-red-500"
                  />
                  <h2 className="text-xl font-semibold">
                    John Smith
                    <p className="text-xs">USA</p>
                  </h2>
                </div>
                <div className="hidden md:flex md:flex-nowrap">
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                </div>
              </div>
              <p className="my-6">
                "A magical journey indeed! The cultural tour allowed us to
                immerse ourselves in the local traditions, and the team's
                commitment to responsible tourism is commendable."
              </p>
            </SwiperSlide>
            <SwiperSlide className=" h-auto min-w-[350px] rounded-2xl  bg-white px-6 py-4 md:h-72 md:basis-[500px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={image2}
                    alt=""
                    className="h-24 w-24 rounded-full border-4 border-red-500"
                  />
                  <h2 className="text-xl font-semibold">
                    Alice Johnson
                    <p className="text-xs">Canada</p>
                  </h2>
                </div>
                <div className="hidden md:flex md:flex-nowrap">
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                </div>
              </div>
              <p className="my-6">
                "Kenya The Magical Pride of Africa Tours exceeded our
                expectations. From the stunning landscapes to the warm
                hospitality, every moment was a treasure. Highly recommended!" "
              </p>
            </SwiperSlide>
            <SwiperSlide className="h-auto min-w-[350px]  rounded-2xl bg-white px-6 py-4 md:h-72 md:basis-[500px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={image3}
                    alt=""
                    className="h-24 w-24 rounded-full border-4 border-red-500"
                  />
                  <h2 className="text-xl font-semibold">
                    Martin Wang
                    <p className="text-xs">China</p>
                  </h2>
                </div>
                <div className="hidden md:flex md:flex-nowrap">
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                  <StarIcon className="h-6 w-6" />
                </div>
              </div>
              <p className="my-6">
                "A magical journey indeed! The cultural tour allowed us to
                immerse ourselves in the local traditions, and the team's
                commitment to responsible tourism is commendable."
              </p>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
