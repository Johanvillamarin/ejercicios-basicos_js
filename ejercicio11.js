const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  let totalSum = 0
  let count = 0

  for (const element of list) {
    if (typeof element === 'number') {
      totalSum += element
      count++
    } else if (typeof element === 'string') {
      totalSum += element.length
      count++
    }
  }

  return count > 0 ? totalSum / count : 0 //
}

console.log(averageWord(mixedElements))
