// // for(contador; condicional ; actualizacion_contador){
//     codigo que se va a repetir
// }
//i++    ===== i = i + 1

// for (let i = 0 ; i <= 1; i++){
//     console.log(`El contador es : ${i}`);

// }
// console.log("yo estoy al final");


// let ropa = ["Bufanda","Camisa","Guantes","jeans"]

// //ropa.length por longitud es 4 por lo elementos
// for(let i = 0; i < ropa.length; i++){
//     console.log(ropa[i])
// }

let carta = ["Ceviche","Pollo a la brasa","Costillar","Adobo","Caldo de gallina"];

let eleccion = +prompt("0. Ceviche, 1. Pollo, 2. Costillar,3. Adobo, 4. Caldo de Gallina");

for (let i = 0; i < carta.length; i++){
    if(eleccion == i){
        console.log(`Ud. a elegido: ${carta[i]}`)
    }
}