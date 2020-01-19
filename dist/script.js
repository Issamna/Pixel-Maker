$(document).ready(function() {
   makeGrid();
});

function colorClick(td) {
    var color = $("#colorPicker");
    td.addEventListener('click', function() {
         td.style.backgroundColor = color.val();
    });
};
function makeGrid() {
    resetGrid();
    var height = $("#input_height");
    var width = $("#input_width");
    for (let i = 0; i < height.val(); i++) {
        var tr = canvas.insertRow(i);
        for (let j = 0; j < width.val(); j++) {
            var td = tr.insertCell(j);
            td.addEventListener('click', colorClick(td));
        }
    }
};
function resetGrid() {
   document.getElementById('canvas').innerHTML = '';
};

$('#inputSubmit').click(function() {
     makeGrid();
});
$('#inputClear').click(function() {
     makeGrid();
});


var colorPicker;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#colorPicker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}


function updateAll(event) {
  $("#colorPicker").css("background-color", event.target.value);
   $("body").css("background-color", event.target.value);
}