'use strict';

(function () {
  var header = document.querySelector('.header');

  window.onscroll = function () {
    if (window.pageYOffset >= 66) {
      header.classList.add('header--float');
    }
    else if (window.pageYOffset < 66) {
      header.classList.remove('header--float');
    }
  };
})();