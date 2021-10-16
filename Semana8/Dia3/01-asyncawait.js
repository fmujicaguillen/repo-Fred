const traerData =() =>{
    return new Promise((resolve,reject) => {
        resolve("Data obtenida!");
        // reject("Error al obtener Data")}

    });
};


//async, me devuelve una promesa en vez de retornarme el resultado directamente
// const traerData = async () =>{
    
//     // return"Data obtenida con async";//return = resolve
//     throw "error al obtener data con async"; // throw = reject
// };

// traerData()
//     .then((rpta) => console.log(rpta))
//     .catch((error) => console.log(error));

const  usarData = async() =>{
    //cuando utilicemos await, tiene que estar dentro de una funcion
    // y esa funcion tiene q tener async
    
    //trycatch no es solamente para async/await
    try {//intenta esto 
        let rpta = await traerData()
        console.log(rpta);
        
    } catch (error) {
        // y si no te funciona ejecuta esto y me dices que ha pasado
        //va a capturar al reject o throw de la funcion
        console.log(error)
        
    }
}

usarData();