import React from 'react';
import results from '../data/results' ;
import {Row, Col} from 'react-bootstrap';

function Plant({id}){
	return(
		<div className="card-body"> 
			<Row>
				<Col md={2} sm={0}> </Col>
				<Col sm={4} >
					<div className = "plantinfo">
						<b>{results[id][0]}</b> ({results[id][1]}) 
						<br/> <br/>
						{results[id][2]}
						<br/> <br/>
						
					</div>
					<div className = "vraagCorrect">
						Is dit het plantje dat u gevonden heeft?
						<br/>
						<div className="btn-group">
							<button className="fa"> JA </button>
							<button className="fa">NEE </button>
						</div>
					</div>
				</Col>
				<Col md={4} sm={8}>
					<img src={require('../images/result/' + id + '.jpeg').default} alt={require('../images/LogoHortus.png')} width="100%"></img>
				</Col>
				<Col md={2} sm={0}> </Col>
			</Row>
		</div>
	);
}

export default Plant;