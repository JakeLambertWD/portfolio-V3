import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Head>
				<title>Jakes Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<NavBar />

			<section id='hero' className='snap-center'>
				<Hero />
			</section>

			{/* //TODO About */}

			{/* //TODO Experience */}

			{/* //TODO Skills */}

			{/* //TODO Experience */}

			{/* //TODO Projects */}

			{/* //TODO Contact Me */}
		</div>
	);
};

export default Home;
