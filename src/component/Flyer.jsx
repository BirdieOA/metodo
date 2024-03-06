import React from 'react';
import Publicidad from './Publicidad';

export default function Flyer() {
	return (
		<>
			<section
				className='grid grid-cols-3 px-10 lg:px-20 pt-10 lg:pt-24  pb-10 font-semibold gap-4'
				id='flyer'
			>
				<div className='col-span-3 flex justify-center '>
					<img
						className='my-10 h-40 lg:h-28 lg:rounded-lg'
						src='./logoroundedsvg.svg'
						alt=''
					/>
				</div>
				<div className='my-10 pb-4 text-3xl lg:text-3xl flex justify-center items-center text-center text-[#1B365C] col-span-3'>
					<h1 className=' font-poppinsThin lg:text-4xl'>
						Implementar{' '}
						<span className='text-white space-x-20 '>“El Método”</span> para la
						evolución de la enseñanza, <br /> recuperar el estado físico y la
						neuro plasticidad. <br /> <br />
					</h1>

					
				</div>

				<div className='flex justify-center items-end col-span-3 lg:col-span-1'>
					<div className='flex flex-col justify-center p-4 w-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] text-2xl rounded-md bg-[#FEE6B9] shadow-xl shadow-orange-700/40 border-8 border-orange-400 sm:text-3xl text-center  lg:col-span-1'>
						<p className='text-[#1B365C] font-libreBaskerville '>
							LUNES Y JUEVES
						</p>
						<p className='text-[#1B365C] mb-8  font-libreBaskerville '>
							DE 11.10 A 12.00 HRS
						</p>
						<p className='text-[#1B365C] font-libreBaskerville'>
							SALÓN AL FONDO
						</p>
						<p className='text-[#1B365C] font-libreBaskerville'>R. GUTIÉRREZ</p>
						<p className='text-[#1B365C] font-libreBaskerville'>1372</p>
						<p className='text-[#1B365C] font-libreBaskerville'>OLIVOS</p>
					</div>
				</div>

				<div className='flex justify-center items-end col-span-3 lg:col-span-1'>
					<div className='flex flex-col justify-center p-4 w-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] text-2xl  rounded-md bg-[#FEE6B9] shadow-xl shadow-orange-700/40 border-8 border-orange-400 sm:text-3xl text-center  lg:col-span-1'>
						<p className='text-[#1B365C] mx-2 font-libreBaskerville'>
							LUNES Y MIÉRCOLES
						</p>
						<p className='text-[#1B365C] mb-8 font-libreBaskerville'>
							{' '}
							DE 14.45 A 15.45 HRS
						</p>
				
						<p className='text-[#1B365C] font-libreBaskerville'>CACYP</p>
						<p className='text-[#1B365C] font-libreBaskerville'>RUTA 202 Y</p>
						<p className='text-[#1B365C] font-libreBaskerville'>BALBASTRO</p>
						<p className='text-[#1B365C] font-libreBaskerville'>DON TORCUATO</p>
					</div>
				</div>
								<div className='flex justify-center items-end col-span-3 lg:col-span-1'>
					<div className='flex flex-col justify-center p-4 w-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] text-2xl  rounded-md bg-[#FEE6B9] shadow-xl shadow-orange-700/40 border-8 border-orange-400 sm:text-3xl text-center  lg:col-span-1'>
						<p className='text-[#1B365C] mx-3 font-libreBaskerville'>
							MIÉRCOLES Y VIERNES
						</p>
						<p className='text-[#1B365C] mb-8 font-libreBaskerville'>
						
							DE 10.00 A 11.00 HRS
						</p>
						<p className='text-[#1B365C] font-libreBaskerville'>AMIGOS DE FLORIDA</p>
						<p className='text-[#1B365C] font-libreBaskerville'>GRAL. JOSE DE SAN MARTIN</p>
						<p className='text-[#1B365C] font-libreBaskerville'>2442</p>
						<p className='text-[#1B365C] font-libreBaskerville'>FLORIDA</p>
					</div>
				</div>
				<div className='col-span-3 lg:col-span-1'>
					<div className='col-span-3 flex justify-center lg:justify-end lg:pb-5 lg:pr-5'>
						<h1 className='mt-20 text-xl text-center lg:pr-20 lg:text-2xl text-slate-700 font-poppinsRegular'>
							ESPACIO PUBLICITARIO
						</h1>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<Publicidad />
					</div>
				</div>
				<div className='lg:col-span-3 flex col-span-3 justify-center text-center text-slate-700 mt-10'>
					<span className='text-red-600'>*</span> Solicite su espacio
					publicitario a través de contacto
				</div>
			</section>
		</>
	);
}
