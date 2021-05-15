// Component dat vragen laat zien
import React from 'react';

// Import vragen
import questions from '../data/questions';

// Import components
import NavBar from './NavBar';

function Determine({id, setId}){
	console.log('id: '+ id)

	// Sla index van huidige vraag op, maakt de code beter leesbaar
	const currentQuestion = id[1];

	console.log('currentQuestion: ' + id )

	function neeHandler(){
		console.log("neeHandler");

		// Set het id op de NEE array van de huidige vraag
		setId(questions[currentQuestion][1]);
	}

	function jaHandler(){
		console.log("jaHandler")

		// Set het id op de JA handler van de huidige vraag
		setId(questions[currentQuestion][0]);
	}

	function weetnietHandler(){
		// Set het id op NotFound
		setId([3]);
	}

	// Return JSX
	return (
		<div className="determine">
			{currentQuestion!=1 && <NavBar setId = {setId}/>} 
			<div className="question"> 
				<br/>
				{questions[currentQuestion][2]}	
				<br/><br/>			
				<div className="btn-group">
					<button className="fa JN" onClick={jaHandler}> JA </button>
					<button className="fa NW" onClick={weetnietHandler}> WEET IK NIET </button>
					<button className="fa JN" onClick={neeHandler}>NEE </button>
				</div>
			</div>
		</div>
	);
}

export default Determine;