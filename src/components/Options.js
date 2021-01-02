import React, {useState} from 'react';
import questions from '../data/questions' ;
import {Row, Col} from 'react-bootstrap';
import results from '../data/results';

function Options({id, setId}){
	const [option, setOption] = useState(1);
	const maxOption = id.length-1;
	function vorigeHandler(){
		if(option > 1){
			setOption(option-1);
		}else{
			setOption(maxOption);
		}
		console.log("option: " + option)
	}
	function volgendeHandler(){
		if(option < maxOption){
			setOption(option+1);
		}else{
			setOption(1);
		}
		console.log("option: " + option)
	}
	function gevondenHandler(){
		console.log("heef gevonden .. " +option)
		setId([4, option]);
	}
	function weetnietHandler(){
		setId([3]);
	}
	return(
		<div>
			<div className = "card-header">
				Op basis van uw antwoorden zijn er meerdere mogelijkheden.
				Check de kenmerken van elke plant om te bepalen welke plant u heeft gevonden.
				<br/>
				<div className="btn-group">
						<button className="fa NW" onClick={vorigeHandler}> Vorige </button>
						<button className="fa NW" onClick={volgendeHandler}> Volgende </button>
				</div>
			</div>
			<div className="card-body"> 
				<Row>
					<Col md={2} sm={0}> </Col>
					<Col sm={4} >
						<div className = "plantinfo">
							{console.log("show info of: " + id[option])}
							<b>{results[id[option]][0]}</b> ({results[id[option]][1]}) 
							<br/> <br/>
							{results[id[option]][2]}
							<br/> <br/>				
						</div>
						<button className="fa JN" onClick={gevondenHandler}> Dit is mijn plantje</button>
					</Col>
					<Col md={4} sm={8}>
						<img src={require('../images/result/' + id[option] + '.jpeg').default} alt={require('../images/LogoHortus.png')} width="100%"></img>
					</Col>
					<Col md={2} sm={0}> </Col>
				</Row>
				<Row> 
					<div className='center'>
						<br/>
						<button className="fa NW" onClick={weetnietHandler}> Mijn plantje staat er niet tussen </button>
					</div>
				</Row>
		</div>
		</div>
	);
}

export default Options;