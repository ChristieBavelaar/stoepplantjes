// Bericht als de gebruiker een plantje gevonden heeft
import React from 'react';

// Import data
import results from '../data/results' ;

// Import styling
import {Row, Col} from 'react-bootstrap';

function Found({id}){
	// Sla index van huidige vraag op, maakt de code beter leesbaar
	const currentResult = id[1];

	function refreshHandler(){
        window.location.reload();
    }

	// Return JSX
	return(
		<div>
			<div className = "result-header">
				Gefeliciteert u heeft <b>{results[currentResult][0]}</b> gevonden. <br/>
			</div>
			<div className="card-body"> 
			<Row>
				<Col md={6} sm={12}>
					<b>{results[currentResult][0]}</b> ({results[currentResult][1]}) 
					<div className = "plantinfo">
						<br/>
						{results[currentResult][2]}
						<br/> <br/>
					</div>
				</Col>
				<Col md={6} sm={12}>
					<img src={require('../images/result/' + currentResult + '.jpeg').default} alt={require('../images/LogoHortus.png')} width="100%"></img>
				</Col>
			</Row>
			</div>
			<div className="result-footer">
				We houden een archief bij van de gevonden stoepplantjes en hun locatie. Kunnen wij uw gevonden plantje hier ook aan toevoegen? Stuur dan een foto van het plantje en de locatie waar u het heeft gevonden op naar: voorbeeld@email.com.
				<br/>
				<div className='center'>
					<button className='fa NB' onClick={refreshHandler}> Opnieuw</button>
				</div>
			</div>

		</div>
	);
}

export default Found