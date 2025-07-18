let a = {prop: 1}; 

function suma(n) {
    n.prop++
}

suma(a);
console.log(a); // { prop: 1 }, porque 'a' se modifica dentro de la función