
function crearUsuario(name, email) {
    return { 
        email, 
        name, 
        activo: true, 
        recuperarClave: function () { 
            console.log("recuperando clave..."); 

        }, 
};
}


let user1 = crearUsuario("Sebas", "Sebas@holamundo.io"); 
let user2 = crearUsuario("Pedro", "Pedro@holamundo.io"); 

console.log(user1, user2); 

