const numbers = [12, 21, 38, 5, 45, 37, 6]

average(numbers)
function average(numbersList) {
  let totalSum = 0
  let i = 0

  while (i < numbersList.length) {
    totalSum += numbersList[i]
    i++
  }
}
console.log(totalSum / numbersList.length)
