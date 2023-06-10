var container = document.getElementById("project");
var content = container.innerHTML;

// Looks after browser not reloading the HTML document
function allowDrop(ev) {
  ev.preventDefault();
}

// Triggers when the item is selected and dragged
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

// Triggers drop function when the selected item is dropped
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// Reset function to bring back all the items to its original position
function reset() {
  var container = document.getElementById("project");
  container.innerHTML = html;
}
var html;
window.onload = function () {
  html = document.getElementById("project").innerHTML;
};
