function isPalindrome(word) {
  // Write your algorithm here
  //takes word
  let revWord = word.split("").reverse().join(""); 
  //reverses the word given
  if (revWord === word){
    return true
  }//compares reversed word to given word looking for true to return true
  else {
    return false
  }//if does not match reverse, in other words not true, returns false

}

/* 
  Add your pseudocode here
  // function is palindrome for (word)
      new variable reverseWord equals (word) by splitting it, reversing it, then joining it
    
    if reverseWord is (word)
      return true
    if it is not the same (word) reversed
      return false

    
*/

/*
  Add written explanation of your solution here
  checking to see if a word is a palindrome. When the word is input, or the given words are input,
  the function has a variable revWord that splits the word, reverses the word, then joins the word backtogether.
  now wrote an if else statement to compare the revWord to word to return true if palindrome and false if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
