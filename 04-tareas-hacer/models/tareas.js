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

    crearTarea(description = '') {
        const tarea = new Tarea(description);
        
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;