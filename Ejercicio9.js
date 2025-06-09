function findOldestXMen(xMen) {
  let oldest = xMen[0];
  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldest.year) {
      oldest = xMen[i];
    }
  }
  return oldest;
}

console.log(findOldestXMen(xMen));
