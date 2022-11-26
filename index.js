// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    cats.push("Ralph");
    return cats
}

function destructivelyPrependCat () {
    cats.unshift ("Bob");
    return cats
}

function destructivelyRemoveLastCat () {
    cats.splice(2);
    return cats
}

function destructivelyRemoveFirstCat () {
    cats.shift();
    return cats
}

function appendCat () {
   const newCats = cats.slice();
   newCats.push("Broom");
   return newCats
}

function prependCat () {
    const newCats = cats.slice();
   newCats.unshift("Arnold");
   return newCats
}

function removeLastCat () {
    const newCats = cats.slice();
    newCats.splice(2);
    return newCats
}

function removeFirstCat () {
    const newCats = cats.slice();
    newCats.shift();
    return newCats
}