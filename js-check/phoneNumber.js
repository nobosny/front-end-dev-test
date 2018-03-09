//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

const phoneNumber = (pNum) => {
  const matchedPhoneNumber = pNum.match(/^\D*?1?\D*?([2-9][0-9]{2})\D*?([2-9][0-9]{2})\D*?(\d{4})$/);
  return matchedPhoneNumber ? matchedPhoneNumber.slice(1,4).join('') : null;
}

module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
