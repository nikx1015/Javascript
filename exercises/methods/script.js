var dogObject = {
    name: "Borker",
    species: "doggo",
    favoriteThings: ["dirty socks", "humans", "belly rubs"],
    bark: function(){
        console.log("bork bork");
    }
}

dogObject.bark();

var catObject = {
    name: "Sir Floofy Butt",
    species: "cat",
    favoriteThings: ["biting", "eating", "yelling"],
    meow: function(){
        console.log("meow, feed me or I'll bite you, meow");
    }
}

catObject.meow();

var birdObject = {
    name: "Mr.Birb",
    species: "birb",
    favoriteThings: ["peeping", "head banging", "bird stuff"],
    peep: function(){
        console.log("Peep Peep");
    }
}

birdObject.peep();

var calculator = {
    add: function(x, y) {
      return x + y
    },
    subtract: function(x, y) {
        return x - y
    },
    divide: function(x, y) {
        return x / y
    },
    multiply: function(x, y){
        return x * y
    }
  }
  
  var sum = calculator.add(2, 2);
  console.log(sum); // Expected output: 4

  var sum = calculator.add(10, 12);
  console.log(sum);

  var sum = calculator.add(1011, 2300);
  console.log(sum);

  var difference = calculator.subtract(6, 2);
  console.log(difference);

  var difference = calculator.subtract(4343, 958);
  console.log(difference);

  var difference = calculator.subtract(27, 18);
  console.log(difference);

  var quotient = calculator.divide(8, 4);
  console.log(quotient);

  var quotient = calculator.divide(2000, 20);
  console.log(quotient);

  var quotient = calculator.divide(21, 3);
  console.log(quotient);

  var product = calculator.multiply( 1, 3);
  console.log(product);

  var product = calculator.multiply(200, 80);
  console.log(product);

  var product = calculator.multiply(20, 4);
  console.log(product);

  var starWarsObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977",
    printMoviePoster: function(){
      // YOUR CODE GOES HERE
    }
  }