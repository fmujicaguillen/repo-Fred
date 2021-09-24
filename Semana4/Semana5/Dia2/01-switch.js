// let producto = +prompt("Ingrese el código del producto")

// switch(producto){
//     case 1:
//         console.log("Chocolate")
//         //todo el codigo que quiera
//         break; //corta la ejecucion del codigo
//    22 case 2:
//         console.log("Papitas")
//         break;
//     case 3:
//         console.log("Galletas")
//         break;
//     case 4:
//         console.log("Pollo")
//         break;
//     default: //else
//         console.log("Código no enc3ontrado")

// }


let horas = +prompt("Ingrese sus horas de w semanal");

// si el trabajador trabaja mas de 35 horas tiene horas extras

// si el trabajador tiene igual o mas de 30 hasta menos 35 horas, cumplio con su jornada
35
//si tiene meno de 30 se le debe mandar aviso

switch(true){
    case horas > 35:

        console.log("horas extra!");
        break;
    case horas >= 30 && horas <= 35:
        console.log("Cumplio su jornada");
        break;
    default:
        console.log("No reporta")
}