import React, { useState } from 'react';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';

export default function ModalTeresa() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			{/* Botón para abrir el modal */}
			<button
				className='px-4 py-2 bg-[#FDB259] text-slate-700 rounded-lg text-2xl font-semibold border-4  border-orange-400 hover:border-slate-600 hover:bg-slate-500 hover:text-white cursor-pointer mt-4 ease-in duration-200'
				onClick={openModal}
			>
				SABER MAS
			</button>

			{isOpen && (
				<div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80 z-10'>
					<div className='flex flex-col justify-center w-full h-screen sm:w-full lg:w-[1440px] mt-20  bg-[#FEE6B9] text-slate-700 p-4'>
						<h1 className='text-3xl lg:text-6xl font-black text-slate-700 mb-4'>
							Ana T. de Léon
						</h1>
						<div className='text-xl font-semibold text-slate-700 bg-white rounded-lg shadow-lg p-8 max-h-[400px] sm:max-h-[120px] lg:max-h-[500px] overflow-y-auto lg:max-w-[1440px]'>
							- Lic. en Enfermería, Académica y Preparadora física y deportiva,
							especializada en el Adulto Mayor y la vejez.
							<br />
							<br />
							- Miembro de la Asociación Médica Argentina, entre sus estudios,
							carrera de grado, diplomaturas y posgrados, ha participado de
							relevantes Congresos Nacionales e Internacionales que aportaron
							material a su investigación científica para la Tercera y Cuarta
							edad. <br />
							<br />
							- Ex docente de la Universidad de Buenos Aires, Facultad de
							Medicina, Escuelas de Enfermería. - Mujer del año en el partido de
							Vicente López (2013). <br />
							<br />- Voluntaria de la Maternidad Santa Rosa, entre otros.
							Autora de ¿Tercera edad, 4ta. edad? (2012) y “El Método” Adulma
							(2021). <br />
							<br />- Invitada a la Feria Internacional del Libro 2022 para
							presentar su último libro.
							<br />
							<br />
							<a href='https://drive.google.com/file/d/1rs6ElhZm79yoHfcu2UriYr93AF5dxzLN/view'>
								<span className='flex  text-2xl font-semibold text-blue-400 hover:text-[#0066ff] underline underline-offset-5 pr-2 cursor-pointer'>
									<BsFillHandIndexThumbFill
										className='fill-slate-700 rotate-90 animate-pulse mr-3'
										size={30}
									/>
									CURRICULUM
								</span>
							</a>
						</div>
<div className="flex justify-center items-center">
						<button
							className=' px-4 py-2 bg-[#FDB259] text-slate-700 rounded-lg text-2xl font-semibold border-4  border-orange-400 hover:border-slate-600 hover:bg-slate-500 hover:text-white cursor-pointer mt-4 ease-in duration-200'
							onClick={closeModal}
						>
							CERRAR
						</button></div>
					</div>
				</div>
			)}
		</>
	);
}
