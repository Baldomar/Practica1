// Agregar una clase activa al enlace de navegación actual
document.addEventListener("DOMContentLoaded", function() {
    var currentSection = window.location.hash.substr(1);
    var currentLink = document.querySelector('a[href="#' + currentSection + '"]');
    if (currentLink) {
      currentLink.classList.add('active');
    }
  });
  
  // Resaltar enlaces de navegación al hacer clic
  var navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(function(navLink) {
        navLink.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  
  