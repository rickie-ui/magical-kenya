import { BenefitType, SelectedPage } from "@/shared/enum";
import { motion } from "framer-motion";
import {
  TruckIcon,
  UserGroupIcon,
  VideoCameraIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import HText from "@/components/header/HText";
import Box from "@/components/box/Box";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const boxes: Array<BenefitType> = [
  {
    icon: <TruckIcon className="h-6 w-6" />,
    title: "Safari Tours:",
    description:
      "Embark on a thrilling adventure through the heart of Kenya's wildlife reserves. Witness the majestic beauty of African animals in their natural habitat.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Cultural Tours:",
    description:
      "Immerse yourself in the rich traditions and vibrant cultures of Kenya. Experience local customs, visit historical sites, and connect with the people.",
  },
  {
    icon: <VideoCameraIcon className="h-6 w-6" />,
    title: "Adventure Tours:",
    description:
      "For thrill-seekers, our adventure tours offer exciting activities like hiking, hot air balloon rides, and more. Discover Kenya's adventurous side!",
  },
  {
    icon: <SunIcon className="h-6 w-6" />,
    title: "Beach Vacations:",
    description:
      "Relax on the pristine beaches of the Kenyan coast. Enjoy sunsets, water sports, and the tranquil beauty of the Indian Ocean on our beach vacation packages.",
  },
];

const Tours = ({ setSelectedPage }: Props) => {
  return (
    <section id="tours" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Tours)}>
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
          <HText>Plan the Trip of a Lifetime with Ease</HText>
          <p className="my-5 text-sm">
            Whether you're looking for a romantic getaway, a family-friendly
            adventure, or a solo journey to explore the world.
          </p>
        </motion.div>

        <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-4">
          {boxes.map((box: BenefitType) => (
            <Box
              key={box.title}
              icon={box.icon}
              title={box.title}
              description={box.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Tours;
