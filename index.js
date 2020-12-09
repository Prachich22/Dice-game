var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomNumber1 + ".png";
var randomimagesource = "images/" + randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomsource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomsource2);
if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "PLAYER 1 WINS";

}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}else{
  document.querySelector("h1").innerHTML ="DRAW";
}
