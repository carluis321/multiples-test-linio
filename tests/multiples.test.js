const multiples = require('./../modules/multiples')

test('3 Must return Linio', () => {
  expect(multiples(3)).toEqual('Linio');
})

test('5 Must return IT', () => {
  expect(multiples(5)).toEqual('IT');
})

test('15 Must return Linianos', () => {
  expect(multiples(15)).toEqual('Linianos');
})

test('16 Must return number', () => {
  expect(multiples(16)).toEqual(16);
})

test('87 Must return Linio', () => {
  expect(multiples(87)).toEqual('Linio');
})

test('85 Must return IT', () => {
  expect(multiples(85)).toEqual('IT');
})

test('90 Must return Linianos', () => {
  expect(multiples(90)).toEqual('Linianos');
})

test('98 Must return number', () => {
  expect(multiples(98)).toEqual(98);
})
