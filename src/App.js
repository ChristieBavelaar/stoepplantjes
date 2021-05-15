//import images
import logo from './images/LogoHortus.png'

//import stylesheets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pre-made components
import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Row, Col} from 'react-bootstrap';

// import icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import self-made components
import Content from './components/Content';
import Start from './components/Start';

function App() {
	// State van App geeft aan of Start of Content wordt laten zien.
	const [start, setStart] = useState(0);

	// Het component dat App laat zien
	let startScreen;
	switch(start){
		case 0:
			console.log("start");
			startScreen = <Start setStart={setStart}/>
			break;
		case 1:
			console.log("start");
			startScreen = <Content/>
			break;
		default:
			console.log("Error no correct starting point: " + start);

	}

	// Return JSX
	return (
	<div className="App">
		{/*Navigation bar title*/}
		<Helmet>
			<title> Stoepplantjes </title>
		</Helmet>

		{/*Header*/}
		<div className="header">
			<Row>
				<Col className="logo" md={2} lg={2}>
						<img src={logo} alt="Hortus Botanicus" width="100%"/>
				</Col>
				<Col className ="title" md={10} lg={8}>
						<h1> Welk stoepplantje heb ik gevonden? </h1>
				</Col>
				<Col md={3} lg={2}></Col>
			</Row>
		</div>

		{/*Content*/}
		{startScreen}

		{/*Footer*/}
		<div className="fixed-bottom">
			<div className="footer">
				<FontAwesomeIcon className ="iconF" icon={faFacebook}/>
				<FontAwesomeIcon className ="iconF" icon={faInstagram} />
				<FontAwesomeIcon className="iconF" icon={faTwitter} />
			</div>
		</div>
	</div>
	);
}

export default App;
