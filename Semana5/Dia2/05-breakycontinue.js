// let alumnos = ["Leonardo","Arturo","Gustavo","Ariana","Alan","Masami"];

// //algoritmo para que el usuario ingrese un nombre y busque si existe el alumbo y me muestre la posicion de ese alumno
// let eleccion = prompt("Ingrese el nombre del alumno");

// for (let i = 0; i < alumnos.length; i++){
//     if (eleccion == alumnos[i]){
//         console.log(`${eleccion} se encuentra en ${i}`);
//         break;//corta la ejecucion
//        }
//     console.log(`Buscando... en ${i}`);
   
// }

let notas = [17,15,10, 5, 14,20,7,9, 18,1,0,13]

//saber las notas aprobatorias

for (let i = 0; i < notas.length; i++){
    if(notas[i] < 12){
        continue;
        
    }
    console.log(notas[i]);
}