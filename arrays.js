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


/****Adding To An Array******/
movies.push("Magnum PI");

console.log(movies);
console.log(movies.length-1);
console.log(movies[3]);
console.log(movies[movies.length-1]);

//Add to the beginning of an array, use unshift
movies.unshift("50 First Dates");
console.log(movies[0]);

//Removes element from the end
movies.pop();


//Put into a new variable
let theEndElemtn = movies.pop();

//Splice index to start, number of elements to remove)
movies.splice(1,2);
console.log(movies);