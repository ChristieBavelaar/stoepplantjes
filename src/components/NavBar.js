// Subcomponent voor navigatiebalk van Determine
import React from 'react';

// import icons
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar({setId}){
    function terugHandler(){
        setId([5]);
    }

    function refreshHandler(){
        window.location.reload();
    }
    return(
        <div className="NavBar">
            <button className='fa NB' onClick={terugHandler}> Terug </button>
            <button className='fa NB' onClick={refreshHandler}> Opnieuw</button>
        </div> 
    );
}

export default NavBar