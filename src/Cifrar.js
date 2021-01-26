import React, { useState }from 'react';

import { useForm } from './hooks/useForm';
import { cifradorhibrido } from './helpers/hibrido';
import { AuxComponent } from './AuxComponent';

export const Cifrar= () =>{

	const [ { mensaje, password, pubkey, privkey }, handleInputChange ] = 
						useForm({
							mensaje:'', 
							password:'', 
							pubkey:'', 
							privkey:''
						});
	
	const [ serv, setServ ]= useState('cifradorhibrido');
	const [ servicio, setServicio ] =  useState(0);
	const [ data, setData ] = useState();
	
	const handleChangeService = (e) =>{
		e.preventDefault();
		setServicio(e.target.value);
		if(e.target.value == 0){
			setServ('cifradorhibrido');
		}else if( e.target.value == 1){
			setServ('cifraraes');
		}else if(e.target.value == 2){
			setServ('firmar');
		}		
	}

	const handleSubmit = async(e) =>{
		e.preventDefault();
		if( servicio === 0 ){
			await cifradorhibrido( mensaje, password, pubkey, privkey, servicio, serv);
		}else{
			let newData = await cifradorhibrido( mensaje, password, pubkey, privkey, servicio, serv);
			if( newData.ok ){
				setData( newData );
			}else{
				window.alert('No se pudo realizar la operacion que solicitaste');
			}
		}
	};
	
	return (
		<>
			<form onSubmit={ handleSubmit }>
				<div className="mb-3">
					<label htmlFor="mensaje" 
						className="form-label"
					>
						Mensaje a cifrar
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
						Llave AES
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
						placeholder="Llave publica del receptor"
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
						placeholder="Llave privada del emisor"
						rows="2"
					></textarea>
				</div>
				<select 
					className="form-select mb-3" 
					aria-label="Default select example"
					onChange={ handleChangeService }
					selected={servicio}
				>
  					<option value="0">Todos los servicios</option>
					<option value="1">Confidencialidad</option>
					<option value="2">Autenticacion</option>
				</select>
				
				<div className="mb-3">
					<input type="submit" className="btn btn-primary" value="Cifrar mensaje"/ >
				</div>
			</form>
			
			{
					data && <AuxComponent servicio={servicio} data={data} mensaje={mensaje}/>	
						
			}
			
		</>
	);
};
