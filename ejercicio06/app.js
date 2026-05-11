const librosTotales = [];


const boton = document.getElementById("btnAgregar");


boton.addEventListener("click", agregarLibro);


function agregarLibro(){

    
    const libro = {

        titulo: document.getElementById("titulo").value,

        autor: document.getElementById("autor").value,

        genero: document.getElementById("genero").value,

        anioPublicacion: document.getElementById("anio").value
    };

    
    librosTotales.push(libro);

    
    mostrarLibros();
}


function mostrarLibros(){

    
    const resultado = document.getElementById("resultado");

    
    resultado.innerHTML = "";

    
    resultado.innerHTML = "<ul></ul>";

  
    const lista = document.querySelector("ul");

   
    librosTotales.forEach(function(libro){

        lista.innerHTML += `

            <li class="card p-3 shadow">

                <p><strong>Título:</strong> ${libro.titulo}</p>

                <p><strong>Autor:</strong> ${libro.autor}</p>

                <p><strong>Género:</strong> ${libro.genero}</p>

                <p><strong>Año:</strong> ${libro.anioPublicacion}</p>

            </li>
        `;
    });
}