// calculate difficulty from number of ingredients and steps
function calculateDifficulty() {
  // get length of ingredients table
  var ingredients = document.getElementById("ingredients");
  var numIngredients = ingredients.getElementsByTagName("li").length;

  // get length of direction table
  var directions = document.getElementById("directions");
  var numDirections = directions.getElementsByTagName("li").length;

  // very arbitary algorithm for difficulty
  if (numIngredients + numDirections < 15) {
    estimatedDifficulty = "Easy";
  } else if (numIngredients + numDirections < 20) {
    estimatedDifficulty = "Medium";
  } else if (numIngredients + numDirections < 25) {
    estimatedDifficulty = "Hard";
  } else {
    estimatedDifficulty = "Gordon Ramsay";
  }
  document.getElementById("difficulty").innerHTML = "Difficulty: " +
    estimatedDifficulty;
}

// find random recipe and redirect
function feelingLucky() {
  var recipes = [
    "recipes/meatballs.html",
    "recipes/peppers.html",
    "recipes/nameless_cake.html",
    "recipes/peppers.html",
    "recipes/risotto.html"
  ]
  var ceiling = recipes.length;
  var randomRecipe = Math.floor(Math.random() * ceiling);
  location.href=recipes[randomRecipe];

}

/* ------------------- SLIDESHOW -------------------------- */

var images = [
  "https://images.squarespace-cdn.com/content/v1/60f758d3901b7b7e13889ab1/4cf9e9d5-c1a2-48c8-821d-f04ab71c5f92/C9509712-6779-487B-A3EF-D441DC13B509.jpeg",
  "images/LentilSoup.jpg",
  "https://irepo.primecp.com/2015/08/233746/My-Own-Italian-Meatballs_ExtraLarge1000_ID-1156569.jpg?v=1156569",
  "https://healthyrecipesblogs.com/wp-content/uploads/2016/06/roasted-peppers-featured-2021.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/40/Italian_Risotto.png"
];

var slideIndex = 0;
function slideshow(prevOrNext) {
  slideIndex += prevOrNext;
  if (slideIndex < 0) {
    slideIndex = images.length-1;
  } else if (slideIndex == images.length) {
    slideIndex = 0;
  }
  document.currentImage.src = images[slideIndex];
}
