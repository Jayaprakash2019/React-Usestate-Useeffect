import Countertwo from './Countertwo';
import React, { useState} from 'react';

const CounterOne = () =>{
    
    const[clickCount, updatedclickCount] = useState(0);

    const clickhandler = () => {
        updatedclickCount(clickCount+1);
        console.log("hello");
    }

    return( 
        <div>

          <Countertwo clickCount = {clickCount}/> 
            <h2> "Hello all"</h2>   
            <button onClick = {clickhandler}> clickme </button>
            <div>clickCount = {clickCount}</div>           
        </div>

    );
}

export default CounterOne;



