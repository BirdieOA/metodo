import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';

import { useEffect } from 'react';
import Form from '../component/Form';
import ModalTeresa from '../component/ModalTeresa';
import ModalJuan from '../component/ModalJuan';

export default function Nosotros() {
	useEffect(() => {
		const element = document.getElementById('nosotros');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	return (
		<>
			<section className='bg-[#FEE6B9]' id='nosotros'>
				<NavBar />
				<section className='lg:flex pt-24 justify-center items-center'>
					<div className='flex flex-col justify-center items-center'>
						<img
							className='flex lg:h-[550px] p-4 drop-shadow-lg'
							src='/cardAna.svg'
							alt='imagen de una tarjeta con datos sobre una persona'
						/>
						<ModalTeresa />
					</div>
				</section>
				<section>
					<div className='flex flex-col md:flex-row justify-center items-center mt-20 mb-10 lg:gap-40'>
						<img
							className='flex h-[500px] lg:h-[550px] drop-shadow-lg p-4'
							src='/cardJuanPablo.svg'
							alt='imagen de una tarjeta con datos sobre una persona'
						/>
						<img
							className='flex h-[500px] lg:h-[550px] p-4 drop-shadow-lg'
							src='/cardMariela.svg'
							alt='imagen de una tarjeta con datos sobre una persona'
						/>
						{/* <ModalJuan /> */}
					</div>
					<div className='flex items-center justify-center z-0'>
						<BsFillHandIndexThumbFill
							className='fill-orange-400 rotate-180 animate-pulse mb-4'
							size={60}
						/>
					</div>
				</section>

				<section className='bg-[#FDB259] lg:grid grid-cols-2 py-20'>
					<div className='flex items-start justify-center mt-20'>
						<div className='flex flex-col items-center justify-center col-span-1 px-4 lg:px-0'>
							<p className='font-bold text-2xl lg:text-4xl text-center p-4 font-poppinsRegular text-slate-700 bg-[#FEE6B9] rounded-lg shadow-lg '>
								¿Por qué enseñar El Método?
							</p>
							<div className='bg-[#FEE6B9]/20 mt-10 ml-3 mr-3 lg:ml-6 lg:mr-6 rounded-lg shadow-md '>

								<img					
							src="/metodo1.svg"
							alt="metodo1"
							className='h-[280px] sm:w-[500px] lg:w-full object-cover shadow-orange-700/50'

						/>
							</div>
							<div className='bg-[#FEE6B9]/20 mt-10 ml-3 mr-3 lg:ml-6 lg:mr-6 rounded-lg shadow-md '>
		
											<img					
							src="/metodo2.svg"
							alt="metodo2"
							className='h-[280px] sm:w-[500px] lg:w-full object-cover shadow-orange-700/50'

						/>
							</div>
						</div>{' '}
					</div>
					<div className='flex justify-center items-start'>
						<div className='flex flex-col items-center justify-center col-span-1 px-4 lg:px-0'>
							<p className='font-bold text-2xl lg:text-4xl text-center mt-20 p-4 font-poppinsRegular text-slate-700 bg-[#FEE6B9] rounded-lg shadow-lg'>
								¿Por qué aprender El Método?
							</p>
							<div className='bg-[#FEE6B9]/20 mt-10 ml-6 mr-6 rounded-lg shadow-md'>

											<img					
							src="/metodo3.svg"
							alt="metodo1"
							className='h-[265px] sm:h-[280px] sm:w-[500px] lg:w-full object-cover shadow-orange-700/50'

						/>
							</div>
							<div className='bg-[#FEE6B9]/20 mt-10 ml-6 mr-6 rounded-lg shadow-md'>
											<img					
							src="/metodo4.svg"
							alt="metodo1"
							className='h-[265px] sm:h-[280px] sm:w-[500px] lg:w-full object-cover shadow-orange-700/50'

						/>
							</div>
						</div>
					</div>
					<div className='col-span-2 mt-20 lg:mb-10 flex justify-center'>
									<img					
							src="/metodo5.svg"
							alt="metodo1"
							className='hidden md:block md:w-[400px] lg:w-[800px] lg:h-[300px]'

						/>
						<img					
							src="/metodo6.svg"
							alt="metodo1"
							className='h-[400px] sm:hidden'

						/>

					</div>
				</section>
				<Form />
				<Footer />
			</section>
		</>
	);
}
