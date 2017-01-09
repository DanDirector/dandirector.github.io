var card = document.getElementById("card-container");
document.getElementById("button").onclick = function(){
  if (card.style.display == "none"){
    card.style.display = "block";
  }
  else {
    card.style.display = "none";
  }
}
