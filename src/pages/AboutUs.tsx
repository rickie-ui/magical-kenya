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
          <div className="mt-14 mb-24 p-4 md:w-11/12 ">
            <HText>About Us - <span className="capitalize">Your Global Travel Expert</span></HText>
            <p className=" text-xs opacity-60">
              Your Gateway to Unforgettable Travel Experiences Across the Globe
            </p>

            <section className="my-8 grid grid-cols-1 gap-10  space-x-20 md:grid-cols-2">
              <div>
              At Gjoe Global Tours, we believe that travel is more than just visiting new places it's about creating lasting memories, discovering diverse cultures, and experiencing the world in a way that transforms you. Established in Kenya, we have grown into a leading global travel company, offering customized travel experiences across Africa, Europe, Asia, North and South America, and beyond.
                <p className="my-4">
                Whether you dream of: <br/>
                Safari adventures in Africa: Witness the Big Five in their natural habitat.
                Historical explorations in Europe: Walk through ancient cities like Rome, Athens, and Paris.
                Vibrant city tours in North America: Explore the energy of New York, Toronto, and Los Angeles.
                Exotic retreats in Asia: Relax in Bali, the Maldives, or the temples of Thailand.
                Tropical escapes in the Caribbean: Discover the pristine beaches of Jamaica, Barbados, and the Bahamas.

                <p className=" italic font-medium mt-4">
                    At Gjoe Global Tours, we don’t just take you places—we bring the world to you!
                </p>
                </p>
              </div>

             <div className="hidden md:block relative">
             <img
                src={image2}
                alt="image"
                className="rounded-lg object-cover object-center absolute z-40 hover:opacity-80 duration-200"
              />
             <img
                src={image2}
                alt="image"
                className="rounded-lg w-44 absolute -left-24 z-50 bottom-16 h-32 object-cover object-center hover:opacity-80 duration-200"
              />
             <img
                src={image1}
                alt="image"
                className="rounded-lg w-36 absolute -right-14 -top-10  h-24 object-fill object-center hover:opacity-80 duration-200"
              />
           

             </div>
            </section>

            <div className=" grid grid-cols-1 md:grid-cols-2 space-x-4 border relative border-primary-500 rounded-2xl mt-20 md:w-11/12">
               <div className="m-3 tracking-wider">
                  <h3 className="text-xl mb-4 font-montserrat">
                      Let us help you plan your next adventure
                   </h3>
                   <p className="text-5xl font-bold mt-10">Perfect Vacation come true</p>
               </div>
    <Swiper className="flex w-[350px] items-center justify-center md:-ml-20 md:-mt-24  py-10  md:w-[800px]"
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
                slidesPerView: 1,
              },
            }}
            pagination={{ clickable: true }}
          >

              <SwiperSlide className="h-auto min-w-[350px] relative rounded-xl   bg-white p-4 md:p-6 md:h-auto md:basis-[800px]">

                <div className="absolute h-96 -rotate-[20deg] rounded-md  w-8/12 -z-10 bg-primary-100 top-[20%] left-[20%]"></div>
              
                <h3 className="font-semibold text-3xl mx-4 font-montserrat mb-8">
                    Why Kenya? The Jewel of African Tourism 🇰🇪
                </h3>
                
                <p className="mx-4 tracking-wider">
                    Kenya is one of the most breathtaking destinations in the world. As our home, it holds a special place in our hearts, and we take pride in sharing its wonders with travelers from across the globe.
                </p>

                <ul className=" list-disc ml-20 mt-8 tracking-wider">

                  <li className="my-2">
                    The Great Migration (Masai Mara): Witness the majestic migration of over two million wildebeests and zebras, one of the world’s most phenomenal wildlife events
                  </li>
                  <li className="my-2">
                     Nairobi National Park – The Only Capital City with a Wildlife Park: Experience lions, rhinos, giraffes, and other wildlife roaming freely against the backdrop of a modern city skyline.
                  </li>
                  <li className="my-2">
                    Visa-Free Entry for Most Travelers: Kenya’s new visa-free policy eliminates travel delays and simplifies entry, making it even easier to explore our country.
                  </li>
                  <li className="my-2">
                    World-Class Athletes & High-Altitude Training: Iten, in Kenya’s Rift Valley, is the training ground for some of the world’s fastest marathon runners.
                  </li>
                  <li className="my-2">
                      White Sandy Beaches & Crystal-Clear Waters: From Diani Beach to Watamu, Kenya’s coastline is a tropical paradise for relaxation and adventure.
                  </li>
                  <li className="my-2">
                      White Sandy Beaches & Crystal-Clear Waters: From Diani Beach to Watamu, Kenya’s coastline is a tropical paradise for relaxation and adventure.
                  </li>
                  <li className="my-2">
                      White Sandy Beaches & Crystal-Clear Waters: From Diani Beach to Watamu, Kenya’s coastline is a tropical paradise for relaxation and adventure.
                  </li>
                </ul>
              </SwiperSlide>
              <SwiperSlide className="h-auto min-w-[350px] relative rounded-xl  bg-white px-6 py-4 md:h-auto md:basis-[800px]">
              
              <h3 className="font-semibold text-3xl mx-4 font-montserrat mb-8">
                    Our Story: From Africa to the World
                </h3>

                <div className="absolute h-96 -rotate-[20deg] rounded-md  w-8/12 -z-10 bg-primary-100 top-[20%] left-[20%]"></div>

                <p className="m-4 tracking-wider">
                    Gjoe Global Tours was founded with a vision: to make the world more accessible to travelers through seamless, unforgettable experiences. We started our journey by offering specialized tours in Kenya, showcasing the rich heritage, wildlife, and natural wonders of East Africa. Today, we connect travelers with destinations worldwide, offering a diverse range of packages tailored to all budgets and interests.
                 </p>
                 <p className="mx-4 mb-4 tracking-wider">
                    From the thrilling safaris of the Serengeti to the ancient pyramids of Egypt, the breathtaking fjords of Norway to the bustling streets of Bangkok, and the luxurious beaches of the Seychelles to the cultural richness of Brazil, we ensure that every trip is uniquely crafted for you.
                </p>
              </SwiperSlide>
    </Swiper>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mx-auto w-10/12">
            <HText>Testimonials</HText>
            <p className="py-2">What Our Customers Are Saying?</p>
          </div>

          <Swiper
            className="flex w-[350px] items-center justify-center  py-10   md:w-[1040px]"
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
                    Aisha
                    <p className="text-xs">UAE</p>
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
                "Flawless booking and great service! Thank you, Gjoe Global Tours!"
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
                    Alice
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
              "From a magical Masai Mara safari to the beautiful beaches of Zanzibar, every moment with Gjoe Global Tours was perfect!"
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
                    Wang
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
              "The cultural tour of Africa was an eye-opener! The food, music, and traditions were simply amazing!"
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
                    Omar
                    <p className="text-xs">Kenya</p>
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
              "Our family holiday in Cape Town and Victoria Falls was seamless. Flights, hotels, and activities were arranged flawlessly!"
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
                    John
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
                  "From the Masai Mara to the beaches of Zanzibar, everything was amazing!"
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
                    Chen
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
                  "Highly recommended for first-time travelers to Africa!"
              </p>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
