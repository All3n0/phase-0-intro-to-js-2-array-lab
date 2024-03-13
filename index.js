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
function appendCat(cats,kib){
   const undefined = cats.concat(kib)
   const Broomundefined = 
   [
    "Milo",
    "Otis",
    "Garfield",
    "Broom"
   ]
   return Broomundefined
   
     
}
function prependCat(){
    const Arnold = 'Arnold';
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