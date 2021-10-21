//obtener productos
const obtenerProductos = async() =>{
    try {
        let rpta = await fetch("https://6171717ec20f3a001705fd06.mockapi.io/productos")
        let productos = await rpta.json()
        console.table(productos)
        return productos
        
    } catch (error) {
        console.log(error)
        
    }
   
};
//eh creado un selector para la etiqueta <body></body>

let body = document.querySelector("body")

// /me devuelve una promesa}

obtenerProductos()
    .then((misProductos) => {
        let htmlProductos = "";
        misProductos.forEach((prod) => {
            htmlProductos = 
                htmlProductos +
                 `
            <tr>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
            </tr>
        `;
        
    });
    body.innerHTML = `<table border="1">
                        ${htmlProductos}
                        </table>;
    `
})
.catch((err) => console.log(err))