import React from 'react';

export const AuxComponentD = ({ data, servicio }) =>{
	
	let Serv0 = (	<>
				<h5 className="">Mensaje Decifrado</h5>
				<p className="card-text">
					{ data?.mensaje}
				</p>
				<h5 className="">Informacion de la firma</h5>
				<p className="card-text">
					{ data?.info }
				</p>
			</>
		);
		
	let Serv1 = (	<>
				<h5 className="">Mensaje cifrado</h5>
				<p className="card-text">
					{ data?.mensajeDecifrado }
				</p>
			</>
		);

	let Serv2= (	<>
				<h5 className="">Informacion de la Firma</h5>
				<p className="card-text">
					{ data?.resultado?.message }
				</p>
			</>
		);
		
	return (
		<>
			<blockquote className="blockquote mt-2 mb-1">		
				{
					servicio==0? Serv0: servicio == 1? Serv1: Serv2
				}
			</blockquote>
		</>
	);
}
