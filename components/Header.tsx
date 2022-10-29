import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { Social } from "../typings";

const { motion } = require("framer-motion");

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 z-20 flex justify-between px-5 py-2 mx-auto max-w-7xl">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-start"
      >
        {socials.map((icon) => {
          const titleToLowerCase = icon.title.toLocaleLowerCase();
          return (
            <SocialIcon
              key={icon._id}
              url={icon.url}
              network={titleToLowerCase}
              fgColor="gray"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            network={socials[0].title}
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
            Get In Touch!
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
