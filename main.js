
var myMessage = ("Hello World");
console.log(myMessage);
//

var differentString = ("This string is different");
console.log(differentString);
//

var num1 = (10);
console.log(num1);
//

console.log("Rick and Morty " + num1 + " Years");
//

var favoriteMovies = ["FastandFurious1", "FastandFurious2", "FastandFurious3", "Shindler's List", "FastandFurious4" ];

favoriteMovies.push("FastandFurious5", "FastandFurious6", "FastandFurious7");

console.log(favoriteMovies);
//

for (var i = 0 ; i < favoriteMovies.length ; i++) {

    console.log(favoriteMovies[i]);
};
//

var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";
var myArray = sentence.split(" ");

for (var i = 0; i < myArray.length ; i++) {
    if (myArray[i].length == 6) {
      console.log(myArray[i])
    }


};
