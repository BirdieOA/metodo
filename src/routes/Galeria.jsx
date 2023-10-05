import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

import { useEffect } from 'react';
import Form from '../component/Form';
import GaleriaDeFotos from '../component/GaleriaDeFotos';

export default function Galeria() {
	useEffect(() => {
		const element = document.getElementById('galeria');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	return (
		<>
			<section id='galeria'>
				<NavBar />
				<GaleriaDeFotos />
				
				<Form />
				<Footer />
			</section>
		</>
	);
}
