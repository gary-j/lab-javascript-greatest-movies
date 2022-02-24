// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  
  let directors = array.map((movie) => movie.director);

  // Je vérifie qu'une valeur n'apparait pas plusieurs fois dans 'directors', si oui, je la supprime, Mais du coup le bonus peut ne pas passer : (array.length === returnedArray.length)
  let filteredDirectors = [];

  directors.forEach(director => {
    if(!filteredDirectors.includes(director)){
      filteredDirectors.push(director);
    }
  });
    // console.log(filteredDirectors);

    return filteredDirectors;

  // return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  // conditions : genre = 'Drama' && director = Steven Spielberg
  // retourner un nombre
  spielbergDrama=0;

  array.forEach(elem => {
    if(elem.director==='Steven Spielberg' && elem.genre.includes('Drama')){
      spielbergDrama++;
    }
  })
  return spielbergDrama;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {

  if(array.length===0){
    return 0;
  }

  let allScores = array.map(film => film.score)
  // console.log(allScores + "ALL SCORES !!!")

  let sumScore = allScores.reduce(
    (previousValue ='', secondValue ='') => previousValue + secondValue, 0 );
  
    return (sumScore/allScores.length).toFixed(2) * 1;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
