import React from 'react';

export default function Form() {
	return (
		<>
			<section
				className='h-[800px] sm:h-full lg:h-screen flex flex-col justify-center items-center bg-[#FEE6B9]'
				id='form'
			>
				<section>
					<h1 className='text-center text-4xl font-bold text-stone-800 mt-12'>
						CONSULTÁ AHORA
					</h1>
					<h3 className='text-xl text-[#4B3821] font-bold py-2 text-center'>
						Realizanos una consulta o solicitá información utilizando el
						siguiente formulario.
						<br /> A la brevedad nos pondremos en contacto.
					</h3>
				</section>

				<br />

				<form
					className=''
					action='https://formsubmit.co/adulmaelmetodo@gmail.com'
					method='POST'
				>
					<section className='lg:flex gap-5'>
						<div>
							<label
								className='flex text-3xl font-bold text-stone-600 mb-2'
								htmlFor='name'
							>
								Nombre
							</label>
							<input
								className='w-[300px] lg:w-[320px] text-2xl text-[#4B3821] rounded-md font-bold mb-2 border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500'
								name='name'
								type='text'
								id='name'
								autoComplete='given-name'flex flex-col sm:grid gap-4 grid-cols-3 p-4 pb-20
								required
							/>
						</div>
						<div className='hidden md:block'>
							<label
								className='flex text-3xl font-bold text-stone-600 mb-2'
								htmlFor='lastName'
							>
								Apellido
							</label>
							<input
								className='text-2xl text-[#4B3821] font-semibold rounded-md mb-2 border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500'
								name='lastName'
								type='text'
								id='lastName'
								required
							/>
						</div>
					</section>
					<section className=''>
						<div>
							<label
								className='flex text-3xl font-bold text-stone-600 mb-2'
								htmlFor='email'
							>
								Email
							</label>
							<input
								className='w-[300px] lg:w-[640px] text-2xl text-[#4B3821] rounded-md font-semibold mb-2 border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500'
								name='email'
								type='text'
								id='email'
								autoComplete='given-name'
								required
							/>
						</div>
						<div className=''>
							<label
								htmlFor='message'
								className='flex text-3xl font-bold text-stone-600 mb-2'
							>
								Mensaje
							</label>
							<textarea
								id='message'
								name='message'
								rows='4'
								className='text-2xl text-[#4B3821] font-semibold w-full px-3 py-2 rounded-lg border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500'
							></textarea>
						</div>
					</section>
					<input
						className='px-4 py-2 mb-4 bg-[#FDB259] rounded-lg text-2xl font-semibold border-2 border-neutral-500 hover:bg-emerald-300/20 cursor-pointer mt-4 ease-in duration-300'
						type='submit'
						value='Enviar'
					/>
					<input
						type='hidden'
						name='_next'
						value='https://elmetodoadulma.com/'
					/>
					<input type='hidden' name='_captcha' value='false' />
				</form>
			</section>
		</>
	);
}
