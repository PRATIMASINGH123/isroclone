var dec2= document.getElementById("description");
var description2 = "With a lift off weight of 40 tonnes, the 24 m tall ASLV was configured as a five stage, all-solid propellant vehicle, with a mission of orbiting 150 kg class satellites into 400 km circular orbits.The Augmented Satellite Launch Vehicle (ASLV) Programme was designed to augment the payload capacity to 150 kg, thrice that of SLV-3, for Low Earth Orbits (LEO). While building upon the experience gained from the SLV-3 missions, ASLV proved to be a low cost intermediate vehicle to demonstrate and validate critical technologies, that would be needed for the future launch vehicles like strap-on technology, inertial navigation, bulbous heat shield, vertical integration and closed loop guidance."
var asl=0;

function aslv(){

    if(asl<description2.length){
        dec2.innerHTML += description2.charAt(asl);
        asl++;
        setTimeout(aslv,30); 
    }

}
aslv();