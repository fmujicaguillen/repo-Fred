for(var i = 0 ; i < 5 ; i++){
    console.log(i)
}
console.log(`iterador ${i}`)


for(let j = 0 ; j < 5 ; j++){
    console.log(j)
}
// console.log(`iterador J ${j}`)

const PI = 3.1415;

// PI = 3.40, // no podemos cambiar un variable creada con const

console.log("Mostrando Pi",PI);


// una variable puede referenciar casi cualquier cosa
// number, string, booleans, array, objetos y funciones

let saludar = function(){
    console.log("Hola!")
};

saludar();

const despedirme = function(){
    console.log("chau!")
};

despedirme();

 // si una variable que almacene lo que sea NO VA A CAMBIAR
 // UTILICEN CONST