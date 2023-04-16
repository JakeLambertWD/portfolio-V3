const { motion } = require("framer-motion");
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center lg:text-left lg:flex-row max-w-7xl justify-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-10 lg:mb-0  flex-shrink-0 rounded-full w-40 h-40 md:w-52 md:h-52 lg:w-96 lg:h-96 object-cover md:rounded-lg"
      />

      <div className="px-0 md:px-20 lg:ml-12">
        <h4 className="text-4xl font-semibold uppercase mb-10 tracking-widest">Get to know me</h4>
        <p className="text-lg tracking-[3px]">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
