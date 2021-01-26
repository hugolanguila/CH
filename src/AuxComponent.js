import React from 'react';

export const AuxComponent = ({ data, servicio, mensaje }) =>{
	
	let Serv0 = (	<>
				<h5 className="">Mensaje Cifrado</h5>
				<p className="card-text">
					{ data?.mensajeCifrado }
				</p>
				<h5 className="">Llave cifrada</h5>
				<p className="card-text">
					{ data?.llaveCifrada }
				</p>
				<h5 className="">Firma</h5>
				<p className="card-text">
					{ data?.firma }
				</p>
			</>
		);
		
	let Serv1 = (	<>
				<h5 className="">Mensaje cifrado</h5>
				<p className="card-text">
					{ data?.mensajeCifrado }
				</p>
			</>
		);
		
	let Serv2= (	<>
				<h5 className="">Mensaje</h5>
				<p className="card-text">
					{ mensaje }
				</p>
				<h5 className="">Firma</h5>
				<p className="card-text">
					{ data?.firma }
				</p>
			</>
		);
		
	return (
		<>
			<blockquote className="blockquote mt-2 mb-1">		
				{
					servicio==0? Serv0: servicio==1? Serv1: Serv2
				}
			</blockquote>
		</>
	);
}
