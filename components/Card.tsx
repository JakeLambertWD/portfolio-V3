import JakePic from "../public/jake.jpg";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
const { motion } = require("framer-motion");

type Props = { experience: Experience };

export default function Card({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="Profile pic"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front End Dev</h4>
        <p className="mt-1 text-2xl font-bold">Guider</p>
        <div className="flex my-2 space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
            alt="Tailwind"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <p className="text-gray-300 uppercase">Started Work... - Ended...</p>

        <ul className="ml-5 space-y-4 text-lg list-disc">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
