import React, { useState }from 'react';

import { useForm } from './hooks/useForm';
import { useFetch } from './hooks/useFetch';
import { AuxComponentD } from './AuxComponentD';


export const Decifrar= () =>{

	const [ { mensaje, password, pubkey, privkey, firma }, handleInputChange,  ] = 
						useForm({
							mensaje:'', 
							password:'', 
							pubkey:'', 
							privkey:'', 
							firma:''
						});
	const [ serv, setServ ]= useState('decifradorhibrido');
						
	const [ servicio, setServicio ] =  useState(0);
	
	const handleChangeService = (e) =>{
		e.preventDefault();
		setServicio(e.target.value);
		if(e.target.value == 0){
			setServ('decifradorhibrido');
		}else if( e.target.value == 1){
			setServ('decifradorhibridoconfidencialidad');
		}else if(e.target.value == 2){
			setServ('verificar');
		}		
	}
	
	console.log(serv);
						
	const [ formData, setFormData ] = useState({});
	const { data } = useFetch(`https://hugo-hr.herokuapp.com/${serv}`, formData );

	const handleSubmit = (e) =>{
		e.preventDefault();
		if( mensaje.length > 1 && password.length > 1){
			const body = new FormData();
			body.append( 'mensaje', mensaje );
			body.append( 'password', password );
			body.append( 'publickey', pubkey );
			body.append( 'privatekey', privkey );
			body.append( 'firma', firma );
			setFormData({
				method: 'POST',
				body
			});	
		}
	};
	
	return (
		<>
			<form onSubmit={ handleSubmit }>
				<div className="mb-3">
					<label htmlFor="mensaje" 
						className="form-label"
					>
						Mensaje a verificar/decifrar
					</label>
	  				<input  
						type="text" 
						className="form-control" 
						id="mensaje" 
						name="mensaje"
						value={ mensaje }
						onChange={ handleInputChange }
						placeholder=""
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" 
						className="form-label"
					>
						Llave AES cifrada.
					</label>
	  				<input  
						type="text" 
						className="form-control" 
						id="password" 
						name="password"
						value={ password }
						onChange={ handleInputChange }
						placeholder=""
					/>
				</div>
				<div className="mb-3">
					<label 
						htmlFor="pubkey" 
						className="form-label"
					>
						Llave Publica
					</label>
					<textarea 
						className="form-control" 
						id="publickey" 
						name="pubkey"
						value={ pubkey }
						onChange={ handleInputChange }
						placeholder="Llave publica del emisor"
						rows="2"
						
					></textarea>
				</div>
				<div className="mb-3">
					<label 
						htmlFor="privkey" 
						className="form-label"
					>
						Llave Privada
					</label>
					<textarea 
						className="form-control" 
						id="privkey" 
						name="privkey"
						value={ privkey }
						onChange={ handleInputChange }
						placeholder="Llave privada del receptor"
						rows="2"
					></textarea>
				</div>
				<div className="mb-3">
					<label 
						htmlFor="firma" 
						className="form-label"
					>
						Firma del mensaje
					</label>
					<textarea 
						className="form-control" 
						id="firma" 
						name="firma"
						value={ firma }
						onChange={ handleInputChange }
						placeholder="Firma del mensaje"
						rows="2"
					></textarea>
				</div>
				
				<select 
					className="form-select mb-3" 
					aria-label="Default select example"
					onChange={ handleChangeService }
					selected={servicio}
				>
  					<option value="0">Verificar todos los servicios</option>
					<option value="2">Verificar Autenticacion</option>
				</select>
				
				<div className="mb-3">
					<input type="submit" className="btn btn-danger" value="Verificar/Decifrar mensaje"/ >
				</div>
				
			</form>
			
			{
					data && <AuxComponentD servicio={servicio} data={data} />	
						
			}
			
		</>
	);
};
