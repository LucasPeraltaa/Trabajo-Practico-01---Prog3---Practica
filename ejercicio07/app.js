const japanCiudades = [

    {
        nombre: "Tokio",
        poblacion: "14 millones",
        area: "2194 km²",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/12/Tokyo_Montage_2015.jpg",
        altitud: "40 msnm",
        clima: "Templado húmedo"
    },

    {
        nombre: "Osaka",
        poblacion: "2.7 millones",
        area: "225 km²",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/16/Osaka_Castle_Nishinomaru_Garden_April_2005.jpg",
        altitud: "50 msnm",
        clima: "Subtropical húmedo"
    },

    {
        nombre: "Kioto",
        poblacion: "1.4 millones",
        area: "827 km²",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/68/Kiyomizu.jpg",
        altitud: "55 msnm",
        clima: "Templado"
    },

    {
        nombre: "Hiroshima",
        poblacion: "1.1 millones",
        area: "906 km²",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hiroshima_Castle.jpg",
        altitud: "10 msnm",
        clima: "Húmedo subtropical"
    },

    {
        nombre: "Sapporo",
        poblacion: "1.9 millones",
        area: "1121 km²",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Sapporo_City_from_Mt.Moiwa.jpg",
        altitud: "29 msnm",
        clima: "Frío continental"
    },

    {
        nombre: "Nagasaki",
        poblacion: "400 mil",
        area: "405 km²",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/65/Nagasaki_City.jpg",
        altitud: "35 msnm",
        clima: "Subtropical"
    }
];


const contenedor = document.getElementById("contenedorCards");

japanCiudades.forEach(function(ciudad){

    contenedor.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card shadow h-100">

                <img src="${ciudad.imagen}" class="card-img-top">

                <div class="card-body">

                    <h3 class="card-title">
                        ${ciudad.nombre}
                    </h3>

                    <p><strong>Población:</strong> ${ciudad.poblacion}</p>

                    <p><strong>Área:</strong> ${ciudad.area}</p>

                    <p><strong>Altitud:</strong> ${ciudad.altitud}</p>

                    <p><strong>Clima:</strong> ${ciudad.clima}</p>

                </div>

            </div>

        </div>
    `;
});