import React, { useState } from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

import { useEffect } from 'react';
import Form from '../component/Form';

export default function Capacitaciones() {
	useEffect(() => {
		const element = document.getElementById('capacitaciones');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	const [saberMas, setSabermas] = useState(false);

	const openSaberMas = () => {
		setSabermas(true);
	};

	const closeSaberMas = () => {
		setSabermas(false);
	};

	const [saberMasDos, setSabermasDos] = useState(false);

	const openSaberMasDos = () => {
		setSabermasDos(true);
	};

	const closeSaberMasDos = () => {
		setSabermasDos(false);
	};

	return (
		<>
			<section id='capacitaciones'>
				<NavBar />
				<div className='flex flex-col bg-[#FEE6B9] lg:h-screen justify-between items-center'>
					<div className='mt-16 lg:mt-28 font-bold text-2xl p-4 text-center lg:text-6xl '>
						CURSO PARA ADULTOS MAYORES
					</div>
					<section className='flex flex-col col-span-3 gap-10 p-4'>
						<h1 className='lg:text-4xl flex items-center font-semibold text-stone-700 bg-[#FDB259] p-4 border-4 border-orange-400 shadow-xl rounded-lg'>
							- Prevención actualizada y continua en la Salud del Adulto Mayor
						</h1>
						<h1 className='lg:text-4xl flex items-center font-semibold text-stone-700 bg-[#FDB259] p-4 border-4 border-orange-400 shadow-xl rounded-lg'>
							- Prevenir el maltrato al Adulto Mayor y enfrentarlo
						</h1>
						<h1 className='lg:text-4xl flex items-center font-semibold text-stone-700 bg-[#FDB259] p-4 border-4 border-orange-400 shadow-xl rounded-lg'>
							- Primeros auxilios. Vos también podes salvar una vida
						</h1>
					</section>
					<button
						className='px-4 py-2 mb-4 bg-[#FDB259] rounded-lg text-2xl font-semibold border-2 border-neutral-500 hover:bg-emerald-300/20 cursor-pointer mt-4 ease-in duration-300'
						onClick={openSaberMas}
					>
						Saber más
					</button>
					{saberMas && (
						<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80'>
							<div className='flex flex-col justify-center w-full h-screen sm:w-full lg:w-[1100px] mt-20 bg-[#FEE6B9] text-slate-700 p-4'>
								<h1 className='text-2xl font-black text-slate-950 mb-4'>
									ADULTOS MAYORES
								</h1>
								<p className='text-xl font-semibold text-slate-700 bg-white rounded-lg shadow-lg p-8 max-h-[400px] sm:max-h-[120px] lg:max-h-[600px] overflow-y-auto lg:max-w-[1100px]'>
									Estos cursos los diseñamos pensando en las necesidades y
									requerimientos del Adulto Mayor, los cuales… muchos manejan la
									tecnología online, pero otros no. De todos modos, la enseñanza
									presencial resignifica esta etapa de la vida y posibilita el
									desarrollo personal de cada individuo. Realizar cursos
									actualizados logra el empoderamiento de una actitud vital,
									manteniéndote actualizado con respecto a la salud física,
									mental y nutricional. Todos pueden hacerlo. Ver cursos para
									Adultos Mayores
								</p>

								<button
									className='lg:text-4xl text-slate-700 font-bold border bg-[#FDB259] border-neutral-500 rounded-lg px-4 py-2 mt-10 hover:text-white hover:bg-[#bfcaa4] ease-in duration-300'
									onClick={closeSaberMas}
								>
									CERRAR
								</button>
							</div>
						</div>
					)}

					<div className='mb-10'>
						<h1 className='lg:text-2xl font-semibold text-stone-600 p-4'>
							<span className=' text-red-400 font-black'>*</span> Todos nuestros
							cursos son certificados y avalados profesionalmente.
						</h1>
					</div>
				</div>
			</section>
			<section id='capacitaciones'>
				<div className='flex flex-col bg-[#FDB259] h-screen justify-between items-center'>
					<div className='lg:mt-28 font-bold text-2xl p-8 text-center lg:text-6xl'>
						CURSOS PARA PROFESIONALES
					</div>
					<section className='flex flex-col col-span-3 gap-10 p-4'>
						<h1 className='lg:text-4xl flex items-center font-semibold text-stone-700 bg-[#FEE6B9] p-4 border-4 border-orange-400 shadow-xl rounded-lg'>
							- “El Método” ADULMA.
						</h1>
						<h1 className='lg:text-4xl flex items-center font-semibold text-stone-700 bg-[#FEE6B9] p-4 border-4 border-orange-400 shadow-xl rounded-lg'>
							- Actividad Física y gimnasia cognitiva. Aptos para el Adulto
							Mayor
						</h1>
					</section>
					<button
						className='px-4 py-2 bg-orange-100 rounded-lg text-2xl font-semibold border-2 border-neutral-500 hover:bg-[#bfcaa4] cursor-pointer mt-4 ease-in duration-300'
						onClick={openSaberMasDos}
					>
						Saber más
					</button>
					{saberMasDos && (
						<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80'>
							<div className='flex flex-col justify-center w-full h-screen sm:w-full lg:w-[1100px] mt-20 bg-[#FEE6B9] text-slate-700 p-4'>
								<h1 className='text-2xl font-black text-slate-950 mb-4'>
									PARA PROFESIONALES
								</h1>
								<p className='text-xl font-semibold text-slate-700 bg-white rounded-lg shadow-lg p-8 max-h-[400px] sm:max-h-[120px] lg:max-h-[600px] overflow-y-auto lg:max-w-[1100px]'>
									Si estás buscando nuevas oportunidades laborales y querés
									contribuir al bienestar de la población de Adultos mayores,
									mediante … capacitaciones podrás aprender, aplicar estrategias
									y herramientas que promuevan el bienestar del adulto, creando
									habilidades de autovaloración, autocuidado y prevención de
									situaciones de riesgo. Esta formación se realiza desde una
									mirada interdisciplinaria de la vejez, para promover la
									autonomía de las personas mayores, diferenciar necesidades y
									criterios de intervención en el abordaje de la tercera edad,
									detectar características patológicas en el envejecimiento y
									diseñar abordajes de sostenimiento y prevención desde la
									tercera edad hasta la vejez avanzada, comúnmente llamada
									gerentes. Abordamos valoraciones integrales para ayudar no
									solo al anciano, sino también a su familia ¿Quiénes pueden
									hacer nuestros cursos? Toda persona como Familiares, todo
									profesional que trabaje con Adultos Mayores y desee
									capacitarse para mejorar su bienestar integral, como
									Acompañantes Terapéuticos, Cuidadores, Enfermeros, Licenciados
									de la salud, Profesores de Educación Física, Kinesiólogos,
									Fisioterapeutas, médicos Gerontólogos y Neurólogos. La
									capacitación incluye cómo armar tu propio grupo de Adultos
									Mayores con publicidad gratuita.
								</p>

								<button
									className='lg:text-4xl text-slate-700 font-bold border bg-[#FDB259] border-neutral-500 rounded-lg px-4 py-2 mt-10 hover:text-white hover:bg-[#bfcaa4] ease-in duration-300'
									onClick={closeSaberMasDos}
								>
									CERRAR
								</button>
							</div>
						</div>
					)}
					<div className='mb-10'>
						<h1 className='lg:text-2xl font-semibold text-stone-600 p-4'>
							<span className=' text-red-400 font-black'>*</span> Todos nuestros
							cursos son certificados y avalados profesionalmente.
						</h1>
					</div>
				</div>
			</section>
			<h1 className='flex justify-center text-6xl font-bold pt-4'>GALERIA DE FOTOS DE CAPACITACIONES</h1>
			<section className='grid lg:grid-cols-3 gap-10 p-5 sm:p-40'>
				<img
					className='shadow-xl border-8 border-orange-200 col-span-1  rounded-lg'
					src='/1cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-xl border-8 border-orange-200 col-span-1  rounded-lg'
					src='/2cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-xl border-8 border-orange-200 col-span-1  rounded-lg'
					src='/3cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-xl border-8 border-orange-200 col-span-1  rounded-lg'
					src='/4cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-xl border-8 border-orange-200 col-span-1  rounded-lg'
					src='/5cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-xl border-8 border-orange-200 col-span-1  rounded-lg'
					src='/6cap.png'
					alt='fotografias de capacitaciones'
				/>
			</section>
			<Form />
			<Footer />
		</>
	);
}
