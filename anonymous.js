const hello = function(name){
    const message = `Hello, ${name}!`;
    return message;
};

console.log(hello("Dory"));


//Fat Arrow Functions
const aloha = (name) => {
    console.log(name);
}
aloha("Nemo");


/***************************************/

const howzit = name => `Howzit, ${name}!`;
console.log(howzit("Nani"));//Prints Howzit, Nani!

console.log(Math.min(4.5, 5));
console.log(Math.pow(6,2));

//Math.ceil rounds up and Math.floor rounds down
console.log(Math.ceil(Math.random() * 3));