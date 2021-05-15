// Lege component dat wordt gebruikt om subcomponenten te laden
import React, {useState} from 'react';

// Import components
import {Row, Col} from 'react-bootstrap';
import Determine from './Determine';
import Result from './Result';
import Options from './Options';
import NotFound from './NotFound';
import Found from './Found';

// Array bewaart de id's van benantwoordden vragen.
let history = [];

function Content(){
	// Huidige status van Conten
	const [id, setId] = useState([0,1]);
	
	// Component dat door content wordt geladen
	let content;
	
	// Sla huidig id op
	history.push(id)

	// Log history
	console.log("current history: "+ history)
	console.log('current id: ' + id)

	// Bepaal juiste component om te laden
	switch(id[0]){
		case 0:
			console.log("determine");
			content = <Determine id={id} setId={setId} history={history}/>;
			break;
		case 1:
			console.log("result");
			console.log(id);
			content = <Result id={id} setId={setId}/>
			break;
		case 2:
			console.log("Option");
			console.log(id);
			content = <Options id={id} setId={setId}/>
			break;
		case 3:
			content = <NotFound/>
			break;
		case 4:
			console.log("Found" + id);
			content = <Found id={id}/>
			break;
		case 5:
			// Delete de huidige state van de history, set de huidige state op vorige state
			console.log("Terug");
			history.pop();	
			history.pop();
			setId(history.pop());
			break;
		default:
			console.log("Error no correct table: " + id);

	}
	// Return JSX
	return (
		<Row className="container-fluid">
			<Col lg={2}> </Col>
			<Col className ="card" md={12} lg={8}>
				{content}
			</Col>
			<Col lg={2}></Col>
		</Row>
	);
}

export default Content;