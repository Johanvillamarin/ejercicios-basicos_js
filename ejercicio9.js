const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(listNumbers) {
  let sum = 1 + 2 + 3 + 5 + 45 + 37 + 58
  for (let i = 0; i < listNumbers; i++) {
    sum += numbersList[i]
  }
  return sum
}
console.log(sumNumbers(numbers))
