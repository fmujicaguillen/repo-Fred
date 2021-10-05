let divContenido = document.getElementById("contenido");
let miBoton = document.createElement("button");

miBoton.innerText = "Clickeame!";
divContenido.appendChild(miBoton);

//elementoHTML, addEventListener("evento,function(){}")
miBoton.addEventListener("click",function(){
    alert("Haz hecho click");
})

let peliculas = [
    "Parasite",
    "Shang Chi",
    "Interstellar",
    "Matrix",
    "El bueno, el malo y el feo",
    "Geo tormanta",
    "Jhon Wick",
    "Constantine",
    "Godfather",
    "El señor de los anillos",
];

peliculas.forEach(function(peli){
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerHTML =peli;
    divContenido.appendChild(nuevoParrafo);


    nuevoParrafo.style.cursor = "pointer";
    nuevoParrafo.addEventListener("dblclick", function(){
        alert(`Hiciste click en ${peli}`);
        nuevoParrafo.style.backgroundColor = "steelblue";
        nuevoParrafo.style.color = "red";
    });
});

//

let miInput = document.createElement("input");
miInput.setAttribute("type","password");
divContenido.appendChild(miInput);


let btnVer = document.createElement("button");
btnVer.innerText = "ver";
divContenido.appendChild(btnVer);

let esVisible = false; //flag
btnVer.addEventListener("click",function(){
    esVisible = !esVisible;

    if(esVisible == false){
        miInput.setAttribute("type","text");

    }else{
        miInput.setAttribute("type","password")
    }
});

// capturar eventos

let irAGoogle = document.createElement("a");
irAGoogle.setAttribute("href","https://google.com");
irAGoogle.innerText = "Llevame a Google";
divContenido.appendChild(irAGoogle);


// .............

irAGoogle.addEventListener("click",function(evento){
    evento.preventDefault();
    console.log(evento);
})