const contactos = [

    {
        nomyApe: "Juan Pérez",
        telefono: "381555111",
        direccion: "Tucumán",
        email: "juan@gmail.com"
    },

    {
        nomyApe: "María López",
        telefono: "381555222",
        direccion: "Salta",
        email: "maria@gmail.com"
    }
];

const boton = document.getElementById("btnAgregar");

boton.addEventListener("click", agregarContacto);


mostrarContactos();

function agregarContacto(){

    const contacto = {

        nomyApe: document.getElementById("nomyApe").value,

        telefono: document.getElementById("telefono").value,

        direccion: document.getElementById("direccion").value,

        email: document.getElementById("email").value
    };

    contactos.push(contacto);

    mostrarContactos();
}


function mostrarContactos(){

    const tabla =
        document.getElementById("tablaContactos");

   
    tabla.innerHTML = "";

    contactos.forEach(function(contacto){

        tabla.innerHTML += `

            <tr>

                <td>${contacto.nomyApe}</td>

                <td>${contacto.telefono}</td>

                <td>${contacto.direccion}</td>

                <td>${contacto.email}</td>

            </tr>
        `;
    });
}