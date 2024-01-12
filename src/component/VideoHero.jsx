import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function VideoHero() {
	useEffect(() => {
		const element = document.getElementById('inicio');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	return (
		<>
			<section className='inset-0 z-0' id='inicio'>
				<figure >
					<video
						className='h-screen sm:w-screen lg:h-screen object-cover md:h-screen md:object-cover lg:w-full  lg:object-cover opacity-80 brightness-50 contrast-125 saturate-0 backdrop-saturate-125'
						autoPlay
						muted
						loop
					>
						<source src='./videocorto.mp4' type='video/mp4' />
					</video>
				</figure>
			</section>
			<div className='flex justify-center mt-10'><audio autoPlay controls loop>
						<source src="public/dsmn.mp3" type="audio/mpeg"></source>
					</audio></div>
					
			<section className='absolute top-0 flex lg:h-screen justify-center items-center align-middle'>
				<div className='relative z-10 text-white text-center'>
					<h1 className='text-white font-poppinsRegular text-2xl lg:leading-[70px] lg:text-6xl mt-[200px] sm:mt-[130px] px-10 lg:mt-[100px] lg:px-72'>
						“El Método” para Profesionales que deseen enseñarlo y para los
						Adultos Mayores que deseen practicarlo
					</h1>
					<br />
					<button className='px-4 py-2 bg-[#FDB259] rounded-lg text-2xl border-4 border-orange-500 hover:border-slate-600 hover:bg-slate-500 text-slate-800  hover:text-white cursor-pointer mt-4 ease-in duration-100'>
						<Link to='/routes/Nosotros/' className='text-2xl font-semibold'>
							SABER MAS
						</Link>
					</button>
				</div>
			</section>
		</>
	);
}
