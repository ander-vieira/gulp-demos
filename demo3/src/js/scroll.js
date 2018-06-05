window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.scroll .scroll-element').forEach(function(el) {
    el.addEventListener('click', function() {
      var parent = document.querySelector('.scroll');

      var marginLeft = parseInt(window.getComputedStyle(el).marginLeft);

      parent.style.left = '-'+(el.offsetLeft-marginLeft)+'px';
    });
  });
});
