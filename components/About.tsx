const { motion } = require('framer-motion');
import Image from 'next/image';

import JakePic from '../public/jake.jpg';

type Props = {};
export default function About({}: Props) {
	return (
		// TODO fix image overlap on the title
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2.5 }}
			className=' h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About
			</h3>

			{/* set animation when div is in view and to occur only once */}
			<motion.img
				src='https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/308443207_10224512148688756_9074190344783151491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HRRrBpWg0BoAX8a0A-1&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8XRZR_HcFmQJcyd35vOh3Vb9t5U89PDhBek9GoD5lbPw&oe=634F550F'
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				className='mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 md:w-95 md:h-95 xl:h-[400px] xl:w-[400px]  md:rounded-lg'
			/>

			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a bit of{' '}
					<span className='underline decoration-[#f7ab0a]'>background</span> story
				</h4>
				<p className='text-base'>
					At this current moment I have 1 year 4 months of experience under my belt for 3
					separate companies as a Front End Developer. <br />I have a clear vision
					regarding my career path, that being front end development narrowing down to
					modern tech like React, Next.js, TypeScript, JavaScript, Tailwind, Material UI
					etc. <br />
					Looking for a step up in my career taking more responsibility within a company
					which respects the progression of it's employers. 👍 💯 :
				</p>
			</div>
		</motion.div>
	);
}
