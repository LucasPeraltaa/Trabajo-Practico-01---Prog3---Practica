const boton = document.getElementById("btnMostrar");

boton.addEventListener("click", mostrarProducto);

function mostrarProducto(){

    const producto = {

        nombre: document.getElementById("nombre").value,

        precio: Number(document.getElementById("precio").value),

        descripcion: document.getElementById("descripcion").value,

        marca: document.getElementById("marca").value,

        porcDescuento: Number(document.getElementById("descuento").value),

        calcularDescuento: function(){

            const descuento = this.precio * this.porcDescuento / 100;

            return this.precio - descuento;
        }
    };

    document.getElementById("resultado").innerHTML = `

        <div class="card p-4 shadow">

            <h2 class="mb-3">
                Datos del Producto
            </h2>

            <p><strong>Nombre:</strong> ${producto.nombre}</p>

            <p><strong>Precio:</strong> $${producto.precio}</p>

            <p><strong>Descripción:</strong> ${producto.descripcion}</p>

            <p><strong>Marca:</strong> ${producto.marca}</p>

            <p><strong>Descuento:</strong> ${producto.porcDescuento}%</p>

            <p>
                <strong>Precio Final:</strong> 
                $${producto.calcularDescuento()}
            </p>

        </div>
    `;
}