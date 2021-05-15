// Component dat verschillende opties van stoepplantjes laat zien
import React, {useState} from 'react';

// Import styling
import {Row, Col} from 'react-bootstrap';

// Import data
import questions from '../data/questions' ;
import results from '../data/results';

// Import components
import NavBar from './NavBar';

function Options({id, setId}){
	// State of component is het huidige resultaat dat te zien is
	const [option, setOption] = useState(1);
	
	// Sla het aantal resultaten op
	const maxOption = id.length-1;

	function vorigeHandler(){
		// Set state op het vorige resultaat, als er geen resultaat meer is, set op laatste resultaat
		if(option > 1){
			setOption(option-1);
		}else{
			setOption(maxOption);
		}
		console.log("option: " + option)
	}

	function volgendeHandler(){
		// Set state op het volgende resultaat, als er geen resultaat meer is, set op eerste resultaat 
		if(option < maxOption){
			setOption(option+1);
		}else{
			setOption(1);
		}
		console.log("option: " + option)
	}

	function gevondenHandler(){
		console.log("heeft gevonden .. " +id[option])

		// Set state op id: [Found, index van resultaat]
		setId([4, id[option]]);
	}

	function weetnietHandler(){
		// Set state van Content op NotFound
		setId([3]);
	}

	// Return JSX
	return(
		<div>
			<div className = "result-header">
				Op basis van uw antwoorden zijn er meerdere mogelijkheden.
				Check de kenmerken van elke plant om te bepalen welke plant u heeft gevonden.
				<br/>
				<button className="fa" onClick={vorigeHandler}> Vorige </button>
				<button className="fa" onClick={volgendeHandler}> Volgende </button>

			</div>
			<div className="card-body"> 
				<Row>
					<Col md={6} sm={12} >
						<div className = "plantinfo">
							{console.log("show info of: " + id[option])}
							<b>{results[id[option]][0]}</b> ({results[id[option]][1]}) 
							<br/> <br/>
							{results[id[option]][2]}
							<br/> <br/>				
						</div>
						<button className="fa JN" onClick={gevondenHandler}> Gevonden</button>
						<button className="fa NW" onClick={weetnietHandler}> Geen van de opties </button>
					</Col>
					<Col md={6} sm={12}>
						<img src={require('../images/result/' + id[option] + '.jpeg').default} alt={require('../images/LogoHortus.png')} width="100%"></img>
					</Col>
				</Row>

		</div>
		</div>
	);
}

export default Options;