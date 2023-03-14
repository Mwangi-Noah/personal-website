var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function displayBlock(){
  modal.style.display = "block";
}

function displayNone(){
  modal.style.display = "none";
}

btn.addEventListener("click", displayBlock);
span.addEventListener("click", displayNone);
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})
