window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "30px";
  }
}

function myFunction() {
    var x = document.getElementById("navbar-right");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  var menuItems = document.querySelectorAll('.menu li');

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(e) {
      var subMenu = this.querySelector('ul');
      if (subMenu) {
        e.preventDefault();
        subMenu.classList.toggle('active');
      }
    });
  }