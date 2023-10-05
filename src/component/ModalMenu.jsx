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
				<HiMenu className='fill-slate-700 hover:fill-white' />
			</button>
			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 '>
					<div className='bg-[#FDB259] mt-12 sm:mt-0 text-slate-700 rounded-lg p-6 w-[320px] h-[520px] lg:w-[430px] flex flex-col items-center justify-center border-4 border-slate-700 mb-10'>
						<GrClose
							onClick={closeModal}
							className=' lg:hidden mb-20 cursor-pointer bg-slate-800/20 shadow-md shadow-slate-700 h-12 w-10 rounded-lg p-2'
							
						/>


						<ul className='flex flex-col items-center text-4xl font-bold'>
							<Link
								to='/'
								className='text-slate-700 hover:text-white ease-in duration-200 cursor-pointer border-b-2 border-slate-700 mb-4 text-center hover:border-white  shadow-slate-700 '
							>
								Inicio
							</Link>
							<Link
								to='/routes/Nosotros'
								className='text-slate-700 hover:text-white ease-in duration-200 cursor-pointer border-b-2 mb-4  text-center border-slate-700 hover:border-white'
							>
								Nosotros
							</Link>
							<Link
								to='/routes/Galeria'
								className='text-slate-700 hover:text-white ease-in duration-200 cursor-pointer border-b-2 border-slate-700 mb-4 text-center hover:border-white'
							>
								Galería
							</Link>
							<Link
								to='/routes/Capacitaciones'
								className='text-slate-700 hover:text-white ease-in duration-200 cursor-pointer border-b-2 border-slate-700 mb-4 text-center '
							>
								Capacitaciones
							</Link>
							<Link
								to='/routes/Blog'
								className='text-slate-700 hover:text-white ease-in duration-200 cursor-pointer border-b-2 border-slate-700 mb-2  text-center'
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
