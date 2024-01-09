import React, { useState } from 'react';

export default function ModalJuan() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button
				className='px-4 py-2 bg-[#FDB259] text-slate-700 rounded-lg text-2xl font-semibold border-4  border-orange-400 hover:border-slate-600 hover:bg-slate-500 hover:text-white cursor-pointer mt-4 ease-in duration-100'
				onClick={openModal}
			>
				SABER MAS
			</button>

			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-10'>
					<div className='flex flex-col justify-center w-full h-screen sm:w-full lg:w-[1100px] mt-20 bg-[#FEE6B9] text-slate-700 p-4'>
						<h1 className='text-3xl lg:text-6xl font-black text-slate-950 mb-4'>
							Juan P. Alfonso
						</h1>
						<p className='text-xl font-semibold text-slate-700 bg-white rounded-lg shadow-lg p-8 max-h-[400px] sm:max-h-[120px] lg:max-h-[600px] overflow-y-auto lg:max-w-[1100px]'>
							- Prof. de Educación Física. <br /> <br /> - Instructor de "El
							Metodo". <br /> Con amplios conocimientos en motricidad de la
							tercera edad, Juan Pablo, realizó el curso intensivo de "El
							Metodo" y da clases en Olivos y Don Torcuato. <br />
							<br />- 2do. Congreso Internacional de Gerontología, Mayo 2023,
							Montevideo Uruguay.
						</p>
<div className="flex justify-center items-center">
						<button
							className='px-4 py-2 bg-[#FDB259] text-slate-700 rounded-lg text-2xl font-semibold border-4  border-orange-400 hover:border-slate-600 hover:bg-slate-500 hover:text-white cursor-pointer mt-4 ease-in duration-100'
							onClick={closeModal}
						>
							CERRAR
						</button></div>
					</div>
				</div>
			)}
		</>
	);
}
