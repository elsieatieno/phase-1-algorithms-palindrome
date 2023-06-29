function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split("").reverse().join("")
  return word === reversed
}

/* 
  Add your pseudocode here
  if the word is the same as the reversed then output will be true else it will be false

*/

/*
  Add written explanation of your solution here
  We declared a constant named reversed and the word parameter, takes the .split which
  makes the string into substrings. it then takes the . reverse and makes the first element
  become last then finally it takes the .join and combines the substrings into one string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("a"));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

}

module.exports = isPalindrome;
