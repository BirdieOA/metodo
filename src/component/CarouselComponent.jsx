import React, { useState } from 'react';

const CarouselComponent = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const carouselItems = [
		{
			id: 0,
			video: '/b.mp4',
		},
		{
			id: 1,
			video: '/c.mp4',
		},

		{
			id: 2,
			video: '/d.mp4',
		},
		{
			id: 3,
			video: '/e.mp4',
		},

		{
			id: 4,
			video: '/f.mp4',
		},
		{
			id: 5,
			video: '/g.mp4',
		},
		{
			id: 6,
			video: '/h.mp4',
		},
		{
			id: 7,
			video: '/i.mp4',
		},
		{
			id: 8,
			video: '/j.mp4',
		},
		{
			id: 9,
			video: '/k.mp4',
		},
		{
			id: 10,
			video: '/l.mp4',
		},
		{
			id: 11,
			video: '/m.mp4',
		},
		{
			id: 12,
			video: '/n.mp4',
		},
		{
			id: 13,
			video: '/o.mp4',
		},
		{
			id: 14,
			video: '/p.mp4',
		},
	];

	const handlePrev = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='relative w-full max-w-xl sm:max-w-md lg:max-w-2xl'>
				<div className='overflow-hidden m-4 rounded-xl'>
					<div
						className='flex transition-transform duration-500 ease-in-out'
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
						}}
					>
						{carouselItems.map(item => (
							<div key={item.id} className='w-full flex-shrink-0'>
								<video
									className='lg:w-full h-auto object-cover flex justify-center items-center'
									muted
									autoPlay={false}
									controls
									src={item.video}
									alt={item.description}
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='flex mt-4 mb-10 gap-10 lg:gap-[180px]'>
				<button
					className='px-4 py-2 bg-orange-100 rounded-lg text-2xl font-semibold border-2 border-neutral-500 hover:bg-[#bfcaa4] cursor-pointer mt-2'
					onClick={handlePrev}
				>
					Anterior
				</button>
				<button
					className='px-4 py-2 bg-orange-100 rounded-lg text-2xl font-semibold border-2 border-neutral-500 hover:bg-[#bfcaa4] cursor-pointer mt-2'
					onClick={handleNext}
				>
					Siguiente
				</button>
			</div>
		</div>
	);
};

export default CarouselComponent;
