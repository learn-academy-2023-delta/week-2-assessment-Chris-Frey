// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
// console.log(cohort.split(""))

// a) Your answer: Split the string by each character, including spaces
// b) Verify and explain: correct. Using an empty string separates by character. If we wanted to separate by 'word', we can use a string with a space " "

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: Undefined because there is no 'return'

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Map iterates through each element in the calling array and returns a new array with the modified values.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: filter returns an array of values that evaluate to 'true' inside the block. Only odd numbers return true in the function.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: correct. The `.`-notation in the log statement brings us to the languages attribute, and the index 0 ([0]) tells us we're looking at the first element in the array.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: It will log the `learnStudent` object with the name attribute and its value of "George"
// b) Verify and explain: The other values are hard-coded and acting as default values during object instantiation. I knew this but didn't see it. { student: 'George', cohort: 'Delta', year: 2023 } is printed to the console.
