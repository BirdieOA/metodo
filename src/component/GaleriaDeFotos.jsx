import React from 'react';
import CarouselComponent from './CarouselComponent';

export default function GaleriaDeFotos() {
	const images = [
		'/1.png',
		'/2.png',
		'/3.png',
		'/4.png',
		'/5.png',
		'/6.png',
		'/7.png',
		'/8.png',
		'/9.png',
	];

	return (
		<>
			<section className='flex flex-col sm:items-center'>
				<div className='grid grid-cols-1 lg:grid-cols-3 mt-20 sm:px-20 mb-20 gap-10 p-5 sm:p-40'>
					{images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Image ${index + 1}`}
							className='shadow-xl border-8 border-orange-200 h-[400px] sm:w-[500px] lg:w-full object-cover rounded-[25px]'
							loading='lazy'
						/>
					))}
				</div>
				<h1 className='flex text-4xl lg:text-6xl justify-center text-[#3b3a3a] font-semibold mb-10'>
					VIDEOS
				</h1>
				<CarouselComponent />
			</section>
		</>
	);
}
