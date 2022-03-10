
// Viejo estandar / Variable de manera global
// var nombre = 'Wolverine';

// Son mas ligeras porque no tienen setters
const nombre = 'Wolverine';

if (true) {
    const nombre = 'Magneto';
    console.log(nombre);
}


// No debemos usar var a estas alturas de la vida

console.log(nombre);

// hasta donde podamos manejemos const en js porque son mas livianas.