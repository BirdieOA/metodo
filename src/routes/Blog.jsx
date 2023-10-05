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
				<h1 className='flex justify-center p-4 pt-28 font-bold text-4xl pb-20'>
					A QUIENES AYUDAMOS
				</h1>
				<div className='flex flex-col sm:grid gap-4 grid-cols-3 p-4 pb-20'>
					<div className='flex justify-center'>
						<img
							className=' border-4 shadow-xl border-orange-800/30 rounded-xl sm:w-[100px] lg:w-[300px]'
							src='/caritas1.png'
							alt=''
						/>
					</div>

					<div className='flex justify-center'>
						<img
							className=' border-4 shadow-xl border-orange-800/30 rounded-xl sm:w-[100px] lg:w-[300px]'
							src='/caritas2.png'
							alt=''
						/>
					</div>

					<div className='flex justify-center'>
						<img
							className=' border-4 shadow-xl border-orange-800/30 rounded-xl sm:w-[100px] lg:w-[300px]'
							src='/maternidad.png'
							alt=''
						/>
					</div>
				</div>

				<div className='flex flex-col sm:grid gap-4 grid-cols-3 p-4 pb-20'>
					<div className='flex justify-center'>
						<img
							className=' border-4 shadow-xl border-orange-800/30 rounded-xl sm:w-[100px] lg:w-[300px]'
							src='/1blog.png'
							alt=''
						/>
					</div>

					<div className='flex justify-center'>
						<img
							className=' border-4 shadow-xl border-orange-800/30 rounded-xl sm:w-[100px] lg:w-[300px]'
							src='/2blog.png'
							alt=''
						/>
					</div>

					<div className='flex justify-center'>
						<img
							className=' border-4 shadow-xl border-orange-800/30 rounded-xl sm:w-[100px] lg:w-[300px]'
							src='/3blog.png'
							alt=''
						/>
					</div>
				</div>
				<Form />
				<Footer />
			</section>
		</>
	);
}
