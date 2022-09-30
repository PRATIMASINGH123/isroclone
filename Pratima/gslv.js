var desc3 = document.getElementById("description");
description="Geosynchronous Satellite Launch Vehicle Mark II (GSLV Mk II) is the largest launch vehicle developed by India, which is currently in operation. This fourth generation launch vehicle is a three stage vehicle with four liquid strap-ons. The indigenously developed cryogenic Upper Stage (CUS), which is flight proven, forms the third stage of GSLV Mk II. From January 2014, the vehicle has achieved four consecutive successes.";
var psl=0
function pslv(){

    if(psl<description.length){
        desc3.innerHTML += description.charAt(psl);
        psl++;
        setTimeout(pslv,30); 
    }

}
pslv();

var infoToshow=null;

function handleimg(event){
    var info = event.target.id;
    console.log(info);
    if(infoToshow === null){
        console.log(true);
    }
    else{
       infoToshow.style.display = "none";
       infoToshow = null;
       console.log(false);
       return;
    }

    switch(info){

        case "info1" :
        
            infoToshow =  document.getElementById("inf1");
            infoToshow.style.display = "block";
            break;
        
        case "info2":
            infoToshow =  document.getElementById("inf2");
            infoToshow.style.display = "block";
            break;

        case "info3":
        
            infoToshow =  document.getElementById("inf3");
            infoToshow.style.display = "block";
            break;

        case "info4":
            infoToshow = document.getElementById("inf4");
            infoToshow.style.display = "block";
            break;
        case "info5":
            infoToshow = document.getElementById("inf5");
            infoToshow.style.display = "block";
            break;
        case "info6":
            infoToshow = document.getElementById("inf6");
            infoToshow.style.display ="block";
            break;

    default :
        null;

    }

}
