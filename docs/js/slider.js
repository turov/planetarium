'use strict';

(function() {
  var slider = document.querySelector('.hiw__list');
  var btnNext = document.querySelector('.slider-controls__control--next');
  var btnPrev = document.querySelector('.slider-controls__control--prev');
  var slideWidth = slider.querySelector('.step').offsetWidth;
  var maxTranslate = slideWidth * (slider.querySelectorAll('.step').length - 1);
  var BASE_COORD = 0;
  var currentCoord = BASE_COORD;
  var counter = 1;
  var output = document.querySelector('.slider-controls__numerical output');

  slider.setAttribute('style', `transform: translateX(${BASE_COORD})`);
  slider.setAttribute('data-translate', BASE_COORD);

  var showNext = function() {
    if (slider.getAttribute('data-translate') == maxTranslate) {
      slider.setAttribute('style', `transform: translateX(${BASE_COORD})`);
      slider.setAttribute('data-translate', BASE_COORD);
      currentCoord = BASE_COORD;
      counter = 1;
      output.innerHTML = `0${counter} / `
    } else {
    currentCoord = currentCoord + slideWidth;
    slider.setAttribute('style', `transform: translateX(-${currentCoord}px)`)
    slider.setAttribute('data-translate', `${currentCoord}`);
    counter = counter + 1;
    output.innerHTML = `0${counter} / `
    }
  }

  var showPrev = function() {
    if (slider.getAttribute('data-translate') == BASE_COORD) {
      slider.setAttribute('style', `transform: translateX(-${maxTranslate}px)`);
      slider.setAttribute('data-translate', maxTranslate);
      currentCoord = maxTranslate;
      counter = slider.querySelectorAll('.step').length;
      output.innerHTML = `0${counter} / `
    } 
    else {
      currentCoord = currentCoord - slideWidth;
      slider.setAttribute('data-translate', `${currentCoord}`);
      slider.setAttribute('style', `transform: translateX(-${currentCoord}px)`)
      counter = counter - 1;
      output.innerHTML = `0${counter} / `
    }
  }

  btnNext.addEventListener('click', showNext); 
  btnPrev.addEventListener('click', showPrev);
})();