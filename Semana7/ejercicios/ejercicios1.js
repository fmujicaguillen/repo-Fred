//Para esta parte usar if y for

// Ej1, crear una funcion que reciba un arreglo y un nombre
// si el nombre existe dentro de la funciona retornar la posicion
// del nombre encontrado, en caso de no encontralo retornar -1

// EJERCICIO RUC - MODULO 11

//

function verificarRUC(ruc){
    // verifiquemos que el RUC tenga 11 digitos

    if(ruc.length == 11){
        // es correcto porque eventualmente en este bloque de codigo retornare un true
        let factorChequeo = [5,4,3,2,7,6,5,4,3,2]
        let total = 0;
        for(let i=0; i < factorChequeo.length ; i++){
            let prod = ruc[i] * factorChequeo[i]
            total += prod

         }
         let modulo = total % 11;
         let verificador = 11 - modulo;
         if(verificador==ruc[10]){
             return true
         }
    }
    return false
    
}

// console.log(verificarRUC("10443199212"));


let pagoHora = +prompt("Cuanto es el pago por hora?")
let totalHoras = 0;

for(let i = 1; i <= 6; i++){
    let cantDiaria = +prompt("Cuantas horas fueron hoy?");
    totalHoras += cantDiaria;

}

console.log(`El trabajador tiene ${totalHoras} horas trabajadas con un pago de ${totalHoras*pagoHora}`)
