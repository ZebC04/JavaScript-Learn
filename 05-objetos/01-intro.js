// 05-objetos/01-intro.js
let user = { 
    email: "ejemplo@correo.com",
    name: "Usuario",
    direccion: {
        calle: "Calle Falsa",
        numero: 123,
    },
    activo: true,
    recuperarClave: function() {
        console.log("Recuperando clave...");
    },
}