//Shrink Navigation Menu on Scroll
window.onscroll = scrollShowNav;
function scrollShowNav() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByClassName("header")[0].style.backgroundColor = "black";
   } else {
      document.getElementsByClassName("header")[0].style.backgroundColor = "var(--color-first)";
   }
   if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
      document.getElementById("html-bar").style.width = "180px";
   } else {
      document.getElementById("html-bar").style.width = "0px";
   }
   if (document.body.scrollTop > 1180 || document.documentElement.scrollTop > 1180) {
      document.getElementById("css-bar").style.width = "160px";
   } else {
      document.getElementById("css-bar").style.width = "0px";
   }
   if (document.body.scrollTop > 1280 || document.documentElement.scrollTop > 1280) {
      document.getElementById("js-bar").style.width = "150px";
   } else {
      document.getElementById("js-bar").style.width = "0px";
   }
   if (document.body.scrollTop > 1380 || document.documentElement.scrollTop > 1380) {
      document.getElementById("react-bar").style.width = "140px";
   } else {
      document.getElementById("react-bar").style.width = "0px";
   }
   if (document.body.scrollTop > 1420 || document.documentElement.scrollTop > 1420) {
      document.getElementById("styled-bar").style.width = "120px";
   } else {
      document.getElementById("styled-bar").style.width = "0px";
   }
   if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      document.getElementById("ts-bar").style.width = "80px";
   } else {
      document.getElementById("ts-bar").style.width = "0px";
   }
}