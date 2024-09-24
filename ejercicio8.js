const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(stringList) {
  let longestWord = ''

  for (let word of stringList) {
    if (word.lenght > longestWord.length) {
      longestWord = word
    }
  }
  return longestWord
}
console.log(findLongestWord(avengers))
