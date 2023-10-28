import React from 'react';
// import $ from 'jquery';
export default function Line({line=false,height="2px",bgColor=""}){
    if(line){
        return(
            <div className="line" style={{height:height,background:bgColor}}></div>
        );
    }
    else{
        return(null);
    }
}