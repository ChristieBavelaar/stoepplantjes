import React, {useState} from 'react';

//import components
import {Row, Col} from 'react-bootstrap';
import Determine from './Determine';
import Result from './Result';
import Options from './Options';
import NotFound from './NotFound';
import Found from './Found';
import Back from './Back';

let history = [];

function Content(){
	const [id, setId] = useState([0,1]);
	let content;
	
	history.push(id)
	console.log("current history: "+ history)
	console.log('current id: ' + id)
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
			console.log("Terug");
			history.pop();	
			history.pop();
			setId(history.pop());
			break;
		default:
			console.log("Error no correct table: " + id);

	}
	/*if(id>=0){
		content = <Determine id={id} setId={setId}/>
	}else{
		content = <Result id={Math.abs(id)}/>
	}*/
	return (
		<Row className="container-fluid">
			<Col md={4} lg={2}> </Col>
			<Col className ="card" md={6} lg={8}>
				{content}
			</Col>
			<Col md={3} lg={2}></Col>
		</Row>
	);
}

export default Content;