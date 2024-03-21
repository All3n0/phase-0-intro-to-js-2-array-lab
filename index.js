const cats = [
    "Milo","Otis","Garfield"
]
const undefined = [

]

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(Broom){
    return [...cats,Broom]
   
}
function prependCat(Arnold){
    
   return [Arnold , ...cats];
}
function removeLastCat(){
    const undefined = cats.slice();
    undefined.pop();
    return undefined

}
function removeFirstCat(){
    const undefined = cats.slice();
    undefined.shift();
    return undefined
}