import { SocialIcon } from 'react-social-icons';

type Props = {};
export default function Header({}: Props) {
	return (
		<header className='flex justify-between max-w-7xl mx-auto z-20 px-5 py-2'>
			<div className='flex flex-row items-start'>
				<SocialIcon
					url='https://www.linkedin.com/in/jakelambert1/'
					network='linkedin'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon network='github' fgColor='gray' bgColor='transparent' />
				<SocialIcon network='facebook' fgColor='gray' bgColor='transparent' />
				<SocialIcon network='instagram' fgColor='gray' bgColor='transparent' />
			</div>

			<div className='flex flex-row items-center text-gray-300 cursor-pointer'>
				<SocialIcon network='email' fgColor='gray' bgColor='transparent' />
				<p className='uppercase hidden md:inline-flex text-gray-400 text-sm'>
					Get In Touch
				</p>
			</div>
		</header>
	);
}
