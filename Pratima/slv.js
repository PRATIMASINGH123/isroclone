console.log("working");
var dec= document.getElementById("description");

var description = 'Satellite Launch Vehicle-3 (SLV-3) was Indias first experimental satellite launch vehicle, which was an all solid, four stage vehicle weighing 17 tonnes with a height of 22m and capable of placing 40 kg class payloads in Low Earth Orbit (LEO).';
var description3 = "Polar Satellite Launch Vehicle (PSLV) is the third generation launch vehicle of India. It is the first Indian launch vehicle to be equipped with liquid stages. After its first successful launch in October 1994, PSLV emerged as the reliable and versatile workhorse launch vehicle of India with 39 consecutively successful missions by June 2017. During 1994-2017 period, the vehicle has launched 48 Indian satellites and 209 satellites for customers from abroad.Besides, the vehicle successfully launched two spacecraft – Chandrayaan-1 in 2008 and Mars Orbiter Spacecraft in 2013 – that later traveled to Moon and Mars respectively"
var description4 = "Geosynchronous Satellite Launch Vehicle Mark II (GSLV Mk II) is the largest launch vehicle developed by India, which is currently in operation. This fourth generation launch vehicle is a three stage vehicle with four liquid strap-ons. The indigenously developed cryogenic Upper Stage (CUS), which is flight proven, forms the third stage of GSLV Mk II. From January 2014, the vehicle has achieved four consecutive successes.";
var description5 = "GSLV MkIII, chosen to launch Chandrayaan-2 spacecraft, is a three-stage heavy lift launch vehicle developed by ISRO. The vehicle has two solid strap-ons, a core liquid booster and a cryogenic upper stage.GSLV Mk III is designed to carry 4 ton class of satellites into Geosynchronous Transfer Orbit (GTO) or about 10 tons to Low Earth Orbit (LEO), which is about twice the capability of the GSLV Mk II.The two strap-on motors of GSLV Mk III are located on either side of its core liquid booster. Designated as ‘S200’, each carries 205 tons of composite solid propellant and their ignition results in vehicle lift-off. S200s function for 140 seconds. During strap-ons functioning phase, the two clustered Vikas liquid Engines of L110 liquid core booster will ignite 114 sec after lift -off to further augment the thrust of the vehicle. These two engines continue to function after the separation of the strap-ons at about 140 seconds after lift -off.The first experimental flight of LVM3, the LVM3-X/CARE mission lifted off from Sriharikota on December 18, 2014 and successfully tested the atmospheric phase of flight. Crew module Atmospheric Reentry Experiment was also carried out in this flight. The module reentered, deployed its parachutes as planned and splashed down in the Bay of Bengal.The first developmental flight of GSLV Mk III, the GSLV-Mk III-D1 successfully placed GSAT-19 satellite to a Geosynchronous Transfer Orbit (GTO) on June 05, 2017 from SDSC SHAR, Sriharikota. GSLV MkIII-D2, the second developmental flight of GSLV MkIII successfully launched GSAT-29, a high throughput communication satellite on November 14, 2018 from Satish Dhawan Space Centre SHAR, Sriharikota GSLV MkIII-M1, successfully injected Chandrayaan-2, India’s second Lunar Mission, in to Earth Parking Orbit on July 22, 2019 from Satish Dhawan Space Centre SHAR, Sriharikota"

var i=0;
    function slv(){
        if(i<description.length){
            dec.innerHTML += description.charAt(i);
            i++;
            setTimeout(slv,30);
        }
}
slv();

