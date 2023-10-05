import React from 'react';

import VideoHero from '../component/VideoHero';
import NavBar from '../component/NavBar';
import Flyer from '../component/Flyer';
import Footer from '../component/Footer';
import Form from '../component/Form';

export default function ElMetodo() {
	return (
		<>
			<NavBar />
			<VideoHero />
			<Flyer />
			<Form />
			<Footer />
		</>
	);
}
