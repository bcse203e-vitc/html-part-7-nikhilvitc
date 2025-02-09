function analyzeText() {
  let text = document.getElementById('textInput').value;
  let charCount = text.length;
  document.getElementById('charCount').innerText = `Character Count (including spaces): ${charCount}`;

  let words = text.trim().split(/\s+/);
  let wordCount = words.length;
  document.getElementById('wordCount').innerText = `Word Count: ${wordCount}`;

  let wordFrequency = {};
  words.forEach(word => {
    word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (word) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    }
  });

  let highlightedText = words.map(word => {
    let cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (wordFrequency[cleanWord] > 1) {
      return `<span class="highlight">${word}</span>`;
    }
    return word;
  }).join(' ');

  document.getElementById('highlightedText').innerHTML = `Highlighted Text: <p>${highlightedText}</p>`;
}
