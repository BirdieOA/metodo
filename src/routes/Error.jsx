import { useRouteError } from 'react-router-dom';

export default function Error() {
	const error = useRouteError();
	return (
		<>
			<div
				className='flex flex-col  justify-center h-screen text-center items-center '
				id='error-page '
			>
				<p>
					Lo sentimos... <br /> algo insperado ha sucedido... <br /> intentamos
					arreglarlo... <br /> esperamos sepa entender...
				</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</>
	);
}
