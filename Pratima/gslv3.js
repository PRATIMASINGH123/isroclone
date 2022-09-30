var desc3 = document.getElementById("description");
description="GSLV MkIII, chosen to launch Chandrayaan-2 spacecraft, is a three-stage heavy lift launch vehicle developed by ISRO. The vehicle has two solid strap-ons, a core liquid booster and a cryogenic upper stage.GSLV Mk III is designed to carry 4 ton class of satellites into Geosynchronous Transfer Orbit (GTO) or about 10 tons to Low Earth Orbit (LEO), which is about twice the capability of the GSLV Mk II.The two strap-on motors of GSLV Mk III are located on either side of its core liquid booster. Designated as ‘S200’, each carries 205 tons of composite solid propellant and their ignition results in vehicle lift-off. S200s function for 140 seconds. During strap-ons functioning phase, the two clustered Vikas liquid Engines of L110 liquid core booster will ignite 114 sec after lift -off to further augment the thrust of the vehicle. These two engines continue to function after the separation of the strap-ons at about 140 seconds after lift -off.";
var psl=0
function pslv(){

    if(psl<description.length){
        desc3.innerHTML += description.charAt(psl);
        psl++;
        setTimeout(pslv,30); 
    }

}
pslv();