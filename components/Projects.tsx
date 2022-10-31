import Link from "next/link";
import { Card } from "react-daisyui";
import { urlFor } from "../sanity";
import { Project } from "../typings";

const { motion } = require("framer-motion");

type Props = {
  personalProjects: Project[];
};

export default function Projects({ personalProjects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="scrollbar p-16 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {personalProjects.map((project, i) => (
          // TODO: find a way to have the middle child start in the center
          <div
            key={i}
            className="card glass w-[500px] h-[750px] snap-center flex-shrink-0 mx-12 opacity-70 hover:opacity-100 hover:scale-105 duration-200"
          >
            <figure>
              <motion.img
                initial={{ y: -200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 2.5 }}
                src={urlFor(project?.image).url()}
                alt="car!"
                className="object-cover w-full"
              />
            </figure>
            <div className="card-body">
              <h4 className="card-title">
                Project example {i + 1}{" "}
                <div className="badge badge-secondary">NEW</div>
              </h4>
              <h1>{project?.title}</h1>

              <div className="flex pb-5 mx-auto">
                {project?.technologies.map((tech) => (
                  <div
                    key={tech?._id}
                    className="pr-1 avatar tooltip"
                    data-tip={tech?.title}
                  >
                    {/* //TODO make logo center of parent */}
                    <div className="w-10 mask mask-hexagon">
                      <img src={urlFor(tech?.image).url()} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-actions">
                <Link href={project?.linkToBuild}>
                  <a target="_blank">
                    <button className="btn btn-primary">View site</button>
                  </a>
                </Link>
                <Link href={project?.linkToCode}>
                  <a target="_blank">
                    <button className="btn btn-primary">View code</button>
                  </a>
                </Link>
              </div>

              <div className="collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <div className="collapse-title">Description...</div>
                <div className="collapse-content">
                  <p className="overflow-y-scroll h-36 scrollbar scrollbar-thin scrollbar-thumb-yellow-500">
                    {project?.summary}
                  </p>
                </div>
              </div>
            </div>
            <p className="absolute bottom-3 left-3">{i + 1}</p>
          </div>
        ))}
      </div>

      {/* <div className='w-full absolute top-[30%] bg-[#f7ab0a]/40 left-0 h-[300px] -skew-y-6' /> */}
    </motion.div>
  );
}
