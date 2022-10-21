const { motion } = require('framer-motion');
import Card from './Card';

// TODO remove the opacity on hover, try to make it when card in center of screen
type Props = {};
export default function WorkExperience({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2.5 }}
			className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Experience
			</h3>

			<div className='scrollbar-thin w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
				<Card />
				<Card />
				<Card />
			</div>
		</motion.div>
	);
}
