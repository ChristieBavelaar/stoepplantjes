import React from 'react';
import results from '../data/results' ;
import {Row, Col} from 'react-bootstrap';
function Result({id, setId}){
	const currentResult = id[1];
	function jaHandler(){
		console.log(currentResult);
		setId([4, currentResult]);
	}
	function neeHandler(){
		setId([3]);
	}

	return(
		<div>
			<div className = "card-header">
				U heeft mogelijk <b>{results[currentResult][0]}</b> gevonden... <br/>
				Check de kenmerken om te kijken of dit inderdaad de plant is die u heeft gevonden.	
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
					Is dit het plantje dat u gevonden heeft?
					<br/>
					<div className="btn-group">
						<button className="fa" onClick={jaHandler}> JA </button>
						<button className="fa" onClick={neeHandler}>NEE </button>
					</div>
				</Col>
				<Col md={4} sm={8}>
					<img src={require('../images/result/' + currentResult + '.jpeg').default} alt={require('../images/LogoHortus.png')} width="100%"></img>
				</Col>
				<Col md={2} sm={0}> </Col>
			</Row>
		</div>
		</div>
	);
}

export default Result