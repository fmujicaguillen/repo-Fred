const hornearTorta = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {

            //Aqui estoy forzando a que sea true o false
            // comunmente terndriamos una operacion, buscar un registro
            //obtener un elemento, obtener datos
            let estado = false;
            if(estado == true){
                resolve("La torta esta Ready!");
            }
            else{
                reject("Pos se quemó :(");
            }
        },5000);

    });
};


hornearTorta()
    .then((tortaHorneada)=>{
    console.log(tortaHorneada);
    })
    .catch((tortaQuemada)=>{
    console.log(tortaQuemada);
    })
