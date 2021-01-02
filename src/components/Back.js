import React from 'react';

import questions from '../data/questions';

function Back(setId, history){
    console.log('History type: '+ typeof history)
    console.log('Back history: ' + history)
    setId(history.pop());
}

export default Back