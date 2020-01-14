// Random number genrator
function randomGenerator(){
    return Math.floor(Math.random() * 6) + 1;
}
//



var randomNumber1 = randomGenerator();


//image first  path

var randomImageSorce1 = "images/dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSorce1);

var randomNumber2= randomGenerator();

//var image 2 path 

var randomImageSorce2 = "images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSorce2);
 

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩"
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="🤦 Draw 🤦"
}