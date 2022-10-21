import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
const { motion } = require('framer-motion');

type Props = { socialIcon?: string; navTitle?: string; iconColor?: string };
export default function Header({ socialIcon, navTitle, iconColor }: Props) {
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
					fgColor={iconColor ? iconColor : 'gray'}
					bgColor='transparent'
				/>
				<SocialIcon
					network='github'
					fgColor={iconColor ? iconColor : 'gray'}
					bgColor='transparent'
				/>
				<SocialIcon
					network='facebook'
					fgColor={iconColor ? iconColor : 'gray'}
					bgColor='transparent'
				/>
				<SocialIcon
					network='instagram'
					fgColor={iconColor ? iconColor : 'gray'}
					bgColor='transparent'
				/>
			</motion.div>

			<Link href='#contact'>
				<motion.div
					initial={{ x: 500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}
					className='flex flex-row items-center text-gray-300 cursor-pointer'
				>
					<SocialIcon
						network={socialIcon}
						fgColor={iconColor ? iconColor : 'gray'}
						bgColor='transparent'
					/>
					<p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>
						{navTitle}
					</p>
				</motion.div>
			</Link>
		</header>
	);
}
