//Shrink Navigation Menu on Scroll
window.onscroll = scrollShowNav;
function scrollShowNav() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementsByClassName("header")[0].style.padding = "30px 50px 20px";
      document.getElementsByClassName("header")[0].style.backgroundColor = "black";
   } else {
      document.getElementsByClassName("header")[0].style.padding = "40px 60px 30px";
      document.getElementsByClassName("header")[0].style.backgroundColor = "transparent";
   }
}