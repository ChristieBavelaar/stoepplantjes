// Bericht als de gebruiker geen plantje heeft gevonden
import React from 'react';


function NotFound({id, setId}){
	function refreshHandler(){
        window.location.reload();
    }
	return (
		<div>
			<div className="card-header">
				Helaas, we hebben uw plantje niet kunnen vinden.				
			</div>
			<div className="card-body">
				<div className="notFound">
					Soms is een plant lastig te herkennen doordat deze geen bloemen heeft. Wacht dan totdat er bloemen zichtbaar zijn en probeer het opnieuw.
					<br/>
					Met deze website kunt u 52 stoepplantjes op naam brengen. In de stad groeit er heel veel meer. Wat er precies staat verschilt per plek, plaats en regio.
					<br/> <br/>
					Wellicht kunnen wij uw plantje alsnog voor u op naam brengen. Stuur dan een foto van het plantje en de locatie waar u het heeft gevonden op naar: voorbeeld@email.com
					
					<div className='center'>
					<button className='fa NB' onClick={refreshHandler}> Opnieuw</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotFound;