import React from 'react';
import {addPage,addPage2} from './myFunctions';

export default function Content({contentType="content",children,pos="",func}){
    function onContentType(e){
        if(func===1)
            addPage(e);
        if(func===2)
            addPage2(e);
    }
    if(contentType==="content"){
        return(
            <div contentEditable={true} className={"overFlowBreak content"+pos} suppressContentEditableWarning={true} onKeyUp={(e)=>onContentType(e.target)}>
                {children}
            </div>
        );
    }
    
    if(contentType==="list"){
        const li=children.map(function(con,id){ return <li key={id}>{con}</li>});
        return(
            <>
            <ul contentEditable={true} suppressContentEditableWarning={true} onKeyUp={(e)=>onContentType(e.target)}>
                {li}
            </ul>
            </>
        );
    }
} 

