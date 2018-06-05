window.list = [];

Array.prototype.forEach.call(document.querySelectorAll('.list-buttons a:not(.saveButton)'), function(el) {
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
  var blob = new Blob([JSON.stringify(window.list)], {type: 'application/json'});
  if (navigator.appVersion.toString().indexOf('.NET') > 0) {
        window.navigator.msSaveBlob(blob, 'list.json');
  } else {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'list.json';

    a.click();
  }
}
