const getAverageOfScores = (movArray) => {
    if (movArray.length === 0) {
        return 0;
    }
    let sum = movArray.reduce((acc, current) => {
        if (!current.score) {
            return acc;
        }
        else {            
            return acc + current.score;
        }
    }, 0);
    return (Math.round((sum / movArray.length) * 100)) / 100;
}

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((movie) => movie.director);
    return directorsArray;
    
    // BONUS Iteration 1.1 - clean duplicates
    // const uniqueDirectorsArray = directorsArray.filter((director, index) => directorsArray.indexOf(director) === index);
    /* OUTPUT: 
      BEFORE: [
        'Sidney Lumet',
        'Francis Ford Coppola',
        'Francis Ford Coppola',
        'Sidney Lumet',
        'Sidney Lumet'
      ]
      AFTER:
      [ 'Sidney Lumet', 'Francis Ford Coppola' ]
      */
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergDramasCount = moviesArray.filter((movie) => {
        const isSpielberg = movie.director === 'Steven Spielberg';
        const isDrama = movie.genre.includes('Drama');
        return isSpielberg && isDrama;
    })
    return spielbergDramasCount.length;
}
// I think more optimal approach, system-resources-wise, if we want to know
// just the number and not do anything more with the newArray,
// is just to count the movies on the fly with:
/*
function howManyMovies(moviesArray) {
    let spielbergDramasCount = 0;
    moviesArray.forEach(movie => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            spielbergDramasCount++;
        }
    });
    return spielbergDramasCount;
}
*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    return (getAverageOfScores(moviesArray));
}
//As I have to do more averages, I have created a generic average function on top of this file.
/* Without generic function it would be:
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let sum = moviesArray.reduce((acc, current) => {
        if (!current.score) {
            return acc;
        }
        else {            
            return acc + current.score;
        }
    }, 0);
    return (Math.round((sum / moviesArray.length) * 100)) / 100;
}
*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter(movie => {
        return (movie.genre.includes('Drama'));
    });
    return (getAverageOfScores(dramaMoviesArray));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray];
    newArray.sort((a, b) => {
        if (a.year < b.year) {
            return -1;
        }
        else if (a.year === b.year){
            return a.title.localeCompare(b.title);
        }
    });
    console.log(newArray);
    return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = moviesArray.map(movie => movie.title);
    newArray.sort((a, b) => a.localeCompare(b));
    newArray.splice(20);
    return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
