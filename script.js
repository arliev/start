"use stcrict";

const numberofFilm = +prompt("skolko filmov vy uzhe prosmotrely?", "");


const personalMovieDB = {
count: numberofFilm,
movies:{},
actors:{},
genres:[],
privat:false
};

// const a = prompt('odin iz poslednig prosmotrennyh filmov?',''),
//     b = prompt('kak ochenite film?',''),
//     c = prompt ('odiz iz  poslednih prosmotrennyh filmov?', ''),
//     d = prompt ('kak ochenite film','');

//      personalMovieDB.movies[a] = b;
//      personalMovieDB.movies[c] = d;
//  переписали код 
     for(let i = 0; i < 2; i++){
        const a = prompt('odin iz poslednig prosmotrennyh filmov?',''),
              b = prompt('kak ochenite film?','');

        personalMovieDB.movies[a] = b;
     }

console.log(personalMovieDB);     