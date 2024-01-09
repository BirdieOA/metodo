import React from 'react';
import { Link } from 'react-router-dom';
import ModalMenu from './ModalMenu';
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';
// import Curso from './Curso';

export default function NavBar() {
	return (
		<>
			<nav className='grid grid-cols-4 lg:grid-cols-8 w-full fixed z-50 bg-[#FDB259] h-[70px] items-center shadow-xl '>
				<div className='flex justify-center items-center col-span-1 pl-4 '>
					<Link
						to='/'
						className=' text-[#FEE6B9] font-poppinsThin font-semibold lg:text-2xl'
					>
						<img src='/logoroundedsvg.svg' alt='' className='h-[40px]' />
					</Link>
				</div>

				<div className='flex col-span-1 justify-center sm:justify-start space-x-2'>
					<a target="_blank" href='https://www.instagram.com/elmetodoadulma/' className=''>
						<BsInstagram
							className='text-slate-700 cursor-pointer hover:fill-white ease-in duration-100'
							size={32}
						/>
					</a>
					<a target="_blank" href='https://www.facebook.com/El.metodo.adulma' className=''>
						<BsFacebook
							className='text-slate-700 cursor-pointer hover:fill-white ease-in duration-100'
							size={32}
						/>
					</a>
					<a target="_blank" href='https://www.instagram.com/elmetodoadulma/' className=''>
						<BsYoutube
							className='text-slate-700 cursor-pointer hover:fill-white ease-in duration-100'
							size={36}
						/>
					</a>
				</div>
				<div className='flex justify-end lg:col-span-5 text-2xl uppercase'>
					<ul className='hidden lg:flex lg:gap-8 group'>
						<Link
							to='/'
							className='text-slate-700 font-poppinsRegular font-semibold text-2xl hover:text-white ease-in duration-100 '
						>
							Inicio
						</Link>
						<Link
							to='/routes/Nosotros/'
							className='text-slate-700 font-poppinsRegular font-semibold text-2xl hover:text-white ease-in duration-100 '
						>
							Nosotros
						</Link>
						<Link
							to='/routes/Galeria'
							className='text-slate-700 font-poppinsRegular font-semibold text-2xl hover:text-white ease-in duration-100 '
						>
							Galeria
						</Link>
						<Link
							to='/routes/Capacitaciones'
							className='text-slate-700 font-poppinsRegular font-semibold text-2xl hover:text-white ease-in duration-100 '
						>
							Capacitaciones
						</Link>
						<Link
							to='/routes/Blog'
							className='text-slate-700 font-poppinsRegular font-semibold text-2xl hover:text-white ease-in duration-100  '
						>
							Blog
						</Link>
						<a
							href='#form'
							className='text-slate-700 font-poppinsRegular font-semibold text-2xl hover:text-white ease-in duration-100  '
						>
							Contacto
						</a>
					</ul>
				</div>
				<div className='flex justify-end items-center pr-4 text-4xl col-span-1'>
					<ModalMenu />
				</div>
			</nav>
			{/* <Curso/> */}
		</>
	);
}
