import clsx from "clsx";
const { motion } = require("framer-motion");

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div
      className="group relative flex cursor-pointer tooltip"
      data-tip="Material UI"
    >
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
        className={clsx(
          "rounded-full border border-gray-500 object-cover w-24 h-24 filter transition duration-300 ease-in",
          "md:h-28 md:w-28",
          "xl:w-32 xl:h-32",
          "group-hover:grayscale group-hover:blur-sm"
        )}
      />

      <div className="absolute h-24 w-24 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">90%</p>
        </div>
      </div>
    </div>
  );
}
