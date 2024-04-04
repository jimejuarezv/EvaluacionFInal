
import { lista_de_componentes } from "./Data.js";

lista_de_componentes.forEach((cada_web) => {
    let div_paginas = document.querySelector(".paginas");
    let div_web = document.createElement("div");
    div_web.classList.add("proyectos")
    div_web.innerHTML = `
        <a href="${cada_web.github_page}" class="contenedor"></a>
            <h class="titulo">${cada_web.nombre}</h2>
            <p class="descripcion">${cada_web.descripcion}</p>
            
                
            
    `;

    div_paginas.appendChild(div_web)
    div_root.innerHTML = bloque_principal;

    
});