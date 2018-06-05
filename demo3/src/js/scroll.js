window.addEventListener('DOMContentLoaded', function() {
  Array.prototype.forEach.call(document.querySelectorAll('.scroll .scroll-element'), function(el) {
    el.addEventListener('click', function() {
      var parent = document.querySelector('.scroll');

      var marginLeft = parseInt(window.getComputedStyle(el).marginLeft);

      parent.style.left = '-'+(el.offsetLeft-marginLeft)+'px';
    });
  });
});
