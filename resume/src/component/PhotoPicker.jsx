import React from 'react';
import $ from 'jquery';
import img from '../assets/mypic.jpg';
export default function PhotoPicker({photoPos="left"}){
    function setImage(input) {
        console.log(input);
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $('#imageLocation').attr('src', e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    return(
        <div className="nonePadMar justify-content-center" style={{width:"130px"}}>
            <div className="picChooseHolder" id="picChooseHolder">
                <input className="picChooser" id="imageChooser" type="file" onChange={e=>setImage(e.target)} />
                <img className="img" id="imageLocation" src={img} alt="ur img" ></img>
            </div>
        </div>
    );
}