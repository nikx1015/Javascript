function sayJavascript(){
    console.log("I love Javascript");
}

sayJavascript();

function greetSomeone(nameParameter){
    console.log(`Hello, ${nameParameter}`)
}

greetSomeone("Kim");
greetSomeone("Josh");

function makePlan(nameParameter, destinationParameter){
    console.log(`Hello, ${nameParameter} wants to go to ${destinationParameter}`)
}


makePlan("Nikki", "Spain");
makePlan("Jin", "China");
makePlan("Beans", "Mexico");


function makeSandwich(sandwichName, breadType, isToasted){
console.log(`Hello, ${sandwichName} has ${breadType} and ${isToasted}`)
}

makeSandwich("BLT", "white bread", "is toasted");
makeSandwich("italian sub", "italian bread", "is not toasted");
makeSandwich("pizza sub", "garlic bread", "is toasted");

var dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
  }

  function printHobbies(hobbies){
  for(var i = 0; i < dwayneObject.hobbies.length; i++){
      console.log(`${hobbies}`)
     }
  }
  printHobbies(dwayneObject.hobbies);

  function printToDom(htmlString, idOfElement){
    var element = document.querySelector(`#${idOfElement}`);
    element.innerHTML = htmlString;
}

  var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]
  var sandwichHTMLString ="";
  for(var i = 0; i < sandwichToppings.length; i++){
      sandwichHTMLString = sandwichHTMLString + `<li>${sandwichToppings[i]}</li>`

  }

  printToDom(sandwichHTMLString, "sandwich-container");

