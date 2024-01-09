import React from 'react';

export default function Form() {
	return (
		<>
			<section
				className='h-[800px] sm:h-screen flex flex-col justify-center items-center bg-[#FEE6B9]'
				id='form'
			>
				<section>
					<h1 className='text-center text-4xl font-bold text-slate-700 mt-12'>
						CONSULTA AHORA
					</h1>
					<h3 className='text-lg text-slate-700 font-poppinsRegular py-2 text-center'>
						Realizanos una consulta o solicitá información utilizando el
						siguiente formulario.
						<br /> A la brevedad nos pondremos en contacto.
					</h3>
				</section>

				<br />

				<form
					className='px-4'
					action='https://getform.io/f/22178bb7-898b-4a72-b00a-9f47de971dca'
					method='POST'
					encType='multipart/Curso-El-Metodo'
				>
					<section className='lg:flex gap-5'>
						<div>
							<label
								className='flex text-3xl font-bold text-slate-700 mb-2'
								htmlFor='name'
							>
								Nombre
							</label>
							<input
								className='w-[300px] lg:w-[320px] text-2xl text-slate-700 rounded-md font-bold mb-2 border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500 shadow-lg'
								name='name'
								type='text'
								id='name'
								autoComplete='given-name'
							/>
						</div>
						<div className='hidden md:block'>
							<label
								className='flex text-3xl font-bold text-slate-700 mb-2'
								htmlFor='lastName'
							>
								Apellido
							</label>
							<input
								className='text-2xl text-[#4B3821] font-semibold rounded-md mb-2 border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500 shadow-lg'
								name='lastName'
								type='text'
								id='lastName'
								required
							/>
						</div>
					</section>

					<div>
						<label
							className='flex text-3xl font-bold text-slate-700 mb-2'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='w-[300px] lg:w-[640px] text-2xl text-slate-700 rounded-md font-semibold mb-2 border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500 shadow-lg'
							name='email'
							type='email'
							id='email'
							autoComplete='given-name'
							required
						/>
					</div>
					<div className=''>
						<label
							htmlFor='message'
							className='flex text-3xl font-bold text-slate-700 mb-2'
						>
							Mensaje
						</label>
						<textarea
							id='message'
							name='message'
							rows='4'
							className='text-2xl text-[#4B3821] font-semibold w-full px-3 py-2 rounded-lg border-2 border-slate-400 focus:border-[#FEE6B9] focus:border-none focus:ring-2 focus:ring-amber-500 shadow-lg'
						></textarea>
					</div>

					<input
						className='px-4 py-2 mb-12 bg-[#FDB259] rounded-lg text-2xl text-slate-700 hover:text-white font-semibold border-2  border-orange-500 hover:border-slate-600 hover:bg-slate-500 cursor-pointer mt-4 ease-in duration-100 shadow-lg shadow-orange-300 '
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
