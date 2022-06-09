// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

// Array functions
//       destructivelyAppendCat(name)
//         1) appends a cat to the end of the cats array

//       destructivelyPrependCat(name)
//         2) prepends a cat to the beginning of the cats array

//       destructivelyRemoveLastCat()
//         3) removes the last cat from the cats array

//       destructivelyRemoveFirstCat()
//         4) removes the first cat from the cats array

//       appendCat(name)
//         5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged

//       prependCat(name)
//         6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

//       removeLastCat()
//         7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

//       removeFirstCat()
//         8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged



const destructivelyAppendCat = (name) => {
    cats.push(name)
}

const destructivelyPrependCat = (name) => {
    cats.unshift(name)
}
const destructivelyRemoveLastCat = () => {
    cats.pop()
}
const destructivelyRemoveFirstCat = () => {
    cats.shift()
}
const appendCat = (name) => {
    return cats.concat(name)
}
const prependCat = (name) => {
    return cats.unshift(name)
}
const removeLastCat = () => {
    return cats.slice(0, -1)
}
const removeFirstCat = () => {
    return cats.slice(1)
}
