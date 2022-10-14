import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCircles } from './BackgroundCircles';

import JakePic from '../public/jake.jpg';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi, The Name is Jake Lambert',
			'Coffee-fuels-the-best-code.tsx',
			'<ForeverEvolvingIndustry />'
		],
		loop: true,
		delaySpeed: 2000
	});

	return (
		<div className='h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<Image
				className='rounded-full mx-auto object-cover'
				src={JakePic}
				width={200}
				height={200}
			/>
			<div className='z-20'>
				<h2 className='uppercase text-sm text-gray-500 pb-2 tracking-[16px]'>
					Front End Developer
				</h2>
				<h1 className='text-3xl lg:text-4xl font-semibold px-24'>
					<span>{text}</span>
					<Cursor cursorColor='#f7ab0a' />
				</h1>

				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
