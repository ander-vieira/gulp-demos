window.list = [];

document.querySelectorAll('.list-buttons a:not(.saveButton)').forEach(function(el) {
  el.addEventListener('click', function(event) {
    var list = document.querySelector('.list');

    var li = document.createElement('li');
    li.innerText = this.innerText;
    list.appendChild(li);

    window.list.push(this.innerText);

    event.preventDefault();
  });
});

document.querySelector('.list-buttons a.saveButton').addEventListener('click', function(event) {
  saveList();

  event.preventDefault();
});

function saveList() {
  var url = URL.createObjectURL(new Blob([JSON.stringify(window.list)], {type: 'application/json'}));
  var a = document.createElement('a');
  a.href = url;
  a.download = 'list.json';

  a.click();
}
