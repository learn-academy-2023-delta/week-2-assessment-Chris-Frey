// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisible", () => {
  it("returns a string stating whether or not an input is divisible by 3", () => {

    expect(divisible(object1.number)).toEqual(`${object1.number} is divisible by three`)

    expect(divisible(object1.number)).toEqual(`${object1.number} is divisible by three`)

    expect(divisible(object2)).toEqual(`${object2} is not divisible by three`)
  })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

const divisible = (input) => {
   return (input % 3 === 0) ? `${input} is divisible by three` : `${input} is not divisible by three`
}
// Pseudo code:
// create a function that takes 1 argument
// write 2 sentences using interpolation to return 'is/not divisible by 3'
// write a conditional statement that calculates which statement to return, based on the answer
// yes/no

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capWords", () => {
  it("returns all words capitalized", () => {

    expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    
    expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const capWords = (input) => {
  return newArr = input.map(word => word[0].toUpperCase() + word.slice(1))
}
// Pseudo code:
// create function with 1 input 
// iterate through function with map 
// call toUpperCase on first index of each word 
// return

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel", () => {
  it("returns the index number of the first vowel", () => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
const firstVowel = (str) => {
  let vowels = ["a", "e", "i", "o", "u"]
  for(i = 0; i < str.length; ++i) {
    if(vowels.includes(str[i])) {
      return i
    }
  };
}
// Pseudo code:
// create function with 1 input 
// create variable array that holds all vowels 
// forEach loop that stops when includes method === true
// return the current index number