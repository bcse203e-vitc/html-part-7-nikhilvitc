function checkPalindrome() {
  let phrase = document.getElementById('phrase').value;
  let cleanedPhrase = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedPhrase = cleanedPhrase.split('').reverse().join('');

  let resultText = cleanedPhrase === reversedPhrase ? "It's a palindrome!" : "It's not a palindrome.";
  
  document.getElementById('result').innerText = resultText;
}
