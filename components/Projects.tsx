import { Card } from "react-daisyui";

const { motion } = require("framer-motion");

type Props = {};
export default function Projects({}: Props) {
  const projects = [0, 1, 2, 3, 4, 5];

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 2.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <Card>∫</Card>

      <div className="scrollbar p-16 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((item, i) => (
          // TODO: find a way to have the middle child start in the center
          <div
            key={i}
            className="card glass w-[500px] h-[650px] snap-center flex-shrink-0 mx-12 opacity-70 hover:opacity-100"
          >
            <figure>
              <img
                src="https://placeimg.com/400/225/arch"
                alt="car!"
                className="object-cover w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Project example {i + 1}{" "}
                <div className="badge badge-secondary">NEW</div>
              </h2>

              <div className="flex">
                <div className="avatar tooltip" data-tip="Framer Motion">
                  <div className="w-12 mask mask-hexagon">
                    <img src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" />
                  </div>
                </div>
                <div className="avatar tooltip" data-tip="Storybook">
                  <div className="w-12 mask mask-hexagon">
                    <img src="https://avatars.githubusercontent.com/u/22632046?s=280&v=4" />
                  </div>
                </div>
                <div className="avatar tooltip" data-tip="Sanity Studio">
                  <div className="w-12 mask mask-hexagon">
                    <img src="https://www.sanity.io/static/images/logo_rounded_square.png" />
                  </div>
                </div>
              </div>

              <div className="justify-end card-actions">
                <button className="btn btn-primary">View code</button>
                <button className="btn btn-primary">View site</button>
              </div>

              <div className="collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <div className="collapse-title">Description...</div>
                <div className="collapse-content">
                  <p>
                    Shiz ipsum phat things amet, consectetizzle break it down
                    shit. Nullizzle dang velizzle, go to hizzle hizzle, suscipit
                    quizzle, shit vizzle, bizzle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          // <div
          // 	key={item}
          // 	className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44 '
          // >
          // 	<motion.img
          // 		initial={{ opacity: 0, y: -300 }}
          // 		transition={{ duration: 2.5 }}
          // 		whileInView={{ opacity: 1, y: 0 }}
          // 		viewport={{ once: true }}
          // 		src='https://jakelambert.me/_next/image?url=%2Fimages%2Fnetflix.png&w=1920&q=75'
          // 		alt='project'
          // 		className='object-cover h-52'
          // 	/>

          // 	<div className='max-w-6xl px-0 space-y-10 md:px-10'>
          // 		<h4 className='text-4xl font-semibold text-center'>
          // 			<span className='underline decoration-[#f7ab0a]/50'>
          // 				Case Study {i + 1} of {projects.length}:
          // 			</span>{' '}
          // 			NETFLIX CLONE
          // 		</h4>

          // 		<p className='text-lg text-center md:text-left'>
          // 			Shiz ipsum phat things amet, consectetizzle break it down shit. Nullizzle
          // 			dang velizzle, go to hizzle hizzle, suscipit quizzle, shit vizzle, bizzle.
          // 			Pellentesque eget tortizzle. Sed eros. Dawg izzle dolizzle dapibus
          // 			turpizzle tempizzle go to hizzle. Nizzle pellentesque nibh izzle brizzle.
          // 			Shit izzle tortor. Pellentesque dizzle rhoncizzle nisi. Boofron hac
          // 			habitasse platea mah nizzle.
          // 		</p>
          // 	</div>
          // </div>
        ))}
      </div>

      {/* <div className='w-full absolute top-[30%] bg-[#f7ab0a]/40 left-0 h-[300px] -skew-y-6' /> */}
    </motion.div>
  );
}
