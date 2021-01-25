import React from 'react';
import { Cifrar } from './Cifrar';
import { Decifrar } from './Decifrar';

const Hibrido = () =>{
  return (
    	<div className="container">
		<section className="mb-5">
			<Cifrar />
		</section>
		<hr/>
		<section className="mt-5">
			<Decifrar />
		</section>
	</div>
  );
};

export default Hibrido;
