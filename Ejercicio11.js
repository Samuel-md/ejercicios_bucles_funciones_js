function averageMovieDuration(movies) {
  let total = 0;
  for (let i = 0; i < movies.length; i++) {
    total += movies[i].duration;
  }
  return (total / movies.length).toFixed(2);
}

console.log(averageMovieDuration(movies), 'minutos');
