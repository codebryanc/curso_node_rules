const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',

    getNombre: ()=>{
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre    = deadpool.nombre;
// const apellido  = deadpool.apellido;
// const poder     = deadpool.poder;


function imprimeHeroe(heroe) {
    // Esta es la desestructuración, aca no puedo cambiar los valores al ser const
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}

// Esta es la desestructuración
function imprimeHeroeDesestructurado({nombre, apellido, poder, edad = 0}) {
    // Aca podemos hacer esto
    nombre = 'Bryan'; // Esto no pasa en const
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);
imprimeHeroeDesestructurado(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// Asi se desestructura un array
// const [ h1, h2, h3 ] = heroes;

// Si solo me interesa el tercero
const [ , , h3 ] = heroes;

console.log( h3);
