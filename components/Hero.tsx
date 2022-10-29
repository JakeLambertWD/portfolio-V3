import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";

import JakePic from "../public/jake.jpg";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "installing...",
      "Done!",
      // `Hi, The Name is ${pageInfo?.name}`,
      // "Coffee-fuels-the-best-code.tsx",
      // "<ForeverEvolvingIndustry />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative flex flex-col items-center justify-center h-screen space-y-6 overflow-hidden text-center">
      <div className="absolute mockup-code top-16 left-2">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>

      {/* <BackgroundCircles /> */}
      {/* <Image
        className="object-cover mx-auto rounded-full"
        src={urlFor(pageInfo?.heroImage).url()}
        alt={pageInfo?.name}
        width={200}
        height={200}
      /> */}
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[16px]">
          {pageInfo?.role}
        </h2>

        {/* Make the TypeWriter stop on the last piece of text */}
        <h1 className="px-24 text-3xl font-semibold lg:text-4xl">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
