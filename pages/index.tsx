import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import NavBar from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

const Home: NextPage = () => {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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

			{/* //TODO Experience */}

			{/* //TODO Projects */}

			{/* //TODO Contact Me */}
		</div>
	);
};

export default Home;
