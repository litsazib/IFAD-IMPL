import React from 'react';

const TeamToggle = () => {
  const show = () =>{
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return(
    <>
      <img src="https://i.postimg.cc/yxTVRN3L/download.jpg" onClick={show}/>
      <div id="myDIV" className=" position-relative">
        <p className=" position-absolute bg-light">This is my DIV element..lgjhaldighaerghiuadfguiadfhguahgouhayfgohy</p>
      </div>
    </>
  )
}
export default TeamToggle