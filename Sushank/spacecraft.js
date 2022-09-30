
var i = 0;
var txt = "Evolutionary trends in the technologies related to Indian Space Research Organisation (ISRO) satellites, both past and present, are outlined. The issues related to the developmental complexities of different spacecraft subsystems are discussed in the context of the needs of the current generation operational spacecraft like the Indian Remote Sensing Satellite (IRS) and the IndianNational Satellite (INSAT) II. Considerations pertinent to reliability and long-life requirements, crucial to operational satellites, are also highlighted.";
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.7)";

  }
  prevScrollpos = currentScrollPos;
}