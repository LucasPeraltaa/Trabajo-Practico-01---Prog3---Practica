const empleados = [];// array vacío

const boton = document.getElementById("btnAgregar");

boton.addEventListener("click", agregarEmpleado);

function agregarEmpleado(){

    const empleado = {

        nombre: document.getElementById("nombre").value,

        apellido: document.getElementById("apellido").value,

        dni: document.getElementById("dni").value,

        direccion: document.getElementById("direccion").value,

        sueldoxHs: Number(document.getElementById("sueldoHs").value),

        precioxHs: Number(document.getElementById("precioHs").value),

        salarioxMes: function(){

            return this.sueldoxHs * this.precioxHs;
        }
    };

    empleados.push(empleado); //guardamos en el array


    console.log(empleados);

    alert("Empleado agregado correctamente");
}