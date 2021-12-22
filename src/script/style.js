//Shrink Navigation Menu on Scroll
window.onscroll = scrollShowNav;
function scrollShowNav() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByClassName("header")[0].style.backgroundColor = "black";
   } else {
      document.getElementsByClassName("header")[0].style.backgroundColor = "var(--color-first)";
   }
   if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
      document.getElementById("skill-bar-html").style.width = "160px";
   } else {
      document.getElementById("skill-bar-html").style.width = "0px";
   }
   if (document.body.scrollTop > 1180 || document.documentElement.scrollTop > 1180) {
      document.getElementById("skill-bar-css").style.width = "140px";
   } else {
      document.getElementById("skill-bar-css").style.width = "0px";
   }
   if (document.body.scrollTop > 1280 || document.documentElement.scrollTop > 1280) {
      document.getElementById("skill-bar-js").style.width = "120px";
   } else {
      document.getElementById("skill-bar-js").style.width = "0px";
   }
   if (document.body.scrollTop > 1380 || document.documentElement.scrollTop > 1380) {
      document.getElementById("skill-bar-react").style.width = "100px";
   } else {
      document.getElementById("skill-bar-react").style.width = "0px";
   }
}