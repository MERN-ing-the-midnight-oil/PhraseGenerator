

// Get references to the #generate element  Creates a var for the HTML button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var numberOfExamples = window.prompt ("How many example password sentence suggestions would you like?")
  var yesAnimals = window.prompt ("Do you prefer Animals or Plants? (please type 'Animals' or 'Plants'")
  //more prompts for greater variety could go here such as "Do you like Countries, or Natural Places?"

 //types of words //obviously this would be stronger with longer word lists, but I didn't want to clog the screen
var adjectiveList = ["Angry", "Boring", "Crazy", "Dead", "Early", "famous", "goth", "hardy", "Impressive", "Jolly", "Killer", "Limey", "massive"]
var animalList = ["Aardvark", "Bear", "Cougar", "Dodo", "Elephant", "Frog", "Gorilla", "Hippo", "Iguana", "Jaguar", "Kangaroo", "Lion",]
var plantList = ["Asparagus", "Bamboo", "Carnation", "Daffodil", "Epiphyte", "Flax", "Fern", "Spruce", "Maple", "Rose"]
var verbList = ["Runs","Walks","Cooks","Eats","SleepsIn","playsIn","visits","Studies","Attacks","Defends", "Hates", "Worships"]
var countryList = ["Austria","Belize","Cambodia","Kuwait","France","Spain","Tonga","Tunisia","England","Kenya"]

for (let i = 0; i <numberOfExamples; i++)
  {
 
//create an empty sentence array
var sentenceArray = []//starting with an empty array

//chooses a random index number within each list
var adjectiveIndex = Math.floor(Math.random()*adjectiveList.length);
var animalIndex = Math.floor(Math.random()*animalList.length);
var plantIndex = Math.floor(Math.random()*plantList.length);
var verbIndex = Math.floor(Math.random()*verbList.length);
var countryIndex = Math.floor(Math.random()*countryList.length);

//chooses the word from each types of words list at the randomly chosen Index numbers
var adjective = adjectiveList[adjectiveIndex]
var animal = animalList[animalIndex]
var plant = plantList[plantIndex]
var verb = verbList[verbIndex]
var country = countryList [countryIndex]

var sentenceArray = [] //creates a sentence array and populates it with the randomly chosen words
sentenceArray.push(...adjective)
if (yesAnimals==="Animals")
  {sentenceArray.push(...animal);}
if (yesAnimals!=="Animals")
  {sentenceArray.push(...plant);}
sentenceArray.push(...verb)
sentenceArray.push(...country)

//turns the sentence array into a string
var Sentence = sentenceArray.toString()
window.alert("Your suggested password is:  a" + Sentence.replace(/,/g,""))
  }
}






