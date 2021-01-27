var randomNuber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNuber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNuber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomNuber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNuber1 > randomNuber2)
{
    document.querySelector("h1").innerHTML = "Play 1 wins";
}
else if(randomNuber1 < randomNuber2)
{
    document.querySelector("h1").innerHTML = "Play 2 wins";

}
else
{
    document.querySelector("h1").innerHTML = "Draw";

}