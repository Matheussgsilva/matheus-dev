//Shrink Navigation Menu on Scroll
window.onscroll = scrollShowNav;
function scrollShowNav() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByClassName("header")[0].style.backgroundColor = "black";
   } else {
      document.getElementsByClassName("header")[0].style.backgroundColor = "transparent";
   }
   if (document.body.scrollTop > 1290 || document.documentElement.scrollTop > 1290) {
      document.getElementById("skill-bar-html").style.width = "150px";
   } else {
      document.getElementById("skill-bar-html").style.width = "0px";
   }
   if (document.body.scrollTop > 1390 || document.documentElement.scrollTop > 1390) {
      document.getElementById("skill-bar-css").style.width = "100px";
   } else {
      document.getElementById("skill-bar-css").style.width = "0px";
   }
   if (document.body.scrollTop > 1490 || document.documentElement.scrollTop > 1490) {
      document.getElementById("skill-bar-js").style.width = "100px";
   } else {
      document.getElementById("skill-bar-js").style.width = "0px";
   }
   if (document.body.scrollTop > 1590 || document.documentElement.scrollTop > 1590) {
      document.getElementById("skill-bar-react").style.width = "80px";
   } else {
      document.getElementById("skill-bar-react").style.width = "0px";
   }
}