import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Publicidad() {
	const slides = [
		{
			id: '0',
			imagen: '/1pub.png',
			alt: 'publicidad asesoria administrativa',
		},
		{
			id: '1',
			imagen: '/2pub.png',
			alt: 'publicidad consultoria psicologica',
		},
		{
			id: '2',
			imagen: '/3pub.png',
			alt: 'publicidad especialista en pintura',
		},
		{
			id: '3',
			imagen: '/4pub.png',
			alt: 'publicidad eco doppler a domicilio',
		},

		{
			id: '4',
			imagen: '/5pub.png',
			alt: 'publicidad flores de bach',
		},

		{
			id: '6',
			imagen: '/6pub.png',
			alt: 'publicidad uniendo eslabones',
		},
		{
			id: '7',
			imagen: '/7pub.png',
			alt: 'publicidad hexagono',
		},
		{
			id: '8',
			imagen: '/p7.png',
			alt: 'publicidad elmetodo',
		},
		{
			id: '8',
			imagen: '/9pub.png',
			alt: 'publicidad elmetodo',
		},
				{
			id: '9',
			imagen: '/10pub.png',
			alt: 'publicidad elmetodo',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = slideIndex => {
		setCurrentIndex(slideIndex);
	};

	return (
		<>
			<div className=''>
				<div className='h-[500px] w-[350px] sm:w-[600px] sm:h-[450px] lg:w-[400px] lg:h-[400px] m-auto py-16 lg:py-0 lg:px-0 lg:ml-0 relative '>
					<div
						style={{ backgroundImage: `url(${slides[currentIndex].imagen})` }}
						className='w-full h-full rounded-lg bg-center bg-cover duration-500 shadow-lg shadow-orange-700/40 border-8 border-orange-400'
					></div>
					<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 border-2 rounded-full border-white bg-gray-800 cursor-pointer shadow-lg '>
						<BsChevronCompactLeft
							className='fill-white'
							onClick={prevSlide}
							size={20}
						/>
					</div>
					<div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-gray-800 border-2 border-white cursor-pointer shadow-lg'>
						<BsChevronCompactRight
							className='fill-white '
							onClick={nextSlide}
							size={20}
						/>
					</div>
					<div className='flex top-4 justify-center py-2'>
						{slides.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className='text-3xl py-3 cursor-pointer text-slate-700'
							>
								<RxDotFilled />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
		