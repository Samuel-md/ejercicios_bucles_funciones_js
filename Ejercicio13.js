function calculateActorsAges(actors) {
  const currentYear = new Date().getFullYear();
  const result = [];

  for (let i = 0; i < actors.length; i++) {
    const age = currentYear - actors[i].born;
    result.push({ name: actors[i].name, age: age });
  }

  return result;
}

console.log(calculateActorsAges(actors));
