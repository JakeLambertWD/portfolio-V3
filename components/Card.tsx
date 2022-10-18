import JakePic from '../public/jake.jpg';
const { motion } = require('framer-motion');

type Props = {};
export default function Card({}: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px]  snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
				src='https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/308443207_10224512148688756_9074190344783151491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HRRrBpWg0BoAX8a0A-1&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8XRZR_HcFmQJcyd35vOh3Vb9t5U89PDhBek9GoD5lbPw&oe=634F550F'
				alt='Profile pic'
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>Front End Dev</h4>
				<p className='font-bold text-2xl mt-1'>Guider</p>
				<div className='flex space-x-2 my-2'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
						alt='Tailwind'
						className='h-10 w-10 rounded-full'
					/>
				</div>
				<p className='uppercase text-gray-300'>Started Work... - Ended...</p>

				<ul className='ml-5 text-lg space-y-4 list-disc'>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	);
}
