import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export default function ModalMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button className='hover:fill-[#FDB259]  lg:hidden' onClick={openModal}>
				<HiMenu className='fill-[#FEE6B9] hover:fill-[#FDB259]' />
			</button>
			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 '>
					<div className='bg-[#FEE6B9] mt-12 sm:mt-0 fill-[#FDB259] text-slate-700 rounded-lg p-6 w-[320px] h-[520px] lg:w-[430px] flex flex-col items-center justify-center'>
						<GrClose
							onClick={closeModal}
							className='text-4xl w-60 lg:hidden hover:fill-[#FDB259] mb-20 cursor-pointer'
						/>

						<ul className='flex flex-col items-center text-4xl font-bold'>
							<Link
								to='/'
								className='text-neutral-600 hover:text-orange-400 cursor-pointer'
							>
								Inicio
							</Link>
							<Link
								to='/routes/Nosotros'
								className='text-neutral-600 hover:text-orange-400 cursor-pointer'
							>
								Nosotros
							</Link>
							<Link
								to='/routes/Galeria'
								className='text-neutral-600 hover:text-orange-400 cursor-pointer'
							>
								Galeria
							</Link>
							<Link
								to='/routes/Capacitaciones'
								className='text-neutral-600 hover:text-orange-400 cursor-pointer'
							>
								Capacitaciones
							</Link>
							<Link
								to='/routes/Blog'
								className='text-neutral-600 hover:text-orange-400 cursor-pointer'
							>
								Blog
							</Link>
						</ul>
					</div>
				</div>
			)}
		</>
	);
}
