// Destructive Array Methods:
//these methods will for ever alter / mutate the array in your code once invoked.
//.push()
//.unshift()
//.pop()
//.shift()
//.splice

//Nondestructive Array Methods:
//these methods will create a new array, separate, that won't effect
//the OG array.
//spread operator [...]
//.slice()

// Solution 1
const cats = ["Milo", "Otis", "Garfield"];

// Solution 2
function destructivelyAppendCat(name) {
  return cats.push(name);
}

// Solution 3
let destructivelyPrependCat = (name) => cats.unshift(name);

// Solution 4
let destructivelyRemoveLastCat = () => cats.pop();

// Solution 5
let destructivelyRemoveFirstCat = () => cats.shift();

// Solution 6
function appendCat(name) {
  return [...cats, name];
}

// Solution 7
function prependCat(name) {
  return [name, ...cats];
}

// Solution 8
let removeLastCat = () => cats.slice(0, -1);

// Solution 9
let removeFirstCat = () => cats.slice(1);
