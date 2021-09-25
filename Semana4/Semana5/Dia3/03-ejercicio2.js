let arrJuegos = [
    {
        nombre: "The Witcher 3",
        precios: 60
    },
    {
        nombre:"Doom",
        precio: 50
    },
    {
        nombre:"Among US",
        precio: 30
    },

    {
        nombre:"Bloodborne",
        precio:90
    },
    {
        nombre:"God of War (2018)",
        precio:120
    },
    {
        nombre:"Civilization VI",
        precio:45
    }

]

/** Preguntaremos al usuario cual es su presupuesto, para ofrecerle videojuegos al alcance.
 * Y despues brindaremos un carrito de compras para que el usuario compre
 * 
 */

/**
 * 1. preguntar su presupuesto
 * 2. Comparar el presupuesto con los juegos ofrecidos
 * 3. Segun la comparacion tener una lista de juegos a ofrecer
 * 4. agregar al carrito
 * 5. cobrar, indicar el total
 *  */

let presupuesto = +prompt("¿Cuanto es su presupuesto?");

function revisarPresupuesto(){
    let juegosComprables = [] //una lista de los juegos que el usuario puede comprar
    for(let i=0 ; i< arrJuegos.length; i++){
        if(presupuesto >= arrJuegos[i].precio){
            juegosComprables.push(arrJuegos[i])
        }
    }
    return juegosComprables;
}
// agregaACarrito tiene q trabajar con la Lista de los juegos que el usuario puede comprar
function agregarAcarrito(listaJuegos){
    let carrito=[]
   
   for (let j = 0 ;  j < listaJuegos.length ; j++){
        //como necesito saber si al comprar un juego puedo comprar el //siguiente sin quedarme sin plata
        if(presupuesto < listaJuegos[j].precio){
            console.log("Lo siento, no alcanza :( ")
            continue; //salta
        } 

       //confirm pregunta y obtiene un booleano
       let compra = confirm(`Deseas comprar ${listaJuegos[j]}`);
       console.log(compra);
       if (compra==true){
           carrito.push(listaJuegos[j])
           //actualizando mi presupuesto segun vaya comprando
           presupuesto = presupuesto - listaJuegos[j].precio
       }

   }
   // despues el for carrito estará lleno
   return carrito

}

let listaComprables = revisarPresupuesto();
console.table(listaComprables); // table en una regla
// Despues de saber que juegos puede comprar el usuario 
// le pregunto cual o cuales compra

 let miCarrito = agregarAcarrito(listaComprables);
 console.log("Haz comprado");
 console.log(miCarrito);
 console.log(`tu vuelto es ${presupuesto}`)