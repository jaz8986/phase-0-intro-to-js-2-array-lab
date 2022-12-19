// Write your solution here

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat (name) {
    cats.unshift(name)
    return cats
}

function destructivelyRemoveCat () {
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat () {
    cats.shift()
    return cats
}

function destructivelyRemoveLastCat () {
    cats.pop()
    return cats
}

function appendCat (name) {
    let newCat = [...cats, name]
    return newCat
}

function prependCat (name) {
    let newCat = [name, ...cats]
    return newCat
}

function removeLastCat () {
    let num = (cats.length - 1)
    let newArray = (cats.slice(0, num))
    return newArray
}

function removeFirstCat () {
    let newArray = cats.slice(1)
    return newArray
  }