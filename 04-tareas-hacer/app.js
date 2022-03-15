
require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
    console.log(`hola Mundo`);

    let opt = '';

    do {
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');
        
        tareas._listado[tarea.id] = tarea;

        console.log(tarea);
        
        // Do while
        // opt = await inquirerMenu();

        console.log(tareas);

        if(opt != '0') {
            await pausa();
        }

    } while(opt != '0');
}

main();