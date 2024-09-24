const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  const uniqueElements = []
  for (const element of list) {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element)
    }
  }
  return uniqueElements
}
console.log(removeDuplicates(duplicates))
