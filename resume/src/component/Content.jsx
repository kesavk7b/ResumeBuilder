import React from 'react';
import {addPage,addPage2} from './myFunctions';

export default function Content({contentType="content",content,pos="",func,thead,tbody,contentClass,subHeading,children}){
    function onContentType(e){
        if(func===1)
            addPage(e);
        if(func===2)
            addPage2(e);
    }
    if(contentType==="content"){
        let cont;
        if(content)
            cont=content.map(function(con,id){ 
                return (
                    <>
                        {subHeading && <h6>{subHeading[id]}</h6>}
                        <p>{con}</p>
                    </>
                    );
            });
        return(
            <div contentEditable={true} className={"overFlowBreak content"+pos} suppressContentEditableWarning={true} onKeyUp={(e)=>onContentType(e.target)}>
                {cont}
                {children}
            </div>
        );
    }
    
    else if(contentType==="list"){
        const li=content.map(function(con,id){ return <li key={id}>{con}</li>});
        return(
            <>
            <ul className={contentClass} contentEditable={true} suppressContentEditableWarning={true} onKeyUp={(e)=>onContentType(e.target)}>
                {li}
            </ul>
            </>
        );
    }
    else if(contentType==="table"){
        let columnWidth=100/thead.length+"%";
        const th=thead.map(function(con,id){ return <th className="text-center" style={{width:columnWidth}}>{con}</th>});
        const body=tbody.map(function(con,id){
             return (
             <tr>
                {con.map(function(con,id){ return (<td className="text-center">{con}</td>)})}
            </tr>)
            });
        return(
            <div className="row" style={{padding:"5px",paddingLeft:"20px",paddingRight:"20px"}}>
                <table  className="table-bordered col-xs-12">
                    <thead>
                        <tr>
                            {th}
                        </tr>
                    </thead>
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        );
    }
} 

