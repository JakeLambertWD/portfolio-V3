import clsx from "clsx";
import { urlFor } from "../sanity";
import { SkillType } from "../typings";
const { motion } = require("framer-motion");

type Props = {
  directionLeft?: boolean;
  tech?: SkillType;
};

export default function Skill({ directionLeft, tech }: Props) {
  return (
    <div
      className="relative flex cursor-pointer group tooltip"
      data-tip="Material UI"
    >
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(tech?.image).url()}
        className={clsx(
          "rounded-full border border-gray-500 object-cover w-24 h-24 filter transition duration-300 ease-in",
          "md:h-28 md:w-28",
          "xl:w-32 xl:h-32",
          "group-hover:grayscale group-hover:blur-sm"
        )}
      />

      <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {tech.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
