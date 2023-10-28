import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeTemp({data}){
    var children;
    let navigate=useNavigate();
    function navigatePage(url,id){
        var path="/edit/"+url+"/"+id;
        navigate(path);
    }
    if(data){
        children=data.map(function(data,index){
                return (<div key={data.name} className="col-sm-3 tempCom" onClick={(e)=>navigatePage(index,data.id)}>
                    {/* <img src={data.tempImg} alt="nothing" /> */}
                    <p>hellllllllllllllllllllllllll</p>
                </div>);
        });
    }
    else{
        children=(<>nothing here</>);
    }
    return(
        <div className="row">
            {children}
        </div>
    );
}