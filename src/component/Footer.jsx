import React from 'react';
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<div className='grid lg:grid-cols-3 bg-[#FDB259] pt-4'>
				<section>
					<div className='flex justify-center items-center '>
						<ul className='flex flex-col justify-center items-center'>
							<li className='text-slate-700 py-5 text-4xl font-poppinsRegular '>
								EXPLORE
							</li>
							<li className='text-slate-700 hover:scale-110 ease-in duration-100 font-bold text-xl'>
								<Link to='/'>Inicio</Link>
							</li>
							<li className='text-slate-700 hover:scale-110 ease-in duration-100 font-bold text-xl'>
								<Link to='/routes/Capacitaciones'>Capacitaciones</Link>
							</li>
							<li className='text-slate-700 hover:scale-110 ease-in duration-100 font-bold text-xl'>
								<Link to='/routes/Nosotros'>Nosotros</Link>
							</li>
						</ul>
					</div>
				</section>

				<section>
					<div className='flex flex-col justify-center items-center'>
						<div className='py-5'>
							<img className='h-[100px]' src='/logoroundedsvg.svg' alt='' />
						</div>
						<div className='grid lg:flex gap-10'>
							<a href="https://www.youtube.com/channel/UCWVEYCAyE61A9bBvWVNLebQ">
									<BsYoutube
									className='fill-slate-700 cursor-pointer hover:fill-white ease-in duration-100'
									size={60}
								/>

							</a>
							<a href='https://www.instagram.com/elmetodoadulma/' className=''>
								<BsInstagram
									className='fill-slate-700 cursor-pointer hover:fill-white ease-in duration-100'
									size={50}
								/>
							</a>
							<a href='https://www.facebook.com/El.metodo.adulma' className=''>
								<BsFacebook
									className='fill-slate-700 cursor-pointer hover:fill-white ease-in duration-100'
									size={50}
								/>
							</a>
						</div>
					</div>
				</section>

				<section>
					<div className='flex justify-center items-center '>
						<ul className='flex flex-col items-center '>
							<li className='text-slate-700 py-5 text-4xl font-poppinsRegular'>
								INFORMACION
							</li>
							<li className='text-slate-700 hover:scale-110 ease-in duration-100 font-bold font-poppinsRegular text-xl'>
								<Link to='/routes/Blog'>Blog</Link>
							</li>
							<li className='text-slate-700 font-poppinsRegular text-lg'>
								Contacto:
							</li>
							<li className='text-slate-700 font-poppinsRegular text-lg'>
								adulmaelmetodo@gmail.com
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div className='flex justify-center bg-[#FDB259] text-slate-700 py-5 font-poppinsRegular'>
				Copyright © 2023 "El Método" Adulma.
			</div>
		</>
	);
}
