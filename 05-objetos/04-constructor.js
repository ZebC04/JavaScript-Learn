// {id: 1, recuperarClave: functiion(){} }

function Usuario(){
    this.id = 1;
    this.recuperarClave = function () { 
        console.log("recuperando clave...");
    }

}

let usuario = new Usuario();
console.log(usuario); 

