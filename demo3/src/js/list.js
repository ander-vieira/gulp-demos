document.querySelectorAll('.list-buttons a').forEach(function(el) {
  el.addEventListener('click', function(event) {
    var list = document.querySelector('.list');

    var li = document.createElement('li');
    li.innerText = this.innerText;
    list.appendChild(li);

    event.preventDefault();
  });
});
