const traerData =() =>{
    return new Promise((resolve,reject) => {
        resolve("Data obtenida!");
        // reject("Error al obtener Data")}

    });
};

traerData()
.then(rpta => console.log(rpta))
.catch((error) => console.log(error));