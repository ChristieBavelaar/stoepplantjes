//import images
import logo from './images/LogoHortus.png'

//import stylesheets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pre-made components
import {Helmet} from 'react-helmet';
import {Row, Col} from 'react-bootstrap';

// import icons
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import self-made components
import Content from './components/Content';

function App() {
	return (
	<div className="App">
		{/*Navigation bar title*/}
		<Helmet>
			<title> Stoepplantjes </title>
		</Helmet>

		{/*Header*/}
		<div className="header">
			<Row>
				<Col className="logo" md={4} lg={2}>
						<img src={logo} alt="Hortus Botanicus" width="100%"/>
				</Col>
				<Col className ="title" md={6} lg={8}>
						<h1> Welk stoepplantje heb ik gevonden? </h1>
				</Col>
				<Col md={3} lg={2}></Col>
			</Row>
		</div>

		{/*Content*/}
		{console.log("to the Content")}
		<Content/>

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
