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
			{/* <button
				className='rounded-md text-slate-700 lg:text-xl font-poppinsRegular hover:border-orange-300 hover:bg-orange-400 hover:text-slate-600 cursor-pointer ease-in duration-200 bottom-10 right-10 px-4 py-4 uppercase'
				onClick={openModal}
			>
				Más Información
			</button> */}

			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90 z-20 backdrop-blur-md' onClick={closeModal}>
					<div className='flex items-center justify-center'>
						<img
							src='/001.svg'
							alt='Flyer de nuevas clases'
							className='w-[400px] lg:w-[450px] pt-[70px]'
						/>

					</div>
				</div>
			)}
		</>
	);
}