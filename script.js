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


function res(responsive){
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-350px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.7)";

  }
  prevScrollpos = currentScrollPos;
}
}

var responsive = window.matchMedia('(max-width)')
res(responsive);
responsive.addListener(res); 