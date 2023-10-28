import React from 'react';
import $ from 'jquery';
export default function Modal(children){
    function openModal(){
        $("#colorModal").toggle();
        console.log("hii");
    }
    return(
        <>
            <button  className="btn myBtn" onClick={openModal}>T</button>
            <div id="colorModal" className="modal">
                hiiii
            </div>
        </>
    )
}