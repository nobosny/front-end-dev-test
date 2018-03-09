//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

// Let's remove any character different than numbers
const getNumbers = (pNum) => {
  return pNum.match(/\d+/g).join('');
}

const shortPhoneNumber = (cleanPNum) => {
  
}

const phoneNumber = (pNum) => {
  const numbers = getNumbers(pNum);

  return numbers;
}

module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
