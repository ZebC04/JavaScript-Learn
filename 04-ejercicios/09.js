let pares =[ 
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}]
]; 

let array = [{
    id: 1, 
    name: "Nicolas", 
}, {
    id : 2, 
    name: "Felipe",

}, {
    id : 3, 
    name : "Chanchito",
}]; 

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection.push({id: elemento[0], ...elemento[1]});
    }
    return collection;

}

let restulado = toCollection(pares);
console.log(restulado);
