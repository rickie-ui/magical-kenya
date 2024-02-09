import { ClassType, SelectedPage } from "@/shared/enum";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/components/header/HText";
import { StarIcon } from "@heroicons/react/24/solid";
import Class from "@/components/ImageClass/Class";

import { Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Unleash your strength and sculpt your physique with our invigorating Weight Training Classes. Led by experienced instructors, these classes are crafted to empower individuals of all fitness levels with the knowledge and techniques needed to master the art of weight training",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Embark on a journey of self-discovery and holistic wellness with our rejuvenating Yoga Classes. Immerse yourself in a tranquil space where experienced instructors guide you through a variety of yoga practices, from energizing Vinyasa flows to calming meditation sessions.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Define your core and sculpt a strong foundation with our invigorating Ab Core Classes. Led by skilled instructors, these classes are tailored to target and tone your abdominal muscles, helping you achieve a more resilient and sculpted midsection.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on a fitness journey like no other with our exhilarating Adventure Classes. Designed to inject excitement into your workout routine, these classes offer a dynamic mix of challenges, from obstacle courses to team-building activities.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Achieve your health and wellness goals with our diverse range of Fitness Classes. From high-intensity workouts to mind-body practices, our classes cater to all fitness levels and preferences. Led by expert instructors, each session is crafted to boost endurance, strength, and flexibility.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Unlock your full potential with our empowering Training Classes. Led by certified trainers, these classes provide a focused and personalized approach to help you meet your fitness goals.",
    image: image6,
  },
];
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
          <div className=" md:9/12 mx-auto mt-14 ">
            <HText>About Us</HText>

            <section className="grid grid-cols-2 gap-4">
              <p className="py-5">
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
              </p>
              <div>
                Kenya is iconic as a home of great athletic experience .it's the
                only country with a national park in the capital city. Include
                as well the magical wild beasts migration at massai Mara.Also
                include that the kenyan government has made the country visa
                free to ease the tourists on time wastage during visa
                applications
              </div>
            </section>
          </div>

          <div className="mt-10 md:w-3/5">
            <HText>Testimonials</HText>
            <p className="py-5">
              The experience with Kenya The Magical Pride of Africa Tours was
              truly unforgettable. The safari was well-planned, and the guides
              were knowledgeable. I can't wait to explore more with them!.
            </p>
          </div>
        </motion.div>
        {/* <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div> */}

        <Swiper
          className="flex w-[1040px] items-center justify-center  py-10"
          // install Swiper modules
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className=" h-60 basis-9/12 self-center rounded-2xl  bg-white px-6 py-4 md:mx-0 md:h-72 md:basis-[500px]">
            <div className="flex items-center justify-between">
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
              <div className="flex flex-nowrap">
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
              </div>
            </div>
            <p className="my-6">
              "A magical journey indeed! The cultural tour allowed us to immerse
              ourselves in the local traditions, and the team's commitment to
              responsible tourism is commendable."
            </p>
          </SwiperSlide>
          <SwiperSlide className=" h-60 basis-9/12 self-center rounded-2xl  bg-white px-6 py-4 md:mx-0 md:h-72 md:basis-[500px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={image1}
                  alt=""
                  className="h-24 w-24 rounded-full border-4 border-red-500"
                />
                <h2 className="text-xl font-semibold">
                  Alice Johnson
                  <p className="text-xs">Canada</p>
                </h2>
              </div>
              <div className="flex flex-nowrap">
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

          <SwiperSlide className="h-72  basis-[500px] self-center rounded-2xl bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={image1}
                  alt=""
                  className="h-24 w-24 rounded-full border-4 border-red-500"
                />
                <h2 className="text-xl font-semibold">
                  Alice Johnson
                  <p className="text-xs">Canada</p>
                </h2>
              </div>
              <div className="flex flex-nowrap">
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
              hospitality, every moment was a treasure. Highly recommended!"
            </p>
          </SwiperSlide>
          <SwiperSlide className="h-72 basis-[500px] self-center rounded-2xl bg-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={image1}
                  alt=""
                  className="h-24 w-24 rounded-full border-4 border-red-500"
                />
                <h2 className="text-xl font-semibold">
                  Martin Wang
                  <p className="text-xs">China</p>
                </h2>
              </div>
              <div className="flex flex-nowrap">
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
                <StarIcon className="h-6 w-6" />
              </div>
            </div>
            <p className="my-6">
              "A magical journey indeed! The cultural tour allowed us to immerse
              ourselves in the local traditions, and the team's commitment to
              responsible tourism is commendable."
            </p>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default AboutUs;
