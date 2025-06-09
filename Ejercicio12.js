function findMutantByPower(mutants, power) {
  const found = [];
  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      found.push(mutants[i].name);
    }
  }
  return found.length
    ? `Mutantes con el poder "${power}": ${found.join(', ')}`
    : `No se encontró ningún mutante con el poder "${power}".`;
}

console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'flight'));
