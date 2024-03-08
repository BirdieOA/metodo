import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

import { useEffect } from 'react';
import Form from '../component/Form';

export default function Blog() {
	useEffect(() => {
		const element = document.getElementById('blog');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	return (
		<>
			<section id='blog'>
				<NavBar />
				<h1 className='flex justify-center p-4 pt-28 font-semibold font-poppinsRegular text-6xl text-center pb-10 text-slate-700'>
					A QUIENES AYUDAMOS
				</h1>
				<div className='text-center sm:flex sm:justify-center gap-10 pb-10 '>
					<div className='p-4 flex flex-col justify-center items-center'>
						<img
							className=' shadow-lg shadow-orange-700/40  rounded-xl sm:w-[85px] lg:w-[300px]'
							src='/1blog.png'
							alt=''
						/>
						<h1 className='sm:text-sm lg:text-xl font-poppinsRegular mt-4 text-slate-700'>
							UNIENDO ESLABONES
						</h1>
					</div>

					<div className='p-4 flex flex-col justify-center '>
						<img
							className=' shadow-lg shadow-orange-700/40 rounded-xl sm:w-[85px] lg:w-[300px]'
							src='/2blog.png'
							alt=''
						/>
						<h1 className='sm:text-sm lg:text-xl font-poppinsRegular mt-4 text-slate-700'>
							CARITAS MARTELLI
						</h1>
					</div>

					<div className='p-4 flex flex-col justify-center '>
						<img
							className=' shadow-lg shadow-orange-700/40 rounded-xl sm:w-[85px] lg:w-[300px]'
							src='/3blog.png'
							alt=''
						/>
						<h1 className='sm:text-sm lg:text-xl font-poppinsRegular mt-4 text-slate-700'>
							CARITAS OLIVOS
						</h1>
					</div>

					<div className='p-4 flex flex-col justify-center items-center '>
						<img
							className=' shadow-lg shadow-orange-700/40  rounded-xl sm:w-[85px] lg:w-[300px]'
							src='/4blog.png'
							alt=''
						/>
						<h1 className='sm:text-sm lg:text-xl font-poppinsRegular mt-4 text-slate-700'>
							RECALCULANDO NORTE
						</h1>
					</div>
				</div>
				<Form />
				<Footer />
			</section>
		</>
	);
}
