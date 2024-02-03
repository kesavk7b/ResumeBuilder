import React from 'react';
import $ from 'jquery';
export default function PhotoPicker({picShape="",classname="",height="150px",width="110px"}){
    function setImage(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $('#imageLocation').attr('src', e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
    return(
        <div className={"nonePadMar "+classname} style={{width:"auto"}}>
            <div className="picChooseHolder" id="picChooseHolder">
                <input className="picChooser" id="imageChooser" type="file" onChange={e=>setImage(e.target)} />
                <img className={"img "+picShape} style={{height:height,width:width}} id="imageLocation" src="/images/mypic.jpg" alt="ur img" ></img>
            </div>
        </div>
    );
}