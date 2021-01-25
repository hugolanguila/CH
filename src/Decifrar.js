import React, { useState }from 'react';

import { useForm } from './hooks/useForm';
import { useFetch } from './hooks/useFetch';


export const Decifrar= () =>{

	const [ { mensaje, password, pubkey, privkey, firma }, handleInputChange, reset ] = 
						useForm({mensaje:'', password:'', pubkey:'', privkey:'', firma:''});
						
	const [ formData, setFormData ] = useState({});
	const { data, loading, err } = useFetch('/decifradorhibrido', formData );

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
				<div class="mb-3">
					<label for="mensaje" 
						class="form-label"
					>
						Mensaje a decifrar
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
						Secreto cifrado
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
						placeholder="Llave publica del emisor"
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
						placeholder="Llave privada del receptor"
						rows="2"
					></textarea>
				</div>
				<div class="mb-3">
					<label 
						for="firma" 
						class="form-label"
					>
						Firma del mensaje
					</label>
					<textarea 
						class="form-control" 
						id="firma" 
						name="firma"
						value={ firma }
						onChange={ handleInputChange }
						placeholder="Firma del mensaje"
						rows="2"
					></textarea>
				</div>
				<div class="mb-3">
					<input type="submit" className="btn btn-primary" value="Decifrar mensaje"/ >
				</div>
			</form>
			
			{
				data &&
				<blockquote className="blockquote mt-2 mb-1">
					<h5 className="">Mensaje decifrado</h5>
					<p className="card-text">
						{ data?.mensaje }
					</p>
					<h5 className="">Informacion del mensaje</h5>
					<p className="card-text">
						{ data?.info }
					</p>

				</blockquote>
			}
		</>
	);
};
