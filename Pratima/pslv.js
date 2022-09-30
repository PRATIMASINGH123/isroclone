var desc3 = document.getElementById("description");
description="Polar Satellite Launch Vehicle (PSLV) is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages. After its first successful launch in October 1994, PSLV emerged as the reliable and versatile workhorse launch vehicle of India with 39 consecutively successful missions by June 2017. During 1994-2017 period, the vehicle has launched 48 Indian satellites and 209 satellites for customers from abroad.Besides, the vehicle successfully launched two spacecraft – Chandrayaan-1 in 2008 and Mars Orbiter Spacecraft in 2013 – that later traveled to Moon and Mars respectively"
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
