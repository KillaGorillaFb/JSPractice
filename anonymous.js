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