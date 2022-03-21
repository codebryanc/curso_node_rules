const { v4: uuidv4 } = require('uuid');
const Tarea = require('./tarea');

/**
 * _listado
 *      { 'uuid-23423-234-4: { id:12, description: 'nombre', completadoEn: null }},
 *      { 'uuid-23423-234-4: { id:12, description: 'nombre', completadoEn: null }},
 *      { 'uuid-23423-234-4: { id:12, description: 'nombre', completadoEn: null }},
 */

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareasFromDB = []) {
        tareasFromDB.forEach(tareaEnDB => {
            this._listado[tareaEnDB.id] = tareaEnDB;
        });
    }

    get listadoArray() {
        const listado = [];

        Object.keys(this._listado).forEach( key => {
            listado.push(this._listado[key]);
        });

        return listado;
    }

    listadoArrayPorEstado(completada) {
        const listadoPorEstado = [];

        Object.keys(this._listado).forEach( key => {
            if(completada) {
                if (this._listado[key].completadoEn) {
                    listadoPorEstado.push(this._listado[key]);
                }
            }
            else {
                if (this._listado[key].completadoEn === null) {
                    listadoPorEstado.push(this._listado[key]);
                }
            }
        });

        return listadoPorEstado;
    }

    crearTarea(description = '') {
        const tarea = new Tarea(description);
        
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        const self = this;
        console.log(``);

        // Mi tarea:

        // if(this.listadoArray) {
        //     for(var i = 0; i < this.listadoArray.length; i++) {
        //         const index = i;
        //         const task = this.listadoArray[i];
                
        //         if(task.completadoEn) {
        //             console.log(`${index}. `.green, task.description, ':: Completada'.green);
        //         }
        //         else {
        //             console.log(`${index}. `.red, task.description, ':: Pendiente'.red);
        //         }
        //     }
        // }
        
        // Otra manera de hacerlo

        this.listadoArray.forEach( (tarea, index) => {
            self.printTask(tarea, index);
        });
    }

    listarTareasPorEstado(completada = true) {
        console.log(``);
        
        this.listadoArrayPorEstado(completada).forEach( (tarea, index) => {
            this.printTask(tarea, index);
        });
    }

    printTask(tarea, index) {
        
        const idx = `${index + 1}`.green;
        const { description, completadoEn } = tarea;
        const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
        const cuando = completadoEn ? '- ' + completadoEn.green : '';

        console.log(`${idx} ${description} :: ${estado} ${cuando}`);
    }

    eliminarTarea(id = '') {
        if(this._listado[id]) {
            delete this._listado[id];
        }
    }

    completarTareasListado(ids = []) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if(tarea.completadoEn === null) {
                tarea.completadoEn = new Date().toLocaleDateString()
            }
        });

        this.listadoArray.forEach(task => {
            if(ids.includes(task.id) === false) {
                this._listado[task.id].completadoEn = null;
            }
        })
    }
}

module.exports = Tareas;