const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
function repeatCounter(list) {
  // Completar
  const count = {}

  for (const word of list) {
    if (count[word]) {
      count[word]++
    } else {
      count[word] = 1
    }
  }
  const result = Object.entries(count)
    .map(([word, num]) => `${word}:${num}`)
    .join(', ')

  return result
}

console.log(repeatCounter(words))
