const results = {
  'Linianos': (number) => number % 3 == 0 && number % 5 == 0,
  'Linio': (number) => (number % 3 == 0),
  'IT': (number) => number % 5 == 0
}

const multiples = (number) => {
  
  const keys = Object.keys(results)

  const keyFound = keys.find((key) => results[key](number))

  if (keyFound) {
    return keyFound
  }

  return number
}

module.exports = multiples