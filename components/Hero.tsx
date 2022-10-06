import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

import JakePic from '../public/jake.jpg';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi, The Name is Jake Lambert',
			'Coffee-fuels-the-best-code.tsx',
			'<CodeNerd4Life />'
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
			<div>
				<h1>
					<span>{text}</span>
					<Cursor cursorColor='#f7ab0a' />
				</h1>
			</div>
		</div>
	);
}
