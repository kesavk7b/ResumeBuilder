import React from 'react';
import {onloadAddPage1,onloadAddPage2} from './myFunctions';
export default function A4Container({children,containerId,page=1}){
    if(page===1){
        onloadAddPage1();
    }
    else{
        onloadAddPage2();
    }
    return(
        <div className="a4Container">
            {children}
        </div>
    );
}

