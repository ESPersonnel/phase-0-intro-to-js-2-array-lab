// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


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
