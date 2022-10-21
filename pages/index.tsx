import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import NavBar from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

const Home: NextPage = () => {
	return (
		// TODO have a play around with scrollbar-none
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin'>
			<Head>
				<title>Jakes Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* //TODO make animations move in & bounce (x: -100, x: 10, x:0) */}
			<NavBar />

			<section id='hero' className='snap-start'>
				<Hero />
			</section>

			<section id='about' className='snap-center'>
				<About />
			</section>

			<section id='experience' className='snap-center'>
				<WorkExperience />
			</section>

			<section id='skills' className='snap-center'>
				<Skills />
			</section>

			<section id='projects' className='snap-center'>
				<Projects />
			</section>

			<section id='contact' className='snap-center'>
				<ContactMe />
			</section>

			<Link href='#hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<img
							src='https://avatars.githubusercontent.com/u/59619665?v=4'
							alt='me'
							className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;
