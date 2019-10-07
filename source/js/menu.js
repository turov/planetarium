'use strict';

(function(){
  var header = document.querySelector('.header');
  var burger = header.querySelector('.header__menu-button');
  var links = header.querySelectorAll('.header__nav-link');
  header.classList.remove('header--opened');
  burger.onclick = function() {
    header.classList.toggle('header--opened');
  }
  links.forEach(function(item){
    item.onclick = function() {
      if (header.classList.contains('header--opened'))
      header.classList.remove('header--opened');
    }
  });
})();