//Para esta parte usar if y for

// Ej1, crear una funcion que reciba un arreglo y un nombre
// si el nombre existe dentro de la funciona retornar la posicion
// del nombre encontrado, en caso de no encontralo retornar -1

// EJERCICIO RUC - MODULO 11

//

// function verificarRUC(ruc){
//     // verifiquemos que el RUC tenga 11 digitos

//     if(ruc.length == 11){
//         // es correcto porque eventualmente en este bloque de codigo retornare un true
//         let factorChequeo = [5,4,3,2,7,6,5,4,3,2]
//         let total = 0;
//         for(let i=0; i < factorChequeo.length ; i++){
//             let prod = ruc[i] * factorChequeo[i]
//             total += prod

//          }
//          let modulo = total % 11;
//          let verificador = 11 - modulo;
//          if(verificador==ruc[10]){
//              return true
//          }
//     }
//     return false
    
// }

// // console.log(verificarRUC("10443199212"));


// let pagoHora = +prompt("Cuanto es el pago por hora?")
// let totalHoras = 0;

// for(let i = 1; i <= 6; i++){
//     let cantDiaria = +prompt("Cuantas horas fueron hoy?");
//     totalHoras += cantDiaria;

// }

// console.log(`El trabajador tiene ${totalHoras} horas trabajadas con un pago de ${totalHoras*pagoHora}`)


let ventas = [
    {
        nombre: "televisor",
        precio: 1222
    },
    {
        nombre: "radio",
        precio: 400
    },
    {
        nombre: "smartphone",
        precio: 1500
    },
    {
        nombre: "gráfica",
        precio: 1800
    },
    {
        nombre: "exprimidor",
        precio: 100
    },
    {
        nombre: "tablet",
        precio: 550
    },
    {
        nombre: "monitor",
        precio: 600
    }
]

function calcularReporte(arrVentas){
    // T1, DE 1000 A +
    // T2, de 500 a 1000
    // t3, de 500 a -
    // x cada uno necesito saber el total y aparte la suma de los totales
    let T1 = 0;
    let T2 = 0;
    let T3 = 0;
    for (let i = 0; i < arrVentas.length; i++){
        if(arrVentas[i].precio > 1000){
            T1 += arrVentas[i].precio

        }else if(arrVentas[i].precio > 500){
            T2 += arrVentas[i].precio
        }else{
            T3 += arrVentas[i].precio;
        }
    }
    
    return {
        mayorAmil: T1,
        mayorAquinientos: T2,
        menorAquinientos: T3,
        totalGlobal: T1 + T2 + T3,
    }
}
console.table(calcularReporte(ventas));

let datos = calcularReporte(ventas)

let cuerpo = document.querySelector("body")
let p = document.createElement("p")
p.innerHTML = `El monto global es ${datos.totalGlobal}`;

cuerpo.appendChild(p);

