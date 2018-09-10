const movies = ["Lilo and Stitch", "Hawaii 5-0", "Jurassic Park"];

//Store different types of elements
const elements = ["Hello", 7, { message: "Howzit Mom" }, true];

//console.log(movies.length);

console.log(movies[1]);

/*******Iterating Over An Array**********/

for (i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

//Using the for-of method
let ofMovie;

for (ofMovie of movies) {
    console.log(ofMovie);
}

movies.forEach(myElement => { //This is an anonymous function
    console.log(`For Loop ${myElement}`);
});

