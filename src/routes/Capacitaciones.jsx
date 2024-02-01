import React, { useState, useEffect } from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Form from '../component/Form';
import CursoTres from '../component/CursoTres'

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
					<div className='mt-16 lg:mt-20 font-bold text-4xl p-4 text-center lg:text-6xl text-slate-700 '>
						CURSOS PARA ADULTOS MAYORES
					</div>
					<section className='flex flex-col col-span-3 gap-10 p-4'>
						{/* <CursoDos/> */}
												<h1 className='lg:text-4xl flex items-center font-semibold text-slate-700 bg-[#FDB259] p-4 border-4 border-orange-400 shadow-lg shadow-orange-700/40 rounded-lg '>
							- Prevención actualizada y continua en la Salud del Adulto Mayor.
							
						</h1>
						<h1 className='lg:text-4xl flex items-center font-semibold text-slate-700 bg-[#FDB259] p-4 border-4 border-orange-400 shadow-lg shadow-orange-700/40 rounded-lg '>
							- Prevenir el maltrato al Adulto Mayor y enfrentarlo.
						</h1>
						<h1 className='lg:text-4xl flex items-center font-semibold text-slate-700 bg-[#FDB259] p-4 border-4 border-orange-400 shadow-lg shadow-orange-700/40 rounded-lg '>
							- Primeros auxilios. Vos también podes salvar una vida.
						</h1>
					</section>
					<button
						className='px-4 py-2 mb-4 bg-[#FDB259] rounded-lg text-2xl font-semibold border-4 text-slate-700 border-orange-400 hover:border-slate-600 hover:bg-slate-500 hover:text-white cursor-pointer mt-4 ease-in duration-100 shadow-lg shadow-orange-700/40'
						onClick={openSaberMas}
					>
						SABER MAS
					</button>
					{saberMas && (
						<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-10'>
							<div className='flex flex-col justify-center w-full h-screen sm:w-full lg:w-[1100px] mt-20 bg-[#FEE6B9]  text-slate-700 p-4'>
								<h1 className='text-3xl font-black text-slate-700 mb-4'>
									ADULTOS MAYORES
								</h1>
								<p className='text-xl font-black text-slate-700 bg-white rounded-lg shadow-lg p-8 max-h-[400px] sm:max-h-[120px] lg:max-h-[600px] overflow-y-auto lg:max-w-[1100px]'>
									Estos cursos los diseñamos pensando en las necesidades y
									requerimientos del Adulto Mayor, los cuales muchos manejan la
									tecnología online, pero otros no. <br />
									De todos modos, la enseñanza presencial resignifica esta etapa
									de la vida y posibilita el desarrollo personal de cada
									individuo. <br />
									Realizar cursos logra el empoderamiento de una
									actitud vital, manteniéndote actualizado con respecto a la
									salud física, mental y nutricional. Todos pueden hacerlo. Ver
									cursos para Adultos Mayores
								</p>
								<div className='flex justify-center'>
									<button
										className='lg:text-4xl text-slate-700 font-bold border-2 bg-[#FDB259] border-orange-400 hover:border-slate-600 rounded-lg px-4 py-2 mt-10 hover:text-white hover:bg-slate-500 ease-in duration-200'
										onClick={closeSaberMas}
									>
										CERRAR
									</button>
								</div>
							</div>
						</div>
					)}

					<div className='mb-10'>
						<h1 className='lg:text-2xl font-semibold text-slate-700 text-center p-4'>
							<span className=' text-red-400 font-black '>*</span> Todos
							nuestros cursos son certificados y avalados profesionalmente.
						</h1>
					</div>
				</div>
			</section>
			<section id='capacitaciones'>
				<div className='flex flex-col bg-[#FDB259] lg:h-screen justify-between items-center'>
					<div className='lg:mt-28 font-bold text-4xl p-8 text-center lg:text-6xl text-slate-700'>
						CURSOS PARA PROFESIONALES
					</div>
					<section className='flex flex-col col-span-3 gap-10 p-4'>
						<CursoTres/>
						{/* <h1 className='lg:text-4xl flex items-center font-semibold text-slate-700 bg-[#FEE6B9] p-4 border-4 border-orange-400 shadow-lg shadow-orange-700/40 rounded-lg '>
							Instructorado: “El Método” ADULMA.
						</h1> */}
						<h1 className='lg:text-4xl flex items-center font-semibold text-slate-700 bg-[#FEE6B9] p-4 border-4 border-orange-400 shadow-lg shadow-orange-700/40 rounded-lg  '>
							- Actividad Física y gimnasia cognitiva. Aptos para el Adulto
							Mayor.
						</h1>
					</section>
					<button
						className='px-4 py-2 bg-orange-100 rounded-lg text-2xl font-semibold border-4 border-orange-400 hover:border-slate-600 hover:bg-slate-500 hover:text-white ease-in duration-200 cursor-pointer mt-4 shadow-lg shadow-orange-700/40'
						onClick={openSaberMasDos}
					>
						SABER MAS
					</button>
					{saberMasDos && (
						<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-10'>
							<div className='flex flex-col justify-center w-full h-screen sm:w-full lg:w-[1100px] mt-20 bg-[#FEE6B9] text-slate-700 p-4'>
								<h1 className='text-3xl font-black text-slate-700 mb-4'>
									PARA PROFESIONALES
								</h1>
								<p className='text-xl font-black text-slate-700 bg-white rounded-lg shadow-lg p-8 max-h-[400px] sm:max-h-[120px] lg:max-h-[600px] overflow-y-auto lg:max-w-[1100px]'>
									Si estás buscando nuevas oportunidades laborales y querés
									contribuir al bienestar de la población de Adultos mayores,
									mediante capacitaciones podrás aprender, aplicar estrategias y
									herramientas que promuevan el bienestar del adulto, creando
									habilidades de autovaloración, autocuidado y prevención de
									situaciones de riesgo. <br />
									Esta formación se realiza desde una mirada interdisciplinaria
									de la vejez, para promover la autonomía de las personas
									mayores, diferenciar necesidades y criterios de intervención
									en el abordaje de la tercera edad, detectar características
									patológicas en el envejecimiento y diseñar abordajes de
									sostenimiento y prevención desde la tercera edad hasta la
									vejez avanzada, comúnmente llamada gerentes. Abordamos
									valoraciones integrales para ayudar no solo al a la persona mayor, sino
									también a su familia <br />
									¿Quiénes pueden hacer nuestros cursos? Toda persona profesional que trabaje con Adultos Mayores y
									desee capacitarse para mejorar su bienestar integral, como
									Acompañantes Terapéuticos, Cuidadores, Enfermeros, Licenciados
									de la salud, Profesores de Educación Física, Kinesiólogos,
									Fisioterapeutas, médicos Gerontólogos y Neurólogos. La
									capacitación incluye cómo armar tu propio grupo de personas 
									mayores con publicidad gratuita.
								</p>
								<div className='flex justify-center'>
									<button
										className='lg:text-4xl text-slate-700 font-bold border-2 border-orange-400 bg-[#FDB259] hover:border-slate-500 rounded-lg px-4 py-2 mt-10 hover:text-white hover:bg-slate-600 ease-in duration-100'
										onClick={closeSaberMasDos}
									>
										CERRAR
									</button>
								</div>
							</div>
						</div>
					)}
					<div className='mb-10'>
						<h1 className='lg:text-2xl font-semibold text-slate-700 text-center p-4'>
							<span className=' text-red-400 font-black'>*</span> Todos nuestros
							cursos son certificados y avalados profesionalmente.
						</h1>
					</div>
				</div>
			</section>
			<h1 className='flex justify-center text-3xl text-center lg:text-6xl font-bold pt-4 text-slate-700'>
				GALERIA DE FOTOS DE CAPACITACIONES
			</h1>
			<section className='grid lg:grid-cols-3 gap-10 p-5 sm:p-20 mb-10'>
				<video
					className='shadow-lg col-span-1 shadow-orange-700 rounded-lg z-0'
					src='/1cap.mp4'
					alt='fotografias de capacitaciones'
					controls
					autoPlay={false}
				/>
				<img
					className='shadow-lg shadow-orange-700 col-span-1 rounded-lg '
					src='/2cap.png'
					alt='fotografias de capacitaciones'
				/>

				<img
					className='shadow-lg shadow-orange-700 col-span-1 rounded-lg '
					src='/4cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-lg shadow-orange-700 col-span-1 rounded-lg '
					src='/5cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-lg shadow-orange-700 col-span-1 rounded-lg '
					src='/6cap.png'
					alt='fotografias de capacitaciones'
				/>
				<img
					className='shadow-lg shadow-orange-700 col-span-1 rounded-lg'
					src='/7cap.png'
					alt='fotografias de capacitaciones'
				/>
			</section>
			<Form />
			<Footer />
		</>
	);
}
