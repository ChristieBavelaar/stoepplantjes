import React from 'react';

import questions from '../data/questions';

import NavBar from './NavBar';

function Determine({id, setId}){
	console.log('id: '+ id)
	const currentQuestion = id[1];
	console.log('currentQuestion: ' + id )
	function neeHandler(){
		console.log("neeHandler");
		setId(questions[currentQuestion][1]);
	}
	function jaHandler(){
		console.log("jaHandler")
		setId(questions[currentQuestion][0]);
	}
	function weetnietHandler(){
		setId([3]);
	}

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