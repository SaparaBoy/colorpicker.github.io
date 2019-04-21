var bg = document.getElementById("bg");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var txt = document.getElementsByTagName("h1");
red.value = 0;
green.value = 0;
blue.value = 0;

red.addEventListener("input", function() {
  bg.style.backgroundColor =
    "rgb(" + this.value + "," + green.value + "," + blue.value + ")";
  txt[0].textContent =
    "rgb(" + this.value + "," + green.value + "," + blue.value + ")";
});
green.addEventListener("input", function() {
  bg.style.backgroundColor =
    "rgb(" + red.value + "," + this.value + "," + blue.value + ")";
  txt[0].textContent =
    "rgb(" + red.value + "," + this.value + "," + blue.value + ")";
});
blue.addEventListener("input", function() {
  bg.style.backgroundColor =
    "rgb(" + red.value + "," + green.value + "," + this.value + ")";
  txt[0].textContent =
    "rgb(" + red.value + "," + green.value + "," + this.value + ")";
});
