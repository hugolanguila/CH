import React, { useState }from 'react';

import { useForm } from './hooks/useForm';
import { useFetch } from './hooks/useFetch';


export const Cifrar= () =>{

	const [ { mensaje, password, pubkey, privkey }, handleInputChange, reset ] = 
						useForm({mensaje:'', password:'', pubkey:'', privkey:''});
						
	const [ formData, setFormData ] = useState({});
	const { data, loading, err } = useFetch('/cifradorhibrido', formData );

	const handleSubmit = (e) =>{
		e.preventDefault();
		if( mensaje.length > 1 && password.length > 1){
			const body = new FormData();
			body.append( 'mensaje', mensaje );
			body.append( 'password', mensaje );
			body.append( 'publickey', pubkey );
			body.append( 'privatekey', privkey );
			setFormData({
				method: 'POST',
				body
			});	
		}
	};
	
	return (
		<>
			<form onSubmit={ handleSubmit }>
				<div class="mb-3">
					<label for="mensaje" 
						class="form-label"
					>
						Mensaje a cifrar
					</label>
	  				<input  
						type="text" 
						class="form-control" 
						id="mensaje" 
						name="mensaje"
						value={ mensaje }
						onChange={ handleInputChange }
						placeholder=""
					/>
				</div>
				<div class="mb-3">
					<label for="password" 
						class="form-label"
					>
						Secreto
					</label>
	  				<input  
						type="text" 
						class="form-control" 
						id="password" 
						name="password"
						value={ password }
						onChange={ handleInputChange }
						placeholder=""
					/>
				</div>
				<div class="mb-3">
					<label 
						for="pubkey" 
						class="form-label"
					>
						Llave Publica
					</label>
					<textarea 
						class="form-control" 
						id="publickey" 
						name="pubkey"
						value={ pubkey }
						onChange={ handleInputChange }
						placeholder="Llave publica del receptor"
						rows="2"
						
					></textarea>
				</div>
				<div class="mb-3">
					<label 
						for="privkey" 
						class="form-label"
					>
						Llave Privada
					</label>
					<textarea 
						class="form-control" 
						id="privkey" 
						name="privkey"
						value={ privkey }
						onChange={ handleInputChange }
						placeholder="Llave privada del emisor"
						rows="2"
					></textarea>
				</div>
				<div class="mb-3">
					<input type="submit" className="btn btn-primary" value="Cifrar mensaje"/ >
				</div>
			</form>
			
			{
				data &&
				<blockquote className="blockquote mt-2 mb-1">
					<h5 className="">Texto Cifrado</h5>
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
				</blockquote>
			}
		</>
	);
};
