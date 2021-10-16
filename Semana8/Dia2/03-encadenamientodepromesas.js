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
            // reject("se quemo el microojdas")

        },3000);
    });
};

let cubrirTorta = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Torta decorada!");
            // reject("Pide rapido noma");
        },4000);
    });
};