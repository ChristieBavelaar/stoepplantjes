// Welkomsbericht van de app
import React from 'react';
import {Row, Col} from 'react-bootstrap';


function Start({setStart}){
	function startHandler(){
		console.log("startHandler");

		// Set state van App naar Content
		setStart(1);
	}

	// return JSX
	return (
		<div>
			<Row className="container-fluid">
			<Col lg={2}> </Col>
			<Col className ="card" md={12} lg={8}>
				<div className="message">
				<p> Hoe vaak lopen we niet achteloos langs stoepplantjes? Hoewel ze een onopvallend bestaan leiden, helpen ze mee de stad te verkoelen en dragen bij aan de biodiversiteit. Hoogste tijd dus om eens nader kennis te maken met deze taaie rakkers.
				<br/>
				Deze webtool is gebaseerd op de 'Minigids Stoepplantjes'. Net zoals bij de zoekkaart kun je 52 stoepplantjes op naam brengen. In de stad groeien er heel veel meer. Wat er precies staat, verschilt per plek, plaats en regio.
				</p>
				</div>
				<button className="fa JN" onClick={startHandler} > START </button>
			</Col>
			<Col lg={2}></Col>
			</Row>
		</div>
	);
}

export default Start;