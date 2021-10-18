// jQuery(document).ready(function ($) {

//   $('.owl-one').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 1
//       },
//       1000: {
//         items: 2
//       }
//     }
//   })
//   $('.owl-two').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 1
//       },
//       1000: {
//         items: 1
//       }
//     }
//   })

//   $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
//   $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
// })


var x1 = window.matchMedia("(min-width: 992px)")
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction(x1) };

function scrollFunction(x) {
  if (x.matches) {
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
  }
}

// hamburger toggle
function hamburgerfunction(x) {
  x.classList.toggle("change");
}

function myFunction(x) {
  if (x.matches) { // If media query matches

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
  else {

  }
}
var x = window.matchMedia("(max-width: 991.98px)")
var x1 = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
scrollFunction(x1) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes