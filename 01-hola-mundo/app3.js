console.log('Inicio de programa'); // 1

setTimeout(() => {
    console.log('Primer timeout'); // 5
}, 3000);


setTimeout(() => {
    console.log('Segundo timeout'); // 3
}, 0);


setTimeout(() => {
    console.log('Tercero timeout'); // 4 
}, 0);

console.log('Fin de programa'); // 2


// Se establecen los callback en una pila de ejecucion, cae en un stack de procedimientos para ejecutar.
