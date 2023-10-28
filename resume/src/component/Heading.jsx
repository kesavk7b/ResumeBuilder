import React from 'react';
import {addPage,addPage2} from './myFunctions';
export default function Heading({heading,placeholder="Enter Title....",pos="",func}){
    function onHeadinType(e){
        console.log("hii",func);
        if(func===1){
            addPage(e);
        }
        else if(func===2){
            addPage2(e);
        }
    }
    return(
        <h1 className={pos} contentEditable="true" data-placeholder={placeholder} suppressContentEditableWarning={true} onKeyUp={(e)=>onHeadinType(e.target)}>{heading}</h1>
    );
}
