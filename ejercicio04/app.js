const boton = document.getElementById("btnMostrar");

boton.addEventListener("click", mostrarEmpleado);


function mostrarEmpleado(){

    const empleado = {

        nombre: document.getElementById("nombre").value,

        apellido: document.getElementById("apellido").value,

        dni: document.getElementById("dni").value,

        direccion: document.getElementById("direccion").value,

        salarioxMes: Number(document.getElementById("salario").value),

        calcularSalarioAnual: function(){

            return this.salarioxMes * 12;
        }
    };

    document.getElementById("resultado").innerHTML = `

        <div class="card p-4 shadow">

            <h2 class="mb-3">
                Datos del Empleado
            </h2>

            <p><strong>Nombre:</strong> ${empleado.nombre}</p>

            <p><strong>Apellido:</strong> ${empleado.apellido}</p>

            <p><strong>DNI:</strong> ${empleado.dni}</p>

            <p><strong>Dirección:</strong> ${empleado.direccion}</p>

            <p><strong>Salario mensual:</strong> $${empleado.salarioxMes}</p>

            <p>
                <strong>Salario anual:</strong> 
                $${empleado.calcularSalarioAnual()}
            </p>

        </div>
    `;
}