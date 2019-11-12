const multiples = require('./modules/multiples')

const run = (total = 100) => {
  for (let number = 1; number <=total; ++number) {
    console.log(multiples(number))
  }
}

run()
