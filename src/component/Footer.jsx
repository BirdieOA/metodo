import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<div className='grid lg:grid-cols-3 bg-fondo pt-4'>
				<section>
					<div className='flex justify-center items-center'>
						<ul className='flex flex-col justify-center items-center'>
							<li className='text-[#FDB259] py-5 text-4xl'>EXPLORE</li>
							<li className='text-white'>
								<Link to='/'>Inicio</Link>
							</li>
							<li className='text-white'>
								<Link to='/routes/Capacitaciones'>Capacitaciones</Link>
							</li>
							<li className='text-white'>
								<Link to='/routes/Nosotros'>Nosotros</Link>
							</li>
						</ul>
					</div>
				</section>

				<section>
					<div className='flex flex-col justify-center items-center'>
						<div className='text-[#FDB259] py-5 text-3xl lg:text-4xl'>
							<h1 className='text-[#FEE6B9] font-black'>
								<img className='h-[100px]' src='/logoroundedsvg.svg' alt='' />
							</h1>
						</div>
						<div className='grid lg:flex gap-10'>
							<a href='https://www.instagram.com/elmetodoadulma/' className=''>
								<BsInstagram
									className='fill-[#FEE6B9] cursor-pointer hover:fill-[#EFAA57]'
									size={60}
								/>
							</a>
							<a href='https://www.facebook.com/El.metodo.adulma' className=''>
								<BsFacebook
									className='fill-[#FEE6B9] cursor-pointer hover:fill-[#EFAA57]'
									size={60}
								/>
							</a>
						</div>
					</div>
				</section>

				<section>
					<div className='flex justify-center items-center'>
						<ul className='flex flex-col items-center'>
							<li className='text-[#FDB259] py-5 text-4xl'>INFORMACION</li>
							<li className='text-white'>
								<Link to='/routes/Blog'>Blog</Link>
							</li>
							<li className='text-white'>
								Contacto:
							</li>
							<li className='text-white'><span></span>+54 9 11 4034-1785</li>
						</ul>
					</div>
				</section>
			</div>
			<div className='flex justify-center bg-fondo text-white py-5'>
				Copyright © 2023 "El Método" Adulma.
			</div>
		</>
	);
}
