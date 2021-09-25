let alumnos = ["Leonardo","Arturo","Gustavo","Ariana","Alan","Masami"];

//algoritmo para que el usuario ingrese un nombre y busque si existe el alumbo y me muestre la posicion de ese alumno
let eleccion = prompt("Ingrese el nombre del alumno");

for (let i = 0; i < alumnos.length; i++){
    if (eleccion == alumnos[i]){
        console.log(`${eleccion} se encuentra en ${i}`);
        break;//corta la ejecucion
       }
    console.log(`Buscando... en ${i}`);
   
}