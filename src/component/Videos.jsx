import React from "react";

export default function Videos() {
  return (
		<>
			<section className='flex flex-col sm:items-center'>
				<div className='grid grid-cols-1 lg:grid-cols-3 sm:px-20 mb-10 gap-10 p-5 sm:p-40'>
					<video
						className='shadow-lg shadow-orange-700/50 col-span-1 rounded-lg'
						src='/b2.mp4'
						alt=' videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/c2.mp4'
						alt='videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/d2.mp4'
						alt='videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/e2.mp4'
						alt=' videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/f2.mp4'
						alt='videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/g2.mp4'
						alt='videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/h2.mp4'
						alt=' videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/i2.mp4'
						alt=' videos de las clases'
						controls
						autoPlay={false}
					/>

					<video
						className='shadow-xl shadow-orange-700/50 col-span-1 rounded-lg'
						src='/j2.mp4'
						alt=' videos de las clases'
						controls
						autoPlay={false}
					/>
				</div>
			</section>
		</>
	);
}