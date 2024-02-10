import { BenefitType, SelectedPage } from "@/shared/enum";
import { motion } from "framer-motion";
import Tour from "@/assets/question1.png";
import {
  TruckIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import HText from "@/components/header/HText";
import Box from "@/components/box/Box";
import ActionButton from "@/components/button/ActionButton";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const boxes: Array<BenefitType> = [
  {
    icon: <TruckIcon className="h-6 w-6" />,
    title: "Transportation Services:",
    description:
      "Whether you're looking for a chauffeur-driven car or a private van, our transportation services ensure a comfortable and convenient journey throughout your stay. Sit back and relax as our experienced drivers navigate the roads, allowing you to fully immerse yourself in the destination.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Guided Tours:",
    description:
      "Discover the hidden gems and iconic landmarks with our knowledgeable tour guides. From cultural excursions to thrilling adventures, our guided tours cater to every interest and provide a unique and enriching experience.",
  },
  {
    icon: <VideoCameraIcon className="h-6 w-6" />,
    title: "Safari Experiences:",
    description:
      "Embark on an unforgettable safari adventure with our expert guides. Explore the breathtaking landscapes, encounter majestic wildlife, and create lifelong memories in some of the most renowned national parks and reserves.",
  },
];

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Our Services.</HText>
          <p className="my-5 text-sm">
            We specialize in providing our clients with unforgettable travel
            experiences.Whether you're looking to relax on a tropical beach or
            embark on a cultural adventure, we can help you plan your dream
            vacation. From flights and accommodations to tours and activities,
            we'll handle all the details, so you can focus on making memories.
          </p>
        </motion.div>

        {/* benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {boxes.map((box: BenefitType) => (
            <Box
              key={box.title}
              icon={box.icon}
              title={box.title}
              description={box.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphic annd description */}
        <div className="mt-8 items-center justify-between gap-20 md:mt-28  md:flex">
          {/* graphic */}
          <img alt="services" src={Tour} className="mx-auto " />

          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <HText>
                    WHY CHOOSE KENYA THE{" "}
                    <span className="text-primary-500">
                      MAGICAL PRIDE OF AFRICA TOURS
                    </span>
                  </HText>
                </div>
              </div>
            </div>

            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Every time we provide the service vice to customers, we strive
                  to exceed their expectations. Our team of dedicated
                  professionals works tirelessly to ensure that every
                  interaction is seamless and enjoyable. From the moment a
                  customer reaches out to us, we make it our mission to provide
                  prompt and efficient service.
                </p>
                <p className="mb-5">
                  We understand the importance of customer satisfaction and take
                  pride in our ability to consistently deliver exceptional
                  results. Our commitment to excellence is what sets us apart
                  and keeps our customers coming back for more.
                </p>
              </motion.div>
            </motion.div>

            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact Us
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
