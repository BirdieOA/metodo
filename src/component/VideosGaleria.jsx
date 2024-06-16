import React from 'react';

export default function VideosGaleria() {
	return (
		<section className='flex flex-col sm:items-center'>
			<div className='grid grid-cols-1 lg:grid-cols-2 sm:px-20 mb-10 gap-10 p-5 sm:p-20'>
				<video
					className='shadow-lg shadow-orange-700/50 col-span-1 rounded-lg h-[500px]'
					src='/galeria-videos/01.mp4'
					alt='videos de las clases'
					controls
					autoPlay={false}
				/>

				<video
					className='shadow-lg shadow-orange-700/50 col-span-1 rounded-lg h-[500px]'
					src='/galeria-videos/02.mp4'
					alt='videos de las clases'
					controls
					autoPlay={false}
				/>
			</div>
		</section>
	);
}
