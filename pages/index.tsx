import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import NavBar from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProject } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

// State the type of our Props coming into getStaticProps
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    // TODO have a play around with scrollbar-none
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
      <Head>
        <title>Jakes Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* //TODO make animations move in & bounce (x: -100, x: 10, x:0) */}
      <NavBar socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-center">
        <Skills technologies={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer
          className="sticky w-full cursor-pointer bottom-7 bottom-5 tooltip"
          data-tip="Back to Top"
        >
          {/* <div className="flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/59619665?v=4"
              alt="me"
              className="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
            />
          </div> */}
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://avatars.githubusercontent.com/u/59619665?v=4" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
