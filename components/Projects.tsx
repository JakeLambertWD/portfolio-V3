const { motion } = require('framer-motion');

type Props = {};
export default function Projects({}: Props) {
	const projects = [0, 1, 2, 3, 4];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2.5 }}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>

			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
				{projects.map((item, i) => (
					<div
						key={item}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
					>
						<motion.img
							initial={{ opacity: 0, y: -300 }}
							transition={{ duration: 2.5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='https://jakelambert.me/_next/image?url=%2Fimages%2Fnetflix.png&w=1920&q=75'
							alt='project'
							className='object-cover h-52'
						/>

						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-[#f7ab0a]/50'>
									Case Study {i + 1} of {projects.length}:
								</span>{' '}
								NETFLIX CLONE
							</h4>

							<p className='text-lg text-center md:text-left'>
								Shiz ipsum phat things amet, consectetizzle break it down shit. Nullizzle
								dang velizzle, go to hizzle hizzle, suscipit quizzle, shit vizzle, bizzle.
								Pellentesque eget tortizzle. Sed eros. Dawg izzle dolizzle dapibus
								turpizzle tempizzle go to hizzle. Nizzle pellentesque nibh izzle brizzle.
								Shit izzle tortor. Pellentesque dizzle rhoncizzle nisi. Boofron hac
								habitasse platea mah nizzle.
							</p>
						</div>
					</div>
				))}
			</div>

			<div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-6' />
		</motion.div>
	);
}
