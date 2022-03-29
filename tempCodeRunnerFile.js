const states = {
  utah: 1,
  california: 2,
  texas: 3,
  arizona: 4
}

function totalPopulation(object) {
  const {utah, california, texas, arizona} = object
  return utah + california + texas + arizona
}
console.log(totalPopulation(states))