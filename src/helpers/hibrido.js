import fileSaver from 'file-saver';
export const cifradorhibrido = async ( mensaje, password, publickey, privatekey, servicio, serv ) =>{
	
	const urlbase = `https://hugo-hr.herokuapp.com/${serv}`;
	
	const body = new FormData();
	body.append( 'mensaje', mensaje );
	body.append( 'password', password );
	body.append( 'publickey', publickey );
	body.append( 'privatekey', privatekey );
	
	const resp = await fetch( urlbase, {method:'POST', body } );
	if( servicio === 0) {
		let blob = await resp.blob();
		fileSaver.saveAs( blob, 'resultado.txt' );
	}else{
		const data = await resp.json();
		return data;
	}
}

export const decifradorhibrido = async ( mensaje, password, publickey, privatekey, firma, servicio ) =>{
	
	const urlbase = `https://hugo-hr.herokuapp.com/${servicio}`;
	
	const body = new FormData();
	body.append( 'mensaje', mensaje );
	body.append( 'password', password );
	body.append( 'publickey', publickey );
	body.append( 'privatekey', privatekey );
	body.append('firma', firma );
	
	const resp = await fetch( urlbase, {method:'POST', body } );
	const data = await resp.json();
	
	return data;
}
