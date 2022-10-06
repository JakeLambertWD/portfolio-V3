const { motion } = require('framer-motion');

type Props = {};
export default function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 4, 1],
				opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
				borderRadius: ['20%', '20%', '50%', '80%', '20%']
			}}
			transition={{ duration: 2.5 }}
			className='relative flex justify-center items-center'
		>
			<div className='absolute border [#333333] rounded-full h-[150px] w-[150px] mt-52 animate-ping' />
			<div className='absolute border border-[#bbafaf] rounded-full h-[225px] w-[225px] mt-52 animate-ping' />
			<div className='absolute border border-[#333333] rounded-full h-[375px] w-[375px] mt-52 animate-ping' />
			<div className='absolute border border-[#f7ab0a]  rounded-full h-[487px] w-[487px] mt-52 animate-pulse opacity-20' />
			<div className='absolute border border-[#333333]  rounded-full h-[600px] w-[600px] mt-52 ' />
		</motion.div>
	);
}
