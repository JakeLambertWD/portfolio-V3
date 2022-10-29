const { motion } = require("framer-motion");
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    // TODO fix image overlap on the title
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      {/* set animation when div is in view and to occur only once */}
      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 md:w-95 md:h-95 xl:h-[400px] xl:w-[400px]  md:rounded-lg"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is my{" "}
          <span className="underline decoration-[#f7ab0a]">background</span>{" "}
          story
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
