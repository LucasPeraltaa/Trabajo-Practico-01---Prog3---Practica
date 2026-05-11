// EJERCICIO 8
// LOGIN

// Array de usuarios
const usuarios = [

    {
        nombreUsuario: "admin",
        contraseña: "1234",
        fechaCreacion: "2026"
    },

    {
        nombreUsuario: "lucas",
        contraseña: "5678",
        fechaCreacion: "2026"
    }
];

const boton = document.getElementById("btnLogin");

boton.addEventListener("click", iniciarSesion);


function iniciarSesion(){

    const usuarioIngresado =
        document.getElementById("usuario").value;

    const passwordIngresada =
        document.getElementById("password").value;

    
    const usuarioValido = usuarios.find(function(usuario){

        return usuario.nombreUsuario === usuarioIngresado &&
               usuario.contraseña === passwordIngresada;
    });

    //validacion
    if(usuarioValido){

        window.location.href = "agenda.html";

    }else{

        alert("Usuario o contraseña incorrectos");
    }
}