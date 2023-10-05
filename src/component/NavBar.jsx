import React from 'react';
import { Link } from 'react-router-dom';
import ModalMenu from './ModalMenu';

export default function NavBar() {
	return (
		<>
			<nav className='grid grid-cols-3 fixed z-50 bg-fondo w-full h-[70px] items-center'>
				<div className='col-span-1 pl-4 '>
					<Link
						to='/'
						className='flex text-[#FEE6B9] font-poppinsThin font-semibold lg:text-2xl'
					>
						<h1 className='hidden lg:text-4xl text-[#FEE6B9]'>EL METODO</h1>
						<img src='/logoroundedsvg.svg' alt='' className='h-[40px]' />
					</Link>
				</div>
				<div className='col-span-1 text-2xl'>
					<ul className='hidden lg:flex lg:gap-8 group'>
						<Link
							to='/'
							className='text-[#FEE6B9] font-poppinsThin font-semibold text-2xl hover:underline hover:underline-offset-[10px] decoration-[6px] hover:text-orange-300  '
						>
							Inicio
						</Link>
						<Link
							to='/routes/Nosotros/'
							className='text-[#FEE6B9] font-poppinsThin font-semibold text-2xl hover:underline hover:underline-offset-[10px] decoration-[6px] hover:text-orange-300'
						>
							Nosotros
						</Link>
						<Link
							to='/routes/Galeria'
							className='text-[#FEE6B9] font-poppinsThin font-semibold text-2xl hover:underline hover:underline-offset-[10px] decoration-[6px] hover:text-orange-300'
						>
							Galeria
						</Link>
						<Link
							to='/routes/Capacitaciones'
							className='text-[#FEE6B9] font-poppinsThin font-semibold text-2xl hover:underline hover:underline-offset-[10px] decoration-[6px] hover:text-orange-300'
						>
							Capacitaciones
						</Link>
						<Link
							to='/routes/Blog'
							className='text-[#FEE6B9] font-poppinsThin font-semibold text-2xl hover:underline hover:underline-offset-[10px] decoration-[6px] hover:text-orange-300'
						>
							Blog
						</Link>
						<a
							href='#form'
							className='text-[#FEE6B9] font-poppinsThin font-semibold text-2xl hover:underline hover:underline-offset-[10px] decoration-[6px] hover:text-orange-300'
						>
							Contacto
						</a>
					</ul>
				</div>
				<div className='flex justify-end items-center pr-4 text-4xl col-span-1'>
					<ModalMenu />
				</div>
			</nav>
		</>
	);
}
