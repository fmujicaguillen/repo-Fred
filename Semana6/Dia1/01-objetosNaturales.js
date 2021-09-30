let hoy = new Date()

// clases (class), plano, diseño, molde
// cuando invocamos una clase ultizams la palabra new

console.log(hoy)

console.log(hoy.getFullYear())

console.log(hoy.getMonth() + 1)

console.log(hoy.getDate())

let navidad = new Date(2021, 11, 25);
console.log(navidad)

console.log(navidad.getTime());

let hastaNavidad = navidad - hoy;

console.log(hastaNavidad)

let diasParaNavidad = hastaNavidad / 1000 / 60 / 60 / 24;
console.log(diasParaNavidad.toFixed(2));


