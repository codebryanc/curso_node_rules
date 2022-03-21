
require('colors');

const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
    console.log(`hola Mundo`);

    let opt = '';
    const tareas = new Tareas();
    
    do {
        
        // Do while
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opción
                const description = await leerInput('Descripción de la tarea:');
                tareas.crearTarea(description);
            case '2':
                console.log(tareas._listado);
            break;
        }

        if(opt != '0') {
            await pausa();
        }

    } while(opt != '0');
}

main();