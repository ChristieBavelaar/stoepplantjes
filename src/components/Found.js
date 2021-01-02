import React from 'react';
import results from '../data/results' ;
import {Row, Col} from 'react-bootstrap';
function Found({id}){
	const currentResult = id[1];
	return(
		<div>
			<div className = "card-header">
				Gefeliciteert u heeft <b>{results[currentResult][0]}</b> gevonden. <br/>
			</div>
			<div className="card-body"> 
			<Row>
				<Col md={2} sm={0}> </Col>
				<Col sm={4} >
					<b>{results[currentResult][0]}</b> ({results[currentResult][1]}) 
					<div className = "plantinfo">
						<br/>
						{results[currentResult][2]}
						<br/> <br/>
					</div>
				</Col>
				<Col md={4} sm={8}>
					<img src={require('../images/result/' + currentResult + '.jpeg').default} alt={require('../images/LogoHortus.png')} width="100%"></img>
				</Col>
				<Col md={2} sm={0}> </Col>
			</Row>
			</div>
			<div className="card-footer">
				We houden een archief bij van de gevonden stoepplantjes en hun locatie. Kunnen wij uw gevonden plantje hier ook aan toevoegen? Stuur dan een foto van het plantje en de locatie waar u het heeft gevonden op naar: voorbeeld@email.com.
			</div>

		</div>
	);
}

export default Found