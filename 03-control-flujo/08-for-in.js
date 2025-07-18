let user = { 
    id: 1, 
    name: 'Chanchito Feliz', 
    age: 25, 
}; 

for (let prop in user) {
    console.log(prop, user[prop]); 
}

// para acceder a arrays no utilizar for in, instead utilizar for of 
// let animales = ['Chanchito Feliz', 'Dragon', 'Canguro']; 
// for (let indice in animales) { 
//     console.log(indice, animales[indice])
// } 