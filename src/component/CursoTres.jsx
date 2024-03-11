import React, { useState } from 'react';

import { BsFillHandIndexThumbFill } from 'react-icons/bs';

export default function Curso() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button onClick={openModal} className='lg:text-4xl flex items-center font-semibold text-slate-700 bg-[#FEE6B9] p-4 border-4 border-orange-400 shadow-lg shadow-orange-700/40 rounded-lg hover:scale-105 ease-in duration-200 font-poppinsRegular'>
				Instructorado: “El Método” ADULMA.
			</button>

			{isOpen && (
				<div
					className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90 z-20'
					onClick={closeModal}
				>
					<div className='flex flex-col items-center justify-center w-full h-screen sm:w-full lg:w-[1100px] mt-20 p-4'>
						<img
							src='/CursoTres.png'
							alt='Flyer del curso'
							className='h-[500px] lg:h-[500px] lg:w-[500px]'
						/>
						<div className='flex flex-col justify-center items-center '>
							<a
								href='#form'
								className='px-1 py-2 text-center bg-[#FDB259] text-slate-700 rounded-lg lg:text-xl font-poppinsRegular border-4  border-orange-400 hover:border-slate-600 hover:bg-slate-500 hover:text-white cursor-pointer mt-4 ease-in duration-200'
								onClick={closeModal}
							>
								{' '}
								Click para inscribirte.{' '}
							</a>
							<BsFillHandIndexThumbFill
								className='mx-auto fill-orange-500 mb-2 mt-4 animate-bounce'
								size={30}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
