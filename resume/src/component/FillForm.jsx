import React from 'react';
import $ from 'jquery';
export default function FillForm(children){
    function openModal(){
        $("#easyModal").toggle();
        console.log("hii");
    }
    function closeModal(){
        $("#easyModal").hide();
    }

    return(
        <>
            <button  className="btn myBtn" onClick={openModal}>Fill</button>
            <div id="easyModal" className="modal modalSize" onBlur={closeModal} style={{top:"100px",left:"10px"}}>
                <p>hii</p>
            </div>
        </>
    )
}