import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import './index.css';

import Error from './routes/Error';
import ElMetodo from './routes/ElMetodo';
import Nosotros from './routes/Nosotros';
import Galeria from './routes/Galeria';
import Capacitaciones from './routes/Capacitaciones';
import Blog from './routes/Blog';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route exact path='/' element={<ElMetodo />} errorElement={<Error />} />
			<Route
				path='/routes/Nosotros'
				element={<Nosotros />}
				errorElement={<Error />}
			/>
			<Route
				path='/routes/Galeria'
				element={<Galeria />}
				errorElement={<Error />}
			/>
			<Route
				path='/routes/Capacitaciones'
				element={<Capacitaciones />}
				errorElement={<Error />}
			/>
			<Route
				path='/routes/Blog'
				element={<Blog />}
				errorElement={<Error />} />
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className='select-none'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
