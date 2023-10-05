import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

import { useEffect } from 'react';
import Form from '../component/Form';
import ModalTeresa from '../component/ModalTeresa';
import ModalJuan from '../component/ModalJuan';

export default function Nosotros() {
	useEffect(() => {
		const element = document.getElementById('nosotros');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	return (
		<>
			<section className='bg-[#FEE6B9]' id='nosotros'>
				<NavBar />
				<section className='lg:flex pt-24 justify-center items-center'>
					<div className='flex flex-col justify-center items-center'>
						<img
							className='flex lg:h-[550px]'
							src='/cardana.svg'
							alt='imagen de una tarjeta con datos sobre una persona'
						/>
						<ModalTeresa />
					</div>
				</section>
				<section>
					<div className='flex flex-col justify-center items-center mt-20 mb-10'>
						<img
							className='flex lg:h-[550px]'
							src='/cardjuan.svg'
							alt='imagen de una tarjeta con datos sobre una persona'
						/>
						<ModalJuan />
					</div>
				</section>

				<section className='bg-[#FDB259] lg:grid grid-cols-2'>
					<div className='flex flex-col items-center justify-center col-span-1'>
						<p className='font-semibold text-4xl mt-20  lg:mt-0 p-4'>
							¿Por qué enseñar El Método?
						</p>
						<p className='font-semibold text-2xl p-10 text-justify'>
							Porque <span className='text-white'>"El Método"</span> es un
							conjunto de elementos, actividades, temas y asuntos, que competen
							a los <span className='text-white'>ADUL</span>tos{' '}
							<span className='text-white'>MA</span>yores, para que proyectos,
							ideas y ganas de vivir la vida, puedan llevarlos a cabo todos y
							cada uno cuando está bien enseñado.
						</p>
						<p className='font-semibold text-2xl p-10 text-justify'>
							<span className='text-white'>“El Método” </span> apuesta a sus
							capacidades, sin subestimar aptitudes, virtudes y cualidades,
							desafiándolos siempre a ir por más, como la gente real de las
							imágenes de esta web, todos ellos practican{' '}
							<span className='text-white'>“El Método” </span>.
						</p>
					</div>
					<div className='flex flex-col items-center justify-center col-span-1'>
						<p className='font-semibold text-4xl mt-20 p-4'>
							¿Por qué aprender El Método?
						</p>
						<p className='font-semibold text-2xl p-10 text-justify'>
							Porque <span className='text-white'>“El Método” </span> recupera
							habilidades pérdidas enlentecidas, mentes desorientadas, cuerpos
							rígidos y todo lo que el Adulto Mayor comienza a experimentar
							avanzado el paso de los años. Entonces ¿la prevención en la vejez
							es factible? El paso de los años es para todos, no se salva nadie.{' '}
						</p>
						<p className='font-semibold text-2xl p-10 text-justify'>
							El cuestionamiento debería ser ¿Cómo quiero vivir esta etapa? La
							salud Física, Mental y Social son la clave.{' '}
							<span className='text-white'>“El Método” </span> te enseña todo
							tipo de tips para tu Salud Integral. Sólo debés probarlo, sentirlo
							y luego comparar cómo estabas antes de practicarlo. Que no te lo
							cuenten, experimentalo vos mismo.
						</p>
					</div>
					<div className='flex items-center justify-center h-full col-span-2'>
						<p className='font-semibold text-2xl p-10 text-justify'>
							Hace más de 25 años que trabajamos con
							<span className='text-white'> Adul</span>tos
							<span className='text-white'> Ma</span>yores y realizamos un
							trabajo de investigación siempre consultado con un grupo de
							trabajo interdisciplinario de médicos clínicos, cardiólogos,
							traumatólogos, gerontólogos, neurólogos, psiquiatras, psicólogos,
							kinesiólogos, profesores de educación física, nutricionistas,
							siempre actualizado a la época actual, porque{' '}
							<span className='text-white'>“El Método” </span> no espera épocas
							mejores, <span className='text-white'>“El Método” </span>
							hace mejores las épocas.
						</p>
					</div>
				</section>
				<Form />
				<Footer />
			</section>
		</>
	);
}
