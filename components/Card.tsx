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
          {experience?.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology?.image).url()}
              alt="Tailwind"
              className="w-10 h-10 rounded-full"
            />
          ))}
        </div>
        <p className="text-gray-300 uppercase">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="ml-5 space-y-4 overflow-y-scroll text-lg list-disc max-h-96 pr-5  scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
