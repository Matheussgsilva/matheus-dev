//Shrink Navigation Menu on Scroll
window.onscroll = scrollShowNav;
function scrollShowNav() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByClassName("header")[0].style.backgroundColor = "black";
   } else {
      document.getElementsByClassName("header")[0].style.backgroundColor = "transparent";
   }
   if (document.body.scrollTop > 1280 || document.documentElement.scrollTop > 1280) {
      document.getElementById("skill-bar-html").style.width = "150px";
   } else {
      document.getElementById("skill-bar-html").style.width = "0px";
   }
   if (document.body.scrollTop > 1380 || document.documentElement.scrollTop > 1380) {
      document.getElementById("skill-bar-css").style.width = "100px";
   } else {
      document.getElementById("skill-bar-css").style.width = "0px";
   }
   if (document.body.scrollTop > 1480 || document.documentElement.scrollTop > 1480) {
      document.getElementById("skill-bar-js").style.width = "100px";
   } else {
      document.getElementById("skill-bar-js").style.width = "0px";
   }
   if (document.body.scrollTop > 1580 || document.documentElement.scrollTop > 1580) {
      document.getElementById("skill-bar-react").style.width = "80px";
   } else {
      document.getElementById("skill-bar-react").style.width = "0px";
   }
}