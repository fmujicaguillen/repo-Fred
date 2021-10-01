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