//Shrink Navigation Menu on Scroll
window.onscroll = scrollShowNav;
function scrollShowNav() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByClassName("header")[0].style.backgroundColor = "black";
   } else {
      document.getElementsByClassName("header")[0].style.backgroundColor = "transparent";
   }
   if (document.body.scrollTop > 1040 || document.documentElement.scrollTop > 1040) {
      document.getElementById("skill-bar-html").style.width = "150px";
   } else {
      document.getElementById("skill-bar-html").style.width = "0px";
   }
   if (document.body.scrollTop > 1140 || document.documentElement.scrollTop > 1140) {
      document.getElementById("skill-bar-css").style.width = "100px";
   } else {
      document.getElementById("skill-bar-css").style.width = "0px";
   }
   if (document.body.scrollTop > 1240 || document.documentElement.scrollTop > 1240) {
      document.getElementById("skill-bar-js").style.width = "100px";
   } else {
      document.getElementById("skill-bar-js").style.width = "0px";
   }
   if (document.body.scrollTop > 1340 || document.documentElement.scrollTop > 1340) {
      document.getElementById("skill-bar-react").style.width = "80px";
   } else {
      document.getElementById("skill-bar-react").style.width = "0px";
   }
}