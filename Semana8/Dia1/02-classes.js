//class = molde, plano, fabrica
class Pokemon{
    //caracteristicas que tiene este plano
    Nombre;
    Tipo;
    Ataque;
    Defensa;
    PuntosVida;
    //métodos, directamente x su nombre
    //toda clase va a tener un metodo constructor
    //este constructor se ejecuta automaticamente al momento de llamar a la clase
    // metodo es la accion q realiza el objeto
    constructor(nombre,tipo,ataque,defensa,puntosvida){
        //se va a encargar de construir el objeto
        // THIS, hace referencia a si mismo
        this.Nombre = nombre;
        this.Tipo = tipo;
        this.Ataque = ataque;
        this.Defensa = defensa;
        this.PuntosVida = puntosvida;
        // primero se construye
        // segundo se ejecuta lo que le ponga despues
        this.aparecer();
    }


    aparecer(){
        console.log(`Un ${this.Nombre} salvaje apareció`);
    }

    atacar(){
        console.log(`${this.Nombre} ataca con ${this.Ataque}`);
    }


}

//instanciar 
let pokemon1 = new Pokemon("Pikachu","Elécctrico",30,20,60);
let pokemon2 = new Pokemon("Dragonite","Dragon",70,80,120   );


console.log(pokemon1.Tipo);
console.log(pokemon2.atacar());