// Laat een stoepplantjes resultaat zien
import React from 'react';

// import data
import results from '../data/results' ;

// import styling
import {Row, Col} from 'react-bootstrap';

function Result({id, setId}){
	// Sla index van huidige vraag op, maakt de code beter leesbaar
	const currentResult = id[1];

	function jaHandler(){
		console.log(currentResult);

		// Set state op id: [Found, index van resultaat]
		setId([4, currentResult]);
	}
	function neeHandler(){
		// Set state van Content op NotFound
		setId([3]);
	}
	
	// Return JSX
	return(
		<div>
			<div className = "result-header">
				U heeft mogelijk <b>{results[currentResult][0]}</b> gevonden... <br/>
			</div>
			<div className="card-body"> 
			<Row>
				
				<Col lg={6} md={6} sm={12} >
					<div className = "plantinfo">
					
					<b>{results[currentResult][0]}</b> ({results[currentResult][1]}) 
					
						<br/><br/>
						{results[currentResult][2]}
						<br/> <br/>
					
					Is dit het plantje dat u gevonden heeft?
					</div>
					<br/>
					<div className="btn-group">
						<button className="fa" onClick={jaHandler}> JA </button>
						<button className="fa" onClick={neeHandler}>NEE </button>
					</div>
					<br/><br/>
				</Col>
				<Col lg={6} md={6} sm={12}>
					<img src={require('../images/result/' + currentResult + '.jpeg').default} alt={require('../images/LogoHortus.png')} width="100%"></img>
				</Col>
				
			</Row>
		</div>
		</div>
	);
}

export default Result