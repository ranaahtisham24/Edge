// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
var x = window.matchMedia("(max-width: 991.98px)")
var x1 = window.matchMedia("(min-width: 992px)")
window.onscroll = function () { scrollFunction(x)};

function scrollFunction(x) {
  if (!x.matches) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.background = "white";
      document.getElementById("navbar").style.boxShadow = "0 0 10px 0 rgb(88 89 92 / 25%)";
      let ids = document.getElementsByClassName("menu-nav-link")
      let links = document.getElementsByClassName("bar")
      let activelink = document.getElementsByClassName("active-nav-link")
      for (let i = 0; i < ids.length; i++) {
        ids[i].style.color = 'black'
      }
      for (let i = 0; i < links.length; i++) {
        links[i].style.background = '#001A0A'
      }
      for (let i = 0; i < activelink.length; i++) {
        activelink[i].style.color = '#0B7F42'
      }
      document.getElementById('sitelogo').style.fill = "#0B7F42";
    } else {
      document.getElementById("navbar").style.background = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById('sitelogo').style.fill = "white";

      let ids = document.getElementsByClassName("menu-nav-link")
      for (let i = 0; i < ids.length; i++) {
        ids[i].style.color = 'white'
      }
      links = document.getElementsByClassName("bar")
      for (let i = 0; i < links.length; i++) {
        links[i].style.background = 'white'
      }
      activelink = document.getElementsByClassName("active-nav-link")
      for (let i = 0; i < activelink.length; i++) {
        activelink[i].style.color = '#000'
      }
    }
  }else{
    document.getElementById("navbar").style.background = "white";
    document.getElementById('sitelogo').style.fill = "#0B7F42";
    let activelink = document.getElementsByClassName("active-nav-link")
    let ids = document.getElementsByClassName("menu-nav-link")
    for (let i = 0; i < ids.length; i++) {
      ids[i].style.color = 'black'
    }
    let links = document.getElementsByClassName("bar")
    for (let i = 0; i < links.length; i++) {
      links[i].style.background = '#001A0A'
    }
    for (let i = 0; i < activelink.length; i++) {
      activelink[i].style.color = '#0B7F42'
    }
  }
}

// hamburger toggle
function hamburgerfunction(x) {
  x.classList.toggle("change");
}









