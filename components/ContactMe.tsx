import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export default function ContactMe() {
	const { register, handleSubmit } = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = formData => {
		window.location.href = `mailto:jakelambert1@hotmail.co.uk?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
	};

	return (
		<div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact me
			</h3>

			<div className='flex flex-col space-y-10'>
				<h4 className='text-4xl font-semibold text-center'>
					If you like what you see, let's get our <br />
					<span className='decoration-[#f7ab0a]/50 underline'>
						working relationship started!
					</span>
				</h4>

				<div className='space-y-10'>
					<div className='flex justify-center space-x-5 '>
						<PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>07792703081</p>
					</div>

					<div className='flex justify-center space-x-5 '>
						<EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>jakelambert1@hotmail.co.uk</p>
					</div>

					<div className='flex justify-center space-x-5'>
						<MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>29 Cross Street, Islington, London</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 w-fit mx-auto'
				>
					<div className='flex space-x-2'>
						<input
							{...register('name')}
							placeholder='Name'
							className='contactInput'
							type='text'
						/>
						<input
							{...register('email')}
							placeholder='Email'
							className='contactInput'
							type='email'
						/>
					</div>

					<input
						{...register('subject')}
						placeholder='Subject'
						className='contactInput'
						type='text'
					/>

					<textarea
						{...register('message')}
						placeholder='Message'
						className='contactInput'
					/>
					<button
						type='submit'
						className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}