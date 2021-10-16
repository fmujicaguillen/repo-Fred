let hornearTorta = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true){
                resolve("torta ready");
            }else{
                reject("se quemo");
            }
        },5000);
    });
};

let prepararGlaseado =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Glaseado Listo!");
            // reject("se quemo el microojdas");

        },3000);
    });
};

let cubrirTorta = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Torta decorada!");
            reject("Pide rapido noma");
        },4000);
    });
};

//comencemos por la primera tarea a ejecutar

hornearTorta()
.then((tortaHorneada)=>{
    console.log(tortaHorneada);
    //tuvimos exito con la torta, entonces hay q ejecutar

    return prepararGlaseado();

})
.then((glaseadoListo) =>{
    console.log(glaseadoListo);
    return cubrirTorta()

})
.then((tortaDecorada) =>{
    console.log(tortaDecorada);
})
.catch((tortaMala)=>{
    //cuando detecta un reject en cualquiera de las promesas se corta el proceso.
    console.log(tortaMala);
})