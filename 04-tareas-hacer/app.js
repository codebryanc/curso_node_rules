
require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmación
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();

    // Leer tareas en DB y guardarlas en memoria
    const tareasDB = leerDB();

    if(tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        
        // Esta función imprime el menú.
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opción
                const description = await leerInput('Descripción de la tarea:');
                tareas.crearTarea(description);
            break;
            case '2':
                // Listar tareas    
                tareas.listadoCompleto();
            break;
            case '3':
                // Listar tareas completadas 
                tareas.listarTareasPorEstado(true);
            break;
            case '4':
                // Listar tareas pendientes
                tareas.listarTareasPorEstado(false);
            break;
            case '6':
                // Eliminar tarea
                const id = await listadoTareasBorrar(tareas.listadoArray);

                if(id !== 0) {
                    const confirma = await confirmación('¿Seguro desea eliminar?');

                    if(confirma) {
                        tareas.eliminarTarea(id);
                        console.log(`Tarea borrada correctamente`);
                    }
                }
            break;
        }

        // Almacenamos en file text
        guardarDB(tareas.listadoArray);

        if(opt != '0') {
            await pausa();
        }

    } while(opt != '0');
}

main();