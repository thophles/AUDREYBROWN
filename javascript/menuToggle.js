var navOpen = false;
var myNav = document.getElementById("myNav");
var butt = document.getElementById("button");
function openNav()
  {
     myNav.style.width = "100%";
     butt.classList.add("is-active");
     navOpen = true;
  }
  function closeNav()
  {
     myNav.style.width = "0%";
     butt.classList.remove("is-active");
     navOpen = false;
  }
  function toggleNav()
  {
     if (navOpen == false)
     {
       openNav();
     }
     else
     {
       closeNav();
     }
  }
