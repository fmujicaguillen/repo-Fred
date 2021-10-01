let frutas = ["fresa","mango","piña","lucuma"];

// // for (let i = 0 ; i < frutas.length ; i++){
// //     console.log(frutas[i]);
// // }

// // recuerden los arreglos tambien son objetos

frutas.forEach(function(fru){
    console.log(fru);

})

// ForEach por cada elemento que encuentre vas a ejecutar una funcion 
//y cada ve que se ejecute esa funcion vas a recibir c/item en orden y este item
//lo podemos utilizar dentro de la funcion


let energia = [89, 90, 86, 85, 100];
// //la energia se va dividir en 2
// // como podria tener un nuevo arreglo con los valores que representen la mitad de  la energia por cada item

// let energiaCima = []

// for(let i = 0; i < energia.length ; i++){
//     energiaCima.push(energia[i]/2)
// }
// console.log(energiaCima)

let energiaCima = energia.map(function(energy){
    // let energiaTransformada = energy / 2;
    // return energiaTransformada;
    return energy / 2;
});
console.log(energiaCima);

//FILTER

let conductores = [
    {
        nombre:"Jose",
        vacunado : true,
    },
    {
        nombre:"Glenda",
        vacunado: true,
    },
    {
        nomre:"Osmar",
        vacunado: false,
    },
]

let puedePasar = conductores.filter(function(driver){
    return driver.vacunado == true;

});

console.log(puedePasar)



let dniDB = ["32312323","12345678","54353444"];

let encontrado = dniDB.find(function(doc){
    // return doc == "12345678";
    if (doc.includes("44")){
        return doc;
    }
})

console.log(encontrado);