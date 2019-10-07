'use strict';

(function () {
  var faqButtons = document.querySelectorAll('.faq__button');
  var previousTab = null;

  faqButtons.forEach(function (item) {
    item.onclick = function () {
      if (previousTab) {
        previousTab.classList.remove('faq__button--opened');
      }
      if (item === previousTab) {
        previousTab = null;
      } else {
        item.classList.add('faq__button--opened');
        previousTab = item;
      }
    }
  });
}())