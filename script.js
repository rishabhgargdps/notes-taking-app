var m = 1;
function create() {
  if (document.getElementById("take-notes").value !== "") {
    var input = document.createElement("textarea");
    var note = document.getElementById("take-notes").value;
    input.value = note;
    input.className = "input2";
    input.id = m + "";
    document.getElementById("main page").appendChild(input);
    m++;
  }
}
function rendervisible_1() {
  document.getElementById("left-menu").style.visibility = "visible";
}
function reload() {
  location.reload();
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
var i = 0;
var i1 = 0;
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    i = 0;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn1")) {
    var dropdowns1 = document.getElementsByClassName("dropdown1-content");
    i1 = 0;
    for (i1 = 0; i1 < dropdowns1.length; i1++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains("show")) {
        openDropdown1.classList.remove("show");
      }
    }
  }
};

function select() {
  document.getElementById("select").style.display = "block";
}
function select1() {
  var k = document.getElementById("Search").value;
  document.getElementById(k).focus();
}

document.getElementById("add").addEventListener("click", select);
document.getElementById("edit").addEventListener("click", edit);
document.getElementById("del").addEventListener("click", del);
document.getElementById("color").addEventListener("click", color);
document.getElementById("Search").addEventListener("click", select1);

function edit() {
  var k = document.getElementById("which").value;
  document.getElementById(k).focus();
}

function del() {
  var k = document.getElementById("which").value;
  document.getElementById(k).style.display = "none";
}

function color() {
  var k = document.getElementById("which").value;
  document.getElementById(k).style.background = "red";
}
