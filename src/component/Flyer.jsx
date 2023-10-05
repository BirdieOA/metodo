import React from 'react';

export default function Flyer() {
	return (
		<>
			<section
				className='grid grid-cols-3 px-10 lg:px-20 pt-10 lg:pt-24 lg:h-screen pb-10 font-semibold'
				id='flyer'
			>
				<div className='my-10 pb-4 text-2xl lg:text-3xl flex justify-center items-center text-center text-[#1B365C] col-span-3'>
					<h1>Implementar <span className=' text-white space-x-20'>“El Método”</span>  para la evolución de la enseñanza <br /> y
					recuperar el estado físico y la neuro plasticidad.</h1>
					
				</div>
				<div className='h-96 text-3xl mb-10 rounded-md bg-[#FEE6B9] shadow-xl border-8 border-orange-400 sm:text-3xl text-center flex flex-col justify-center col-span-3 lg:col-span-1'>
					<p className='text-[#1B365C]'>LUNES Y JUEVES</p>
					<p className='text-[#1B365C] mb-8'>DE 11.10 A 12.00 HRS</p>
					<p className='text-[#1B365C]'>SALÓN AL FONDO</p>
					<p className='text-[#1B365C]'>R. GUTIÉRREZ</p>
					<p className='text-[#1B365C]'>1372</p>
					<p className='text-[#1B365C]'>OLIVOS</p>
				</div>

				<div className='md:text-3xl text-center flex flex-col justify-center col-span-3 lg:col-span-1'>
					<img
						className='my-10 h-40 lg:h-28 lg:rounded-full'
						src='./logoroundedsvg.svg'
						alt=''
					/>

					<p className='text-xl text-[#1B365C]'>ACTIVIDAD FÍSICA Y COGNITIVA</p>
					<p className='text-xl mb-10 text-[#1B365C]'>
						PARA
						<span className='ml-2 underline underline-offset-2 text-white'>
							ADUL
						</span>
						TOS
						<span className='ml-2 underline underline-offset-2 text-white'>
							MA
						</span>
						YORES
					</p>
				</div>
				<div className='h-96 text-3xl  mb-10 rounded-md bg-[#FEE6B9] shadow-xl border-8 border-orange-400 md:text-3xl text-center flex flex-col justify-center col-span-3 lg:col-span-1'>
					<p className='text-[#1B365C] mx-2'>MIÉRCOLES Y VIERNES</p>
					<p className='text-[#1B365C] mb-8'> DE 11.15 A 12.15 HRS</p>
					<p className='text-[#1B365C]'>DACYP</p>
					<p className='text-[#1B365C]'>RUTA 202 Y</p>
					<p className='text-[#1B365C]'>BALBASTRO</p>
					<p className='text-[#1B365C]'>DON TORCUATO</p>
				</div>
			</section>
		</>
	);
}
