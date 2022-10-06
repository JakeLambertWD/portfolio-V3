import { SocialIcon } from 'react-social-icons';
const { motion } = require('framer-motion');

type Props = {};
export default function Header({}: Props) {
	return (
		<header className='sticky top-0 flex justify-between max-w-7xl mx-auto z-20 px-5 py-2'>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className='flex flex-row items-start'
			>
				<SocialIcon
					url='https://www.linkedin.com/in/jakelambert1/'
					network='linkedin'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon network='github' fgColor='gray' bgColor='transparent' />
				<SocialIcon network='facebook' fgColor='gray' bgColor='transparent' />
				<SocialIcon network='instagram' fgColor='gray' bgColor='transparent' />
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className='flex flex-row items-center text-gray-300 cursor-pointer'
			>
				<SocialIcon network='email' fgColor='gray' bgColor='transparent' />
				<p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>
					Get In Touch
				</p>
			</motion.div>
		</header>
	);
}
