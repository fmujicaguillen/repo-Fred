
// console.log("1.estamos jugando y pedimos Rappi");

// setTimeout(function(){
//     console.log("2. Esperar al Rappi hasta que llegue");
//     comer()
// },2000);

// const comer = function(){
//     console.log("3. llega el rappi y comemos");
// }


// Tengo q buscar un registro de un alumno en una BD inmensa

let AlumnosDB = [
    "Cristopher",
    "Arturo",
    "Masami",
    "Juan",
    "Fred",
    "Nicolas",
    "Justin",
    "Ariana",
    "Glenda",
    "Graciela",
    "Melissa"
];

//facllback va ser la referencia a una funcion q vamos a pasar como parametro
const buscarAlumno = function(nombre, fcallback){
    //para simular que va a demorar voy a utilizar un setTimeOut
    //esta funcion retornara true o false para indicar si encuentra al alumno
    setTimeout(function(){
        for(let i=0; i < AlumnosDB.length; i++){
            if(AlumnosDB[i] == nombre){
                //hemos encontrado el alumno
                fcallback(true)
                return; //cortar la ejecución de la funcion
            }
            //sino encontramos
            
        }
        fcallback(false); 
    },4000);
};

buscarAlumno("Melissa",function(existe){
    if (existe==true){
        console.log("El Alumno existe");
        
    }else{
        console.log("El alumno no existe ERROR");
    }

})