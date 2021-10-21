//comparaciones con JS
// == VS ===
// == solamente compara el valor
// === compara el valor y el tipo de dato

if (1 === "1"){
    console.log("son iguales")
}else{
    console.log("no son iguales")
}

//------------------------
// truthy -- falsy

// falsy
// let meQuiere = undefined;
// let meQuiere = 0;
// let meQuiere = "";
// let meQuiere = null


//truthy -- texto, numero, objetos con valor son verdaderos
// let meQuiere = "regalo"
// let meQuiere = 923232366;
 let meQuiere = {
    tipo:"regalo",
    categoria:"peluche",
}
if(meQuiere ){
    console.log("claaaaaro");
}else{
    console.log("T_T");
}