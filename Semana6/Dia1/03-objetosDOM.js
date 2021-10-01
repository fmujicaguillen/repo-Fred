// window.console.log("hola");

// Info del navegador

console.log(`Info del navegador: ${window.navigator.userAgent}`);


console.log(`URL: ${window.location}`)

navigator.geolocation.getCurrentPosition(function(ubicacion){
    console.log(ubicacion)
});

console.log(window.document);

let miTitulo = document.querySelector("h1")
console.log(miTitulo)

miTitulo.innerHTML="Hola soy un nuevo Titulo"

console.log(miTitulo.innerHTML);




let miCaja = document.getElementById("caja");

console.log(miCaja);

//innerHTML representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Titulo Caja</h2>";

miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";


let misItems = document.getElementsByClassName("lista_item")
console.log(misItems);

//Array.from(htmlCollection), crea un arreglo
let arregloItems = Array.from(misItems);

console.log(arregloItems);

//anotacion importante forEach, map, filter, find
//forEach(function(item,posicion,array))

arregloItems.forEach(function(item, indice,conjunto){
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${indice}`;
    console.log("mostrando el arreglo", conjunto);
});


// obtener element de diferentes maneras
// los querySelector y querySelectorAll funcionar de la misma manera que los selectores en css
let miTexto = document.querySelector("#texto");
console.log(miTexto);

//querySelectorAll me da un NodeList
let boxes = document.querySelectorAll(".box");
console.log(boxes);