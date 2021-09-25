//Inventarios

/**
 * Una bodega quiere hacer un inventario de sus productos.
 * Actualmente vende 3 productos: gaseosa, leche, galletas
 * 
 * queremos saber por cada tipo de producto, cuantos tiene en existencia
 * eso si, sabemos el total de productos pero no su cantidad correspondiente a cada tipo
 */


let cantProductos = +prompt("Cuantos productos en total tienes?");

let gaseosa = 0;
let leche = 0;
let galletas = 0;


for (let i = 0; i < cantProductos; i++){
    let producto = +prompt("Ingrese 1.Gaseosa 2.Leche 3.Galletas");

    switch(producto){
        case 1:
            gaseosa = gaseosa + 1;
            break;
        case 2:
            leche ++;
            break;
        case 3:
            galletas ++
            break;
        default:
            alert("Número erroneo");
            i --;
    }
}

console.log(`En total hay: 
                Gaseosa: ${gaseosa}
                Leche: ${leche}
                Galletas: ${galletas} `)

