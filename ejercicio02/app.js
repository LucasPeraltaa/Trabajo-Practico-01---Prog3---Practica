const boton = document.getElementById("btnMostrar");

boton.addEventListener("click", mostrarCoche);

function mostrarCoche(){

    // año actual
    const anioActual = new Date().getFullYear();

    
    const coche = {

        marca: document.getElementById("marca").value,

        modelo: document.getElementById("modelo").value,

        anio: document.getElementById("anio").value,

        color: document.getElementById("color").value,

        estado: document.getElementById("estado").value,

        precio: document.getElementById("precio").value,

        // calcular edad
        calcEdad: function(){

            return anioActual - this.anio;
        }
    };


    document.getElementById("resultado").innerHTML = `

        <div class="card p-4 shadow">

            <h2 class="mb-3">Datos del coche</h2>

            <p><strong>Marca:</strong> ${coche.marca}</p>

            <p><strong>Modelo:</strong> ${coche.modelo}</p>

            <p><strong>Año:</strong> ${coche.anio}</p>

            <p><strong>Color:</strong> ${coche.color}</p>

            <p><strong>Estado:</strong> ${coche.estado}</p>

            <p><strong>Precio:</strong> $${coche.precio}</p>

            <p><strong>Edad del coche:</strong> ${coche.calcEdad()} años</p>

        </div>
    `;
}