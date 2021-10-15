// clasica

// function saludar(nombre){
//     return `hola soy ${nombre}`;
// }


//anonima
const despedida = function(mensaje){
    return `Bye, ${mensaje}`;
}

//// FUncion Flecha

const saludar = (nombre) => {
    return `Hola soy ${nombre}`;
}


// si es algo sencillo directamente puedo indicar en la misma linea lo q retorna
// const saludar = nombre => `Hola soy ${nombre}`

//si solo tengo 1 argumento para recibir

console.log(saludar("Daniel"));

console.log(despedida("cuidate"));


let Mouse = {
    nombre:"Miguelito",
    roer: function(){
        // console.log(`${this.nombre} roe queso`);
        console.log(this);
    },
};

Mouse.roer();

//No usen funciones flecha como metodos de un objeto, no funciona el this
// afuerita de un objeto utilicemos funciones flecha